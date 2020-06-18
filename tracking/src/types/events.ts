import {
  AccountReportProperties,
  BotBacktestCompletedProperties,
  BotBacktestStartetProperties,
  BotCodeCreatedProperties,
  BotCreatedProperties,
  BotDeletedProperties,
  BotRuleCreatedProperties,
  BotTemplateLoadedProperties,
  BotTutorialCompletedProperties,
  BotTutorialSkippedProperties,
  BotTutorialStartedProperties,
  ExchangeAccountCreatedProperties,
  ExchangeAccountDeletedProperties,
  InstanceDeployedProperties,
  InstanceStoppedProperties,
  InstanceViewedProperties,
  PageviewProperties,
  SignupCompletedProperties,
  SignupConfirmedProperties,
  SignupInitiatedProperties,
  SubscribeCompletedProperties,
  Time10mProperties,
  Time1mProperties,
  Time3mProperties,
  Time5mProperties,
  TosAgreedProperties,
  VolumeReportProperties,
} from './eventProperties';

export enum EventType {
  AccountReport = 'account_report',
  BotBacktestCompleted = 'bot_backtest_completed',
  BotBacktestStartet = 'bot_backtest_started',
  BotCodeCreated = 'bot_code_created',
  BotCreated = 'bot_created',
  BotDeleted = 'bot_deleted',
  BotRuleCreated = 'bot_rule_created',
  BotTemplateLoaded = 'bot_template_loaded',
  BotTutorialCompleted = 'bot_tutorial_completed',
  BotTutorialSkipped = 'bot_tutorial_skipped',
  BotTutorialStarted = 'bot_tutorial_started',
  ExchangeAccountCreated = 'exchange_account_created',
  ExchangeAccountDeleted = 'exchange_account_deleted',
  InstanceDeployed = 'instance_deployed',
  InstanceStopped = 'instance_stopped',
  InstanceViewed = 'instance_viewed',
  Pageview = 'pageview',
  SignupCompleted = 'signup_completed',
  SignupConfirmed = 'signup_confirmed',
  SignupInitiated = 'signup_initiated',
  SubscribeCompleted = 'subscribe_completed',
  Time10m = 'time_10m',
  Time1m = 'time_1m',
  Time3m = 'time_3m',
  Time5m = 'time_5m',
  TosAgreed = 'tos_agreed',
  VolumeReport = 'volume_report',
}

export type EventProperties = {
  [EventType.AccountReport]: AccountReportProperties;
  [EventType.BotBacktestCompleted]: BotBacktestCompletedProperties;
  [EventType.BotBacktestStartet]: BotBacktestStartetProperties;
  [EventType.BotCodeCreated]: BotCodeCreatedProperties;
  [EventType.BotCreated]: BotCreatedProperties;
  [EventType.BotDeleted]: BotDeletedProperties;
  [EventType.BotRuleCreated]: BotRuleCreatedProperties;
  [EventType.BotTemplateLoaded]: BotTemplateLoadedProperties;
  [EventType.BotTutorialCompleted]: BotTutorialCompletedProperties;
  [EventType.BotTutorialSkipped]: BotTutorialSkippedProperties;
  [EventType.BotTutorialStarted]: BotTutorialStartedProperties;
  [EventType.ExchangeAccountCreated]: ExchangeAccountCreatedProperties;
  [EventType.ExchangeAccountDeleted]: ExchangeAccountDeletedProperties;
  [EventType.InstanceDeployed]: InstanceDeployedProperties;
  [EventType.InstanceStopped]: InstanceStoppedProperties;
  [EventType.InstanceViewed]: InstanceViewedProperties;
  [EventType.Pageview]: PageviewProperties;
  [EventType.SignupCompleted]: SignupCompletedProperties;
  [EventType.SignupConfirmed]: SignupConfirmedProperties;
  [EventType.SignupInitiated]: SignupInitiatedProperties;
  [EventType.SubscribeCompleted]: SubscribeCompletedProperties;
  [EventType.Time10m]: Time10mProperties;
  [EventType.Time1m]: Time1mProperties;
  [EventType.Time3m]: Time3mProperties;
  [EventType.Time5m]: Time5mProperties;
  [EventType.TosAgreed]: TosAgreedProperties;
  [EventType.VolumeReport]: VolumeReportProperties;
};

export interface Event<T, ET extends EventType> {
  key: ET;
  payload: T;
}

type CreateEventFn = <K extends keyof EventProperties>(
  event: K,
  properties: EventProperties[K]
) => Event<EventProperties[K], K>;

export const createEvent: CreateEventFn = (event, payload) => ({
  key: event,
  payload,
});
