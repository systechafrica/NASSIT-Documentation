const {description} = require('../../package');

module.exports = {
    logo: "/img/nassit-hero.png",
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
                    {text: 'Accounts', link: '/accounts/'},
                    {text: 'Pensioner Register', link: '/pensioners/'},
                    {text: 'Investment', link: '/investments/'},
                    {text: 'Workflow', link: '/workflow/'},
                    {text: 'Reports', link: '/reports/'},
                ],
            },
            {text: 'Glossary', link: '/glossary/'},
            {
                text: 'Installation Guides',
                items: [
                    {text: 'FundMaster on Oracle', link: '/deployment/' },
                    {text: 'Postgress Database', link: '/deployment/postgres/' }
                ]
            },
            {text: 'Video Tutorials', link: '/videotutorials/'},
            {text: 'FAQ', link: '/frequentquestions/'},
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
                '/accounts/',
                '/pensioners/',
                '/reports/',
                '/workflow/',
                '/investments/',
                '/videotutorials/',
                '/deployment/',
                '/frequentquestions/'
            ]),
        '/administration/': generateSidebar(
            '/administration/',
            'Admin Panel User Guide',
            [
                '',
                'usersRegister',
                'profilesRegister',
                'profilePermissions',
                'passwordPolicySettings',
                'notifications',
                'sms',
                'email',
                'auditTrail',
                'systemRights',
                'systemUtility',
                'otherAdminSettings',
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
        '/accounts/': generateSidebar(
            '/accounts/',
            'Accounts User Guide',
            [
                '',
                'receivableReceipts',
                'payablesPayments',
                'creditorsDebtors',
                'cashManagement',
                'fixedAssets',
                'generalLedger',
                'budget',                      
                'setup',
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
        '/reports/': generateSidebar(
            '/reports/',
            'Reports Engine User Guide',
            [
                '',
                'dashBoards',
                'batchMembersReport',
                'membersBenefitReport', 
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
        '/investments/': generateSidebar(
            '/investments/',
            'Investments User Guide',
            [
                '',
                'property',
                'equity',
                'bond&Securities',
                'deposits',
                'treasuryBills',
                'privateEquities',  
                'fundManagement',
                'posting',              
            ]),
        '/deployment/': generateSidebar(
            '/deployment/',
            'Installation Guides',
            [
                '',
                'postgres',
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
            '/frequentquestions/': generateSidebar(
                '/frequentquestions/',
                'Frequently Asked Questions ',
            [
                '',
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
                '/accounts/',
                '/pensioners/',
                '/reports/',
                '/workflow/',
                '/investments/',
                '/videotutorials/',
                '/deployment/'
            ]
        }
    ];
}