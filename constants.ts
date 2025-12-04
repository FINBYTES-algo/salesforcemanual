import { Module } from './types';

export const COURSE_DATA: Module[] = [
  {
    id: 'module-1',
    title: 'Foundations & Architecture',
    icon: 'layout',
    lessons: [
      {
        id: 'overview',
        title: 'Project Overview',
        duration: '5 min',
        salesforceLink: 'https://trailhead.salesforce.com/en/content/learn/get-started-with-salesforce',
        content: [
          { type: 'text', content: 'The AwesomeBank Credit Cards Division Salesforce Implementation is a greenfield project focused on the end-to-end management of credit card lifecycles.' },
          { type: 'text', content: 'Key Achievements:' },
          { 
            type: 'list', 
            items: [
              'Complete security architecture with profiles and permission sets',
              'End-to-end data model for credit card lifecycle',
              'Automated workflow for application approval and card creation',
              'Validation rules for data integrity',
              'Tested end-to-end business process flow'
            ] 
          }
        ]
      },
      {
        id: 'architecture',
        title: 'Security Architecture',
        duration: '10 min',
        salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles.htm',
        content: [
          { type: 'text', content: 'The security model is built on a strict hierarchy to ensure data privacy and proper access control.' },
          { 
            type: 'diagram', 
            diagramLines: [
              'System Administrator (1)',
              '└── IT Security Manager (2)',
              '    └── Credit Cards Division Manager (3)',
              '        ├── Credit Cards Sales Manager (4)',
              '        │   ├── Senior Sales Representative (5)',
              '        │   └── Junior Sales Representative (6)',
              '        ├── Underwriting Manager (7)',
              '        │   ├── Senior Underwriter (8)',
              '        │   └── Underwriter (9)',
              '        └── Customer Service Manager (10)',
              '            ├── Level 2 Support (11)',
              '            └── Level 1 Support (12)'
            ] 
          },
          {
            type: 'table',
            tableData: {
              headers: ['Profile Name', 'Cloned From', 'Purpose'],
              rows: [
                ['AwesomeBank Credit Cards Basic User', 'Standard User', 'Base profile for division users'],
                ['AwesomeBank Credit Cards Read Only', 'Read Only User', 'Auditors, compliance officers'],
                ['AwesomeBank Credit Cards Marketing User', 'Marketing User', 'Marketing team members'],
                ['AwesomeBank Credit Cards System Admin', 'System Administrator', 'Salesforce administrators']
              ]
            }
          }
        ]
      },
      {
        id: 'datamodel',
        title: 'Data Model',
        duration: '15 min',
        salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference',
        content: [
          { type: 'text', content: 'The Core Object Architecture defined as Apex types for reference:' },
          {
            type: 'accordion',
            accordionData: {
              title: 'Credit Card Product (Credit_Card_Product__c)',
              content: [
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    code: `public class Credit_Card_Product__c {
    // Fields
    public String Product_Code__c;          // Text(20) [Unique, Required]
    public String Card_Network__c;          // Picklist: Visa, MasterCard, Amex
    public String Card_Type__c;             // Picklist: Personal, Business
    public String Rewards_Program__c;       // Picklist: Cashback, Miles, Points
    public Decimal Annual_Fee__c;           // Currency(16, 2)
    public Decimal Minimum_Credit_Limit__c; // Currency(16, 0)
    public Decimal Maximum_Credit_Limit__c; // Currency(16, 0)
    public Decimal Introductory_APR__c;     // Percent(3, 2)
    public Decimal Standard_APR__c;         // Percent(3, 2)
    public Boolean Is_Active__c;            // Checkbox [Default: true]
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Credit Card Application (Credit_Card_Application__c)',
              content: [
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    code: `public class Credit_Card_Application__c {
    // Fields
    public Id Applicant__c;                 // Master-Detail(Contact)
    public Id Requested_Card_Product__c;    // Lookup(Credit_Card_Product__c)
    public String Application_Stage__c;     // Picklist: New, Under Review, Approved
    public Decimal Requested_Credit_Limit__c; // Currency(16, 0)
    public Decimal Approved_Credit_Limit__c;  // Currency(16, 0)
    public String Employment_Status__c;     // Picklist
    public Decimal Annual_Income__c;        // Currency(16, 0)
    public Decimal Risk_Score__c;           // Number(3, 0)
    public String Underwriting_Notes__c;    // Long Text Area
    
    // System Fields
    public String Name;                     // Auto Number: APP-{00000}
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Credit Card (Credit_Card__c)',
              content: [
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    code: `public class Credit_Card__c {
    // Fields
    public Id Primary_Cardholder__c;        // Master-Detail(Contact)
    public Id Credit_Card_Product__c;       // Lookup(Credit_Card_Product__c)
    public Id Source_Application__c;        // Lookup(Credit_Card_Application__c)
    public Decimal Credit_Limit__c;         // Currency(16, 0)
    public Decimal Current_Balance__c;      // Currency(16, 2)
    public Decimal Available_Credit__c;     // Formula: Credit_Limit__c - Current_Balance__c
    public String Account_Status__c;        // Picklist: Active, Closed, Fraud
    public Date Issue_Date__c;              // Date
    public Date Expiry_Date__c;             // Date
    
    // System Fields
    public String Name;                     // Auto Number: CARD-{00000}
}`
                  }
                }
              ]
            }
          },
          { type: 'text', content: 'Relationship Diagram:' },
          {
            type: 'diagram',
            diagramLines: [
              'Contact',
              '├── Credit Card Applications (Master-Detail)',
              '│   └── Credit Card Product (Lookup)',
              '└── Credit Cards (Master-Detail)',
              '    ├── Credit Card Product (Lookup)',
              '    └── Source Application (Lookup)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Automation & Logic',
    icon: 'cpu',
    lessons: [
      {
        id: 'automation',
        title: 'Declarative Automation',
        duration: '10 min',
        salesforceLink: 'https://trailhead.salesforce.com/en/content/learn/modules/flow-basics',
        content: [
          { type: 'text', content: 'Key Validation Rules & Flows implemented using system formulas.' },
          {
            type: 'accordion',
            accordionData: {
              title: 'Validation: Prevent Stage Regression',
              content: [
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    code: `// Validation Rule Formula
AND(
  ISCHANGED(Application_Stage__c),
  // Prevent moving back from these stages
  CASE(PRIORVALUE(Application_Stage__c),
    "Under Review", 1,
    "Additional Info Required", 1,
    "Approved", 1,
    "Declined", 1, 
    "Withdrawn", 1,
    0
  ) = 1,
  // To these stages
  CASE(Application_Stage__c,
    "New", 1,
    "Under Review", 1,
    0
  ) = 1
)`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Flow: Auto-Create Credit Card',
              content: [
                { type: 'text', content: 'Trigger: Record-Triggered Flow on Application (After Update)' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    code: `// Flow Entry Conditions
AND(
  {!$Record.Application_Stage__c} = "Approved",
  ISCHANGED({!$Record.Application_Stage__c})
)

// Create Record: Credit_Card__c
Credit_Card__c newCard = new Credit_Card__c();
newCard.Primary_Cardholder__c = {!$Record.Applicant__c};
newCard.Credit_Card_Product__c = {!$Record.Requested_Card_Product__c};
newCard.Credit_Limit__c = {!$Record.Approved_Credit_Limit__c};
newCard.Account_Status__c = "Active";
newCard.Issue_Date__c = {!$Flow.CurrentDate};`
                  }
                }
              ]
            }
          }
        ]
      },
      {
        id: 'triggers',
        title: 'Apex Triggers & Handlers',
        duration: '20 min',
        salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm',
        content: [
          { type: 'text', content: 'A robust, enterprise-grade trigger framework. This implementation includes Custom Settings to control trigger execution (helpful for Data Loads), separates concerns, and implements different processing paths for Single vs. Bulk operations to respect Governor Limits.' },
          {
            type: 'accordion',
            accordionData: {
              title: 'Understanding the Trigger Handler Pattern',
              content: [
                { type: 'text', content: 'The Trigger Handler pattern creates a separation of concerns by moving business logic out of the trigger and into a dedicated Apex class. This makes the trigger itself logic-less, serving purely as a dispatcher.' },
                { type: 'text', content: 'Key Benefits:' },
                { 
                  type: 'list', 
                  items: [
                    'Testability: Handler methods can be unit tested without invoking the trigger.',
                    'Reusability: Logic in the handler can be called from other classes or batch jobs.',
                    'Maintainability: Keeps the trigger file small and cleaner.'
                  ] 
                },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'SimpleHandlerExample.cls',
                    code: `public class SimpleHandler {
    public void onBeforeInsert(List<Account> newAccounts) {
        for(Account acc : newAccounts) {
            acc.Description = 'Default Description';
        }
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'code',
            codeSnippet: {
              language: 'apex',
              filename: 'CreditCardApplicationTrigger.trigger',
              code: `trigger CreditCardApplicationTrigger on Credit_Card_Application__c (
    before insert, before update,
    after insert, after update,
    after delete, after undelete
) {
    CreditCardApplicationTriggerHandler handler = new CreditCardApplicationTriggerHandler();
    
    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.onBeforeInsert(Trigger.new);
        if (Trigger.isUpdate) handler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
    }
    
    if (Trigger.isAfter) {
        if (Trigger.isInsert) handler.onAfterInsert(Trigger.new);
        if (Trigger.isUpdate) handler.onAfterUpdate(Trigger.new, Trigger.oldMap);
        if (Trigger.isDelete) handler.onAfterDelete(Trigger.oldMap);
        if (Trigger.isUndelete) handler.onAfterUndelete(Trigger.new);
    }
}`
            }
          },
          { type: 'text', content: 'The Handler class implementing the sophisticated "Split Logic" pattern for Bulk vs Single operations:' },
          {
            type: 'code',
            codeSnippet: {
              language: 'apex',
              filename: 'CreditCardApplicationTriggerHandler.cls',
              code: `public class CreditCardApplicationTriggerHandler {
    
    // Static flag to force exceptions during testing for 100% coverage
    @TestVisible private static Boolean throwTestException = false;
    
    // --- Entry Points ---

    public void onBeforeInsert(List<Credit_Card_Application__c> newApps) {
        // 1. Check Custom Settings
        if (isTriggerDisabled()) {
            System.debug('Trigger bypassed via custom setting');
            return;
        }
        
        // 2. Split Logic based on Volume
        if (isBulkOperation(newApps)) {
            handleBulkBeforeInsert(newApps);
        } else {
            handleSingleBeforeInsert(newApps);
        }
    }

    public void onBeforeUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        if (isTriggerDisabled()) return;

        if (isBulkOperation(newApps)) {
            handleBulkBeforeUpdate(newApps, oldMap);
        } else {
            handleSingleBeforeUpdate(newApps, oldMap);
        }
    }
    
    public void onAfterUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        if (isTriggerDisabled()) return;
        
        processApprovedApps(newApps, oldMap);
    }

    public void onAfterInsert(List<Credit_Card_Application__c> newApps) {
        // Placeholder for After Insert logic
    }
    
    public void onAfterDelete(Map<Id, Credit_Card_Application__c> oldMap) {
        // Placeholder for After Delete logic
    }
    
    public void onAfterUndelete(List<Credit_Card_Application__c> newApps) {
        // Placeholder for After Undelete logic
    }

    // --- Configuration Helpers ---

    private Boolean isTriggerDisabled() {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        return settings != null && settings.Disable_Triggers_For_Data_Load__c;
    }

    private Boolean isBulkOperation(List<SObject> records) {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        Integer threshold = (settings != null && settings.Allowed_Bulk_Operation_Size__c != null) 
            ? Integer.valueOf(settings.Allowed_Bulk_Operation_Size__c) 
            : 10; // Default threshold
        
        return records != null && records.size() > threshold;
    }

    // --- Single Record Logic (Optimized for User Experience) ---

    private void handleSingleBeforeInsert(List<Credit_Card_Application__c> newApps) {
        try {
            if(throwTestException) throw new CalloutException('Forced Error');
            
            // Standard Validation & Logic
            validateApplications(newApps);
            autoAssignUnderwriter(newApps);
            calculateRiskScores(newApps);
            
        } catch (Exception e) {
            handleSingleError(e, newApps);
        }
    }

    private void handleSingleBeforeUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        try {
             if(throwTestException) throw new CalloutException('Forced Error');
             
             trackStageChanges(newApps, oldMap);
             
        } catch (Exception e) {
            handleSingleError(e, newApps);
        }
    }

    // --- Bulk Record Logic (Optimized for Performance/Limits) ---

    private void handleBulkBeforeInsert(List<Credit_Card_Application__c> newApps) {
        try {
            if(throwTestException) throw new CalloutException('Forced Error');
            
            System.debug('Processing Bulk Insert: ' + newApps.size() + ' records');
            
            // Simplified logic or specific bulk handling to avoid limits
            validateApplications(newApps);
            autoAssignUnderwriter(newApps);
            calculateRiskScores(newApps);
            
        } catch (Exception e) {
            handleBulkError(e, newApps);
        }
    }

    private void handleBulkBeforeUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        try {
            if(throwTestException) throw new CalloutException('Forced Error');
            
            // Governor Limit Check
            if (Limits.getCpuTime() > 9500) {
                System.debug('Approaching CPU Limit in Bulk Operation - Aborting complex logic');
                return;
            }
            
            trackStageChanges(newApps, oldMap);
            
        } catch (Exception e) {
            handleBulkError(e, newApps);
        }
    }

    // --- Shared Business Logic ---

    private void validateApplications(List<Credit_Card_Application__c> apps) {
        for(Credit_Card_Application__c app : apps) {
             if(app.Annual_Income__c < 10000) app.addError('Minimum income requirement ($10,000) not met.');
        }
    }

    private void autoAssignUnderwriter(List<Credit_Card_Application__c> apps) {
        // Implementation: Assign to default underwriter queue or user
        // In production, we would query the specific user or queue ID here.
        // For this example, we assume assignments are handled by standard assignment rules
        // or we set a flag.
        for(Credit_Card_Application__c app : apps) {
            // Logic to set owner would go here
        }
    }
    
    private void calculateRiskScores(List<Credit_Card_Application__c> apps) {
        for(Credit_Card_Application__c app : apps) {
            if (app.Annual_Income__c != null) {
                // Simple risk calculation for demo
                app.Risk_Score__c = (app.Annual_Income__c > 50000) ? 750 : 600;
            }
        }
    }

    private void trackStageChanges(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            if (app.Application_Stage__c != oldApp.Application_Stage__c) {
                // Assuming a custom field for tracking
                // app.Last_Stage_Change_Date__c = Datetime.now();
            }
        }
    }

    private void processApprovedApps(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        List<Credit_Card_Application__c> approvedApps = new List<Credit_Card_Application__c>();
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            if (app.Application_Stage__c == 'Approved' && oldApp.Application_Stage__c != 'Approved') {
                approvedApps.add(app);
            }
        }
        if (!approvedApps.isEmpty()) {
            // Enqueue asynchronous job
            // System.enqueueJob(new ProcessApprovedApplicationsQueueable(approvedApps));
        }
    }

    // --- Error Handling Strategies ---

    private void handleSingleError(Exception e, List<Credit_Card_Application__c> apps) {
        System.debug('Single Record Error: ' + e.getMessage());
        for(Credit_Card_Application__c app : apps) {
            app.addError('Unable to process application. Please try again or contact support.');
        }
    }

    private void handleBulkError(Exception e, List<Credit_Card_Application__c> apps) {
        System.debug('BULK OPERATION ERROR: ' + e.getMessage());
        // In bulk, we log heavily but might try to avoid failing the whole batch if possible,
        // or fail all with a system message.
        for(Credit_Card_Application__c app : apps) {
            app.addError('System error during bulk operation: ' + e.getMessage());
        }
    }
}`
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Before Triggers - Insert and Update',
              content: [
                { type: 'text', content: 'Before triggers execute before records are saved to the database. Use them to update or validate record values before they\'re committed.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'BeforeTriggerExample.trigger',
                    code: `trigger ApplicationBeforeTrigger on Credit_Card_Application__c (
    before insert, before update
) {
    if (Trigger.isBefore && Trigger.isInsert) {
        ApplicationBeforeHandler.onBeforeInsert(Trigger.new);
    }
    
    if (Trigger.isBefore && Trigger.isUpdate) {
        ApplicationBeforeHandler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
    }
}`
                  }
                },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'ApplicationBeforeHandler.cls',
                    code: `public class ApplicationBeforeHandler {
    
    // Before Insert: Set default values and validate
    public static void onBeforeInsert(List<Credit_Card_Application__c> newApps) {
        for (Credit_Card_Application__c app : newApps) {
            // Set default values
            if (app.Application_Stage__c == null) {
                app.Application_Stage__c = 'New';
            }
            
            // Validate business rules
            if (app.Annual_Income__c != null && app.Annual_Income__c < 10000) {
                app.addError('Annual income must be at least $10,000');
            }
            
            // Calculate derived fields
            if (app.Annual_Income__c != null) {
                app.Risk_Score__c = calculateRiskScore(app.Annual_Income__c);
            }
        }
    }
    
    // Before Update: Validate changes and prevent invalid transitions
    public static void onBeforeUpdate(
        List<Credit_Card_Application__c> newApps,
        Map<Id, Credit_Card_Application__c> oldMap
    ) {
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            
            // Prevent stage regression
            if (isStageRegression(oldApp.Application_Stage__c, app.Application_Stage__c)) {
                app.addError('Cannot move application stage backwards from ' + 
                    oldApp.Application_Stage__c + ' to ' + app.Application_Stage__c);
            }
            
            // Auto-calculate approved credit limit if stage changed to Approved
            if (app.Application_Stage__c == 'Approved' && 
                oldApp.Application_Stage__c != 'Approved' &&
                app.Approved_Credit_Limit__c == null) {
                app.Approved_Credit_Limit__c = app.Requested_Credit_Limit__c;
            }
        }
    }
    
    private static Integer calculateRiskScore(Decimal annualIncome) {
        if (annualIncome > 100000) return 800;
        if (annualIncome > 50000) return 750;
        if (annualIncome > 30000) return 650;
        return 600;
    }
    
    private static Boolean isStageRegression(String oldStage, String newStage) {
        Map<String, Integer> stageOrder = new Map<String, Integer>{
            'New' => 1,
            'Under Review' => 2,
            'Additional Info Required' => 3,
            'Approved' => 4,
            'Declined' => 5,
            'Withdrawn' => 6
        };
        
        Integer oldOrder = stageOrder.get(oldStage);
        Integer newOrder = stageOrder.get(newStage);
        
        return oldOrder != null && newOrder != null && newOrder < oldOrder;
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'After Triggers - Insert, Update, Delete, Undelete',
              content: [
                { type: 'text', content: 'After triggers execute after records are saved. Use them to access system fields (like Id) and to affect changes in other records. The records that fire the after trigger are read-only.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'ApplicationAfterHandler.cls',
                    code: `public class ApplicationAfterHandler {
    
    // After Insert: Create related records, send notifications
    public static void onAfterInsert(List<Credit_Card_Application__c> newApps) {
        List<Task> tasksToCreate = new List<Task>();
        List<Id> applicationIds = new List<Id>();
        
        for (Credit_Card_Application__c app : newApps) {
            // Now we have access to the Id field
            applicationIds.add(app.Id);
            
            // Create follow-up task
            tasksToCreate.add(new Task(
                WhatId = app.Id,
                Subject = 'Review Application: ' + app.Name,
                Status = 'Not Started',
                Priority = 'Normal',
                OwnerId = UserInfo.getUserId()
            ));
        }
        
        if (!tasksToCreate.isEmpty()) {
            insert tasksToCreate;
        }
        
        // Fire platform event for external systems
        publishApplicationCreatedEvent(applicationIds);
    }
    
    // After Update: Log changes, trigger workflows
    public static void onAfterUpdate(
        List<Credit_Card_Application__c> newApps,
        Map<Id, Credit_Card_Application__c> oldMap
    ) {
        List<Application_History__c> historyRecords = new List<Application_History__c>();
        List<Credit_Card_Application__c> approvedApps = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            
            // Track stage changes
            if (app.Application_Stage__c != oldApp.Application_Stage__c) {
                historyRecords.add(new Application_History__c(
                    Application__c = app.Id,
                    Previous_Stage__c = oldApp.Application_Stage__c,
                    New_Stage__c = app.Application_Stage__c,
                    Changed_By__c = UserInfo.getUserId(),
                    Changed_Date__c = System.now()
                ));
            }
            
            // Process approved applications
            if (app.Application_Stage__c == 'Approved' && 
                oldApp.Application_Stage__c != 'Approved') {
                approvedApps.add(app);
            }
        }
        
        if (!historyRecords.isEmpty()) {
            insert historyRecords;
        }
        
        if (!approvedApps.isEmpty()) {
            processApprovedApplications(approvedApps);
        }
    }
    
    // After Delete: Archive records, cleanup related data
    public static void onAfterDelete(Map<Id, Credit_Card_Application__c> oldMap) {
        List<Id> deletedAppIds = new List<Id>(oldMap.keySet());
        
        // Delete related tasks
        List<Task> relatedTasks = [
            SELECT Id FROM Task 
            WHERE WhatId IN :deletedAppIds
        ];
        
        if (!relatedTasks.isEmpty()) {
            delete relatedTasks;
        }
        
        // Archive to external system
        archiveApplications(deletedAppIds);
    }
    
    // After Undelete: Restore related records
    public static void onAfterUndelete(List<Credit_Card_Application__c> newApps) {
        List<Id> restoredAppIds = new List<Id>();
        
        for (Credit_Card_Application__c app : newApps) {
            restoredAppIds.add(app.Id);
        }
        
        // Restore in external system
        restoreApplications(restoredAppIds);
        
        // Recreate default tasks
        List<Task> tasksToCreate = new List<Task>();
        for (Credit_Card_Application__c app : newApps) {
            tasksToCreate.add(new Task(
                WhatId = app.Id,
                Subject = 'Review Restored Application: ' + app.Name,
                Status = 'Not Started',
                Priority = 'Normal'
            ));
        }
        
        if (!tasksToCreate.isEmpty()) {
            insert tasksToCreate;
        }
    }
    
    private static void processApprovedApplications(List<Credit_Card_Application__c> apps) {
        // Queue async job to create credit cards
        System.enqueueJob(new CreateCreditCardQueueable(apps));
    }
    
    private static void publishApplicationCreatedEvent(List<Id> appIds) {
        List<Application_Created_Event__e> events = new List<Application_Created_Event__e>();
        
        for (Id appId : appIds) {
            events.add(new Application_Created_Event__e(
                Application_ID__c = appId
            ));
        }
        
        List<Database.SaveResult> results = EventBus.publish(events);
        
        for (Database.SaveResult result : results) {
            if (!result.isSuccess()) {
                System.debug('Failed to publish event: ' + result.getErrors());
            }
        }
    }
    
    private static void archiveApplications(List<Id> appIds) {
        // Make async callout to archive
        System.enqueueJob(new ArchiveApplicationQueueable(appIds));
    }
    
    private static void restoreApplications(List<Id> appIds) {
        // Make async callout to restore
        System.enqueueJob(new RestoreApplicationQueueable(appIds));
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Merge Triggers',
              content: [
                { type: 'text', content: 'Merge operations fire both before and after delete triggers for losing records, and both before and after update triggers for the winning record.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'AccountMergeHandler.cls',
                    code: `public class AccountMergeHandler {
    
    public static void onBeforeUpdate(List<Account> newAccounts, Map<Id, Account> oldMap) {
        for (Account acc : newAccounts) {
            // Check if this is a merge operation
            if (Trigger.isUpdate && acc.MasterRecordId != null) {
                // This is the winning record in a merge
                System.debug('Processing merge - winning record: ' + acc.Id);
            }
        }
    }
    
    public static void onAfterDelete(Map<Id, Account> oldMap) {
        Set<Id> deletedAccountIds = new Set<Id>();
        
        for (Account acc : oldMap.values()) {
            if (acc.MasterRecordId != null) {
                deletedAccountIds.add(acc.Id);
                System.debug('Merge completed - deleted losing record: ' + acc.Id);
            }
        }
        
        if (!deletedAccountIds.isEmpty()) {
            // Archive merge history
            createMergeHistoryRecords(deletedAccountIds);
        }
    }
    
    private static void createMergeHistoryRecords(Set<Id> deletedAccountIds) {
        // Create audit trail for merges
        System.debug('Merge history created for ' + deletedAccountIds.size() + ' accounts');
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Upsert Triggers',
              content: [
                { type: 'text', content: 'Upsert operations fire both before and after insert triggers (for new records) or before and after update triggers (for existing records) as appropriate.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'ContactUpsertHandler.cls',
                    code: `public class ContactUpsertHandler {
    
    public static void onBeforeInsert(List<Contact> newContacts) {
        // Handle new contacts being inserted via upsert
        for (Contact con : newContacts) {
            // Set defaults for new records
            if (con.Description == null) {
                con.Description = 'Created via upsert operation';
            }
        }
    }
    
    public static void onBeforeUpdate(
        List<Contact> newContacts,
        Map<Id, Contact> oldMap
    ) {
        // Handle existing contacts being updated via upsert
        for (Contact con : newContacts) {
            Contact oldCon = oldMap.get(con.Id);
            
            // Track what changed
            if (con.Email != oldCon.Email) {
                con.Email_Changed_Date__c = System.now();
            }
        }
    }
    
    public static void onAfterInsert(List<Contact> newContacts) {
        // Process newly inserted contacts
        List<Id> newContactIds = new List<Id>();
        
        for (Contact con : newContacts) {
            newContactIds.add(con.Id);
        }
        
        // Create welcome tasks
        createWelcomeTasks(newContactIds);
    }
    
    private static void createWelcomeTasks(List<Id> contactIds) {
        List<Task> tasks = new List<Task>();
        
        for (Id contactId : contactIds) {
            tasks.add(new Task(
                WhoId = contactId,
                Subject = 'Welcome - New Contact Created',
                Status = 'Not Started',
                Priority = 'Normal'
            ));
        }
        
        if (!tasks.isEmpty()) {
            insert tasks;
        }
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Trigger Context Variables',
              content: [
                { type: 'text', content: 'Trigger context variables provide information about the trigger execution context. Use them to determine the trigger context and access record data.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'TriggerContextHandler.cls',
                    code: `public class TriggerContextHandler {
    
    public static void process() {
        // Check trigger operation type
        System.debug('isInsert: ' + Trigger.isInsert);
        System.debug('isUpdate: ' + Trigger.isUpdate);
        System.debug('isDelete: ' + Trigger.isDelete);
        System.debug('isUndelete: ' + Trigger.isUndelete);
        System.debug('isBefore: ' + Trigger.isBefore);
        System.debug('isAfter: ' + Trigger.isAfter);
        System.debug('isExecuting: ' + Trigger.isExecuting);
        
        // Access record collections
        if (Trigger.isInsert || Trigger.isUpdate) {
            System.debug('New records: ' + Trigger.new.size());
            System.debug('New map size: ' + Trigger.newMap.size());
            
            // Iterate through new records
            for (Credit_Card_Application__c app : (List<Credit_Card_Application__c>)Trigger.new) {
                System.debug('Processing record: ' + app.Id);
            }
        }
        
        if (Trigger.isUpdate || Trigger.isDelete) {
            System.debug('Old records: ' + Trigger.old.size());
            System.debug('Old map size: ' + Trigger.oldMap.size());
        }
        
        // Check if trigger is executing in a specific context
        if (Trigger.isBefore) {
            handleBeforeContext();
        }
        
        if (Trigger.isAfter) {
            handleAfterContext();
        }
        
        // Access size
        System.debug('Total records in trigger: ' + Trigger.size);
    }
    
    private static void handleBeforeContext() {
        // Before triggers: Can modify records
        if (Trigger.isInsert) {
            List<Credit_Card_Application__c> apps = 
                (List<Credit_Card_Application__c>)Trigger.new;
            
            for (Credit_Card_Application__c app : apps) {
                // Modify records before save
                if (app.Application_Stage__c == null) {
                    app.Application_Stage__c = 'New';
                }
            }
        }
    }
    
    private static void handleAfterContext() {
        // After triggers: Records are read-only
        if (Trigger.isInsert) {
            List<Credit_Card_Application__c> apps = 
                (List<Credit_Card_Application__c>)Trigger.new;
            
            for (Credit_Card_Application__c app : apps) {
                // Can read but not modify
                System.debug('New record ID: ' + app.Id);
                
                // Must use DML to modify other records
                createRelatedRecord(app.Id);
            }
        }
    }
    
    private static void createRelatedRecord(Id applicationId) {
        Task t = new Task(
            WhatId = applicationId,
            Subject = 'Follow up',
            Status = 'Not Started'
        );
        insert t;
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Common Bulk Trigger Idioms',
              content: [
                { type: 'text', content: 'Bulk triggers process multiple records efficiently. Use these patterns to avoid governor limits and improve performance.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'BulkTriggerPatterns.cls',
                    code: `public class BulkTriggerPatterns {
    
    // Pattern 1: Collect IDs and query once
    public static void pattern1_CollectAndQuery(List<Credit_Card_Application__c> apps) {
        Set<Id> contactIds = new Set<Id>();
        Set<Id> productIds = new Set<Id>();
        
        // Collect all IDs first
        for (Credit_Card_Application__c app : apps) {
            if (app.Applicant__c != null) {
                contactIds.add(app.Applicant__c);
            }
            if (app.Requested_Card_Product__c != null) {
                productIds.add(app.Requested_Card_Product__c);
            }
        }
        
        // Single query for all related records
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email, Phone FROM Contact WHERE Id IN :contactIds
        ]);
        
        Map<Id, Credit_Card_Product__c> productsMap = new Map<Id, Credit_Card_Product__c>([
            SELECT Id, Name, Minimum_Credit_Limit__c FROM Credit_Card_Product__c 
            WHERE Id IN :productIds
        ]);
        
        // Use maps for lookups
        for (Credit_Card_Application__c app : apps) {
            Contact con = contactsMap.get(app.Applicant__c);
            Credit_Card_Product__c prod = productsMap.get(app.Requested_Card_Product__c);
            // Process with related data
        }
    }
    
    // Pattern 2: Use Sets to avoid duplicates
    public static void pattern2_UseSets(List<Credit_Card_Application__c> apps) {
        Set<String> uniqueEmails = new Set<String>();
        Set<Id> uniqueContactIds = new Set<Id>();
        
        for (Credit_Card_Application__c app : apps) {
            if (app.Applicant__c != null) {
                uniqueContactIds.add(app.Applicant__c);
            }
        }
        
        // Query once for unique contacts
        List<Contact> contacts = [
            SELECT Id, Email FROM Contact WHERE Id IN :uniqueContactIds
        ];
        
        for (Contact con : contacts) {
            uniqueEmails.add(con.Email);
        }
        
        System.debug('Unique emails to process: ' + uniqueEmails.size());
    }
    
    // Pattern 3: Bulk DML operations
    public static void pattern3_BulkDML(List<Credit_Card_Application__c> apps) {
        List<Task> tasksToInsert = new List<Task>();
        
        for (Credit_Card_Application__c app : apps) {
            tasksToInsert.add(new Task(
                WhatId = app.Id,
                Subject = 'Review Application',
                Status = 'Not Started'
            ));
        }
        
        // Single DML operation for all records
        if (!tasksToInsert.isEmpty()) {
            insert tasksToInsert;
        }
    }
    
    // Pattern 4: Governor limit checks
    public static void pattern4_GovernorLimitChecks(List<Credit_Card_Application__c> apps) {
        // Check CPU time
        if (Limits.getCpuTime() > 8000) {
            System.debug('Approaching CPU limit: ' + Limits.getCpuTime());
            return;
        }
        
        // Check SOQL queries
        Integer queriesUsed = Limits.getQueries();
        Integer queriesLimit = Limits.getLimitQueries();
        
        if (queriesUsed > queriesLimit * 0.8) {
            System.debug('Approaching SOQL limit: ' + queriesUsed + '/' + queriesLimit);
        }
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Trigger Exceptions and Error Handling',
              content: [
                { type: 'text', content: 'Handle exceptions properly in triggers. Use addError() for validation errors and try-catch for system errors.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'TriggerExceptionHandling.cls',
                    code: `public class TriggerExceptionHandling {
    
    // Validation errors - use addError()
    public static void validateRecords(List<Credit_Card_Application__c> apps) {
        for (Credit_Card_Application__c app : apps) {
            // Business rule validation
            if (app.Annual_Income__c < 10000) {
                app.addError('Annual income must be at least $10,000');
            }
            
            // Field-level error
            if (app.Requested_Credit_Limit__c > 100000 && 
                app.Annual_Income__c < 50000) {
                app.Requested_Credit_Limit__c.addError(
                    'Credit limit cannot exceed $100,000 for applicants with income below $50,000'
                );
            }
        }
    }
    
    // System errors - use try-catch
    public static void processWithErrorHandling(List<Credit_Card_Application__c> apps) {
        for (Credit_Card_Application__c app : apps) {
            try {
                // Complex processing that might fail
                processApplication(app);
                
            } catch(DmlException e) {
                // DML-specific error
                System.debug('DML Error: ' + e.getMessage());
                app.addError('Failed to process application: ' + e.getMessage());
                
            } catch(CalloutException e) {
                // Callout error - queue for retry
                System.debug('Callout Error: ' + e.getMessage());
                queueForRetry(app, e.getMessage());
                
            } catch(Exception e) {
                // Generic error
                System.debug('Unexpected Error: ' + e.getMessage());
                app.addError('An unexpected error occurred. Please contact support.');
            }
        }
    }
    
    // Prevent infinite recursion
    public static Boolean isRecursive = false;
    
    public static void preventRecursion(List<Credit_Card_Application__c> apps) {
        if (isRecursive) {
            return; // Exit if already processing
        }
        
        isRecursive = true;
        
        try {
            // Process records
            processApplications(apps);
            
        } finally {
            isRecursive = false; // Always reset flag
        }
    }
    
    private static void processApplication(Credit_Card_Application__c app) {
        if (app.Annual_Income__c == null) {
            throw new IllegalArgumentException('Annual income is required');
        }
    }
    
    private static void processApplications(List<Credit_Card_Application__c> apps) {
        // Bulk processing
    }
    
    private static void queueForRetry(Credit_Card_Application__c app, String error) {
        // Create retry queue record
        Retry_Queue__c retry = new Retry_Queue__c(
            Record_ID__c = app.Id,
            Error_Message__c = error,
            Retry_Count__c = 0
        );
        insert retry;
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Trigger Best Practices',
              content: [
                { type: 'text', content: 'Follow these best practices to write efficient, maintainable triggers.' },
                {
                  type: 'list',
                  items: [
                    'One trigger per object - prevents execution order issues',
                    'Logic-less triggers - delegate to handler classes',
                    'Bulkify all code - process collections, not single records',
                    'Avoid SOQL/DML in loops - query once, use maps',
                    'Use static flags to prevent recursion',
                    'Check governor limits before heavy operations',
                    'Use try-catch for system errors, addError() for validation',
                    'Test with bulk data (200+ records)',
                    'Use Custom Settings to enable/disable triggers',
                    'Document trigger execution order dependencies'
                  ]
                },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'BestPracticesExample.cls',
                    code: `public class BestPracticesExample {
    
    // Best Practice 1: One trigger per object
    // CreditCardApplicationTrigger.trigger - single entry point
    
    // Best Practice 2: Logic-less trigger delegates to handler
    // trigger CreditCardApplicationTrigger on Credit_Card_Application__c (...) {
    //     CreditCardApplicationTriggerHandler.handle();
    // }
    
    // Best Practice 3: Bulkify - process collections
    public static void bulkifiedMethod(List<Credit_Card_Application__c> apps) {
        // GOOD: Process all records together
        Set<Id> contactIds = new Set<Id>();
        for (Credit_Card_Application__c app : apps) {
            contactIds.add(app.Applicant__c);
        }
        
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email FROM Contact WHERE Id IN :contactIds
        ]);
        
        // BAD: Query in loop
        // for (Credit_Card_Application__c app : apps) {
        //     Contact con = [SELECT Email FROM Contact WHERE Id = :app.Applicant__c];
        // }
    }
    
    // Best Practice 4: Prevent recursion
    private static Boolean isProcessing = false;
    
    public static void preventRecursion() {
        if (isProcessing) {
            return;
        }
        
        isProcessing = true;
        try {
            // Process records
        } finally {
            isProcessing = false;
        }
    }
    
    // Best Practice 5: Check governor limits
    public static void checkLimits() {
        if (Limits.getCpuTime() > 8000) {
            System.debug('Approaching CPU limit');
            return;
        }
        
        if (Limits.getQueries() > Limits.getLimitQueries() * 0.9) {
            System.debug('Approaching SOQL limit');
            return;
        }
    }
    
    // Best Practice 6: Use Custom Settings for control
    public static Boolean isTriggerEnabled() {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        return settings == null || settings.Enable_Triggers__c != false;
    }
    
    // Best Practice 7: Proper error handling
    public static void handleErrors(List<Credit_Card_Application__c> apps) {
        for (Credit_Card_Application__c app : apps) {
            try {
                processApp(app);
            } catch(Exception e) {
                app.addError('Error: ' + e.getMessage());
            }
        }
    }
    
    private static void processApp(Credit_Card_Application__c app) {
        // Processing logic
    }
}`
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Bulk Operations',
    icon: 'server',
    lessons: [
      {
        id: 'bulk-ops',
        title: 'Bulk Sharing & Data Utils',
        duration: '20 min',
        salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch.htm',
        content: [
            { type: 'text', content: 'Enterprise implementations require handling large data volumes without hitting governor limits. We use bulk-safe patterns for sharing calculation and data processing.' },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Bulk Sharing Service',
                    content: [
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BulkSharingService.cls',
                                code: `public with sharing class BulkSharingService {
    
    public static void shareApplicationsWithUnderwriters(List<Credit_Card_Application__c> applications, Set<Id> underwriterIds) {
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Credit_Card_Application__c app : applications) {
            for (Id underwriterId : underwriterIds) {
                if (app.OwnerId != underwriterId) {
                    Credit_Card_Application__Share appShare = new Credit_Card_Application__Share();
                    appShare.ParentId = app.Id;
                    appShare.UserOrGroupId = underwriterId;
                    appShare.AccessLevel = 'Edit';
                    appShare.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                    sharesToCreate.add(appShare);
                }
            }
        }
        
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            // Handle results/errors logging
        }
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Batch Apex: Daily Review',
                    content: [
                        { type: 'text', content: 'A scheduled batch class to review pending applications and auto-approve high income applicants.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'DailyCreditLimitReviewBatch.cls',
                                code: `global class DailyCreditLimitReviewBatch implements Database.Batchable<SObject>, Schedulable {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // Query recent applications needing review from last 7 days
        return Database.getQueryLocator([
            SELECT Id, Annual_Income__c, Application_Stage__c 
            FROM Credit_Card_Application__c 
            WHERE Application_Stage__c = 'Under Review' 
            AND CreatedDate = LAST_N_DAYS:7
        ]);
    }

    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__c> toApprove = new List<Credit_Card_Application__c>();
        
        for(Credit_Card_Application__c app : scope) {
            // Business Rule: Auto-approve income > $100k
            if(app.Annual_Income__c != null && app.Annual_Income__c > 100000) {
                app.Application_Stage__c = 'Approved';
                toApprove.add(app);
            }
        }
        
        if(!toApprove.isEmpty()) {
            update toApprove;
        }
    }

    global void finish(Database.BatchableContext BC) {
        // Logic to send email confirmation or log completion
    }

    // Schedulable Interface - execute this daily
    global void execute(SchedulableContext SC) {
        Database.executeBatch(new DailyCreditLimitReviewBatch(), 200);
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Batch Apex: Basic Structure (start, execute, finish)',
                    content: [
                        { type: 'text', content: 'Batch Apex implements three methods: start() queries records, execute() processes batches, and finish() runs cleanup tasks. Each method has specific governor limits.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BasicBatchExample.cls',
                                code: `global class BasicBatchExample implements Database.Batchable<SObject> {
    
    // START METHOD: Called once at the beginning
    // Returns QueryLocator or Iterable
    // Governor Limits: 1 query, 10,000 records max
    global Database.QueryLocator start(Database.BatchableContext BC) {
        System.debug('Batch Job ID: ' + BC.getJobId());
        System.debug('Child Job ID: ' + BC.getChildJobId());
        
        // Query records to process
        return Database.getQueryLocator([
            SELECT Id, Name, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND CreatedDate = LAST_N_DAYS:30
        ]);
    }
    
    // EXECUTE METHOD: Called multiple times for each batch
    // Processes up to 200 records per execution (default)
    // Governor Limits: Reset for each execute() call
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        System.debug('Processing batch of ' + scope.size() + ' records');
        System.debug('Job ID: ' + BC.getJobId());
        
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Process each record
            if (app.Annual_Income__c != null && app.Annual_Income__c > 100000) {
                app.Application_Stage__c = 'Approved';
                app.Approved_Credit_Limit__c = app.Requested_Credit_Limit__c;
                appsToUpdate.add(app);
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
            System.debug('Updated ' + appsToUpdate.size() + ' applications');
        }
    }
    
    // FINISH METHOD: Called once at the end
    // Use for cleanup, notifications, chaining batches
    // Governor Limits: Same as execute()
    global void finish(Database.BatchableContext BC) {
        System.debug('Batch job completed: ' + BC.getJobId());
        
        // Send completion email
        AsyncApexJob job = [
            SELECT Id, Status, NumberOfErrors, JobItemsProcessed, TotalJobItems
            FROM AsyncApexJob
            WHERE Id = :BC.getJobId()
        ];
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Job Completed');
        mail.setPlainTextBody('Batch processed ' + job.JobItemsProcessed + 
            ' of ' + job.TotalJobItems + ' items with ' + job.NumberOfErrors + ' errors.');
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Stateful Batch Apex',
                    content: [
                        { type: 'text', content: 'Stateful batches maintain state across execute() calls using instance variables. Use this when you need to track progress or accumulate data across batches.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'StatefulBatchExample.cls',
                                code: `global class StatefulBatchExample implements Database.Batchable<SObject>, Database.Stateful {
    
    // Instance variables maintain state across execute() calls
    private Integer totalProcessed = 0;
    private Integer totalApproved = 0;
    private Integer totalDeclined = 0;
    private List<String> errorMessages = new List<String>();
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c, Risk_Score__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            totalProcessed++;
            
            try {
                // Business logic
                if (app.Annual_Income__c > 100000 && app.Risk_Score__c > 700) {
                    app.Application_Stage__c = 'Approved';
                    totalApproved++;
                } else if (app.Risk_Score__c < 600) {
                    app.Application_Stage__c = 'Declined';
                    totalDeclined++;
                }
                
                appsToUpdate.add(app);
                
            } catch(Exception e) {
                errorMessages.add('Error processing ' + app.Id + ': ' + e.getMessage());
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Access accumulated state
        System.debug('Total Processed: ' + totalProcessed);
        System.debug('Total Approved: ' + totalApproved);
        System.debug('Total Declined: ' + totalDeclined);
        System.debug('Total Errors: ' + errorMessages.size());
        
        // Send summary email
        String emailBody = 'Batch Processing Summary:\\n';
        emailBody += 'Total Processed: ' + totalProcessed + '\\n';
        emailBody += 'Approved: ' + totalApproved + '\\n';
        emailBody += 'Declined: ' + totalDeclined + '\\n';
        emailBody += 'Errors: ' + errorMessages.size() + '\\n';
        
        if (!errorMessages.isEmpty()) {
            emailBody += '\\nError Details:\\n';
            for (String error : errorMessages) {
                emailBody += error + '\\n';
            }
        }
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Processing Summary');
        mail.setPlainTextBody(emailBody);
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Batch Chaining',
                    content: [
                        { type: 'text', content: 'Chain batches together to process complex workflows. Start the next batch in the finish() method of the current batch.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BatchChainingExample.cls',
                                code: `global class BatchChainingExample implements Database.Batchable<SObject> {
    
    private Boolean shouldChain = true;
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Approved'
            AND Credit_Card_Created__c = false
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card__c> cardsToCreate = new List<Credit_Card__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Create credit card for approved application
            Credit_Card__c card = new Credit_Card__c(
                Primary_Cardholder__c = app.Applicant__c,
                Credit_Card_Product__c = app.Requested_Card_Product__c,
                Credit_Limit__c = app.Approved_Credit_Limit__c,
                Source_Application__c = app.Id,
                Account_Status__c = 'Active'
            );
            cardsToCreate.add(card);
        }
        
        if (!cardsToCreate.isEmpty()) {
            insert cardsToCreate;
            
            // Mark applications as processed
            for (Credit_Card_Application__c app : scope) {
                app.Credit_Card_Created__c = true;
            }
            update scope;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Chain to next batch: Send welcome emails
        if (shouldChain) {
            Database.executeBatch(new SendWelcomeEmailBatch(), 200);
        }
        
        System.debug('Batch chaining completed');
    }
}

// Second batch in the chain
global class SendWelcomeEmailBatch implements Database.Batchable<SObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Primary_Cardholder__c, Credit_Limit__c
            FROM Credit_Card__c
            WHERE CreatedDate = TODAY
            AND Welcome_Email_Sent__c = false
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card__c> scope) {
        List<Credit_Card__c> cardsToUpdate = new List<Credit_Card__c>();
        
        for (Credit_Card__c card : scope) {
            // Send welcome email (simplified)
            // EmailService.sendWelcomeEmail(card);
            card.Welcome_Email_Sent__c = true;
            cardsToUpdate.add(card);
        }
        
        if (!cardsToUpdate.isEmpty()) {
            update cardsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Welcome email batch completed');
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Error Handling in Batches',
                    content: [
                        { type: 'text', content: 'Handle errors gracefully in batches. Use Database.executeBatch with scope size, and implement retry logic for failed records.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BatchErrorHandling.cls',
                                code: `global class BatchErrorHandling implements Database.Batchable<SObject>, Database.Stateful {
    
    private List<Id> failedRecordIds = new List<Id>();
    private Integer totalErrors = 0;
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        List<Credit_Card_Application__c> appsWithErrors = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            try {
                // Validate before processing
                if (app.Annual_Income__c == null) {
                    throw new IllegalArgumentException('Annual income is required');
                }
                
                // Process record
                if (app.Annual_Income__c > 100000) {
                    app.Application_Stage__c = 'Approved';
                    appsToUpdate.add(app);
                }
                
            } catch(Exception e) {
                totalErrors++;
                failedRecordIds.add(app.Id);
                appsWithErrors.add(app);
                
                System.debug('Error processing ' + app.Id + ': ' + e.getMessage());
                System.debug('Stack trace: ' + e.getStackTraceString());
            }
        }
        
        // Update successful records
        if (!appsToUpdate.isEmpty()) {
            Database.SaveResult[] results = Database.update(appsToUpdate, false);
            
            // Check for partial failures
            for (Integer i = 0; i < results.size(); i++) {
                if (!results[i].isSuccess()) {
                    failedRecordIds.add(appsToUpdate[i].Id);
                    totalErrors++;
                }
            }
        }
        
        // Log errors
        if (!appsWithErrors.isEmpty()) {
            logErrors(appsWithErrors);
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Retry failed records if any
        if (!failedRecordIds.isEmpty() && failedRecordIds.size() < 1000) {
            System.debug('Retrying ' + failedRecordIds.size() + ' failed records');
            
            // Create retry batch with specific record IDs
            Database.executeBatch(new BatchRetryHandler(failedRecordIds), 50);
        }
        
        // Send error summary
        if (totalErrors > 0) {
            sendErrorSummary(totalErrors, failedRecordIds.size());
        }
    }
    
    private void logErrors(List<Credit_Card_Application__c> apps) {
        List<Error_Log__c> logs = new List<Error_Log__c>();
        
        for (Credit_Card_Application__c app : apps) {
            logs.add(new Error_Log__c(
                Record_ID__c = app.Id,
                Error_Type__c = 'Batch Processing Error',
                Error_Message__c = 'Failed to process in batch'
            ));
        }
        
        if (!logs.isEmpty()) {
            insert logs;
        }
    }
    
    private void sendErrorSummary(Integer errorCount, Integer failedRecordCount) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Processing Errors');
        mail.setPlainTextBody('Batch encountered ' + errorCount + 
            ' errors affecting ' + failedRecordCount + ' records.');
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}

// Retry handler for failed records
global class BatchRetryHandler implements Database.Batchable<SObject> {
    
    private Set<Id> recordIds;
    
    public BatchRetryHandler(Set<Id> ids) {
        this.recordIds = ids;
    }
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Id IN :recordIds
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // Retry logic with additional error handling
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            try {
                if (app.Annual_Income__c > 100000) {
                    app.Application_Stage__c = 'Approved';
                    appsToUpdate.add(app);
                }
            } catch(Exception e) {
                System.debug('Retry failed for ' + app.Id + ': ' + e.getMessage());
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Retry batch completed');
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Iterable Batch (Custom Processing)',
                    content: [
                        { type: 'text', content: 'Use Iterable interface for custom data sources that aren\'t from SOQL queries, such as external API data or complex data transformations.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'IterableBatchExample.cls',
                                code: `global class IterableBatchExample implements Database.Batchable<String> {
    
    global Iterable<String> start(Database.BatchableContext BC) {
        // Return custom iterable instead of QueryLocator
        return new ApplicationNumberIterable();
    }
    
    global void execute(Database.BatchableContext BC, List<String> scope) {
        // Process list of application numbers
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (String appNumber : scope) {
            // Query application by number
            List<Credit_Card_Application__c> apps = [
                SELECT Id, Application_Stage__c
                FROM Credit_Card_Application__c
                WHERE Name = :appNumber
                LIMIT 1
            ];
            
            if (!apps.isEmpty()) {
                Credit_Card_Application__c app = apps[0];
                app.Application_Stage__c = 'Processed';
                appsToUpdate.add(app);
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Iterable batch completed');
    }
}

// Custom Iterable class
global class ApplicationNumberIterable implements Iterable<String> {
    
    global Iterator<String> Iterator() {
        return new ApplicationNumberIterator();
    }
}

// Custom Iterator class
global class ApplicationNumberIterator implements Iterator<String> {
    
    private List<String> appNumbers;
    private Integer index = 0;
    
    global ApplicationNumberIterator() {
        // Load application numbers from custom source
        appNumbers = new List<String>();
        
        // Example: Get from custom setting or external source
        List<Credit_Card_Application__c> apps = [
            SELECT Name FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Pending'
            LIMIT 10000
        ];
        
        for (Credit_Card_Application__c app : apps) {
            appNumbers.add(app.Name);
        }
    }
    
    global Boolean hasNext() {
        return index < appNumbers.size();
    }
    
    global String next() {
        if (hasNext()) {
            return appNumbers[index++];
        }
        return null;
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Scheduling Batches',
                    content: [
                        { type: 'text', content: 'Schedule batches to run automatically using the Schedulable interface and System.schedule() method. Use cron expressions for scheduling.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'ScheduledBatchExample.cls',
                                code: `global class ScheduledBatchExample implements Database.Batchable<SObject>, Schedulable {
    
    // Batchable methods
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // Process records
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Business logic
            appsToUpdate.add(app);
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Scheduled batch completed');
    }
    
    // Schedulable method - called by the scheduler
    global void execute(SchedulableContext SC) {
        // Execute the batch with custom scope size
        Database.executeBatch(new ScheduledBatchExample(), 200);
    }
}

// Schedule the batch
// Run this in Anonymous Apex or from a Setup class:
/*
// Schedule to run daily at 2 AM
String cronExpression = '0 0 2 * * ?'; // Seconds Minutes Hours Day_of_month Month Day_of_week Year(optional)
String jobName = 'Daily Application Review';
ScheduledBatchExample batch = new ScheduledBatchExample();
String jobId = System.schedule(jobName, cronExpression, batch);
System.debug('Scheduled job ID: ' + jobId);
*/

// Cron Expression Examples:
// '0 0 2 * * ?' - Daily at 2 AM
// '0 0 12 ? * MON-FRI' - Weekdays at noon
// '0 0 0 1 * ?' - First day of every month at midnight
// '0 0 0/2 * * ?' - Every 2 hours
// '0 0 0 ? * SUN' - Every Sunday at midnight`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Governor Limits in Batches',
                    content: [
                        { type: 'text', content: 'Batch Apex has higher governor limits than synchronous Apex. Limits reset for each execute() call, but start() and finish() share limits.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BatchGovernorLimits.cls',
                                code: `global class BatchGovernorLimits implements Database.Batchable<SObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // START limits:
        // - 1 SOQL query (can return up to 10,000 records)
        // - 10,000 DML rows
        // - 10 minutes CPU time
        
        System.debug('Start - CPU Time: ' + Limits.getCpuTime());
        System.debug('Start - Queries: ' + Limits.getQueries());
        
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            LIMIT 10000
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // EXECUTE limits (reset for each batch):
        // - 200 SOQL queries
        // - 150 DML statements
        // - 50,000 DML rows
        // - 10 minutes CPU time
        // - 1,000,000 lines of code executed
        
        System.debug('Execute - CPU Time: ' + Limits.getCpuTime());
        System.debug('Execute - Queries: ' + Limits.getQueries() + '/' + Limits.getLimitQueries());
        System.debug('Execute - DML Statements: ' + Limits.getDmlStatements() + '/' + Limits.getLimitDmlStatements());
        System.debug('Execute - DML Rows: ' + Limits.getDmlRows() + '/' + Limits.getLimitDmlRows());
        
        // Monitor limits
        if (Limits.getCpuTime() > 9000) {
            System.debug('WARNING: Approaching CPU limit');
        }
        
        if (Limits.getQueries() > Limits.getLimitQueries() * 0.9) {
            System.debug('WARNING: Approaching SOQL query limit');
        }
        
        // Process records efficiently
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        Set<Id> contactIds = new Set<Id>();
        
        // Collect IDs first
        for (Credit_Card_Application__c app : scope) {
            if (app.Applicant__c != null) {
                contactIds.add(app.Applicant__c);
            }
        }
        
        // Single query for related records
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email FROM Contact WHERE Id IN :contactIds
        ]);
        
        // Process with related data
        for (Credit_Card_Application__c app : scope) {
            Contact con = contactsMap.get(app.Applicant__c);
            
            if (app.Annual_Income__c > 100000) {
                app.Application_Stage__c = 'Approved';
                appsToUpdate.add(app);
            }
        }
        
        // Single DML operation
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // FINISH limits (same as execute):
        // - 200 SOQL queries
        // - 150 DML statements
        // - 50,000 DML rows
        // - 10 minutes CPU time
        
        System.debug('Finish - CPU Time: ' + Limits.getCpuTime());
        System.debug('Finish - Queries: ' + Limits.getQueries());
        
        // Query job status
        AsyncApexJob job = [
            SELECT Id, Status, NumberOfErrors, JobItemsProcessed, 
                   TotalJobItems, CreatedDate, CompletedDate
            FROM AsyncApexJob
            WHERE Id = :BC.getJobId()
        ];
        
        System.debug('Job Status: ' + job.Status);
        System.debug('Processed: ' + job.JobItemsProcessed + '/' + job.TotalJobItems);
        System.debug('Errors: ' + job.NumberOfErrors);
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Batch Apex Best Practices',
                    content: [
                        { type: 'text', content: 'Follow these best practices to write efficient, maintainable batch classes.' },
                        {
                            type: 'list',
                            items: [
                                'Use QueryLocator for SOQL queries (up to 10,000 records)',
                                'Use Iterable for custom data sources or complex logic',
                                'Set appropriate batch size (default 200, max 2,000)',
                                'Implement Database.Stateful only when needed (has performance cost)',
                                'Handle errors gracefully - don\'t let one record fail the batch',
                                'Use finish() for cleanup, notifications, and chaining',
                                'Monitor governor limits in execute() method',
                                'Avoid SOQL/DML in loops - bulkify operations',
                                'Test with various batch sizes and data volumes',
                                'Use Custom Settings to control batch execution',
                                'Log batch progress for debugging',
                                'Consider using Queueable for smaller, simpler async operations'
                            ]
                        },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BatchBestPractices.cls',
                                code: `global class BatchBestPractices implements Database.Batchable<SObject> {
    
    // Best Practice 1: Use Custom Settings for control
    private Boolean isEnabled() {
        Batch_Settings__c settings = Batch_Settings__c.getInstance();
        return settings != null && settings.Enable_Batch__c == true;
    }
    
    // Best Practice 2: Configurable batch size
    private Integer getBatchSize() {
        Batch_Settings__c settings = Batch_Settings__c.getInstance();
        return (settings != null && settings.Batch_Size__c != null) 
            ? Integer.valueOf(settings.Batch_Size__c) 
            : 200; // Default
    }
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        if (!isEnabled()) {
            throw new BatchException('Batch is disabled via Custom Settings');
        }
        
        // Best Practice 3: Efficient query with only needed fields
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c, Applicant__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND CreatedDate = LAST_N_DAYS:30
            ORDER BY CreatedDate ASC
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // Best Practice 4: Bulkify operations
        Set<Id> contactIds = new Set<Id>();
        for (Credit_Card_Application__c app : scope) {
            if (app.Applicant__c != null) {
                contactIds.add(app.Applicant__c);
            }
        }
        
        // Single query for all related records
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email FROM Contact WHERE Id IN :contactIds
        ]);
        
        // Best Practice 5: Collect updates, single DML
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Process with error handling
            try {
                if (app.Annual_Income__c > 100000) {
                    app.Application_Stage__c = 'Approved';
                    appsToUpdate.add(app);
                }
            } catch(Exception e) {
                // Best Practice 6: Log errors, don't fail batch
                System.debug('Error processing ' + app.Id + ': ' + e.getMessage());
            }
        }
        
        // Best Practice 7: Use Database methods with allOrNone=false
        if (!appsToUpdate.isEmpty()) {
            Database.SaveResult[] results = Database.update(appsToUpdate, false);
            
            // Check for partial failures
            for (Integer i = 0; i < results.size(); i++) {
                if (!results[i].isSuccess()) {
                    System.debug('Failed to update ' + appsToUpdate[i].Id);
                }
            }
        }
        
        // Best Practice 8: Monitor limits
        if (Limits.getCpuTime() > 9000) {
            System.debug('WARNING: High CPU usage');
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Best Practice 9: Query job status
        AsyncApexJob job = [
            SELECT Id, Status, NumberOfErrors, JobItemsProcessed, TotalJobItems
            FROM AsyncApexJob
            WHERE Id = :BC.getJobId()
        ];
        
        // Best Practice 10: Send notification on completion
        if (job.NumberOfErrors > 0) {
            sendErrorNotification(job);
        } else {
            sendSuccessNotification(job);
        }
    }
    
    private void sendErrorNotification(AsyncApexJob job) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Completed with Errors');
        mail.setPlainTextBody('Batch processed ' + job.JobItemsProcessed + 
            ' items with ' + job.NumberOfErrors + ' errors.');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
    
    private void sendSuccessNotification(AsyncApexJob job) {
        System.debug('Batch completed successfully: ' + job.JobItemsProcessed + ' items processed');
    }
    
    public class BatchException extends Exception {}
}`
                            }
                        }
                    ]
                }
            }
        ]
      },
      {
        id: 'bulk-sharing-guide',
        title: 'Deep Dive: Bulk Sharing',
        duration: '25 min',
        salesforceLink: 'https://trailhead.salesforce.com/en/content/learn/modules/data_security/data_security_sharing_rules',
        content: [
            { type: 'text', content: 'Understanding Bulk Sharing is critical for scalability. Unlike standard DML, sharing requires special considerations around security (`with sharing`), duplication handling, and avoiding limits loop.' },
            {
                type: 'code',
                codeSnippet: {
                    language: 'apex',
                    filename: 'BulkSharingExample.cls',
                    code: `public with sharing class BulkSharingExample {

    public static void addReadAccess(Set<Id> accountIds, Id userId) {
        // 1. Create a list to hold all new shares
        List<AccountShare> accountSharesToCreate = new List<AccountShare>();

        // 2. Loop through the records and create share objects
        for (Id accId : accountIds) {
            AccountShare newShare = new AccountShare();
            newShare.ParentId = accId;
            newShare.UserOrGroupId = userId;
            newShare.AccessLevel = 'Read';
            // It's best practice to explicitly set the RowCause.
            newShare.RowCause = Schema.AccountShare.RowCause.Manual;
            accountSharesToCreate.add(newShare);
        }

        // 3. Handle errors for duplicate shares or access issues.
        // false parameter allows partial success
        List<Database.SaveResult> srList = Database.insert(accountSharesToCreate, false);

        // 4. Iterate through results to log or handle errors.
        for (Integer i = 0; i < srList.size(); i++) {
            Database.SaveResult sr = srList[i];
            if (!sr.isSuccess()) {
                // Get the first error
                Database.Error err = sr.getErrors()[0];
                if (err.getStatusCode() == StatusCode.DUPLICATE_VALUE) {
                    System.debug('Share already exists for account: ' + accountSharesToCreate[i].ParentId);
                } else {
                    System.debug('Error creating share: ' + err.getMessage());
                }
            }
        }
    }
}`
                }
            },
            { type: 'text', content: 'Key Takeaways: Always use `with sharing` for security. Use `Database.insert(list, false)` to handle duplicate share errors gracefully without failing the entire transaction.' },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Manual Sharing via UI',
                    content: [
                        { type: 'text', content: 'Manual sharing allows record owners to grant access to specific users or groups. This is done through the Salesforce UI on individual records.' },
                        {
                            type: 'list',
                            items: [
                                'Navigate to the record you want to share',
                                'Click the "Sharing" button (or "Share" in Lightning Experience)',
                                'Click "Add" to add users, roles, or groups',
                                'Select the users/groups and set access level (Read Only or Read/Write)',
                                'Click "Save" to apply the sharing'
                            ]
                        },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'text',
                                filename: 'Manual Sharing Steps',
                                code: `Steps to Manually Share a Record:

1. Open the Credit Card Application record
2. Click the "Sharing" button (top right in Classic, or in the record header in Lightning)
3. Click "Add" button
4. In the "Add Users, Roles, or Groups" dialog:
   - Search for users, roles, or public groups
   - Select the desired users/groups
   - Choose access level: "Read Only" or "Read/Write"
5. Click "Share" to save

Note: Manual sharing is only available when org-wide defaults are:
- Private
- Public Read Only`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Manual Sharing via Apex',
                    content: [
                        { type: 'text', content: 'Programmatically create manual shares using Apex. This is essential for bulk operations and automated sharing logic.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'ManualSharingApex.cls',
                                code: `public with sharing class ManualSharingApex {
    
    // Share single record with single user
    public static void shareRecordWithUser(Id recordId, Id userId, String accessLevel) {
        Credit_Card_Application__Share appShare = new Credit_Card_Application__Share();
        appShare.ParentId = recordId;
        appShare.UserOrGroupId = userId;
        appShare.AccessLevel = accessLevel; // 'Read' or 'Edit'
        appShare.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
        
        try {
            insert appShare;
            System.debug('Successfully shared record ' + recordId + ' with user ' + userId);
        } catch(DmlException e) {
            if (e.getDmlType(0) == StatusCode.DUPLICATE_VALUE) {
                System.debug('Share already exists');
            } else {
                System.debug('Error creating share: ' + e.getMessage());
                throw e;
            }
        }
    }
    
    // Bulk share multiple records with multiple users
    public static void bulkShareRecords(
        List<Id> recordIds, 
        Set<Id> userIds, 
        String accessLevel
    ) {
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Id recordId : recordIds) {
            for (Id userId : userIds) {
                Credit_Card_Application__Share share = new Credit_Card_Application__Share();
                share.ParentId = recordId;
                share.UserOrGroupId = userId;
                share.AccessLevel = accessLevel;
                share.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                sharesToCreate.add(share);
            }
        }
        
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            
            // Handle results
            Integer successCount = 0;
            Integer errorCount = 0;
            
            for (Integer i = 0; i < results.size(); i++) {
                Database.SaveResult result = results[i];
                if (result.isSuccess()) {
                    successCount++;
                } else {
                    errorCount++;
                    Database.Error error = result.getErrors()[0];
                    System.debug('Error sharing ' + sharesToCreate[i].ParentId + 
                        ' with ' + sharesToCreate[i].UserOrGroupId + ': ' + error.getMessage());
                }
            }
            
            System.debug('Bulk sharing complete: ' + successCount + ' successful, ' + errorCount + ' errors');
        }
    }
    
    // Share records based on criteria
    public static void shareApplicationsWithUnderwriters() {
        // Query applications that need sharing
        List<Credit_Card_Application__c> apps = [
            SELECT Id, OwnerId, Application_Stage__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND Id NOT IN (
                SELECT ParentId FROM Credit_Card_Application__Share
                WHERE RowCause = 'Manual'
            )
        ];
        
        // Query underwriter users
        List<User> underwriters = [
            SELECT Id FROM User
            WHERE Profile.Name LIKE '%Underwriter%'
            AND IsActive = true
        ];
        
        Set<Id> underwriterIds = new Set<Id>();
        for (User u : underwriters) {
            underwriterIds.add(u.Id);
        }
        
        // Bulk share
        List<Id> appIds = new List<Id>();
        for (Credit_Card_Application__c app : apps) {
            appIds.add(app.Id);
        }
        
        bulkShareRecords(appIds, underwriterIds, 'Edit');
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Sharing Rules: Owner-Based',
                    content: [
                        { type: 'text', content: 'Owner-based sharing rules automatically share records owned by specific users with other users or groups. These are configured in Setup > Sharing Settings.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'text',
                                filename: 'Owner-Based Sharing Rule Setup',
                                code: `Setup Steps for Owner-Based Sharing Rule:

1. Navigate to Setup > Sharing Settings
2. Select the object (e.g., Credit_Card_Application__c)
3. Click "New" in the Sharing Rules section
4. Configure the rule:
   - Rule Label: "Share Applications with Underwriters"
   - Rule Name: Auto-populated
   - Rule Type: "Based on record owner"
   - Select which records to share:
     * Category: "Public Groups"
     * Value: "All Internal Users" (or specific group)
   - Select users to share with:
     * "Underwriters" public group
   - Access Level: "Read/Write" or "Read Only"
5. Click "Save"

Example Rule:
- Share records owned by: "All Internal Users"
- Share with: "Underwriters" public group
- Access Level: "Read/Write"`
                            }
                        },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'SharingRuleHelper.cls',
                                code: `public class SharingRuleHelper {
    
    // Query sharing rules programmatically
    public static void querySharingRules() {
        // Note: Sharing rules are metadata, not data
        // Use Metadata API or Tooling API to query them
        
        // Example: Check if manual shares exist (which sharing rules create)
        List<Credit_Card_Application__Share> shares = [
            SELECT Id, ParentId, UserOrGroupId, AccessLevel, RowCause
            FROM Credit_Card_Application__Share
            WHERE RowCause = 'Rule'
            LIMIT 100
        ];
        
        System.debug('Found ' + shares.size() + ' rule-based shares');
        
        for (Credit_Card_Application__Share share : shares) {
            System.debug('Record: ' + share.ParentId + 
                ', Shared with: ' + share.UserOrGroupId + 
                ', Access: ' + share.AccessLevel);
        }
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Sharing Rules: Criteria-Based',
                    content: [
                        { type: 'text', content: 'Criteria-based sharing rules share records that meet specific field criteria with users or groups. More flexible than owner-based rules.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'text',
                                filename: 'Criteria-Based Sharing Rule Setup',
                                code: `Setup Steps for Criteria-Based Sharing Rule:

1. Navigate to Setup > Sharing Settings
2. Select the object (e.g., Credit_Card_Application__c)
3. Click "New" in the Sharing Rules section
4. Configure the rule:
   - Rule Label: "Share High Value Applications"
   - Rule Type: "Based on criteria"
   - Criteria:
     * Field: "Annual_Income__c"
     * Operator: "greater than"
     * Value: "100000"
   - Select users to share with:
     * "Senior Underwriters" public group
   - Access Level: "Read/Write"
5. Click "Save"

Example Rule:
- Share records where: Annual_Income__c > 100000
- Share with: "Senior Underwriters" public group
- Access Level: "Read/Write"

Note: Criteria-based rules can use:
- Field comparisons (equals, not equals, greater than, etc.)
- Multiple criteria with AND/OR logic
- Date fields with relative values (LAST_N_DAYS, NEXT_N_DAYS, etc.)`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Public Groups',
                    content: [
                        { type: 'text', content: 'Public groups are collections of users, roles, territories, or other groups. They simplify sharing rule management by grouping users with common access needs.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'text',
                                filename: 'Public Group Setup',
                                code: `Setup Steps for Public Group:

1. Navigate to Setup > Public Groups
2. Click "New"
3. Enter Group Label: "Underwriters"
4. Group Name: Auto-populated
5. Add members:
   - Click "Add Members"
   - Select member types:
     * Individual Users
     * Roles (e.g., "Senior Underwriter" role)
     * Roles and Subordinates (includes all users in role hierarchy)
     * Other Public Groups
   - Select specific users/roles/groups
6. Click "Save"

Example Public Group: "Underwriters"
Members:
- Role: "Senior Underwriter" (and subordinates)
- Role: "Underwriter" (and subordinates)
- Individual User: "John Doe"
- Public Group: "Credit Card Team"

Use Cases:
- Simplify sharing rule creation
- Group users with similar access needs
- Easier maintenance than individual user selection`
                            }
                        },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'PublicGroupHelper.cls',
                                code: `public class PublicGroupHelper {
    
    // Query public group members
    public static Set<Id> getPublicGroupMemberIds(String groupName) {
        Set<Id> memberIds = new Set<Id>();
        
        // Query the group
        List<Group> groups = [
            SELECT Id FROM Group
            WHERE Name = :groupName
            AND Type = 'Regular'
            LIMIT 1
        ];
        
        if (groups.isEmpty()) {
            System.debug('Public group not found: ' + groupName);
            return memberIds;
        }
        
        Id groupId = groups[0].Id;
        
        // Query group members (users)
        List<GroupMember> groupMembers = [
            SELECT UserOrGroupId FROM GroupMember
            WHERE GroupId = :groupId
        ];
        
        for (GroupMember gm : groupMembers) {
            memberIds.add(gm.UserOrGroupId);
        }
        
        // Also check for nested groups
        for (GroupMember gm : groupMembers) {
            // Check if this is a nested group
            List<Group> nestedGroups = [
                SELECT Id FROM Group
                WHERE Id = :gm.UserOrGroupId
                AND Type = 'Regular'
            ];
            
            if (!nestedGroups.isEmpty()) {
                // Recursively get nested group members
                memberIds.addAll(getNestedGroupMembers(gm.UserOrGroupId));
            }
        }
        
        return memberIds;
    }
    
    private static Set<Id> getNestedGroupMembers(Id groupId) {
        Set<Id> memberIds = new Set<Id>();
        
        List<GroupMember> members = [
            SELECT UserOrGroupId FROM GroupMember
            WHERE GroupId = :groupId
        ];
        
        for (GroupMember gm : members) {
            memberIds.add(gm.UserOrGroupId);
        }
        
        return memberIds;
    }
    
    // Share records with public group
    public static void shareWithPublicGroup(List<Id> recordIds, String groupName, String accessLevel) {
        Set<Id> groupMemberIds = getPublicGroupMemberIds(groupName);
        
        if (groupMemberIds.isEmpty()) {
            System.debug('No members found in group: ' + groupName);
            return;
        }
        
        // Use bulk sharing method
        ManualSharingApex.bulkShareRecords(
            recordIds, 
            groupMemberIds, 
            accessLevel
        );
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Advanced: Custom Object Sharing (Upsert)',
                    content: [
                        { type: 'text', content: 'When managing shares for Custom Objects, using `Database.upsert` is a powerful pattern. It allows you to either create a new share or update an existing one (e.g., changing AccessLevel) in a single operation, without needing to query first.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'CustomProjectSharing.cls',
                                code: `public with sharing class CustomProjectSharing {
    
    public static void shareProjects(List<Project__c> projects, Map<Id, String> userAccessLevelMap) {
        List<Project__Share> sharesToUpsert = new List<Project__Share>();
        
        for (Project__c proj : projects) {
            for (Id userId : userAccessLevelMap.keySet()) {
                Project__Share share = new Project__Share();
                share.ParentId = proj.Id;
                share.UserOrGroupId = userId;
                share.AccessLevel = userAccessLevelMap.get(userId); // e.g., 'Edit', 'Read'
                
                // RowCause is crucial for distinguishing Manual shares from others
                // Only 'Manual' RowCause shares can be updated by this type of logic typically
                share.RowCause = Schema.Project__Share.RowCause.Manual;
                
                sharesToUpsert.add(share);
            }
        }
        
        if (!sharesToUpsert.isEmpty()) {
            // Upsert based on ParentId + UserOrGroupId to handle updates efficiently
            // This prevents "Duplicate Value" errors and updates access levels if a share exists
            Database.UpsertResult[] results = Database.upsert(sharesToUpsert, false);
            
            for(Database.UpsertResult res : results) {
                if(!res.isSuccess()) {
                    System.debug('Sharing Upsert Failed: ' + res.getErrors()[0].getMessage());
                }
            }
        }
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Batch Sharing for Large Volumes',
                    content: [
                        { type: 'text', content: 'Use Batch Apex to share large numbers of records efficiently, avoiding governor limits and processing timeouts.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BatchSharingService.cls',
                                code: `global class BatchSharingService implements Database.Batchable<SObject> {
    
    private Set<Id> userIdsToShareWith;
    private String accessLevel;
    
    public BatchSharingService(Set<Id> userIds, String accessLevel) {
        this.userIdsToShareWith = userIds;
        this.accessLevel = accessLevel;
    }
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // Query records that need sharing
        return Database.getQueryLocator([
            SELECT Id, OwnerId
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND Id NOT IN (
                SELECT ParentId FROM Credit_Card_Application__Share
                WHERE UserOrGroupId IN :userIdsToShareWith
                AND RowCause = 'Manual'
            )
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Credit_Card_Application__c app : scope) {
            for (Id userId : userIdsToShareWith) {
                // Skip if owner is the same as user
                if (app.OwnerId != userId) {
                    Credit_Card_Application__Share share = new Credit_Card_Application__Share();
                    share.ParentId = app.Id;
                    share.UserOrGroupId = userId;
                    share.AccessLevel = accessLevel;
                    share.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                    sharesToCreate.add(share);
                }
            }
        }
        
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            
            Integer successCount = 0;
            Integer errorCount = 0;
            
            for (Integer i = 0; i < results.size(); i++) {
                if (results[i].isSuccess()) {
                    successCount++;
                } else {
                    errorCount++;
                    Database.Error error = results[i].getErrors()[0];
                    if (error.getStatusCode() != StatusCode.DUPLICATE_VALUE) {
                        System.debug('Error: ' + error.getMessage());
                    }
                }
            }
            
            System.debug('Batch sharing: ' + successCount + ' created, ' + errorCount + ' errors');
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Batch sharing completed');
    }
}

// Usage:
// Set<Id> underwriterIds = new Set<Id>{userId1, userId2};
// Database.executeBatch(new BatchSharingService(underwriterIds, 'Edit'), 200);`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Sharing Recalculation',
                    content: [
                        { type: 'text', content: 'When sharing rules or role hierarchies change, Salesforce recalculates sharing. You can also manually trigger recalculation for specific records or users.' },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'text',
                                filename: 'Sharing Recalculation Steps',
                                code: `Manual Sharing Recalculation:

1. Navigate to Setup > Sharing Settings
2. Select the object
3. Click "Recalculate" button
4. Choose recalculation scope:
   - "All records" - Recalculates all records (can take time)
   - "Specific records" - Recalculates selected records
   - "Specific users" - Recalculates sharing for selected users

Note: Recalculation is automatic when:
- Sharing rules are created/modified
- Role hierarchy changes
- Territory model changes
- User roles change

Programmatic Recalculation:
- Use Apex Sharing Recalculation API
- Available in API version 40.0 and later
- Can be resource-intensive for large orgs`
                            }
                        },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'SharingRecalculationHelper.cls',
                                code: `public class SharingRecalculationHelper {
    
    // Recalculate sharing for specific records
    public static void recalculateSharingForRecords(List<Id> recordIds) {
        // Note: This requires API version 40.0+
        // Use Database.recalculateSharing() method
        
        try {
            Database.recalculateSharing(recordIds);
            System.debug('Sharing recalculation initiated for ' + recordIds.size() + ' records');
        } catch(Exception e) {
            System.debug('Error recalculating sharing: ' + e.getMessage());
        }
    }
    
    // Recalculate sharing for specific users
    public static void recalculateSharingForUsers(List<Id> userIds) {
        try {
            Database.recalculateSharing(userIds);
            System.debug('Sharing recalculation initiated for ' + userIds.size() + ' users');
        } catch(Exception e) {
            System.debug('Error recalculating sharing: ' + e.getMessage());
        }
    }
    
    // Check if sharing recalculation is needed
    public static Boolean isRecalculationNeeded(Id recordId) {
        // Query sharing rules to see if they match current data
        Credit_Card_Application__c app = [
            SELECT Id, OwnerId, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Id = :recordId
            LIMIT 1
        ];
        
        // Check if criteria-based sharing rules should apply
        // This is a simplified check - actual logic depends on your rules
        if (app.Annual_Income__c > 100000) {
            // High value application - check if sharing exists
            List<Credit_Card_Application__Share> shares = [
                SELECT Id FROM Credit_Card_Application__Share
                WHERE ParentId = :recordId
                AND RowCause = 'Rule'
                LIMIT 1
            ];
            
            return shares.isEmpty(); // Recalculation needed if no rule-based shares exist
        }
        
        return false;
    }
}`
                            }
                        }
                    ]
                }
            },
            {
                type: 'accordion',
                accordionData: {
                    title: 'Bulk Sharing Best Practices',
                    content: [
                        { type: 'text', content: 'Follow these best practices to ensure efficient and secure bulk sharing operations.' },
                        {
                            type: 'list',
                            items: [
                                'Always use `with sharing` keyword for security context',
                                'Use `Database.insert(list, false)` to handle partial failures',
                                'Check for duplicate shares before creating (or handle DUPLICATE_VALUE errors)',
                                'Use Batch Apex for sharing more than 10,000 records',
                                'Set RowCause explicitly (Manual, Rule, etc.)',
                                'Query existing shares to avoid duplicates',
                                'Use public groups instead of individual users when possible',
                                'Monitor sharing table size (sharing records count toward data storage)',
                                'Use sharing rules instead of manual sharing when criteria are predictable',
                                'Recalculate sharing after role hierarchy or rule changes',
                                'Test with bulk data (200+ records)',
                                'Log errors but don\'t fail entire batch on single share failure'
                            ]
                        },
                        {
                            type: 'code',
                            codeSnippet: {
                                language: 'apex',
                                filename: 'BulkSharingBestPractices.cls',
                                code: `public with sharing class BulkSharingBestPractices {
    
    // Best Practice: Check for existing shares before creating
    public static void shareRecordsEfficiently(
        List<Id> recordIds, 
        Set<Id> userIds, 
        String accessLevel
    ) {
        // Query existing shares to avoid duplicates
        Set<String> existingShareKeys = new Set<String>();
        
        List<Credit_Card_Application__Share> existingShares = [
            SELECT ParentId, UserOrGroupId
            FROM Credit_Card_Application__Share
            WHERE ParentId IN :recordIds
            AND UserOrGroupId IN :userIds
            AND RowCause = 'Manual'
        ];
        
        for (Credit_Card_Application__Share share : existingShares) {
            String key = share.ParentId + '_' + share.UserOrGroupId;
            existingShareKeys.add(key);
        }
        
        // Create only new shares
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Id recordId : recordIds) {
            for (Id userId : userIds) {
                String key = recordId + '_' + userId;
                
                if (!existingShareKeys.contains(key)) {
                    Credit_Card_Application__Share share = new Credit_Card_Application__Share();
                    share.ParentId = recordId;
                    share.UserOrGroupId = userId;
                    share.AccessLevel = accessLevel;
                    share.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                    sharesToCreate.add(share);
                }
            }
        }
        
        // Bulk insert with error handling
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            
            Integer successCount = 0;
            Integer duplicateCount = 0;
            Integer errorCount = 0;
            
            for (Integer i = 0; i < results.size(); i++) {
                Database.SaveResult result = results[i];
                if (result.isSuccess()) {
                    successCount++;
                } else {
                    Database.Error error = result.getErrors()[0];
                    if (error.getStatusCode() == StatusCode.DUPLICATE_VALUE) {
                        duplicateCount++;
                    } else {
                        errorCount++;
                        System.debug('Error: ' + error.getMessage());
                    }
                }
            }
            
            System.debug('Sharing Results: ' + successCount + ' created, ' + 
                duplicateCount + ' duplicates, ' + errorCount + ' errors');
        }
    }
    
    // Best Practice: Remove shares when no longer needed
    public static void removeShares(List<Id> recordIds, Set<Id> userIds) {
        List<Credit_Card_Application__Share> sharesToDelete = [
            SELECT Id FROM Credit_Card_Application__Share
            WHERE ParentId IN :recordIds
            AND UserOrGroupId IN :userIds
            AND RowCause = 'Manual'
        ];
        
        if (!sharesToDelete.isEmpty()) {
            delete sharesToDelete;
            System.debug('Removed ' + sharesToDelete.size() + ' shares');
        }
    }
    
    // Best Practice: Update access levels efficiently
    public static void updateAccessLevels(
        List<Id> recordIds, 
        Set<Id> userIds, 
        String newAccessLevel
    ) {
        // Query existing shares
        List<Credit_Card_Application__Share> existingShares = [
            SELECT Id, AccessLevel FROM Credit_Card_Application__Share
            WHERE ParentId IN :recordIds
            AND UserOrGroupId IN :userIds
            AND RowCause = 'Manual'
        ];
        
        // Update access levels
        List<Credit_Card_Application__Share> sharesToUpdate = new List<Credit_Card_Application__Share>();
        
        for (Credit_Card_Application__Share share : existingShares) {
            if (share.AccessLevel != newAccessLevel) {
                share.AccessLevel = newAccessLevel;
                sharesToUpdate.add(share);
            }
        }
        
        if (!sharesToUpdate.isEmpty()) {
            update sharesToUpdate;
            System.debug('Updated ' + sharesToUpdate.size() + ' share access levels');
        }
    }
}`
                            }
                        }
                    ]
                }
            }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Integration & CDC',
    icon: 'share-2',
    lessons: [
      {
        id: 'cdc',
        title: 'Change Data Capture',
        duration: '15 min',
        salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture',
        content: [
          { type: 'text', content: 'Using Change Data Capture (CDC) to synchronize credit card data with external systems in real-time. Change Data Capture publishes change events for record creation, updates, deletion, and undeletion.' },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 1: Subscribing to Change Events (Platform Event Trigger)',
              content: [
                { type: 'text', content: 'Subscribe to CDC events using a Platform Event trigger. This is the most common pattern for processing CDC events in Apex.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CreditCardApplicationChangeEventTrigger.trigger',
                    code: `trigger CreditCardApplicationChangeEventTrigger on Credit_Card_Application__ChangeEvent (after insert) {
    CDCEventProcessor.processApplicationEvents(Trigger.new);
}`
                  }
                },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCEventProcessor.cls',
                    code: `public without sharing class CDCEventProcessor {
    
    public static void processApplicationEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<Credit_Card_Application__ChangeEvent> createEvents = new List<Credit_Card_Application__ChangeEvent>();
        List<Credit_Card_Application__ChangeEvent> updateEvents = new List<Credit_Card_Application__ChangeEvent>();
        List<Credit_Card_Application__ChangeEvent> deleteEvents = new List<Credit_Card_Application__ChangeEvent>();
        List<Credit_Card_Application__ChangeEvent> undeleteEvents = new List<Credit_Card_Application__ChangeEvent>();
        
        // Categorize events by change type
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            switch on header.changeType {
                when 'CREATE' {
                    createEvents.add(event);
                }
                when 'UPDATE' {
                    updateEvents.add(event);
                }
                when 'DELETE' {
                    deleteEvents.add(event);
                }
                when 'UNDELETE' {
                    undeleteEvents.add(event);
                }
            }
        }
        
        // Process each type of event
        if(!createEvents.isEmpty()) handleCreateEvents(createEvents);
        if(!updateEvents.isEmpty()) handleUpdateEvents(updateEvents);
        if(!deleteEvents.isEmpty()) handleDeleteEvents(deleteEvents);
        if(!undeleteEvents.isEmpty()) handleUndeleteEvents(undeleteEvents);
    }
    
    private static void handleCreateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle new record creation
        for(Credit_Card_Application__ChangeEvent event : events) {
            System.debug('New application created: ' + event.Application_Number__c);
            // Sync to external system
            // ExternalSystemIntegrationService.createApplication(event);
        }
    }
    
    private static void handleUpdateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle record updates
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check if stage changed to Approved
            if(event.Application_Stage__c == 'Approved') {
                System.debug('Application approved: ' + event.Application_Number__c);
                // Trigger downstream integration
                List<String> recordIds = header.recordIds;
                // ExternalSystemIntegrationService.syncApprovedApplications(recordIds);
            }
        }
    }
    
    private static void handleDeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle record deletions
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            System.debug('Application deleted: ' + header.recordIds);
            // Archive in external system
            // ExternalSystemIntegrationService.deleteApplication(header.recordIds);
        }
    }
    
    private static void handleUndeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle record undeletions
        for(Credit_Card_Application__ChangeEvent event : events) {
            System.debug('Application undeleted: ' + event.Application_Number__c);
            // Restore in external system
            // ExternalSystemIntegrationService.undeleteApplication(event);
        }
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 2: Handling CREATE Events',
              content: [
                { type: 'text', content: 'When a new record is created, CDC publishes a CREATE event. Use this to sync new records to external systems immediately.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCCreateHandler.cls',
                    code: `public class CDCCreateHandler {
    
    public static void handleCreateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<Integration_Log__c> logs = new List<Integration_Log__c>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            try {
                // Extract record data
                Map<String, Object> recordData = new Map<String, Object>{
                    'Application_Number__c' => event.Application_Number__c,
                    'Applicant__c' => event.Applicant__c,
                    'Requested_Card_Product__c' => event.Requested_Card_Product__c,
                    'Annual_Income__c' => event.Annual_Income__c,
                    'Application_Stage__c' => event.Application_Stage__c,
                    'CreatedDate' => header.commitTimestamp
                };
                
                // Callout to external system
                HttpRequest req = new HttpRequest();
                req.setEndpoint('https://external-system.com/api/applications');
                req.setMethod('POST');
                req.setHeader('Content-Type', 'application/json');
                req.setBody(JSON.serialize(recordData));
                
                Http http = new Http();
                HttpResponse res = http.send(req);
                
                if(res.getStatusCode() == 200 || res.getStatusCode() == 201) {
                    System.debug('Successfully synced application: ' + event.Application_Number__c);
                } else {
                    // Log error
                    logs.add(createErrorLog(event, res.getBody()));
                }
                
            } catch(Exception e) {
                logs.add(createErrorLog(event, e.getMessage()));
            }
        }
        
        if(!logs.isEmpty()) {
            insert logs;
        }
    }
    
    private static Integration_Log__c createErrorLog(Credit_Card_Application__ChangeEvent event, String error) {
        return new Integration_Log__c(
            Record_ID__c = event.Id,
            Error_Message__c = error,
            Event_Type__c = 'CREATE',
            Status__c = 'Failed'
        );
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 3: Handling UPDATE Events with Field Changes',
              content: [
                { type: 'text', content: 'UPDATE events include changed fields. Use the changedFields property to identify which fields were modified and process only relevant changes.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCUpdateHandler.cls',
                    code: `public class CDCUpdateHandler {
    
    public static void handleUpdateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check which fields changed
            Set<String> changedFields = header.changedFields;
            
            // Only process if critical fields changed
            if(changedFields.contains('Application_Stage__c')) {
                handleStageChange(event, header);
            }
            
            if(changedFields.contains('Approved_Credit_Limit__c')) {
                handleCreditLimitChange(event, header);
            }
            
            if(changedFields.contains('Risk_Score__c')) {
                handleRiskScoreChange(event, header);
            }
        }
    }
    
    private static void handleStageChange(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        if(event.Application_Stage__c == 'Approved') {
            // Notify external system of approval
            Map<String, Object> payload = new Map<String, Object>{
                'applicationId' => header.recordIds[0],
                'stage' => event.Application_Stage__c,
                'approvedLimit' => event.Approved_Credit_Limit__c,
                'timestamp' => header.commitTimestamp
            };
            
            // Make callout to external system
            makeCallout('POST', '/api/applications/approve', payload);
        }
    }
    
    private static void handleCreditLimitChange(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // Sync credit limit changes to external system
        Map<String, Object> payload = new Map<String, Object>{
            'applicationId' => header.recordIds[0],
            'creditLimit' => event.Approved_Credit_Limit__c,
            'timestamp' => header.commitTimestamp
        };
        
        makeCallout('PATCH', '/api/applications/credit-limit', payload);
    }
    
    private static void handleRiskScoreChange(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // Update risk score in external system
        Map<String, Object> payload = new Map<String, Object>{
            'applicationId' => header.recordIds[0],
            'riskScore' => event.Risk_Score__c,
            'timestamp' => header.commitTimestamp
        };
        
        makeCallout('PATCH', '/api/applications/risk-score', payload);
    }
    
    private static void makeCallout(String method, String endpoint, Map<String, Object> payload) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com' + endpoint);
        req.setMethod(method);
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(payload));
        req.setTimeout(12000);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Callout response: ' + res.getStatusCode() + ' - ' + res.getBody());
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 4: Handling DELETE and UNDELETE Events',
              content: [
                { type: 'text', content: 'DELETE events occur when records are deleted. UNDELETE events occur when records are restored from the Recycle Bin. Handle both to keep external systems synchronized.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCDeleteHandler.cls',
                    code: `public class CDCDeleteHandler {
    
    public static void handleDeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<String> deletedRecordIds = new List<String>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            deletedRecordIds.addAll(header.recordIds);
        }
        
        if(!deletedRecordIds.isEmpty()) {
            // Archive records in external system
            archiveInExternalSystem(deletedRecordIds);
        }
    }
    
    public static void handleUndeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<String> undeletedRecordIds = new List<String>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            undeletedRecordIds.addAll(header.recordIds);
            
            // Restore record data
            Map<String, Object> recordData = new Map<String, Object>{
                'Application_Number__c' => event.Application_Number__c,
                'Application_Stage__c' => event.Application_Stage__c,
                'Annual_Income__c' => event.Annual_Income__c
            };
            
            restoreInExternalSystem(header.recordIds[0], recordData);
        }
    }
    
    private static void archiveInExternalSystem(List<String> recordIds) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/archive');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(new Map<String, Object>{
            'recordIds' => recordIds,
            'archivedAt' => Datetime.now().formatGmt('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
        }));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode() == 200) {
            System.debug('Successfully archived ' + recordIds.size() + ' records');
        }
    }
    
    private static void restoreInExternalSystem(String recordId, Map<String, Object> recordData) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/' + recordId + '/restore');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(recordData));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode() == 200) {
            System.debug('Successfully restored record: ' + recordId);
        }
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 5: Handling Merged Change Events',
              content: [
                { type: 'text', content: 'Salesforce may merge multiple change events into one if the same change occurred in multiple records of the same object type within one second. Check the recordIds array to handle multiple records.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCMergedEventHandler.cls',
                    code: `public class CDCMergedEventHandler {
    
    public static void handleMergedEvents(List<Credit_Card_Application__ChangeEvent> events) {
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check if this is a merged event (multiple record IDs)
            if(header.recordIds != null && header.recordIds.size() > 1) {
                System.debug('Processing merged event with ' + header.recordIds.size() + ' records');
                
                // Process each record ID in the merged event
                for(String recordId : header.recordIds) {
                    processMergedRecord(recordId, event, header);
                }
            } else {
                // Single record event - process normally
                processSingleRecord(event, header);
            }
        }
    }
    
    private static void processMergedRecord(String recordId, Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // For merged events, you may need to query the actual record
        // since the event object may not contain all record data
        try {
            Credit_Card_Application__c app = [
                SELECT Id, Application_Number__c, Application_Stage__c, 
                       Approved_Credit_Limit__c, Annual_Income__c
                FROM Credit_Card_Application__c
                WHERE Id = :recordId
                LIMIT 1
            ];
            
            // Process the individual record
            Map<String, Object> payload = new Map<String, Object>{
                'recordId' => recordId,
                'applicationNumber' => app.Application_Number__c,
                'stage' => app.Application_Stage__c,
                'changeType' => header.changeType,
                'timestamp' => header.commitTimestamp
            };
            
            syncToExternalSystem(payload);
            
        } catch(Exception e) {
            System.debug('Error processing merged record ' + recordId + ': ' + e.getMessage());
        }
    }
    
    private static void processSingleRecord(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // Standard single record processing
        Map<String, Object> payload = new Map<String, Object>{
            'recordId' => header.recordIds[0],
            'applicationNumber' => event.Application_Number__c,
            'stage' => event.Application_Stage__c,
            'changeType' => header.changeType,
            'timestamp' => header.commitTimestamp
        };
        
        syncToExternalSystem(payload);
    }
    
    private static void syncToExternalSystem(Map<String, Object> payload) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/sync');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(payload));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Sync response: ' + res.getStatusCode());
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 6: Handling Gap and Overflow Events',
              content: [
                { type: 'text', content: 'Gap events indicate missing change events. Overflow events occur during high load. Handle these special event types to ensure data consistency.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCGapOverflowHandler.cls',
                    code: `public class CDCGapOverflowHandler {
    
    public static void handleSpecialEvents(List<Credit_Card_Application__ChangeEvent> events) {
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check for gap events (indicates missing change events)
            if(header.replayId != null && isGapEvent(header)) {
                handleGapEvent(header);
            }
            
            // Check for overflow events (high load scenario)
            if(isOverflowEvent(header)) {
                handleOverflowEvent(header);
            }
        }
    }
    
    private static Boolean isGapEvent(EventBus.ChangeEventHeader header) {
        // Gap events typically have specific characteristics
        // You may need to compare replayIds or check for gap indicators
        // This is a simplified check - adjust based on your implementation
        return header.replayId != null && header.replayId.contains('GAP');
    }
    
    private static Boolean isOverflowEvent(EventBus.ChangeEventHeader header) {
        // Overflow events occur during high load
        // Check for overflow indicators in the header
        return header.replayId != null && header.replayId.contains('OVERFLOW');
    }
    
    private static void handleGapEvent(EventBus.ChangeEventHeader header) {
        System.debug('Gap event detected - missing change events may have occurred');
        
        // Query for records that may have been missed
        // Use the commitTimestamp to identify the time range
        Datetime gapStartTime = header.commitTimestamp.addMinutes(-5);
        Datetime gapEndTime = header.commitTimestamp;
        
        List<Credit_Card_Application__c> missedRecords = [
            SELECT Id, Application_Number__c, Application_Stage__c,
                   LastModifiedDate, CreatedDate
            FROM Credit_Card_Application__c
            WHERE LastModifiedDate >= :gapStartTime
            AND LastModifiedDate <= :gapEndTime
            ORDER BY LastModifiedDate ASC
        ];
        
        System.debug('Found ' + missedRecords.size() + ' records that may have been missed');
        
        // Sync these records to external system
        for(Credit_Card_Application__c app : missedRecords) {
            syncMissedRecord(app);
        }
    }
    
    private static void handleOverflowEvent(EventBus.ChangeEventHeader header) {
        System.debug('Overflow event detected - high load scenario');
        
        // During overflow, you may want to:
        // 1. Use batch processing instead of real-time sync
        // 2. Increase retry logic
        // 3. Log for later processing
        
        Integration_Log__c log = new Integration_Log__c(
            Event_Type__c = 'OVERFLOW',
            Status__c = 'Pending',
            Error_Message__c = 'High load detected - batch processing recommended',
            Timestamp__c = header.commitTimestamp
        );
        
        insert log;
        
        // Optionally, queue a batch job to process overflow events
        // System.enqueueJob(new CDCOverflowProcessor(log.Id));
    }
    
    private static void syncMissedRecord(Credit_Card_Application__c app) {
        Map<String, Object> payload = new Map<String, Object>{
            'recordId' => app.Id,
            'applicationNumber' => app.Application_Number__c,
            'stage' => app.Application_Stage__c,
            'lastModified' => app.LastModifiedDate.formatGmt('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
            'isGapRecovery' => true
        };
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/sync');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(payload));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Gap recovery sync: ' + res.getStatusCode());
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 7: Monitoring CDC Usage with PlatformEventUsageMetric',
              content: [
                { type: 'text', content: 'Query PlatformEventUsageMetric to monitor event publishing and delivery usage. This helps track CDC performance and identify potential issues.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCUsageMonitor.cls',
                    code: `public class CDCUsageMonitor {
    
    // Query usage metrics for the last 24 hours
    public static void checkRecentUsage() {
        Datetime endTime = Datetime.now();
        Datetime startTime = endTime.addHours(-24);
        
        List<PlatformEventUsageMetric> metrics = [
            SELECT Id, EventType, DailyEventUsage, DailyEventUsageLastUpdated,
                   HourlyEventUsage, HourlyEventUsageLastUpdated
            FROM PlatformEventUsageMetric
            WHERE EventType LIKE '%ChangeEvent%'
            AND DailyEventUsageLastUpdated >= :startTime
            ORDER BY DailyEventUsageLastUpdated DESC
            LIMIT 100
        ];
        
        System.debug('Found ' + metrics.size() + ' usage metric records');
        
        for(PlatformEventUsageMetric metric : metrics) {
            System.debug('Event Type: ' + metric.EventType);
            System.debug('Daily Usage: ' + metric.DailyEventUsage);
            System.debug('Hourly Usage: ' + metric.HourlyEventUsage);
            System.debug('Last Updated: ' + metric.DailyEventUsageLastUpdated);
            
            // Check if usage is approaching limits
            if(metric.DailyEventUsage > 1000000) {
                System.debug('WARNING: High daily usage detected for ' + metric.EventType);
            }
        }
    }
    
    // Get usage metrics for a specific time range
    public static Map<String, Integer> getUsageByEventType(Datetime startTime, Datetime endTime) {
        Map<String, Integer> usageMap = new Map<String, Integer>();
        
        List<PlatformEventUsageMetric> metrics = [
            SELECT EventType, DailyEventUsage
            FROM PlatformEventUsageMetric
            WHERE EventType LIKE '%ChangeEvent%'
            AND DailyEventUsageLastUpdated >= :startTime
            AND DailyEventUsageLastUpdated <= :endTime
        ];
        
        for(PlatformEventUsageMetric metric : metrics) {
            String eventType = metric.EventType;
            Integer currentUsage = usageMap.containsKey(eventType) 
                ? usageMap.get(eventType) 
                : 0;
            usageMap.put(eventType, currentUsage + Integer.valueOf(metric.DailyEventUsage));
        }
        
        return usageMap;
    }
    
    // Monitor and alert on high usage
    public static void monitorAndAlert() {
        Map<String, Integer> usage = getUsageByEventType(
            Datetime.now().addHours(-1),
            Datetime.now()
        );
        
        for(String eventType : usage.keySet()) {
            Integer eventCount = usage.get(eventType);
            
            // Alert if more than 100k events in the last hour
            if(eventCount > 100000) {
                sendAlert('High CDC usage detected', 
                    'Event Type: ' + eventType + ', Count: ' + eventCount);
            }
        }
    }
    
    private static void sendAlert(String subject, String message) {
        // Send email or create a case
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setSubject(subject);
        email.setPlainTextBody(message);
        email.setToAddresses(new String[] { UserInfo.getUserEmail() });
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { email });
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 8: CometD Client Subscription (JavaScript)',
              content: [
                { type: 'text', content: 'Subscribe to CDC events from a JavaScript client using CometD. This is useful for real-time updates in web applications.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'javascript',
                    filename: 'cdc-subscriber.js',
                    code: `// CometD client subscription for Change Data Capture
import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, onError } from 'lightning/empApi';

export default class CDCSubscriber extends LightningElement {
    subscription = {};
    channel = '/data/Credit_Card_Application__ChangeEvent';

    connectedCallback() {
        this.registerErrorListener();
        this.subscribeToCDC();
    }

    disconnectedCallback() {
        this.unsubscribeFromCDC();
    }

    // Subscribe to CDC events
    subscribeToCDC() {
        const messageCallback = (response) => {
            console.log('CDC Event received:', JSON.stringify(response));
            
            const event = response.data.payload;
            const header = event.ChangeEventHeader;
            
            // Handle different change types
            switch(header.changeType) {
                case 'CREATE':
                    this.handleCreate(event);
                    break;
                case 'UPDATE':
                    this.handleUpdate(event);
                    break;
                case 'DELETE':
                    this.handleDelete(event);
                    break;
                case 'UNDELETE':
                    this.handleUndelete(event);
                    break;
            }
        };

        subscribe(this.channel, -1, messageCallback).then(response => {
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;
        });
    }

    // Unsubscribe from CDC events
    unsubscribeFromCDC() {
        unsubscribe(this.subscription, response => {
            console.log('Unsubscribed from channel: ', JSON.stringify(response.channel));
        });
    }

    // Register error listener
    registerErrorListener() {
        onError(error => {
            console.log('Received error from server: ', JSON.stringify(error));
        });
    }

    handleCreate(event) {
        console.log('New application created:', event.Application_Number__c);
        // Update UI or call Apex method
        this.dispatchEvent(new CustomEvent('cdccreate', {
            detail: { record: event }
        }));
    }

    handleUpdate(event) {
        const header = event.ChangeEventHeader;
        const changedFields = header.changedFields || [];
        
        console.log('Application updated:', event.Application_Number__c);
        console.log('Changed fields:', changedFields);
        
        if(changedFields.includes('Application_Stage__c') && 
           event.Application_Stage__c === 'Approved') {
            console.log('Application approved!');
            this.dispatchEvent(new CustomEvent('cdcapprove', {
                detail: { record: event }
            }));
        }
    }

    handleDelete(event) {
        const header = event.ChangeEventHeader;
        console.log('Application deleted:', header.recordIds);
        this.dispatchEvent(new CustomEvent('cdcdelete', {
            detail: { recordIds: header.recordIds }
        }));
    }

    handleUndelete(event) {
        console.log('Application undeleted:', event.Application_Number__c);
        this.dispatchEvent(new CustomEvent('cdcundelete', {
            detail: { record: event }
        }));
    }
}`
                  }
                }
              ]
            }
          },
          {
            type: 'accordion',
            accordionData: {
              title: 'Scenario 9: Error Handling and Retry Logic',
              content: [
                { type: 'text', content: 'Implement robust error handling and retry logic for CDC event processing to ensure reliability when external systems are unavailable.' },
                {
                  type: 'code',
                  codeSnippet: {
                    language: 'apex',
                    filename: 'CDCRetryHandler.cls',
                    code: `public class CDCRetryHandler {
    
    private static final Integer MAX_RETRIES = 3;
    private static final Integer RETRY_DELAY_SECONDS = 60;
    
    public static void processWithRetry(List<Credit_Card_Application__ChangeEvent> events) {
        List<CDC_Retry_Queue__c> retryQueue = new List<CDC_Retry_Queue__c>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            try {
                processEvent(event);
            } catch(CalloutException e) {
                // Network error - add to retry queue
                retryQueue.add(createRetryRecord(event, e.getMessage()));
            } catch(Exception e) {
                // Other errors - log but don't retry
                logError(event, e);
            }
        }
        
        if(!retryQueue.isEmpty()) {
            insert retryQueue;
        }
    }
    
    private static void processEvent(Credit_Card_Application__ChangeEvent event) {
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(createPayload(event, header)));
        req.setTimeout(12000);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode() >= 400) {
            throw new CalloutException('HTTP Error: ' + res.getStatusCode() + ' - ' + res.getBody());
        }
    }
    
    private static CDC_Retry_Queue__c createRetryRecord(
        Credit_Card_Application__ChangeEvent event, 
        String errorMessage
    ) {
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        
        return new CDC_Retry_Queue__c(
            Record_ID__c = header.recordIds != null && !header.recordIds.isEmpty() 
                ? header.recordIds[0] 
                : null,
            Event_Data__c = JSON.serialize(event),
            Error_Message__c = errorMessage,
            Retry_Count__c = 0,
            Next_Retry_Time__c = Datetime.now().addSeconds(RETRY_DELAY_SECONDS),
            Status__c = 'Pending'
        );
    }
    
    // Batch job to retry failed events
    public class CDCRetryBatch implements Database.Batchable<SObject> {
        public Database.QueryLocator start(Database.BatchableContext BC) {
            return Database.getQueryLocator([
                SELECT Id, Record_ID__c, Event_Data__c, Error_Message__c,
                       Retry_Count__c, Next_Retry_Time__c
                FROM CDC_Retry_Queue__c
                WHERE Status__c = 'Pending'
                AND Next_Retry_Time__c <= :Datetime.now()
                AND Retry_Count__c < :MAX_RETRIES
            ]);
        }
        
        public void execute(Database.BatchableContext BC, List<CDC_Retry_Queue__c> scope) {
            List<CDC_Retry_Queue__c> toUpdate = new List<CDC_Retry_Queue__c>();
            
            for(CDC_Retry_Queue__c retryRecord : scope) {
                try {
                    // Deserialize and process the event
                    Credit_Card_Application__ChangeEvent event = 
                        (Credit_Card_Application__ChangeEvent) JSON.deserialize(
                            retryRecord.Event_Data__c, 
                            Credit_Card_Application__ChangeEvent.class
                        );
                    
                    processEvent(event);
                    
                    // Success - mark as completed
                    retryRecord.Status__c = 'Completed';
                    retryRecord.Completed_At__c = Datetime.now();
                    
                } catch(Exception e) {
                    // Failed again - increment retry count
                    retryRecord.Retry_Count__c++;
                    retryRecord.Error_Message__c = e.getMessage();
                    
                    if(retryRecord.Retry_Count__c < MAX_RETRIES) {
                        // Schedule next retry with exponential backoff
                        Integer delaySeconds = RETRY_DELAY_SECONDS * 
                            (Integer)Math.pow(2, retryRecord.Retry_Count__c);
                        retryRecord.Next_Retry_Time__c = Datetime.now().addSeconds(delaySeconds);
                    } else {
                        // Max retries reached - mark as failed
                        retryRecord.Status__c = 'Failed';
                        retryRecord.Failed_At__c = Datetime.now();
                    }
                }
                
                toUpdate.add(retryRecord);
            }
            
            update toUpdate;
        }
        
        public void finish(Database.BatchableContext BC) {
            // Optionally send notification of completion
        }
    }
    
    private static Map<String, Object> createPayload(
        Credit_Card_Application__ChangeEvent event,
        EventBus.ChangeEventHeader header
    ) {
        return new Map<String, Object>{
            'recordId' => header.recordIds != null && !header.recordIds.isEmpty() 
                ? header.recordIds[0] 
                : null,
            'changeType' => header.changeType,
            'applicationNumber' => event.Application_Number__c,
            'stage' => event.Application_Stage__c,
            'timestamp' => header.commitTimestamp.formatGmt('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
        };
    }
    
    private static void logError(Credit_Card_Application__ChangeEvent event, Exception e) {
        Integration_Log__c log = new Integration_Log__c(
            Record_ID__c = event.Id,
            Error_Message__c = e.getMessage(),
            Stack_Trace__c = e.getStackTraceString(),
            Event_Type__c = 'ERROR',
            Status__c = 'Failed'
        );
        insert log;
    }
}`
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Testing & QA',
    icon: 'shield',
    lessons: [
        {
            id: 'testing',
            title: 'Unit Testing',
            duration: '20 min',
            salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm',
            content: [
                { type: 'text', content: 'Comprehensive Unit Tests are required to deploy logic to production. We ensure 100% coverage by testing Single, Bulk, Disabled, and Error scenarios.' },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'Trigger Handler Tests',
                        content: [
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'apex',
                                    filename: 'CreditCardApplicationTriggerHandlerTest.cls',
                                    code: `@isTest
public class CreditCardApplicationTriggerHandlerTest {

    @testSetup
    static void setupData() {
        // Create base data for all tests
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Contact con = new Contact(
            LastName = 'Test', 
            AccountId = acc.Id, 
            Email='test@example.com'
        );
        insert con;
        
        Credit_Card_Product__c prod = new Credit_Card_Product__c(
            Name = 'Test Card',
            Product_Code__c = 'TEST-001',
            Minimum_Credit_Limit__c = 1000,
            Maximum_Credit_Limit__c = 50000,
            Is_Active__c = true
        );
        insert prod;
    }

    private static void configureSettings(Boolean disableTrigger, Integer bulkThreshold) {
        // Helper to insert Custom Settings
        Trigger_Settings__c settings = new Trigger_Settings__c(
            SetupOwnerId = UserInfo.getOrganizationId(),
            Disable_Triggers_For_Data_Load__c = disableTrigger,
            Allowed_Bulk_Operation_Size__c = bulkThreshold
        );
        insert settings;
    }

    @isTest
    static void testSingleInsert_Positive() {
        // Test Single Record Logic path
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000,
            Application_Stage__c = 'New'
        );

        Test.startTest();
        insert app;
        Test.stopTest();

        // Verify Risk Score calculated (Logic ran)
        Credit_Card_Application__c result = [SELECT Risk_Score__c FROM Credit_Card_Application__c WHERE Id = :app.Id];
        System.assertEquals(750, result.Risk_Score__c, 'Risk score should be 750 for high income');
    }

    @isTest
    static void testBulkInsert_Positive() {
        // Test Bulk Logic path (Threshold = 5, Records = 10)
        configureSettings(false, 5);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        for(Integer i=0; i<10; i++) {
            apps.add(new Credit_Card_Application__c(
                Applicant__c = con.Id,
                Requested_Card_Product__c = prod.Id,
                Annual_Income__c = 60000,
                Application_Stage__c = 'New'
            ));
        }

        Test.startTest();
        insert apps;
        Test.stopTest();

        List<Credit_Card_Application__c> results = [SELECT Risk_Score__c FROM Credit_Card_Application__c];
        System.assertEquals(10, results.size());
        for(Credit_Card_Application__c r : results) {
            System.assertEquals(750, r.Risk_Score__c, 'Bulk processing should calculate scores');
        }
    }

    @isTest
    static void testTriggerDisabled() {
        // Test Trigger Bypass via Custom Setting
        configureSettings(true, 10); 
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000,
            Application_Stage__c = 'New'
        );

        Test.startTest();
        insert app;
        Test.stopTest();

        // Logic should NOT run
        Credit_Card_Application__c result = [SELECT Risk_Score__c FROM Credit_Card_Application__c WHERE Id = :app.Id];
        System.assertEquals(null, result.Risk_Score__c, 'Trigger logic should be skipped');
    }

    @isTest
    static void testValidationLogic() {
        // Test Business Logic Validation
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 5000, // Below 10k limit
            Application_Stage__c = 'New'
        );

        Test.startTest();
        try {
            insert app;
            System.assert(false, 'Should have thrown exception');
        } catch(DmlException e) {
            System.assert(e.getMessage().contains('Minimum income requirement'), 'Expected validation error');
        }
        Test.stopTest();
    }

    @isTest
    static void testExceptionHandling_SingleInsert() {
        // Test Exception Handling in Single Path
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000
        );

        // Force Exception via TestVisible flag
        CreditCardApplicationTriggerHandler.throwTestException = true;

        Test.startTest();
        try {
            insert app;
            System.assert(false, 'Should have caught exception and added error');
        } catch(Exception e) {
            System.assert(e.getMessage().contains('Unable to process application'), 'Expected user friendly error');
        }
        Test.stopTest();
    }

    @isTest
    static void testExceptionHandling_BulkInsert() {
        // Test Exception Handling in Bulk Path
        configureSettings(false, 5); // Force bulk
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        for(Integer i=0; i<10; i++) {
            apps.add(new Credit_Card_Application__c(
                Applicant__c = con.Id,
                Requested_Card_Product__c = prod.Id,
                Annual_Income__c = 60000
            ));
        }

        CreditCardApplicationTriggerHandler.throwTestException = true;

        Test.startTest();
        try {
            insert apps;
            System.assert(false, 'Should have caught exception');
        } catch(Exception e) {
            // Bulk errors usually come back as DmlExceptions on the list
            System.assert(e.getMessage().contains('System error'), 'Expected bulk system error message');
        }
        Test.stopTest();
    }

    @isTest
    static void testBulkUpdate_Positive() {
        // Test Bulk Update Logic
        configureSettings(false, 5);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        for(Integer i=0; i<10; i++) {
            apps.add(new Credit_Card_Application__c(
                Applicant__c = con.Id,
                Requested_Card_Product__c = prod.Id,
                Annual_Income__c = 60000,
                Application_Stage__c = 'New'
            ));
        }
        insert apps;

        for(Credit_Card_Application__c a : apps) {
            a.Application_Stage__c = 'Under Review';
        }

        Test.startTest();
        update apps;
        Test.stopTest();
        
        // Verify no errors (implied by success)
    }
    
    @isTest
    static void testApprovedProcessing() {
        // Test After Update Logic (Approval Process)
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];
        
        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000,
            Application_Stage__c = 'Under Review'
        );
        insert app;
        
        Test.startTest();
        app.Application_Stage__c = 'Approved';
        update app;
        Test.stopTest();
        
        // Logic would enqueue job here, we just ensure no errors
    }
}`
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'Batch Apex Tests',
                        content: [
                            { type: 'text', content: 'Testing Batch Apex requires `Test.startTest()` and `Test.stopTest()` to force asynchronous execution. We also verify the `Schedulable` interface.' },
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'apex',
                                    filename: 'DailyCreditLimitReviewBatchTest.cls',
                                    code: `@isTest
public class DailyCreditLimitReviewBatchTest {

    @testSetup
    static void setupData() {
        // Create a mix of applications for testing
        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        
        // 1. Target for Approval: Under Review + High Income + Recent
        apps.add(new Credit_Card_Application__c(
            Annual_Income__c = 150000, // > 100k
            Application_Stage__c = 'Under Review'
            // CreatedDate will be today by default
        ));

        // 2. Ignore: Low Income
        apps.add(new Credit_Card_Application__c(
            Annual_Income__c = 50000, // < 100k
            Application_Stage__c = 'Under Review'
        ));

        // 3. Ignore: Wrong Stage
        apps.add(new Credit_Card_Application__c(
            Annual_Income__c = 200000,
            Application_Stage__c = 'New'
        ));

        insert apps;
    }

    @isTest
    static void testBatchExecution() {
        Test.startTest();
        // Execute the batch
        DailyCreditLimitReviewBatch batch = new DailyCreditLimitReviewBatch();
        Database.executeBatch(batch);
        Test.stopTest();

        // Verify Results
        List<Credit_Card_Application__c> results = [SELECT Annual_Income__c, Application_Stage__c FROM Credit_Card_Application__c];
        
        for(Credit_Card_Application__c app : results) {
            if (app.Annual_Income__c == 150000) {
                System.assertEquals('Approved', app.Application_Stage__c, 'High income app should be approved');
            } else {
                System.assertNotEquals('Approved', app.Application_Stage__c, 'Other apps should not be auto-approved');
            }
        }
    }

    @isTest
    static void testSchedulable() {
        String cronExp = '0 0 0 15 3 ? 2099';
        
        Test.startTest();
        String jobId = System.schedule('TestLimitReview', cronExp, new DailyCreditLimitReviewBatch());
        Test.stopTest();
        
        // Verify job was scheduled
        CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered, NextFireTime FROM CronTrigger WHERE Id = :jobId];
        System.assertEquals(cronExp, ct.CronExpression);
        System.assertEquals(0, ct.TimesTriggered);
    }
}`
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
  },
  {
    id: 'module-6',
    title: 'Advanced Integration Patterns',
    icon: 'settings',
    lessons: [
        {
            id: 'sap-identity',
            title: 'SAP Identity Management',
            duration: '20 min',
            salesforceLink: 'https://devcenter.heroku.com/articles/heroku-connect',
            content: [
                { type: 'text', content: 'Integrating Salesforce with SAP for Identity Management is a common enterprise requirement. The "UserOrGroupId" field in Share objects effectively acts as the "foreign key" linking record access to Users.' },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'Option 1: Bulk Apex Sharing (LDAP)',
                        content: [
                            { type: 'text', content: 'Use Bulk Apex to sync LDAP groups to Salesforce groups and apply sharing. This is scalable and governor-limit friendly.' },
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'apex',
                                    filename: 'LDAPSharingService.cls',
                                    code: `public with sharing class LDAPSharingService {
    public static void syncLDAPGroupSharing(Map<String, List<Id>> ldapGroupToAccountIds) {
        // Map LDAP Groups to Salesforce Public Groups
        Map<String, Id> ldapGroupToSFGroup = getOrCreatePublicGroups(ldapGroupToAccountIds.keySet());
        List<AccountShare> allShares = new List<AccountShare>();
        
        for (String ldapGroup : ldapGroupToAccountIds.keySet()) {
            Id sfGroupId = ldapGroupToSFGroup.get(ldapGroup);
            for(Id accId : ldapGroupToAccountIds.get(ldapGroup)) {
                AccountShare share = new AccountShare();
                share.ParentId = accId;
                share.UserOrGroupId = sfGroupId;
                share.AccessLevel = 'Read';
                share.RowCause = Schema.AccountShare.RowCause.Manual;
                allShares.add(share);
            }
        }
        
        if (!allShares.isEmpty()) {
            Database.insert(allShares, false);
        }
    }
}`
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'Option 2: Heroku Connect',
                        content: [
                            { type: 'text', content: 'For bi-directional, real-time synchronization of thousands of users without code, Heroku Connect is the recommended middleware.' },
                            {
                                type: 'list',
                                items: [
                                    'Syncs SAP tables to Heroku Postgres',
                                    'Automatically syncs Postgres to Salesforce Objects',
                                    'Handles millions of records without Apex limits',
                                    'Supports data transformation via SQL or Python'
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            id: 'heroku-etl',
            title: 'Heroku vs. Apex for ETL',
            duration: '15 min',
            salesforceLink: 'https://devcenter.heroku.com/categories/heroku-architecture',
            content: [
                { type: 'text', content: 'For heavy data loads (ETL), Heroku often outperforms Apex Batch due to lack of governor limits on CPU time and heap size.' },
                {
                    type: 'table',
                    tableData: {
                        headers: ['Feature', 'Apex Batch', 'Heroku ETL'],
                        rows: [
                            ['Data Volume', 'Max ~50M, Slow', 'Unlimited, Fast'],
                            ['Memory Limit', '6MB Heap', 'GBs of RAM'],
                            ['External Calls', '100 per tx', 'Unlimited'],
                            ['Complex Logic', 'Restricted', 'Full Python/Node/Java']
                        ]
                    }
                },
                { type: 'text', content: 'Example Python ETL script running on Heroku:' },
                {
                    type: 'code',
                    codeSnippet: {
                        language: 'text',
                        filename: 'heroku_etl.py',
                        code: `def migrate_all_customers():
    print("🚀 Starting bulk migration from SAP to Salesforce")
    
    # EXTRACT from SAP
    sap_customers = sap_service.get_all_customers()
    
    # TRANSFORM (Complex Logic)
    transformed = []
    for customer in sap_customers:
        # Complex transformations that would break Apex Heap
        sf_customer = transform_complex_logic(customer)
        transformed.append(sf_customer)
    
    # LOAD via Bulk API 2.0
    results = sf_bulk.insert('Account', transformed)
    print("✅ Migration Completed")`
                    }
                }
            ]
        }
    ]
  },
  {
    id: 'module-7',
    title: 'Modern UI Development (LWC)',
    icon: 'monitor',
    lessons: [
        {
            id: 'lwc-basics',
            title: 'Application Form Component',
            duration: '25 min',
            salesforceLink: 'https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-basics',
            content: [
                { type: 'text', content: 'Lightning Web Components (LWC) provide the standard modern interface. Here we build a custom application form that interacts with our Apex backend.' },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'HTML Template (applicationForm.html)',
                        content: [
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'text',
                                    filename: 'applicationForm.html',
                                    code: `<template>
    <lightning-card title="Apply for Credit Card" icon-name="custom:custom14">
        <div class="slds-p-around_medium">
            <!-- Loading Spinner -->
            <template if:true={isLoading}>
                <lightning-spinner alternative-text="Loading" size="medium"></lightning-spinner>
            </template>

            <!-- Input Form -->
            <lightning-record-edit-form object-api-name="Credit_Card_Application__c" onsuccess={handleSuccess} onsubmit={handleSubmit}>
                <lightning-messages></lightning-messages>
                <div class="slds-grid slds-gutters">
                    <div class="slds-col">
                        <lightning-input-field field-name="Applicant__c" value={applicantId}></lightning-input-field>
                        <lightning-input-field field-name="Annual_Income__c"></lightning-input-field>
                    </div>
                    <div class="slds-col">
                        <lightning-input-field field-name="Requested_Card_Product__c"></lightning-input-field>
                        <lightning-input-field field-name="Employment_Status__c"></lightning-input-field>
                    </div>
                </div>
                <div class="slds-m-top_medium slds-align_absolute-center">
                    <lightning-button variant="brand" type="submit" label="Submit Application"></lightning-button>
                </div>
            </lightning-record-edit-form>
        </div>
    </lightning-card>
</template>`
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'JavaScript Controller (applicationForm.js)',
                        content: [
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'javascript',
                                    filename: 'applicationForm.js',
                                    code: `import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ApplicationForm extends LightningElement {
    @api applicantId; // Passed from parent or record page
    isLoading = false;

    handleSubmit(event) {
        event.preventDefault(); // Stop default submit to validate
        const fields = event.detail.fields;
        
        // Custom Client-Side Validation
        if(fields.Annual_Income__c < 10000) {
            this.showToast('Error', 'Income must be at least $10,000', 'error');
            return;
        }
        
        this.isLoading = true;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event) {
        this.isLoading = false;
        const appId = event.detail.id;
        this.showToast('Success', 'Application ' + appId + ' created!', 'success');
        
        // Reset form
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title, message, variant
        }));
    }
}`
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
  },
  {
    id: 'module-8',
    title: 'DevOps & ALM',
    icon: 'settings',
    lessons: [
        {
            id: 'cicd',
            title: 'CI/CD Pipeline',
            duration: '15 min',
            salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm',
            content: [
                { type: 'text', content: 'Modern Salesforce development requires robust ALM (Application Lifecycle Management). We use SFDX and GitHub Actions to automate deployments.' },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'Project Manifest (sfdx-project.json)',
                        content: [
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'json',
                                    filename: 'sfdx-project.json',
                                    code: `{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true,
      "package": "AwesomeBankCreditCards",
      "versionName": "Ver 1.0",
      "versionNumber": "1.0.0.NEXT"
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}`
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'GitHub Action Workflow (deploy.yml)',
                        content: [
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'yaml',
                                    filename: '.github/workflows/deploy.yml',
                                    code: `name: Deploy to Production

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Salesforce CLI
        run: npm install @salesforce/cli --global

      - name: Authenticate using JWT
        run: |
          echo "\${{ secrets.JWT_KEY_FILE }}" > server.key
          sf org login jwt --client-id \${{ secrets.CONSUMER_KEY }} --username \${{ secrets.USERNAME }} --jwt-key-file server.key --set-default --alias prod

      - name: Deploy Source
        run: sf project deploy start --target-org prod --wait 10

      - name: Run All Tests
        run: sf apex run test --target-org prod --test-level RunLocalTests --wait 10`
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
  },
  {
    id: 'module-9',
    title: 'Observability',
    icon: 'monitor',
    lessons: [
        {
            id: 'logging',
            title: 'Enterprise Logging Framework',
            duration: '20 min',
            salesforceLink: 'https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events',
            content: [
                { type: 'text', content: 'Debug logs are transient. For enterprise reliability, we need persistent logs that survive transaction rollbacks. We achieve this using Platform Events.' },
                {
                    type: 'accordion',
                    accordionData: {
                        title: 'Logger Utility Class',
                        content: [
                            {
                                type: 'code',
                                codeSnippet: {
                                    language: 'apex',
                                    filename: 'Logger.cls',
                                    code: `public class Logger {
    // Buffer logs to avoid hitting limits
    private static List<Log_Event__e> logBuffer = new List<Log_Event__e>();

    public static void error(String message, Exception e) {
        logBuffer.add(new Log_Event__e(
            Level__c = 'ERROR',
            Message__c = message,
            Stack_Trace__c = e != null ? e.getStackTraceString() : null,
            User__c = UserInfo.getUserId()
        ));
        publish();
    }

    public static void info(String message) {
        logBuffer.add(new Log_Event__e(
            Level__c = 'INFO',
            Message__c = message,
            User__c = UserInfo.getUserId()
        ));
        publish();
    }

    private static void publish() {
        // Publish immediately - Platform Events persist even if the main transaction fails!
        if (!logBuffer.isEmpty()) {
            EventBus.publish(logBuffer);
            logBuffer.clear();
        }
    }
}`
                                }
                            }
                        ]
                    }
                },
                { type: 'text', content: 'This `Logger` class publishes to a `Log_Event__e` Platform Event. A separate `Async Trigger` on this event then saves the data to a custom `Log__c` object for long-term storage and reporting.' }
            ]
        }
    ]
  }
];