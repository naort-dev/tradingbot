export enum EventOrigin {
  WebApp = 1,
  LandingPage = 2,
  Auth = 3,
}

export enum EventStage {
  Live = 'live',
}

export enum SignupOrigins {
  HeaderCta = 'header_cta',
  NavigationBar = 'navbar',
  Footer = 'footer',
  PricingPawn = 'pricing_pawn',
  PricingRook = 'pricing_rook',
  PricingKnight = 'pricing_knight',
  PricingQueen = 'pricing_queen',
}

export interface EventDefaultProperties {
  origin: EventOrigin;
  stage: EventStage;
}

export interface AccountReportProperties {
  total_assets: string;
  total_accounts: number;
  currency: string;
  average_profit: number;
}

export interface BotBacktestCompletedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
}

export interface BotBacktestStartetProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
  scenario: string;
}

export interface BotCodeCreatedProperties {
  quoted: string;
  exchange: string;
}

export interface BotCreatedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
}

export interface BotDeletedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
}

export interface BotRuleCreatedProperties {
  quoted: string;
  exchange: string;
}

export interface BotTemplateLoadedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
}

export interface BotTutorialCompletedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
}

export interface BotTutorialSkippedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
  progress: number;
}

export interface BotTutorialStartedProperties {
  bot_type: string;
  quoted: string;
  exchange: string;
}

export interface ExchangeAccountCreatedProperties {
  account_type: string;
  exchange: string;
}

export interface ExchangeAccountDeletedProperties {
  account_type: string;
  exchange: string;
}

export interface InstanceDeployedProperties {
  account_type: string;
  exchange: string;
}

export interface InstanceStoppedProperties {
  account_type: string;
  exchange: string;
}

export interface InstanceViewedProperties {
  account_type: string;
  exchange: string;
}

export interface PageviewProperties extends EventDefaultProperties {
  location?: string;
}

export interface SignupCompletedProperties {}

export interface SignupConfirmedProperties {}

export interface SignupInitiatedProperties {
  signupOrigin?: SignupOrigins;
}

export interface SubscribeCompletedProperties {}

export interface Time10mProperties {}

export interface Time1mProperties {}

export interface Time3mProperties {}

export interface Time5mProperties {}

export interface TosAgreedProperties {}

export interface VolumeReportProperties {
  total_volume: number;
  total_sell_volume: number;
  total_buy_volume: number;
  total_orders: number;
  total_accounts: number;
  currency: string;
  start: Date;
  end: Date;
}
