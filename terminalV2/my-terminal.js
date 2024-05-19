

// font for ASSCI art at the top
const font = 'ANSI Shadow';
figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

// sets green and blue colors to be lke Ubuntu
$.terminal.xml_formatter.tags.green = (attrs) => {
    return `[[;#44D544;]`;
};

$.terminal.xml_formatter.tags.blue = (attrs) => {
    return `[[;#55F;;${attrs.class}]`;
};

// format for displaying commands from 'help'
const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
    exit: false,
});


// prints the dirs
function print_dirs() {
    term.echo(dirs.map(dir => {
        return `<blue class="directory">${dir}</blue>`;
    }).join('\n'));
}

// commands that can be called
const commands = {
    // list possible commands
    help() {
        term.echo(`List of available commands: ${help}`);
    },
    
    // echo args to term
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    },
    
    // change dir
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root)) {
            cwd = root;
        } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dirs.includes(dir)) {
            cwd = root + '/' + dir;
        } else {
            this.error('Wrong directory');
        }
    },

    // list content
    ls(dir = null) {
        console.log(dir);
        if (dir) {
            if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Invalid directory');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('Invalid directory');
                }
            } else if (dir === '..') {
                print_dirs();
            } else {
                this.error('Invalid directory');
            }
        } else if (cwd === root) {
            print_dirs();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
    },
    cat(){
        const cmd = this.get_command();
        const { name, rest } = $.terminal.parse_command(cmd);

        console.log(rest);
        console.log(directories[cwd.substring(2)].includes(rest));
        // if cwd contains arg to cat command 
        if (directories[cwd.substring(2)].includes(rest)) {
            const index = directories[cwd.substring(2)].indexOf(rest)
            return (directories_desciption[cwd.substring(2)][index])
        }
    },
    
    // credits
    credits() {
        return [
            '',
            '<white>Used libraries:</white>',
            '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
            '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            ''
        ].join('\n');
    },
};



// adds 'clear' and other commands in the list and formats it
const command_list = ['clear'].concat(Object.keys(commands));
const formatted_list = command_list.map(cmd => {
    return `<white class="command">${cmd}</white>`;
});


// formats help
const help = formatter.format(formatted_list);



// root dir and current working dir var's
const root = '~';
let cwd = root;

const directories_desciption = {
    education: [
        'I attended Indiana State University to pursue a degree in Computer Science from 2018 to 2020. During my time there, I was actively involved in my fraternity, holding multiple positions within the organization.',
        "From 2020 to 2023, I studied Information Technology at Illinois State University. Throughout my academic journey, I actively worked on various projects, which are detailed in the <blue class=\"directory\">'projects'</blue> directory of this website. you can click on the blue 'projects' to take you to them.",
    ]
}

const directories = {
    education: [
        'Indiana_State_University-Computer_Science.txt',
        'Illinois_State_University-Information_Technology.txt',
    ],
    projects: [
        '',
        '<white>Open Source projects</white>',
        [
            ['jQuery Terminal',
             'https://terminal.jcubic.pl',
             'library that adds terminal interface to websites'
            ],
            ['LIPS Scheme',
             'https://lips.js.org',
             'Scheme implementation in JavaScript'
            ],
            ['Sysend.js',
             'https://jcu.bi/sysend',
             'Communication between open tabs'
            ],
            ['Wayne',
             'https://jcu.bi/wayne',
             'Pure in browser HTTP requests'
            ],
        ].map(([name, url, description = '']) => {
            return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    skills: [
        '',
        '<white>languages</white>',

        [
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'PHP',
            'Bash'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>libraries</white>',
        [
            'React.js',
            'Redux',
            'Jest',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>tools</white>',
        [
            'Docker',
            'git',
            'GNU/Linux'
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};

const dirs = Object.keys(directories);


const user = 'User';
const server = 'Kevin-Olson.net';

function prompt() {
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}

const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion(string) {
        // in every function we can use `this` to reference term object
        const cmd = this.get_command();
        // we process the command to extract the command name
        // at the rest of the command (the arguments as one string)
        const { name, rest } = $.terminal.parse_command(cmd);

        // auto complete for dirs in cwd
        if (['cd', 'ls'].includes(name)) {
            console.log("balkl");
            if (rest.startsWith('~/')) {
                return dirs.map(dir => `~/${dir}`);
            }
            if (cwd === root) {
                return dirs;
            }
        }
        
        // auto completes for items in cwd
        if (['cat'].includes(name)) {
            if (cwd === root) {
                return;
            }
                return directories[cwd.substring(2)].map(dir => `${dir}`);
        }

        return Object.keys(commands);
    },
    prompt
});

term.pause();


function ready() {
   const seed = rand(256);
   term.echo(() => rainbow(render('Termi - Net'), seed), { ansi: true })
       .echo('<white>\nWelcome to my Terminal Emulator! This is a Unix-like terminal on the web, \nI have posted my projects with in this terminal. Stay a while and take a look around!\n\n\nUse "help" to get a list of useable commands\n\n\n</white>').resume();
}


term.on('click', '.command', function() {
    const command = $(this).text();
    term.exec(command);
 });

term.on('click', '.directory', function() {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`);
});


 function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

// regex to check if input is in the command_list and will format the text to white
const any_command_regex = new RegExp(`^\s*(${command_list.join('|')})`);
$.terminal.new_formatter([any_command_regex, '<white>$1</white>']);

// highlights args in aqua color
const re = new RegExp(`^\s*(${command_list.join('|')}) (.*)`);
$.terminal.new_formatter(function(string) {
    return string.replace(re, function(_, command, args) {
        return `<white>${command}</white> <aqua>${args}</aqua>`;
    });
});

// trims out newlines
function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

// convert text into rainbow, can pass a seed
function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

// returns hex color or something i think....idk man
function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}

// random number
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}
