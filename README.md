# WELCOME

## Set up
Clone and enter project folder

```bash
 yarn install
```

## Run

```bash
 yarn dev
```

## Errors

````
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
````
### Solution to Error
Linux
```bash 
  export NODE_OPTIONS=--openssl-legacy-provider
```

Windows
```bash 
  $env:NODE_OPTIONS = "--openssl-legacy-provider"
```
OR
```bash 
  set NODE_OPTIONS=--openssl-legacy-provider
```

# vuedoc

### Introduction

FundMaster Xc is the latest version of FundMaster - the most advanced Pension Administration and Investments Management System designed for the African pension industry. It caters for the core functions of retirement benefits and pension funds administration for both private and public employee retirement organizations. The system Core functionalities include:

**1.**	Benefits Administration

**2.**	Financial Accounting

**3.**	Investments and Assets Management

**4.**	Member Self Service

**5.**	Workflow Management

**6.**	Reporting and Business Intelligence

The system provides a flexible, extensible architecture and tools designed to accommodate the one-size-does-not-fit-all landscape of today’s retirement programs. FundMaster Xc is a proven solution that has gone through a process of complete re-engineering based on customer feedback to keep current with the industry needs.

## The Module Concept

Conceptually, FundMaster Xc adopts a “Top-down design;” a software design technique that emphasizes separating the functionality of a program into independent interchangeable modules such that each contains everything necessary to execute only one aspect of the desired functionality. Each module enforces logical boundaries and is incorporated into the FundMaster Xc system through interfaces detectable by other modules. It is on this platform that the business process flow is implemented.

The system integrates the following supporting modules for efficacy:

-	**The Administrative Panel:** This module aids in the management of rights and permissions access through the creation of profiles and user accounts.

-	**Scheme Setup Module:** this module aids in the implementation or setting up of the Trust Deed and Rules of a pension scheme.

-	**Member Register:** The member register is a container that holds pension scheme active and inactive (deferred) members.

-	**Pensioner Register:** The pensioners’ register is a container that holds pension scheme pensioners and their related beneficiaries.

-	**Accounting Module:** The Accounting module manages the financial records and their related reports of a pension scheme.

-	**Investments Module:** The investments module manages the various investment asset classes or categories of a pension scheme.

-	**Fees and Commissions:** This module help in the management of administrative services fees and agency services commissions.

-	**Workflow Management Module:** This module aids in the distribution of the systems core processes by routing tasks to the responsible users through a sequential progression of work activities.


