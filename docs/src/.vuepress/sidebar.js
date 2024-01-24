module.exports = {
  '/': [
    {
      title: 'Introduction',
      children: [
        '/introduction/',
        '/introduction/theMainMenuBar',
      ],
    },
    {
      title: 'Member Onboarding',
      children: [
        '/memberonboarding/batchOnboarding',
        '/memberonboarding/singleOnboarding',
      ],
    },
    {
        title: 'Member Operations',
        children: [
          '/memberoperations/cashsuppRates',
          '/memberoperations/membercontrnAgeband',
          '/memberoperations/memberOpenningbal',
          '/memberoperations/memberSalaryupdate',
      ],
    },
    {
      title: 'Contribution Billing',
      children: [
        '/contributionbilling/contBillingprocess',
        '/contributionbilling/addSinglecont',
      ],
    },
    {
      title: 'Claim Processing',
      children: [
        '/claimprocessing/initiateClaimProcess',
        '/claimprocessing/generateMemberExitform',
      ],
    },
    {
      title: 'Pensioners Operations',
      children: [
        '/pensionersoperations/pensionersRegister',
        '/pensionersoperations/deathinRetirement',
        '/pensionersoperations/pensionersSuspension',
        '/pensionersoperations/otherOperations',
        '/pensionersoperations/runningPayroll',
        '/pensionersoperations/periodEndprocesses',
      ],
    },
    {
      title: 'SMTP Setup',
      children: [
        '/smtp/smtpSetup',
        '/smtp/creatingNotification',
      ],
    },

  ],
};