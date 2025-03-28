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
                    {text: 'Members Register', link: '/members/'},
                    {text: 'Pensioners Register', link: '/pensioners/'},
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
                'contribution',
                'claimActivities',
                'fundAccounts',
                'reserveFunds',
                'fundAccounts',
            ]),
        '/pensioners/': generateSidebar(
            '/pensioners/',
            'Pensioners Module',
            [
                '',
                'pensionPayroll',
                'payrollOperations',
                'deductions',
                'certificates',
                'suspensions',
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
                'schemeSetup',
                'employerEnrollment',
                'membersModule',
                'contributions',
                'claims',
                'portal',
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