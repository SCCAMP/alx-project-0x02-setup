export interface IInterface {
    id: string;
    name: string;
    description?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceDetails extends IInterface {
    details: string;
}
export interface IInterfaceSummary {
    id: string;
    name: string;
}   export interface IInterfaceUpdate {
    name?: string;
    description?: string;
    isActive?: boolean;
}
export interface IInterfaceCreate {
    name: string;
    description?: string;
}  
export interface IInterfaceList {
    interfaces: IInterfaceSummary[];
    totalCount: number;
}
export interface IInterfaceFilter {
    isActive?: boolean;
    createdBefore?: Date;
    createdAfter?: Date;
}
export interface IInterfaceSort {
    field: 'name' | 'createdAt' | 'updatedAt';
    direction: 'asc' | 'desc';
}
export interface IInterfacePagination {
    page: number;
    pageSize: number;
}
export interface IInterfaceQuery {
    filter?: IInterfaceFilter;
    sort?: IInterfaceSort;
    pagination?: IInterfacePagination;
}
export interface IInterfaceResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
export interface IInterfaceError {
    code: number;
    message: string;
    details?: string;
}
export interface IInterfaceStatistics {
    totalInterfaces: number;
    activeInterfaces: number;
    inactiveInterfaces: number;
}
export interface IInterfaceBulkUpdate {
    ids: string[];
    update: IInterfaceUpdate;
}
export interface IInterfaceBulkDelete {
    ids: string[];
}
export interface IInterfaceExportOptions {
    format: 'csv' | 'json' | 'xml';
    includeInactive: boolean;
}
export interface IInterfaceImportOptions {
    format: 'csv' | 'json' | 'xml';
    overwriteExisting: boolean;
}
export interface IInterfaceImportResult {
    importedCount: number;
    skippedCount: number;
    errors: IInterfaceError[];
}
export interface IInterfacePermission {
    canCreate: boolean;
    canRead: boolean;
    canUpdate: boolean;
    canDelete: boolean;
}
export interface IInterfaceAuditLog {
    id: string;
    interfaceId: string;
    action: 'create' | 'update' | 'delete';
    performedBy: string;
    performedAt: Date;
    changes?: string;
}
export interface IInterfaceVersion {
    id: string;
    interfaceId: string;
    versionNumber: number;
    createdAt: Date;
    createdBy: string;
    changes: string;
}
export interface IInterfaceVersionDetails extends IInterfaceVersion {
    interfaceSnapshot: IInterface;
}
export interface IInterfaceVersionList {
    versions: IInterfaceVersion[];
    totalCount: number;
}
export interface IInterfaceSearch { 
    query: string;
    fields?: ('name' | 'description')[];
}
export interface IInterfaceSearchResult {
    results: IInterfaceSummary[];
    totalCount: number;
}
export interface IInterfaceSettings {
    allowPublicAccess: boolean;
    maxInterfacesPerUser: number;
}
export interface IInterfaceNotification {
    id: string;
    interfaceId: string;
    type: 'email' | 'sms' | 'push';
    recipient: string;
    createdAt: Date;
}
export interface IInterfaceNotificationCreate {
    interfaceId: string;
    type: 'email' | 'sms' | 'push';
    recipient: string;
}
export interface IInterfaceNotificationList {
    notifications: IInterfaceNotification[];
    totalCount: number;
}
export interface IInterfaceTag {
    id: string;
    name: string;
    color?: string;
}
export interface IInterfaceTagAssignment {
    interfaceId: string;
    tagId: string;
}
export interface IInterfaceTagList {
    tags: IInterfaceTag[];
    totalCount: number;
}
export interface IInterfaceTagAssignmentList {
    assignments: IInterfaceTagAssignment[];
    totalCount: number;
}
export interface IInterfaceDependency {
    id: string;
    interfaceId: string;
    dependsOnInterfaceId: string;
}
export interface IInterfaceDependencyList {
    dependencies: IInterfaceDependency[];
    totalCount: number;
}
export interface IInterfaceHealthCheck {
    interfaceId: string;
    status: 'healthy' | 'unhealthy' | 'unknown';
    lastCheckedAt: Date;
    details?: string;
}
export interface IInterfaceHealthCheckResult {
    healthChecks: IInterfaceHealthCheck[];
    totalCount: number;
}
export interface IInterfaceIntegration {
    id: string;
    interfaceId: string;
    integrationType: string;
    config: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceIntegrationList {
    integrations: IInterfaceIntegration[];
    totalCount: number;
}
export interface IInterfaceIntegrationCreate {
    interfaceId: string;
    integrationType: string;
    config: string;
}
export interface IInterfaceIntegrationUpdate {
    config?: string;
}
export interface IInterfaceIntegrationDelete {
    id: string;
}
export interface IInterfaceEvent {
    id: string;
    interfaceId: string;
    eventType: string;
    payload: string;
    createdAt: Date;
}
export interface IInterfaceEventList {
    events: IInterfaceEvent[];
    totalCount: number;
}
export interface IInterfaceEventCreate {
    interfaceId: string;
    eventType: string;
    payload: string;
}
export interface IInterfaceEventDelete {
    id: string;
}
export interface IInterfaceLocalization {
    id: string;
    interfaceId: string;
    languageCode: string;
    localizedName: string;
    localizedDescription?: string;
}
export interface IInterfaceLocalizationList {
    localizations: IInterfaceLocalization[];
    totalCount: number;
}
export interface IInterfaceLocalizationCreate {
    interfaceId: string;
    languageCode: string;
    localizedName: string;
    localizedDescription?: string;
}
export interface IInterfaceLocalizationUpdate {
    localizedName?: string;
    localizedDescription?: string;
}
export interface IInterfaceLocalizationDelete {
    id: string;
}
export interface IInterfaceAnalytics {
    interfaceId: string;
    views: number;
    uniqueVisitors: number;
    averageSessionDuration: number; // in seconds
}
export interface IInterfaceAnalyticsResult {
    analytics: IInterfaceAnalytics[];
    totalCount: number;
}
export interface IInterfaceBackup {
    id: string;
    interfaceId: string;
    backupDate: Date;
    data: string;
}
export interface IInterfaceBackupList {
    backups: IInterfaceBackup[];
    totalCount: number;
}
export interface IInterfaceBackupCreate {
    interfaceId: string;
    data: string;
}
export interface IInterfaceBackupDelete {
    id: string;
}
export interface IInterfaceRestore {
    backupId: string;
}
export interface IInterfaceRestoreResult {
    success: boolean;
    message: string;
}
export interface IInterfaceMigration {  
    sourceInterfaceId: string;
    targetInterfaceId: string;
    migrateData: boolean;
}
export interface IInterfaceMigrationResult {
    success: boolean;
    message: string;
}
export interface IInterfaceCompliance {
    interfaceId: string;
    complianceType: string;
    status: 'compliant' | 'non-compliant' | 'unknown';
    lastCheckedAt: Date;
    details?: string;
}
export interface IInterfaceComplianceResult {
    compliances: IInterfaceCompliance[];
    totalCount: number;
}
export interface IInterfaceWorkflow {
    id: string;
    interfaceId: string;
    name: string;
    steps: string[];
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceWorkflowList {
    workflows: IInterfaceWorkflow[];
    totalCount: number;
}
export interface IInterfaceWorkflowCreate {
    interfaceId: string;
    name: string;
    steps: string[];
}
export interface IInterfaceWorkflowUpdate {
    name?: string;
    steps?: string[];
}
export interface IInterfaceWorkflowDelete {
    id: string;
}
export interface IInterfaceNotificationSettings {
    interfaceId: string;
    emailNotifications: boolean;
    smsNotifications: boolean;
    pushNotifications: boolean;
}
export interface IInterfaceNotificationSettingsUpdate {
    emailNotifications?: boolean;
    smsNotifications?: boolean;
    pushNotifications?: boolean;
}
export interface IInterfaceCollaboration {
    id: string;
    interfaceId: string;
    userId: string;
    role: 'viewer' | 'editor' | 'admin';
    addedAt: Date;
}
export interface IInterfaceCollaborationList {
    collaborations: IInterfaceCollaboration[];
    totalCount: number;
}
export interface IInterfaceCollaborationCreate {
    interfaceId: string;
    userId: string;
    role: 'viewer' | 'editor' | 'admin';
}
export interface IInterfaceCollaborationUpdate {
    role?: 'viewer' | 'editor' | 'admin';
}
export interface IInterfaceCollaborationDelete {
    id: string;
}
export interface IInterfaceTemplate {
    id: string;
    name: string;
    description?: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceTemplateList {
    templates: IInterfaceTemplate[];
    totalCount: number;
}
export interface IInterfaceTemplateCreate {
    name: string;
    description?: string;
    content: string;
}
export interface IInterfaceTemplateUpdate {
    name?: string;
    description?: string;
    content?: string;
}
export interface IInterfaceTemplateDelete {
    id: string;
}
export interface IInterfaceTheme {
    id: string;
    name: string;
    description?: string;
    styles: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceThemeList {
    themes: IInterfaceTheme[];
    totalCount: number;
}
export interface IInterfaceThemeCreate {
    name: string;
    description?: string;
    styles: string;
}
export interface IInterfaceThemeUpdate {
    name?: string;
    description?: string;
    styles?: string;
}
export interface IInterfaceThemeDelete {
    id: string;
}
export interface IInterfaceAccessibility {
    interfaceId: string;
    complianceLevel: 'A' | 'AA' | 'AAA';
    lastReviewedAt: Date;
    details?: string;
}
export interface IInterfaceAccessibilityResult {
    accessibilities: IInterfaceAccessibility[];
    totalCount: number;
}
export interface IInterfacePerformance {
    interfaceId: string;
    loadTime: number; // in milliseconds
    responsiveness: number; // in milliseconds
    uptimePercentage: number; // in percentage
}
export interface IInterfacePerformanceResult {
    performances: IInterfacePerformance[];
    totalCount: number;
}
export interface IInterfaceSecurity {
    interfaceId: string;
    vulnerabilitiesFound: number;
    lastScannedAt: Date;
    details?: string;
}
export interface IInterfaceSecurityResult {
    securities: IInterfaceSecurity[];
    totalCount: number;
}
export interface IInterfaceCollaborationPermission {
    canView: boolean;
    canEdit: boolean;
    canManage: boolean;
}
export interface IInterfaceCollaborationPermissionUpdate {
    canView?: boolean;
    canEdit?: boolean;
    canManage?: boolean;
}
export interface IInterfaceFeatureFlag {
    id: string;
    interfaceId: string;
    featureName: string;
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceFeatureFlagList {
    featureFlags: IInterfaceFeatureFlag[];
    totalCount: number;
}
export interface IInterfaceFeatureFlagCreate {
    interfaceId: string;
    featureName: string;
    isEnabled: boolean;
}
export interface IInterfaceFeatureFlagUpdate {
    isEnabled?: boolean;
}
export interface IInterfaceFeatureFlagDelete {
    id: string;
}
export interface IInterfaceDependencyGraph {
    interfaceId: string;
    dependencies: IInterfaceDependencyNode[];
}
export interface IInterfaceDependencyNode {
    id: string;
    name: string;
    children: IInterfaceDependencyNode[];
}
export interface IInterfaceDependencyGraphResult {
    graphs: IInterfaceDependencyGraph[];
    totalCount: number;
}
export interface IInterfaceChangeRequest {  
    id: string;
    interfaceId: string;
    requestedBy: string;
    changeDescription: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceChangeRequestList {
    changeRequests: IInterfaceChangeRequest[];
    totalCount: number;
}
export interface IInterfaceChangeRequestCreate {
    interfaceId: string;
    requestedBy: string;
    changeDescription: string;
}
export interface IInterfaceChangeRequestUpdate {
    status?: 'pending' | 'approved' | 'rejected';
}
export interface IInterfaceChangeRequestDelete {
    id: string;
}
export interface IInterfaceNotificationPreference {     
    interfaceId: string;
    userId: string;
    preferenceType: 'email' | 'sms' | 'push';
    isEnabled: boolean;
}
export interface IInterfaceNotificationPreferenceUpdate {
    isEnabled?: boolean;
}
export interface IInterfaceNotificationPreferenceList {
    preferences: IInterfaceNotificationPreference[];
    totalCount: number;
}
export interface IInterfaceCollaborationActivity {
    id: string;
    interfaceId: string;
    userId: string;
    activityType: string;
    activityDetails: string;
    activityDate: Date;
}
export interface IInterfaceCollaborationActivityList {
    activities: IInterfaceCollaborationActivity[];
    totalCount: number;
}
export interface IInterfaceCollaborationActivityCreate {
    interfaceId: string;
    userId: string;
    activityType: string;
    activityDetails: string;
}
export interface IInterfaceCollaborationActivityDelete {
    id: string;
}
export interface IInterfaceDataRetention {
    interfaceId: string;
    retentionPeriodDays: number;
    lastPurgedAt: Date;
}
export interface IInterfaceDataRetentionUpdate {
    retentionPeriodDays?: number;
}
export interface IInterfaceDataRetentionResult {
    dataRetentions: IInterfaceDataRetention[];
    totalCount: number;
}
export interface IInterfaceSubscription {
    id: string;
    interfaceId: string;
    userId: string;
    subscriptionType: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface IInterfaceSubscriptionList {
    subscriptions: IInterfaceSubscription[];
    totalCount: number;
}
export interface IInterfaceSubscriptionCreate {
    interfaceId: string;
    userId: string;
    subscriptionType: string;
}
export interface IInterfaceSubscriptionUpdate {
    isActive?: boolean;
}
export interface IInterfaceSubscriptionDelete {
    id: string;
}
export interface IInterfaceLocalizationStatistics {
    totalLocalizations: number;
    languagesSupported: string[];
}
export interface IInterfaceLocalizationStatisticsResult {
    statistics: IInterfaceLocalizationStatistics[];
    totalCount: number;
}
export interface IInterfaceThemeStatistics {
    totalThemes: number;
    mostUsedThemeId: string;
}
export interface IInterfaceThemeStatisticsResult {
    statistics: IInterfaceThemeStatistics[];
    totalCount: number;
}
export interface IInterfaceTemplateStatistics {
    totalTemplates: number;
    mostUsedTemplateId: string;
}
export interface IInterfaceTemplateStatisticsResult {
    statistics: IInterfaceTemplateStatistics[];
    totalCount: number;
}
export interface IInterfacePerformanceMetrics {
    interfaceId: string;
    metricName: string;
    metricValue: number;
    recordedAt: Date;
}
export interface IInterfacePerformanceMetricsResult {
    metrics: IInterfacePerformanceMetrics[];
    totalCount: number;
}
export interface IInterfacePerformanceMetricsQuery {
    interfaceId?: string;
    metricName?: string;
    recordedBefore?: Date;
    recordedAfter?: Date;
}
export interface IInterfacePerformanceMetricsFilter {
    metricName?: string;
    minMetricValue?: number;
    maxMetricValue?: number;
}
export interface IInterfacePerformanceMetricsSort {
    field: 'metricValue' | 'recordedAt';
    direction: 'asc' | 'desc';
}
export interface IInterfacePerformanceMetricsPagination {
    page: number;
    pageSize: number;
}
export interface IInterfacePerformanceMetricsQueryOptions {     
    filter?: IInterfacePerformanceMetricsFilter;
    sort?: IInterfacePerformanceMetricsSort;
    pagination?: IInterfacePerformanceMetricsPagination;
}
export interface IInterfacePerformanceMetricsRequest {
    query: IInterfacePerformanceMetricsQuery;
    options?: IInterfacePerformanceMetricsQueryOptions;
}
export interface IInterfacePerformanceMetricsResponse {
    data: IInterfacePerformanceMetricsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceCollaborationStatistics {
    totalCollaborators: number;
    activeCollaborators: number;
    rolesDistribution: { [role: string]: number };
}
export interface IInterfaceCollaborationStatisticsResult {
    statistics: IInterfaceCollaborationStatistics[];
    totalCount: number;
}
export interface IInterfaceCollaborationStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceCollaborationStatisticsRequest {
    query: IInterfaceCollaborationStatisticsQuery;
}
export interface IInterfaceCollaborationStatisticsResponse {
    data: IInterfaceCollaborationStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceSecurityAudit {
    id: string;
    interfaceId: string;
    auditDate: Date;
    vulnerabilitiesFound: number;
    details?: string;
}
export interface IInterfaceSecurityAuditList {
    audits: IInterfaceSecurityAudit[];
    totalCount: number;
}
export interface IInterfaceSecurityAuditCreate {
    interfaceId: string;
    auditDate: Date;
    vulnerabilitiesFound: number;
    details?: string;
}
export interface IInterfaceSecurityAuditDelete {
    id: string;
}
export interface IInterfaceSecurityAuditQuery {
    interfaceId?: string;
    auditedBefore?: Date;
    auditedAfter?: Date;
}
export interface IInterfaceSecurityAuditRequest {
    query: IInterfaceSecurityAuditQuery;
    options?: IInterfacePagination & IInterfaceSort;
}
export interface IInterfaceSecurityAuditResponse {
    data: IInterfaceSecurityAuditList;
    message: string;
    success: boolean;
}
export interface IInterfaceFeatureUsage {
    interfaceId: string;
    featureName: string;
    usageCount: number;
    lastUsedAt: Date;
}
export interface IInterfaceFeatureUsageResult {
    featureUsages: IInterfaceFeatureUsage[];
    totalCount: number;
}
export interface IInterfaceFeatureUsageQuery {  
    interfaceId?: string;
    featureName?: string;
    usedBefore?: Date;
    usedAfter?: Date;
}
export interface IInterfaceFeatureUsageRequest {
    query: IInterfaceFeatureUsageQuery;
    options?: IInterfacePagination & IInterfaceSort;
}
export interface IInterfaceFeatureUsageResponse {
    data: IInterfaceFeatureUsageResult;
    message: string;
    success: boolean;
}
export interface IInterfaceAuditLogQuery {
    interfaceId?: string;
    action?: 'create' | 'update' | 'delete';
    performedBy?: string;
    performedBefore?: Date;
    performedAfter?: Date;
}
export interface IInterfaceAuditLogRequest {
    query: IInterfaceAuditLogQuery;
    options?: IInterfacePagination & IInterfaceSort;
}
export interface IInterfaceAuditLogResponse {
    data: IInterfaceAuditLog[];
    message: string;
    success: boolean;
}
export interface IInterfaceDependencyAnalysis {
    interfaceId: string;
    totalDependencies: number;
    circularDependencies: boolean;
    dependencyTree: IInterfaceDependencyNode;
}
export interface IInterfaceDependencyAnalysisResult {
    analyses: IInterfaceDependencyAnalysis[];
    totalCount: number;
}
export interface IInterfaceDependencyAnalysisQuery {
    interfaceId?: string;
}
export interface IInterfaceDependencyAnalysisRequest {  
    query: IInterfaceDependencyAnalysisQuery;


    options?: IInterfacePagination & IInterfaceSort;
}
export interface IInterfaceDependencyAnalysisResponse {
    data: IInterfaceDependencyAnalysisResult;
    message: string;
    success: boolean;
}
export interface IInterfaceChangeRequestStatistics {
    totalChangeRequests: number;
    approvedChangeRequests: number;
    rejectedChangeRequests: number;
    pendingChangeRequests: number;
}
export interface IInterfaceChangeRequestStatisticsResult {
    statistics: IInterfaceChangeRequestStatistics[];
    totalCount: number;
}
export interface IInterfaceChangeRequestStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceChangeRequestStatisticsRequest {
    query: IInterfaceChangeRequestStatisticsQuery;
}
export interface IInterfaceChangeRequestStatisticsResponse {
    data: IInterfaceChangeRequestStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceBackupStatistics {
    totalBackups: number;
    lastBackupDate: Date;
}
export interface IInterfaceBackupStatisticsResult {
    statistics: IInterfaceBackupStatistics[];
    totalCount: number;
}
export interface IInterfaceBackupStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceBackupStatisticsRequest {
    query: IInterfaceBackupStatisticsQuery;
}
export interface IInterfaceBackupStatisticsResponse {
    data: IInterfaceBackupStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceRestoreStatistics {
    totalRestores: number;
    successfulRestores: number;
    failedRestores: number;
}
export interface IInterfaceRestoreStatisticsResult {
    statistics: IInterfaceRestoreStatistics[];
    totalCount: number;
}
export interface IInterfaceRestoreStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceRestoreStatisticsRequest {   
    query: IInterfaceRestoreStatisticsQuery;
}
export interface IInterfaceRestoreStatisticsResponse {
    data: IInterfaceRestoreStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceMigrationStatistics {
    totalMigrations: number;
    successfulMigrations: number;
    failedMigrations: number;
}
export interface IInterfaceMigrationStatisticsResult {
    statistics: IInterfaceMigrationStatistics[];
    totalCount: number;
}
export interface IInterfaceMigrationStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceMigrationStatisticsRequest {
    query: IInterfaceMigrationStatisticsQuery;
}
export interface IInterfaceMigrationStatisticsResponse {
    data: IInterfaceMigrationStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceComplianceStatistics {
    totalCompliances: number;
    compliantInterfaces: number;
    nonCompliantInterfaces: number;
}
export interface IInterfaceComplianceStatisticsResult {
    statistics: IInterfaceComplianceStatistics[];
    totalCount: number;
}
export interface IInterfaceComplianceStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceComplianceStatisticsRequest {
    query: IInterfaceComplianceStatisticsQuery;
}
export interface IInterfaceComplianceStatisticsResponse {
    data: IInterfaceComplianceStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceWorkflowStatistics {
    totalWorkflows: number;
    activeWorkflows: number;
    inactiveWorkflows: number;
}
export interface IInterfaceWorkflowStatisticsResult {
    statistics: IInterfaceWorkflowStatistics[];
    totalCount: number;
}
export interface IInterfaceWorkflowStatisticsQuery {
    interfaceId?: string;
}
export interface IInterfaceWorkflowStatisticsRequest {
    query: IInterfaceWorkflowStatisticsQuery;
}
export interface IInterfaceWorkflowStatisticsResponse {
    data: IInterfaceWorkflowStatisticsResult;
    message: string;
    success: boolean;
}
export interface IInterfaceNotificationStatistics { 
    totalNotifications: number; 
    emailNotifications: number;
    smsNotifications: number;
    pushNotifications: number;
}
export interface IInterfaceNotificationStatisticsResult {
    statistics: IInterfaceNotificationStatistics[];
    totalCount: number;
}   
export interface IInterfaceNotificationStatisticsQuery {
    interfaceId?: string;
}   
export interface IInterfaceNotificationStatisticsRequest {
    query: IInterfaceNotificationStatisticsQuery;
}
export interface IInterfaceNotificationStatisticsResponse {
    data: IInterfaceNotificationStatisticsResult;
    message: string;
    success: boolean;
}
export interface CardProps {
    title: string;
    content: string;
    footer?: string;
}