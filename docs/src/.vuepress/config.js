const {description} = require('../../package');

module.exports = {
    logo: "/img/logo/fundmaster-hero-image.png",
    title: 'FundMaster Xc - NASSIT',
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
                    {text: 'Workflow', link: '/workflow/'},
                    {text: 'Reports', link: '/reports/'},
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
            'User Resourses',
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
            'Admin Panel User Guide',
            [
                '',
                'userManagement',
                'notifications',
                'systemUtility',
            ]),
            '/setupscheme/': generateSidebar(
                '/setupscheme/',
                'Schemes Setup User Guide',
            [
                '',
                'newScheme',
                'basicSchemeDetails',
                'configurations',
                'incomeDrawdown',
                'moduleAllowance',
                'districts',
                'villages',
                'regions',
                'trustees',
                'serviceProviders',
                'sponsors',
                'costCenters',
                'principalOfficers',
                'memberClasses',
                'vestingScales',
                'schemeApprovalProcess',
                'otherSetup',
                'actuarialFactors',
                'statutory',
                'memberClassSpecificInfo',
                'riskAssessment',
                'bankers',
            ]),
        '/members/': generateSidebar(
            '/members/',
            'Members User Guide',
            [
                '',
                'memberConfigurations',
                'memberDocumentsChecklist',
                'newMember',
                'existingMembers',
                'membersApproval',
                'memberRegister',
                'memberBatchRegister',
                'importingFromTemplate',
                'updatingMemberRegister',
                'memberEndorsement',
                'importingBeneficiaries',
                'beneficiariesApproval',
                'benefitsLogChecklist',
                'beneficiariesDetails',
                'contributions',
                'contributionsDebtManagement',
                'batchContribRegister',
                'contribReceivable',
                'claimActivities',
                'dischargeForms',
                'reservesFund',
                'fundAccounts',
                'transferedInClaims',          
            ]),
        '/pensioners/': generateSidebar(
            '/pensioners/',
            'Pensioners User Guide',
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
            'Workflow User Guide',
            [
                '',
                'adminPanel',
                'analysis',
                'taskMgt',
            ]),
        '/reports/': generateSidebar(
            '/reports/',
            'Reports Engine User Guide',
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