const {description} = require('../../package');

module.exports = {
    logo: "/img/logo/fundmaster-hero-image.png",
    title: 'FundMaster Xc',
    description: description,
    themeConfig: {
        logo: "/img/logo/fundmaster-hero-image.png",
        searchPlaceholder: 'Search...',
        search: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nextLinks: true,
        prevLinks: true,
        nav: [
            {text: 'Getting Started', link: '/introduction/'},
            {
                text: 'System Modules',
                items: [
                    {text: 'Admin Panel', link: '/administration/'},
                    {text: 'Scheme Setup', link: '/setupscheme/'},
                    {text: 'Member Register', link: '/members/'},
                    {text: 'Pensioner Register', link: '/pensioners/'},
                    {text: 'Workflow Engine', link: '/workflow/'},
                    {text: 'Reporting Engine', link: '/reports/'},
                ],
            },
            {text: 'Glossary', link: '/glossary/'},
            {text: 'Video Tutorials', link: '/videotutorials/'},
            ],
        sidebar: getSidebar(),
    },
};

function getSidebar() {
    return {
        '/glossary/': generateSidebar(
            '/glossary/',
            'FundMaster Glossary',
            [
                '',
            ]),
        '/introduction/': generateSidebar(
            '',
            'User Manuals',
            [
                '/introduction/',
                '/introduction/productsSetup',
                '/administration/',
                '/setupscheme/',
                '/members/',
                '/pensioners/',
                '/workflow/',
                '/reports/',
                '/videotutorials/',
            ]),
        '/administration/': generateSidebar(
            '/administration/',
            'Administrative Panel Module',
            [
                '',
                'userManagement',
                'notifications',
                'systemUtility',
            ]),
        '/setupscheme/': generateSidebar(
            '/setupscheme/',
            'Schemes Setup Module',
            [
                '',
                'setupProcess',
                'otherSetup',
                'actuarialFactors',
                'statutory',
                'meetings',

            ]),
        '/members/': generateSidebar(
            '/members/',
            'Members Module',
            [
                '',
                'members',      
            ]),
        '/pensioners/': generateSidebar(
            '/pensioners/',
            'Pensioners Module',
            [
                '',
                'onboarding',
                'approval',
                'deductionAndArrears',
                'payroll',
                'liabilities',              
            ]),
        '/workflow/': generateSidebar(
            '/workflow/',
            'Workflow Module',
            [
                '',
                'adminPanel',
                'analysis',
                'taskMgt',
            ]),
        '/reports/': generateSidebar(
            '/reports/',
            'Reports Engine Module',
            [
                  '',
                  'dashBoards',
                  'batchMembersReport',
                  'membersBenefitReport', 
            ]),
        '/videotutorials/': generateSidebar(
                '/videotutorials/',
                'Videos Tutorials',
            [
                '',
                'employerEnrollment',
                'membersModule',
                'schemeSetup',
            ]),
    };
}

function generateSidebar(basePath, title, children) {
    return [
        {title, children: children.map(child => (typeof child === 'string' ? `${basePath}${child}` : child))},
        {
            title: 'Main Menu', children: [
                '/administration/',
                '/setupscheme/',
                '/members/',
                '/pensioners/',
                '/workflow/',
                '/reports/',
                '/videotutorials/',
            ]
        }
    ];
}