export const documentVersion = '1.2'

export const pageOrder = ['privacy', 'terms', 'account-deletion']

export const pageModifiedDates = {
  privacy: '2026-11-13',
  terms: '2026-11-13',
  'account-deletion': '2026-11-13',
}

export const languages = {
  'zh-Hans': { label: '简体中文' },
  'zh-Hant': { label: '繁體中文' },
  en: { label: 'English' },
  ja: { label: '日本語' },
}

export const localizedContent = {
  'zh-Hans': {
    navigation: {
      privacy: '隐私政策',
      terms: '服务条款',
      'account-deletion': '账号删除',
    },
    ui: {
      skip: '跳到正文',
      legal: '法律与隐私',
      primaryNavigation: '法律文档',
      language: '语言',
      effectiveDate: '生效日期：',
      version: '版本',
      onThisPage: '本页内容',
      footer: '移动端法律文档',
      copyLink: '复制链接',
      copied: '已复制',
    },
    pages: {
      privacy: {
        title: '隐私政策',
        effectiveDate: '2026 年 11 月 13 日',
        description: 'AIRI Lite iOS 应用的隐私政策。',
        summary: '本政策说明 AIRI Lite 在提供账号、AI 对话、语音、云同步、购买、可选天气与日历及产品分析功能时如何处理数据。功能是否可用取决于应用版本与您的设置。',
        highlights: [
          { symbol: '○', text: '**产品分析默认关闭**，可随时在应用内开启或关闭。' },
          { symbol: '⌁', text: '**不将聊天正文用于产品分析**，不提供广告追踪。' },
          { symbol: '⌂', text: '**记忆和自定义背景保存在设备本地**，由您管理。' },
        ],
        sections: [
          {
            id: 'support',
            title: "技术支持与用户反馈",
            paragraphs: ["如需 AIRI Lite 使用帮助、报告问题或提出建议，请发送邮件至 support-airi@moeru.ai。请说明 App 版本、使用平台和问题详情；不要发送密码、验证码或银行卡信息。"],
            links: [{ label: 'support-airi@moeru.ai', url: 'mailto:support-airi@moeru.ai' }],
          },
          {
            id: 'scope',
            title: '1. 适用范围',
            paragraphs: [
              '本政策仅适用于 AIRI Lite iOS 应用及其官方移动端服务，不替代 Project AIRI 网站、桌面端或第三方服务各自的隐私政策。',
              '本文中的“我们”指 AIRI Lite 的开发者和为应用提供官方服务的 Project AIRI 维护者。使用第三方服务时，其自身条款和隐私政策也可能适用。',
            ],
          },
          {
            id: 'data',
            title: '2. 我们处理的数据',
            items: [
              '**账号与登录数据：**姓名或显示名称、电子邮件地址、后端用户 ID、登录方式，以及维持登录所需的访问凭据。登录凭据存放在 iOS 钥匙串或受保护的应用存储中。',
              '**AI 功能内容：**经您允许后，您发送的文字、图片、相关对话上下文和选定的记忆会通过加密连接发送至 AIRI 服务及完成请求所需的第三方 AI 服务。联网搜索会向上游搜索服务传送查询内容；语音合成会向语音服务传送待朗读文本。加密传输不表示接收数据的服务无法读取内容。',
              '**购买与权益数据：**商品、交易或收据验证标识、购买和续订状态、有效期、Flux 余额及履约记录。Apple 处理付款；RevenueCat 接收后台用户 ID 与购买、订阅和权益记录，以验证和同步订阅。我们不会获得完整银行卡信息。',
              '**可选产品分析：**开启后会处理应用版本、页面类别、功能操作及结果、功能入口、登录或输入方式、模型或服务类别、性能耗时、消息数量、Flux 余额、所选套餐与购买流程阶段，以及账号或设备分析标识。不会包含聊天正文、提示词、回复正文、姓名、电子邮件、令牌、完整 URL、用户填写的名称或原始错误详情。',
              '**网络与安全信息：**服务器在接收请求时可能处理 IP 地址、请求时间、响应状态和防滥用安全记录。',
              '**设备本地数据：**对话历史、已确认记忆、记忆候选、自定义聊天背景、偏好设置、缓存、日志和临时上下文保存在应用容器内。相关记忆在与当前请求有关时可能作为上下文随聊天请求发送。',
              '**聊天云同步与服务记录：**符合云同步条件的聊天文字和回复会与账号关联并保存在服务端，供同步和恢复会话使用。服务端还保存用户 ID、模型、请求状态、耗时、Token 用量和 Flux 消耗等记录。这些记录独立于可选产品分析，不会随关闭产品分析而停止保存。',
              '**角色与模型云同步：**您开启云同步后，角色名称、设定、提示词、模型引用与相关配置可能与账号关联上传至 AIRI 服务。您主动上传或开启自动上传的导入模型，会以模型文件及必要元数据保存在云端。设备自带模型文件不会因此自动上传。',
            ],
            note: 'AIRI Lite 不请求精确位置，不出售个人数据，也不使用数据进行跨应用广告追踪。',
          },
          {
            id: 'device-features',
            title: '2.1 可选系统功能',
            items: [
              '**语音输入：**您主动录音后，麦克风音频由 Apple 系统的设备端语音识别处理，可能需要从 Apple 下载语言资源；当前语音输入不会把录音上传至 AIRI 或第三方 AI 服务。转写文字先进入输入框，您发送后再按 AI 功能内容处理。语音合成发送的是待朗读文字，与麦克风录音不同。',
              '**天气与位置：**您设置天气时，可授权一次前台大致定位，或手动选择城市。城市搜索和地名解析使用 Apple 地图服务；天气请求从设备直接发送至 MET Norway，包含约取至小数点后两位的坐标，服务方也能看到请求 IP。所选位置保存在本机，不进行后台持续定位，不自动加入聊天或产品分析。',
              '**日历：**只有您连接日历并授权后，应用才通过 EventKit 读取当天尚未结束的日程，用于本机陪伴面板展示。该面板不会把日程标题上传至 AIRI、AI 服务或产品分析，也不会将其持久化；系统日历自身的账号同步由 iOS 管理。',
              '**本地通知：**您允许通知或开启主动联系后，应用可能在系统通知中显示消息文案；文案也可能出现在锁屏。您可在应用及 iOS 通知设置中关闭通知或隐藏预览。主动联系涉及的云端生成仍按本政策的 AI 内容处理规则执行。',
            ],
          },
          {
            id: 'cloud-sync',
            title: '2.2 云同步与本地副本',
            paragraphs: [
              '角色云同步和新导入模型的自动上传使用各自的开关。关闭同步会停止新的同步任务，但不会自动删除此前上传的内容；从本机移除模型或卸载应用也不会自动删除云端副本。请使用对应的云端删除入口，或联系支持申请处理。',
              '角色与模型同步、聊天同步、AI 内容处理许可及产品分析是不同控制项。关闭产品分析不会停止您已开启的云同步、必要的购买验证或服务记录。',
            ],
          },
          {
            id: 'analytics',
            title: '3. 产品分析',
            paragraphs: [
              '正式版本的产品分析**默认关闭**。只有当您在“设置 → 数据与隐私”明确开启后，应用才会创建并发送白名单事件。关闭后会立即停止新的分析传输，并清理应用在本机保存的 PostHog 分析状态。',
              '我们不会截取屏幕图像，并关闭了 SDK 的自动页面采集、元素自动采集、会话回放、调查和广告用途。开启后仅发送白名单事件，包括页面类别、主要功能操作、性能和购买流程事件，用于发现故障、衡量性能，以及改进账号与登录、启动、聊天、语音、模型与个性化设置、记忆和购买流程。',
            ],
          },
          {
            id: 'purpose',
            title: '4. 使用目的',
            items: [
              '创建和维护账号，验证登录并提供跨会话服务。',
              '生成 AI 回复、语音和其他由您主动请求的功能。',
              '处理购买、验证权益、维护 Flux 余额并防止欺诈。',
              '在您同意时分析产品使用情况和性能。',
              '保护服务安全、排查问题并履行法律义务。',
              '按您开启的设置同步角色与模型，并提供天气、本机日历展示和本地通知。',
            ],
          },
          {
            id: 'sharing',
            title: '5. 服务提供商与共享',
            paragraphs: [
              '我们只在提供功能、保障安全或履行法律义务所必需的范围内向服务提供商传输数据。这些服务商可能包括 Apple（登录、应用分发与应用内购买）、AIRI 官方后端、第三方 AI 与语音服务提供商，以及仅在您开启分析时使用的 PostHog。',
              '当前默认聊天请求通过 OpenRouter，默认语音合成通过 StepFun；其他可用路由还可能使用 Amazon Bedrock、阿里云或其他语音服务。具体服务取决于所选功能及路由配置。第三方可能按其政策和账号设置保留输入、图片、查询或输出；我们不承诺所有请求都采用零数据保留。',
              '我们要求所有可访问用户数据的第三方提供与本政策及 Apple 要求相同或同等水平的数据保护。',
              '我们不会出售或出租个人数据。除非法律要求、保护用户或服务安全，或在业务承接且继续受本政策约束的情况下，我们不会向其他方披露个人数据。',
              'RevenueCat 用于订阅验证、权益同步、恢复购买及订阅运营。应用以 AIRI 后台用户 ID 识别订阅账号，并向其提供购买和权益信息。这项必要的订阅处理独立于可选的 PostHog 产品分析开关。',
              '启用天气时，Apple 地图服务处理城市查询或近似坐标，MET Norway 处理天气请求中的近似坐标与 IP。MET Norway 的服务日志可能保存在挪威；详情见其官方条款和隐私说明。',
              'AI 内容的保留和是否用于模型训练取决于实际路由、下游模型提供商、适用协议及部署设置。我们不在此承诺所有第三方均零保留或均不训练；如需确认某个模型的处理方式，请在发送敏感内容前联系支持。',
            ],
            links: [
              { label: 'Apple 隐私政策', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog 隐私政策', url: 'https://posthog.com/privacy' },
              { label: 'RevenueCat 隐私政策', url: 'https://www.revenuecat.com/privacy/' },
              { label: 'OpenRouter 隐私政策', url: 'https://openrouter.ai/privacy' },
              { label: 'MET Norway 服务与隐私说明', url: 'https://api.met.no/doc/TermsOfService' },
            ],
          },
          {
            id: 'retention',
            title: '6. 保存期限',
            paragraphs: [
              '您可使用应用内功能清理本地数据、删除云端会话或发起账号删除。删除本地副本或卸载应用不会自动删除云端内容。',
              '账号删除后，部分历史聊天内容及备份仍可能保留。交易、用量、诊断和安全记录可能因履约、退款、排错、防欺诈或法定义务继续保留。第三方持有的数据按其隐私政策及设置处理。',
              '角色卡和上传模型需通过相应的云端管理功能处理；关闭同步不会自动删除已上传内容。有关数据保存或删除的问题，请联系 support-airi@moeru.ai。',
            ],
          },
          {
            id: 'choices',
            title: '7. 您的选择与权利',
            items: [
              '在“设置 → 数据与隐私”允许或拒绝 AI 服务处理聊天内容；关闭后，应用会停止向 AIRI 官方服务及第三方 AI 与语音服务提供商发送新的聊天或试听内容。',
              '在“设置 → 数据与隐私”开启或关闭产品分析。',
              '在应用内查看、编辑、取消置顶或删除本地记忆，并可清除自定义聊天背景。',
              '通过 iOS 设置管理照片、麦克风、位置、日历和通知权限；天气可改用手动选择城市。您也可以关闭角色云同步和新导入模型自动上传。',
              '在应用内发起账号删除；您也可以依法请求访问、更正或删除相关个人数据。',
            ],
          },
          {
            id: 'security',
            title: '8. 安全与跨境处理',
            paragraphs: [
              '我们使用 HTTPS、iOS 钥匙串、最小化采集和访问控制等措施保护数据。但任何互联网传输或存储方式都无法保证绝对安全。',
              'AIRI 服务及其服务提供商可能在您所在国家或地区以外处理数据。我们会在适用法律要求的范围内采取合理保护措施。',
            ],
          },
          {
            id: 'children',
            title: '9. 未成年人',
            paragraphs: [
              'AIRI Lite 不以低于所在地区数字同意最低年龄的儿童为目标。若您认为未成年人在未经适当同意的情况下向我们提供了个人数据，请通过下方联系方式告知我们。',
            ],
          },
          {
            id: 'changes-contact',
            title: '10. 变更与联系',
            paragraphs: [
              '当应用功能或法律要求发生变化时，我们可能更新本政策，并在本页标注新的生效日期。重大变更会通过适当方式另行提示。',
              '账号删除可直接在应用内操作。有关个人信息访问、更正、删除或其他隐私问题，请联系 support-airi@moeru.ai。请勿发送密码或验证码，也不要在公开 GitHub Issue 中提供个人数据。',
            ],
            links: [
              { label: 'AIRI Lite 隐私仓库', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: '服务条款',
        effectiveDate: '2026 年 11 月 13 日',
        description: 'AIRI Lite iOS 应用的服务条款。',
        summary: '这些条款约定您使用 AIRI Lite 账号、AI 对话、语音、购买和其他移动端功能时的基本规则。',
        sections: [
          {
            id: 'acceptance',
            title: '1. 接受条款',
            paragraphs: [
              '下载、访问或使用 AIRI Lite 即表示您同意本条款和隐私政策。如果您不同意，请停止使用应用。',
              'AIRI Lite 仍在持续开发中，TestFlight 或测试版本可能不稳定、功能变化或停止提供，不应依赖其完成关键任务。',
            ],
          },
          {
            id: 'accounts',
            title: '2. 账号与资格',
            items: [
              '您必须达到所在地区使用本服务所需的最低年龄，并有权同意本条款。',
              '您应提供准确的账号信息，保护登录凭据，并对账号下的活动负责。',
              '发现未经授权使用时，请立即退出其他会话、更新凭据并联系我们。',
            ],
          },
          {
            id: 'ai',
            title: '3. AI 内容与限制',
            paragraphs: [
              'AIRI Lite 使用生成式 AI。输出可能不准确、不完整、令人不适或与您的预期不符，也不代表开发者或贡献者的观点。请在依赖输出前自行核实。',
              '本服务不提供医疗、法律、财务或其他专业建议，也不用于紧急情况、高风险控制或可能造成人身和财产损害的决策。',
            ],
          },
          {
            id: 'conduct',
            title: '4. 可接受使用',
            items: [
              '不得利用服务违法、侵权、骚扰、欺骗、伤害他人或制作、传播非法内容。',
              '不得绕过访问控制、滥用额度、自动化攻击、干扰服务、逆向获取他人凭据或探测未授权数据。',
              '不得冒充他人或声称 AI 输出由真实人物制作。',
              '您应确保提交的内容和使用方式拥有必要权利并符合适用法律。',
            ],
          },
          {
            id: 'content',
            title: '5. 您的内容',
            paragraphs: [
              '您保留对自己提交内容的权利。为提供您请求或开启的功能，您授予我们有限、非独占的许可，用于传输、存储、同步、展示、处理该内容并生成对应结果；许可范围限于提供这些功能所需的程度。您可停止新的处理并请求删除，已有副本的保留与删除按隐私政策处理。',
              '不要提交您无权处理的高度敏感、机密或受限制信息。您负责在分享或使用输出前进行审查。',
              '上传角色卡或模型前，请确认素材许可允许相应的云端存储、同步和展示。上传不会转移您的所有权，也不会使私有素材自动成为公开授权内容。素材附带的第三方许可证继续适用。',
            ],
          },
          {
            id: 'purchases',
            title: '6. 购买、Flux 与退款',
            paragraphs: [
              '应用内购买由 Apple 的 StoreKit 和您的 App Store 账号处理。价格、税费、退款和付款方式受 Apple 规则及购买界面显示的信息约束。',
              'Flux 是用于支持该账号余额的 AIRI 官方功能的按量使用额度，具体适用范围以相关产品说明为准；它不是货币，不可兑换现金或转让。通过 App 内购买获得的 Flux 不因时间经过或取消订阅而自动到期，与定期刷新的 Capacitor 订阅额度分开记录。',
              '退款可通过 Apple 的问题报告入口申请，由 Apple 按适用规则决定。取消订阅不等于申请退款；未到账或恢复中的交易请先使用同步或恢复入口，或联系支持，不必为同一笔权益重复购买。法律及 Apple 规则保障的消费者权利不受本条款限制。',
            ],
            links: [
              { label: 'Apple 媒体服务条款', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'subscriptions',
            title: '6.1 Capacitor 自动续订订阅',
            items: [
              '当前通过 App Store 提供的 Capacitor 套餐为按月自动续订订阅。套餐名称、所含服务、完整周期价格、币种与周期以购买页面及 Apple 确认界面为准。',
              '购买确认后将向您的 Apple 账号扣款。除非您按 Apple 要求在当前周期结束前及时取消，订阅会自动续订；通常需至少提前 24 小时取消，续费可能在到期前 24 小时内扣款。',
              '您可通过应用内“管理订阅”或 Apple 订阅管理页面取消。取消后通常可使用至已付周期结束，卸载应用或删除 AIRI 账号不会自动取消订阅。其他渠道购买的订阅需在原购买渠道管理。',
              'Capacitor 提供有效订阅内的使用额度，并非无限用量或可提现余额。额度在套餐规定的窗口刷新至上限，未用部分不额外累加；配额、下一次刷新时间及有效期以所购套餐和应用显示为准，不能将订阅额度转换成已购 Flux。',
              '有效订阅内先使用 Capacitor 额度。您开启“Capacitor 放空后使用 Flux”后，额度用尽可继续扣减已有 Flux；关闭后，有效订阅额度耗尽时需等待刷新，不会继续扣 Flux。此开关不会自动购买新的 Flux。订阅到期后的按量使用取决于已有 Flux 余额。',
              '升级、降级、生效时间和费用调整以 Apple 确认界面为准。恢复购买用于同步已有订阅权益，不会重新发放已经消耗的 Flux。',
            ],
            links: [
              {
                label: 'Apple 管理订阅',
                url: 'https://apps.apple.com/account/subscriptions',
              },
              {
                label: 'Apple 申请退款',
                url: 'https://reportaproblem.apple.com/',
              },
            ],
          },
          {
            id: 'eula',
            title: '6.2 iOS 应用许可（EULA）',
            paragraphs: [
              '通过 App Store 获得的应用，其软件使用许可适用 Apple 标准最终用户许可协议（EULA），除非我们在适用商店另行提供了自定义 EULA。本页约定 AIRI 官方服务的使用规则，适用的软件许可与开源许可证继续有效。',
            ],
            links: [
              {
                label: 'Apple 标准 EULA',
                url: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
              },
            ],
          },
          {
            id: 'third-party',
            title: '7. 第三方与开源组件',
            paragraphs: [
              '应用可能依赖 Apple、RevenueCat、AI 与语音提供商、PostHog，以及可选天气功能使用的 MET Norway。其服务可能适用各自的条款，我们不控制其持续可用性；具体数据去向见隐私政策。',
              'AIRI Lite 包含开源软件。相应开源许可证继续适用于这些组件；本条款不会限制许可证已授予您的权利。',
            ],
          },
          {
            id: 'availability',
            title: '8. 可用性、变更与终止',
            paragraphs: [
              '我们可能维护、修改、限制或停止某项功能，也可能为安全、违法或严重违反条款的行为暂停访问。我们会在合理可行时提供通知。',
              '您可以随时停止使用并在应用内申请删除账号。删除账号不会自动撤销已经完成的 App Store 交易或 Apple 管理的订阅。',
            ],
          },
          {
            id: 'disclaimer',
            title: '9. 免责声明与责任限制',
            paragraphs: [
              '在适用法律允许的最大范围内，服务按“现状”和“可用”提供，不作关于持续可用、无错误或适合特定目的的保证。',
              '在适用法律允许的最大范围内，我们不对间接、附带、特殊、后果性损失或数据、利润损失负责。本条不会排除法律不得排除的消费者权利或责任。',
            ],
          },
          {
            id: 'changes',
            title: '10. 条款变更与联系',
            paragraphs: [
              '我们可能更新本条款并修改生效日期。重大变更生效前会以合理方式提示；继续使用即表示接受更新后的条款。',
              '有关条款、账号、购买或隐私的问题，请联系 support-airi@moeru.ai。文档纠错也可通过本页底部的 GitHub 仓库反馈；请勿在公开 Issue 中提交个人数据。',
            ],
          },
        ],
      },
      'account-deletion': {
        title: '账号删除',
        effectiveDate: '2026 年 11 月 13 日',
        description: '如何删除 AIRI Lite 账号和关联数据。',
        summary: '您可以直接在 AIRI Lite 内发起账号删除，无需访问主站或联系客服。',
        highlights: [
          { symbol: '1', text: '**在应用内发起**，入口位于“设置 → 账号”。' },
          { symbol: '2', text: '**确认后删除**，无需邮件确认；如提示验证身份，请按应用内指引完成。' },
          { symbol: '3', text: '**不可撤销**，完成后需创建新账号才能再次使用。' },
        ],
        sections: [
          {
            id: 'steps',
            title: '删除步骤',
            steps: [
              '登录 **AIRI Lite** 并打开 **设置**：可使用舞台页的设置按钮，或角色页的“应用设置”入口。',
              '轻点设置顶部的账号资料，进入 **账号** 页面。',
              '向下滚动，轻点“退出登录”下方的 **删除账号**。阅读提示并输入要求的确认内容（邮箱账号需再次输入账号邮箱），然后轻点 **永久删除**。',
              '如提示验证身份，请按应用内指引完成密码验证或第三方重新认证。删除成功后，应用显示“账号已删除”并返回登录页面；此流程无需点击邮件链接。',
            ],
          },
          {
            id: 'deleted',
            title: '会删除什么',
            items: [
              '账号删除流程处理账号资料、登录关联及相关云端资源，包括角色卡和上传模型。',
              '部分历史聊天、交易、用量、诊断记录及备份可能继续保留，详情请参阅隐私政策。',
              '可归属于账号的产品分析身份会停止继续关联；分析偏好可在删除前随时关闭。',
              '关闭同步、移除本地副本或卸载应用不会自动删除云端内容。',
            ],
            note: '如需了解删除范围或行使个人信息权利，请联系 support-airi@moeru.ai；请勿发送密码或验证码。',
          },
          {
            id: 'local',
            title: '设备本地数据',
            paragraphs: [
              '账号删除主要处理服务端账号数据。若要一并移除对话历史、记忆、自定义聊天背景、缓存和其他设备本地数据，请使用应用内相应清理功能或从设备卸载 AIRI Lite。',
            ],
          },
          {
            id: 'before',
            title: '删除前请注意',
            items: [
              '账号删除不可撤销。',
              '未使用的 Flux 或其他数字权益可能随账号删除而失效。',
              '账号删除不会自动向 Apple 申请退款，也不会自动取消由 Apple 管理的订阅。',
              '如有待处理的购买或退款，请先保留必要的 Apple 交易凭证。',
              '如不希望继续续费，请自行通过 Apple 的订阅管理页面取消自动续订；取消订阅与删除 AIRI 账号是不同操作。',
            ],
            links: [
              { label: 'Apple 管理订阅', url: 'https://apps.apple.com/account/subscriptions' },
            ],
          },
          {
            id: 'help',
            title: '无法登录或需要帮助',
            paragraphs: [
              '账号删除可直接在应用内操作。有关个人信息访问、更正、删除或其他隐私问题，请联系 support-airi@moeru.ai。请勿发送密码或验证码，也不要在公开 GitHub Issue 中提供个人数据。',
            ],
            links: [
              { label: '打开支持仓库', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
    },
  },

  'zh-Hant': {
    navigation: {
      privacy: '隱私權政策',
      terms: '服務條款',
      'account-deletion': '帳號刪除',
    },
    ui: {
      skip: '跳至正文',
      legal: '法律與隱私',
      primaryNavigation: '法律文件',
      language: '語言',
      effectiveDate: '生效日期：',
      version: '版本',
      onThisPage: '本頁內容',
      footer: '行動版法律文件',
      copyLink: '複製連結',
      copied: '已複製',
    },
    pages: {
      privacy: {
        title: '隱私權政策',
        effectiveDate: '2026 年 11 月 13 日',
        description: 'AIRI Lite iOS 應用程式的隱私權政策。',
        summary: '本政策說明 AIRI Lite 在提供帳號、AI 對話、語音、雲端同步、購買、選用天氣與行事曆及產品分析功能時如何處理資料。功能是否可用取決於應用程式版本與您的設定。',
        highlights: [
          { symbol: '○', text: '**產品分析預設關閉**，可隨時在應用程式內開啟或關閉。' },
          { symbol: '⌁', text: '**不將聊天正文用於產品分析**，不提供廣告追蹤。' },
          { symbol: '⌂', text: '**記憶與自訂背景保存在裝置本機**，由您管理。' },
        ],
        sections: [
          {
            id: 'support',
            title: "技術支援與使用者回饋",
            paragraphs: ["如需 AIRI Lite 使用協助、回報問題或提出建議，請寄信至 support-airi@moeru.ai。請註明 App 版本、使用平台及問題詳情；請勿傳送密碼、驗證碼或銀行卡資訊。"],
            links: [{ label: 'support-airi@moeru.ai', url: 'mailto:support-airi@moeru.ai' }],
          },
          {
            id: 'scope',
            title: '1. 適用範圍',
            paragraphs: [
              '本政策僅適用於 AIRI Lite iOS 應用程式及其官方行動服務，不取代 Project AIRI 網站、桌面版或第三方服務各自的隱私權政策。',
              '本文中的「我們」指 AIRI Lite 的開發者及為應用程式提供官方服務的 Project AIRI 維護者。使用第三方服務時，其自身條款與隱私權政策亦可能適用。',
            ],
          },
          {
            id: 'data',
            title: '2. 我們處理的資料',
            items: [
              '**帳號與登入資料：**姓名或顯示名稱、電子郵件地址、後端使用者 ID、登入方式，以及維持登入所需的存取憑證。登入憑證存放於 iOS 鑰匙圈或受保護的應用程式儲存空間。',
              '**AI 功能內容：**經您允許後，您傳送的文字、圖片、相關對話內容與選定記憶會透過加密連線傳送至 AIRI 服務及完成請求所需的第三方 AI 服務。網路搜尋會向上游搜尋服務傳送查詢內容；語音合成會向語音服務傳送待朗讀文字。加密傳輸不表示接收資料的服務無法讀取內容。',
              '**購買與權益資料：**商品、交易或收據驗證識別碼、購買與續訂狀態、有效期、Flux 餘額及履約紀錄。Apple 處理付款；RevenueCat 接收後端使用者 ID 與購買、訂閱及權益紀錄，以驗證及同步訂閱。我們不會取得完整信用卡資料。',
              '**選用產品分析：**開啟後會處理應用程式版本、頁面類別、功能操作及結果、功能入口、登入或輸入方式、模型或服務類別、效能耗時、訊息數量、Flux 餘額、所選方案與購買流程階段，以及帳號或裝置分析識別碼。不包含聊天正文、提示詞、回覆正文、姓名、電子郵件、權杖、完整 URL、使用者填寫的名稱或原始錯誤詳情。',
              '**網路與安全資訊：**伺服器接收請求時可能處理 IP 位址、請求時間、回應狀態及防濫用安全紀錄。',
              '**裝置本機資料：**對話紀錄、已確認記憶、記憶候選、自訂聊天背景、偏好設定、快取、記錄及暫時內容保存在應用程式容器。相關記憶在與目前請求有關時，可能作為內容隨聊天請求傳送。',
              '**聊天雲端同步與服務紀錄：**符合雲端同步條件的聊天文字與回覆會與帳號關聯並儲存在伺服器，以供同步和恢復對話。伺服器亦保存使用者 ID、模型、請求狀態、耗時、Token 用量與 Flux 消耗等紀錄。這些紀錄獨立於選用的產品分析，不會因關閉產品分析而停止保存。',
              '**角色與模型雲端同步：**您開啟同步後，角色名稱、設定、提示詞、模型參照與相關設定可能與帳號關聯並上傳至 AIRI 服務。您主動上傳或開啟自動上傳的匯入模型，會以模型檔案與必要中繼資料保存在雲端。裝置內建的模型檔案不會因此自動上傳。',
            ],
            note: 'AIRI Lite 不要求精確位置、不出售個人資料，也不使用資料進行跨應用程式廣告追蹤。',
          },
          {
            id: 'device-features',
            title: '2.1 選用系統功能',
            items: [
              '**語音輸入：**您主動錄音後，麥克風音訊由 Apple 系統的裝置端語音辨識處理，可能需要從 Apple 下載語言資源；目前語音輸入不會將錄音上傳至 AIRI 或第三方 AI 服務。轉寫文字會先進入可編輯的輸入框，送出後才依 AI 功能內容處理。語音合成傳送的是待朗讀文字，與麥克風錄音不同。',
              '**天氣與位置：**設定天氣時，您可授權單次前景大致定位，或手動選擇城市。城市搜尋與地名解析使用 Apple 地圖服務；天氣請求由裝置直接傳送至 MET Norway，包含約取至小數點後兩位的座標，服務方亦能看到請求 IP。所選位置保存在本機，不進行背景持續定位，也不會自動加入聊天或產品分析。',
              '**行事曆：**只有您連接行事曆並授權後，應用程式才透過 EventKit 讀取當天尚未結束的行程，供本機陪伴面板顯示。該面板不會將行程標題上傳至 AIRI、AI 服務或產品分析，也不會持久保存；系統行事曆本身的帳號同步由 iOS 管理。',
              '**本機通知：**您允許通知或開啟主動聯絡後，應用程式可能在系統通知中顯示訊息文字，亦可能出現在鎖定畫面。您可在應用程式及 iOS 通知設定中關閉通知或隱藏預覽。主動聯絡涉及的雲端生成仍依本政策的 AI 內容處理規則執行。',
            ],
          },
          {
            id: 'cloud-sync',
            title: '2.2 雲端同步與本機副本',
            paragraphs: [
              '角色雲端同步與新匯入模型的自動上傳使用各自的開關。關閉同步會停止新的同步工作，但不會自動刪除先前上傳的內容；從本機移除模型或解除安裝亦不會自動刪除雲端副本。請使用對應的雲端刪除入口，或聯絡支援申請處理。',
              '角色與模型同步、聊天同步、AI 內容處理許可及產品分析是不同控制項。關閉產品分析不會停止您已開啟的雲端同步、必要的購買驗證或服務紀錄。',
            ],
          },
          {
            id: 'analytics',
            title: '3. 產品分析',
            paragraphs: [
              '正式版本的產品分析**預設關閉**。只有當您在「設定 → 資料與隱私」明確開啟後，應用程式才會建立並傳送白名單事件。關閉後會立即停止新的分析傳輸，並清除應用程式在本機儲存的 PostHog 分析狀態。',
              '我們不會擷取螢幕影像，並已關閉 SDK 的自動頁面收集、元素自動收集、工作階段重播、問卷及廣告用途。開啟後僅傳送白名單事件，包括頁面類別、主要功能操作、效能及購買流程事件，用於發現故障、衡量效能，以及改善帳號與登入、啟動、聊天、語音、模型與個人化設定、記憶及購買流程。',
            ],
          },
          {
            id: 'purpose',
            title: '4. 使用目的',
            items: [
              '建立及維護帳號、驗證登入並提供跨工作階段服務。',
              '產生 AI 回覆、語音及其他由您主動要求的功能。',
              '處理購買、驗證權益、維護 Flux 餘額並防止詐騙。',
              '在您同意時分析產品使用情況與效能。',
              '保護服務安全、排除問題並履行法律義務。',
              '依您開啟的設定同步角色與模型，並提供天氣、本機行事曆顯示及本機通知。',
            ],
          },
          {
            id: 'sharing',
            title: '5. 服務供應商與分享',
            paragraphs: [
              '我們僅在提供功能、確保安全或履行法律義務所需的範圍內，向服務供應商傳輸資料。這些供應商可能包括 Apple（登入、應用程式發佈與 App 內購買）、AIRI 官方後端、第三方 AI 與語音服務供應商，以及僅在您開啟分析時使用的 PostHog。',
              '目前預設聊天請求經由 OpenRouter，預設語音合成經由 StepFun；其他可用路由亦可能使用 Amazon Bedrock、阿里雲或其他語音服務。實際服務取決於所選功能與路由設定。第三方可能依其政策和帳號設定保留輸入、圖片、查詢或輸出；我們不承諾所有請求均採零資料保留。',
              '我們要求所有可存取使用者資料的第三方，提供與本政策及 Apple 要求相同或同等程度的資料保護。',
              '我們不會出售或出租個人資料。除非法律要求、為保護使用者或服務安全，或在業務承接且持續受本政策約束的情況下，我們不會向其他方揭露個人資料。',
              'RevenueCat 用於訂閱驗證、權益同步、恢復購買及訂閱營運。應用程式以 AIRI 後端使用者 ID 識別訂閱帳號，並向其提供購買及權益資訊。這項必要的訂閱處理獨立於選用的 PostHog 產品分析開關。',
              '啟用天氣時，Apple 地圖服務處理城市查詢或近似座標，MET Norway 處理天氣請求中的近似座標與 IP。MET Norway 的服務記錄可能保存在挪威；詳情見其官方條款及隱私說明。',
              'AI 內容的保存及是否用於模型訓練取決於實際路由、下游模型供應商、適用協議及部署設定。我們不在此承諾所有第三方均零保留或均不用於訓練；如需確認特定模型的處理方式，請在傳送敏感內容前聯絡支援。',
            ],
            links: [
              { label: 'Apple 隱私權政策', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog 隱私權政策', url: 'https://posthog.com/privacy' },
              { label: 'RevenueCat 隱私權政策', url: 'https://www.revenuecat.com/privacy/' },
              { label: 'OpenRouter 隱私權政策', url: 'https://openrouter.ai/privacy' },
              { label: 'MET Norway 服務與隱私說明', url: 'https://api.met.no/doc/TermsOfService' },
            ],
          },
          {
            id: 'retention',
            title: '6. 保存期限',
            paragraphs: [
              '您可使用應用程式內功能清理本機資料、刪除雲端對話或提出帳號刪除。刪除本機副本或解除安裝不會自動刪除雲端內容。',
              '帳號刪除後，部分歷史對話內容及備份仍可能保留。交易、用量、診斷及安全紀錄可能因履約、退款、除錯、防詐騙或法定義務繼續保留。第三方持有的資料依其隱私權政策及設定處理。',
              '角色卡及上傳模型需透過相應的雲端管理功能處理；關閉同步不會自動刪除已上傳內容。有關資料保存或刪除的問題，請聯絡 support-airi@moeru.ai。',
            ],
          },
          {
            id: 'choices',
            title: '7. 您的選擇與權利',
            items: [
              '在「設定 → 資料與隱私」允許或拒絕 AI 服務處理聊天內容；關閉後，應用程式會停止向 AIRI 官方服務及第三方 AI 與語音服務供應商傳送新的聊天或試聽內容。',
              '在「設定 → 資料與隱私」開啟或關閉產品分析。',
              '在應用程式內檢視、編輯、取消置頂或刪除本機記憶，並可清除自訂聊天背景。',
              '透過 iOS 設定管理照片、麥克風、位置、行事曆及通知權限；天氣可改用手動選擇城市。您亦可關閉角色雲端同步與新匯入模型自動上傳。',
              '在應用程式內提出帳號刪除；您亦可依法要求存取、更正或刪除相關個人資料。',
            ],
          },
          {
            id: 'security',
            title: '8. 安全與跨境處理',
            paragraphs: [
              '我們採用 HTTPS、iOS 鑰匙圈、最小化收集與存取控制等措施保護資料。但任何網路傳輸或儲存方式都無法保證絕對安全。',
              'AIRI 服務及其服務供應商可能在您所在國家或地區以外處理資料。我們會在適用法律要求的範圍內採取合理保護措施。',
            ],
          },
          {
            id: 'children',
            title: '9. 未成年人',
            paragraphs: [
              'AIRI Lite 並非以低於所在地區數位同意最低年齡的兒童為對象。若您認為未成年人未經適當同意便向我們提供個人資料，請透過下方聯絡方式告知。',
            ],
          },
          {
            id: 'changes-contact',
            title: '10. 變更與聯絡',
            paragraphs: [
              '當應用程式功能或法律要求改變時，我們可能更新本政策，並在本頁標示新的生效日期。重大變更會以適當方式另行提示。',
              '帳號刪除可直接在應用程式內操作。有關個人資料存取、更正、刪除或其他隱私問題，請聯絡 support-airi@moeru.ai。請勿傳送密碼或驗證碼，也不要在公開 GitHub Issue 中提供個人資料。',
            ],
            links: [
              { label: 'AIRI Lite 隱私儲存庫', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: '服務條款',
        effectiveDate: '2026 年 11 月 13 日',
        description: 'AIRI Lite iOS 應用程式的服務條款。',
        summary: '本條款規範您使用 AIRI Lite 帳號、AI 對話、語音、購買及其他行動功能時的基本規則。',
        sections: [
          {
            id: 'acceptance',
            title: '1. 接受條款',
            paragraphs: [
              '下載、存取或使用 AIRI Lite，即表示您同意本條款及隱私權政策。若您不同意，請停止使用應用程式。',
              'AIRI Lite 仍持續開發中。TestFlight 或測試版本可能不穩定、功能變更或停止提供，不應依賴其完成關鍵任務。',
            ],
          },
          {
            id: 'accounts',
            title: '2. 帳號與資格',
            items: [
              '您必須達到所在地區使用本服務所需的最低年齡，並有權同意本條款。',
              '您應提供正確的帳號資料、保護登入憑證，並對帳號下的活動負責。',
              '若發現未經授權使用，請立即登出其他工作階段、更新憑證並聯絡我們。',
            ],
          },
          {
            id: 'ai',
            title: '3. AI 內容與限制',
            paragraphs: [
              'AIRI Lite 使用生成式 AI。輸出可能不準確、不完整、令人不適或不符合預期，亦不代表開發者或貢獻者的觀點。依賴輸出前請自行查證。',
              '本服務不提供醫療、法律、財務或其他專業建議，也不得用於緊急情況、高風險控制或可能造成人身與財產損害的決策。',
            ],
          },
          {
            id: 'conduct',
            title: '4. 可接受使用',
            items: [
              '不得利用服務從事違法、侵權、騷擾、欺騙、傷害他人或製作、傳播非法內容。',
              '不得繞過存取控制、濫用額度、自動化攻擊、干擾服務、反向取得他人憑證或探測未授權資料。',
              '不得冒充他人或聲稱 AI 輸出由真實人物製作。',
              '您應確保提交的內容與使用方式具備必要權利並符合適用法律。',
            ],
          },
          {
            id: 'content',
            title: '5. 您的內容',
            paragraphs: [
              '您保留對自己提交內容的權利。為提供您要求或開啟的功能，您授予我們有限、非專屬的許可，用於傳輸、儲存、同步、顯示、處理該內容及產生對應結果；許可範圍限於提供這些功能所需的程度。您可停止新的處理並申請刪除，既有副本的保留及刪除依隱私權政策處理。',
              '請勿提交您無權處理的高度敏感、機密或受限制資訊。分享或使用輸出前，您有責任進行審查。',
              '上傳角色卡或模型前，請確認素材許可允許相應的雲端儲存、同步及顯示。上傳不會轉移您的所有權，也不會使私有素材自動成為公開授權內容。素材附帶的第三方授權條款繼續適用。',
            ],
          },
          {
            id: 'purchases',
            title: '6. 購買、Flux 與退款',
            paragraphs: [
              'App 內購買由 Apple StoreKit 與您的 App Store 帳號處理。價格、稅費、退款及付款方式受 Apple 規則與購買介面顯示資訊約束。',
              'Flux 是供支援該帳號餘額的 AIRI 官方功能使用的按量額度，實際範圍依相關產品說明為準；它不是貨幣，不可兌換現金或轉讓。透過 App 內購買取得的 Flux 不會因時間經過或取消訂閱而自動到期，並與定期刷新的 Capacitor 訂閱額度分開記錄。',
              '退款可透過 Apple 的回報問題入口申請，由 Apple 依適用規則決定。取消訂閱不等於申請退款；尚未到帳或恢復中的交易，請先使用同步或恢復入口，或聯絡支援，不必為同一筆權益重複購買。法律及 Apple 規則保障的消費者權利不受本條款限制。',
            ],
            links: [
              { label: 'Apple 媒體服務條款', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'subscriptions',
            title: '6.1 Capacitor 自動續訂訂閱',
            items: [
              '目前透過 App Store 提供的 Capacitor 方案為按月自動續訂訂閱。方案名稱、所含服務、完整週期價格、幣別及週期以購買頁面與 Apple 確認介面為準。',
              '購買確認後將向您的 Apple 帳號扣款。除非您依 Apple 要求在當期結束前及時取消，訂閱會自動續訂；通常需至少提前 24 小時取消，續費可能在到期前 24 小時內扣款。',
              '您可透過應用程式內「管理訂閱」或 Apple 訂閱管理頁面取消。取消後通常可使用至已付週期結束，解除安裝或刪除 AIRI 帳號不會自動取消訂閱。其他管道購買的訂閱需在原購買管道管理。',
              'Capacitor 提供有效訂閱內的使用額度，並非無限用量或可提領餘額。額度在方案規定的視窗刷新至上限，未用部分不額外累加；配額、下次刷新時間及有效期依所購方案與應用程式顯示為準，不能將訂閱額度轉換成已購 Flux。',
              '有效訂閱內先使用 Capacitor 額度。您開啟 Flux 備援後，額度用盡可繼續扣減已有 Flux；關閉後，有效訂閱額度耗盡時需等待刷新，不會繼續扣 Flux。此開關不會自動購買新的 Flux。訂閱到期後的按量使用取決於已有 Flux 餘額。',
              '升級、降級、生效時間及費用調整以 Apple 確認介面為準。恢復購買用於同步既有訂閱權益，不會重新發放已消耗的 Flux。',
            ],
            links: [
              {
                label: 'Apple 管理訂閱',
                url: 'https://apps.apple.com/account/subscriptions',
              },
              {
                label: 'Apple 申請退款',
                url: 'https://reportaproblem.apple.com/',
              },
            ],
          },
          {
            id: 'eula',
            title: '6.2 iOS 應用程式許可（EULA）',
            paragraphs: [
              '透過 App Store 取得的應用程式，其軟體使用許可適用 Apple 標準最終使用者授權協議（EULA），除非我們在適用商店另行提供自訂 EULA。本頁約定 AIRI 官方服務的使用規則，適用的軟體及開源授權繼續有效。',
            ],
            links: [
              {
                label: 'Apple 標準 EULA',
                url: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
              },
            ],
          },
          {
            id: 'third-party',
            title: '7. 第三方與開源元件',
            paragraphs: [
              '應用程式可能依賴 Apple、RevenueCat、AI 與語音供應商、PostHog，以及選用天氣功能使用的 MET Norway。其服務可能適用各自條款，我們不控制其持續可用性；實際資料去向見隱私權政策。',
              'AIRI Lite 包含開源軟體。相關開源授權仍適用於各元件；本條款不會限制授權已賦予您的權利。',
            ],
          },
          {
            id: 'availability',
            title: '8. 可用性、變更與終止',
            paragraphs: [
              '我們可能維護、修改、限制或停止某項功能，也可能因安全、違法或嚴重違反條款的行為暫停存取。我們會在合理可行時提供通知。',
              '您可隨時停止使用並在應用程式內申請刪除帳號。刪除帳號不會自動撤銷已完成的 App Store 交易或 Apple 管理的訂閱。',
            ],
          },
          {
            id: 'disclaimer',
            title: '9. 免責聲明與責任限制',
            paragraphs: [
              '在適用法律允許的最大範圍內，服務按「現狀」及「可用」提供，不保證持續可用、無錯誤或適合特定目的。',
              '在適用法律允許的最大範圍內，我們不對間接、附帶、特殊、衍生損失或資料、利潤損失負責。本條不排除法律不得排除的消費者權利或責任。',
            ],
          },
          {
            id: 'changes',
            title: '10. 條款變更與聯絡',
            paragraphs: [
              '我們可能更新本條款並修改生效日期。重大變更生效前會以合理方式提示；繼續使用即表示接受更新後的條款。',
              '有關條款、帳號、購買或隱私的問題，請聯絡 support-airi@moeru.ai。文件勘誤亦可透過本頁底部的 GitHub 儲存庫回報；請勿在公開 Issue 中提交個人資料。',
            ],
          },
        ],
      },
      'account-deletion': {
        title: '帳號刪除',
        effectiveDate: '2026 年 11 月 13 日',
        description: '如何刪除 AIRI Lite 帳號與關聯資料。',
        summary: '您可直接在 AIRI Lite 內提出帳號刪除，無需造訪主站或聯絡客服。',
        highlights: [
          { symbol: '1', text: '**在應用程式內提出**，入口位於「設定 → 帳號」。' },
          { symbol: '2', text: '**確認後刪除**，無需電子郵件確認；如提示驗證身分，請依應用程式指引完成。' },
          { symbol: '3', text: '**無法撤銷**，完成後需建立新帳號才能再次使用。' },
        ],
        sections: [
          {
            id: 'steps',
            title: '刪除步驟',
            steps: [
              '登入 **AIRI Lite** 並開啟 **設定**：可使用舞台頁的設定按鈕，或角色頁的「應用程式設定」入口。',
              '點一下設定頂部的帳號資料，進入 **帳號** 頁面。',
              '向下捲動，點一下「登出」下方的 **刪除帳號**。閱讀提示並輸入要求的確認內容（電子郵件帳號需再次輸入帳號信箱），然後點一下 **永久刪除**。',
              '如提示驗證身分，請依應用程式指引完成密碼驗證或第三方重新認證。刪除成功後，應用程式顯示「帳號已刪除」並返回登入頁面；此流程無需點擊郵件連結。',
            ],
          },
          {
            id: 'deleted',
            title: '將刪除的內容',
            items: [
              '帳號刪除流程處理帳號資料、登入關聯及相關雲端資源，包括角色卡及上傳模型。',
              '部分歷史對話、交易、用量、診斷紀錄及備份可能繼續保留，詳情請參閱隱私權政策。',
              '可歸屬於帳號的產品分析身分將停止繼續關聯；分析偏好可在刪除前隨時關閉。',
              '關閉同步、移除本機副本或解除安裝不會自動刪除雲端內容。',
            ],
            note: '如需瞭解刪除範圍或行使個人資料權利，請聯絡 support-airi@moeru.ai；請勿傳送密碼或驗證碼。',
          },
          {
            id: 'local',
            title: '裝置本機資料',
            paragraphs: [
              '帳號刪除主要處理伺服器端帳號資料。若要同時移除對話紀錄、記憶、自訂聊天背景、快取及其他裝置本機資料，請使用應用程式內相應清理功能或從裝置解除安裝 AIRI Lite。',
            ],
          },
          {
            id: 'before',
            title: '刪除前請注意',
            items: [
              '帳號刪除無法撤銷。',
              '未使用的 Flux 或其他數位權益可能隨帳號刪除而失效。',
              '帳號刪除不會自動向 Apple 申請退款，也不會自動取消由 Apple 管理的訂閱。',
              '如有待處理的購買或退款，請先保留必要的 Apple 交易憑證。',
              '如不希望繼續續費，請自行透過 Apple 訂閱管理頁面取消自動續訂；取消訂閱與刪除 AIRI 帳號是不同操作。',
            ],
            links: [
              { label: 'Apple 管理訂閱', url: 'https://apps.apple.com/account/subscriptions' },
            ],
          },
          {
            id: 'help',
            title: '無法登入或需要協助',
            paragraphs: [
              '帳號刪除可直接在應用程式內操作。有關個人資料存取、更正、刪除或其他隱私問題，請聯絡 support-airi@moeru.ai。請勿傳送密碼或驗證碼，也不要在公開 GitHub Issue 中提供個人資料。',
            ],
            links: [
              { label: '開啟支援儲存庫', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
    },
  },

  en: {
    navigation: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      'account-deletion': 'Account Deletion',
    },
    ui: {
      skip: 'Skip to content',
      legal: 'Legal & Privacy',
      primaryNavigation: 'Legal documents',
      language: 'Language',
      effectiveDate: 'Effective: ',
      version: 'Version',
      onThisPage: 'On this page',
      footer: 'Mobile legal documents',
      copyLink: 'Copy link',
      copied: 'Copied',
    },
    pages: {
      privacy: {
        title: 'Privacy Policy',
        effectiveDate: 'November 13, 2026',
        description: 'Privacy Policy for the AIRI Lite iOS app.',
        summary: 'This policy explains data handling for AIRI Lite accounts, AI chat, voice, cloud sync, purchases, optional weather and calendar features, and product analytics. Availability depends on your app version and settings.',
        highlights: [
          { symbol: '○', text: '**Product analytics is off by default** and can be changed in the app at any time.' },
          { symbol: '⌁', text: '**Chat content is excluded from product analytics**, with no advertising tracking.' },
          { symbol: '⌂', text: '**Memories and custom backgrounds stay on your device** and remain under your control.' },
        ],
        sections: [
          {
            id: 'support',
            title: "Technical support and feedback",
            paragraphs: ["For help with AIRI Lite, bug reports, or suggestions, email support-airi@moeru.ai. Include your app version, platform, and a description of the issue. Do not send passwords, verification codes, or payment card details."],
            links: [{ label: 'support-airi@moeru.ai', url: 'mailto:support-airi@moeru.ai' }],
          },
          {
            id: 'scope',
            title: '1. Scope',
            paragraphs: [
              'This policy applies only to the AIRI Lite iOS app and its official mobile services. It does not replace the separate privacy policies for the Project AIRI website, desktop apps, or third-party services.',
              'In this policy, “we” means the AIRI Lite developer and Project AIRI maintainers who provide the app’s official services. When you use a third-party service, that service’s terms and privacy policy may also apply.',
            ],
          },
          {
            id: 'data',
            title: '2. Data we process',
            items: [
              '**Account and sign-in data:** name or display name, email address, backend user ID, sign-in method, and access credentials required to keep you signed in. Credentials are stored in the iOS Keychain or protected app storage.',
              '**AI feature content:** with your permission, text, images, relevant conversation context, and selected memories are sent over encrypted connections to AIRI services and the third-party AI services needed to fulfill your request. Web search sends queries to upstream search services; speech synthesis sends the text to be spoken to speech services. Encryption in transit does not prevent the receiving services from reading the content.',
              '**Purchases and entitlements:** products, transaction or receipt-verification identifiers, purchase and renewal status, expiration dates, Flux balances, and fulfillment records. Apple processes payments. RevenueCat receives the backend user ID and purchase, subscription, and entitlement records to validate and synchronize subscriptions. We do not receive full payment-card information.',
              '**Optional product analytics:** when enabled, app version, page categories, feature actions and outcomes, entry points, sign-in or input methods, model or service categories, performance timings, message counts, Flux balance, selected plans and purchase-flow stages, and an account or device analytics identifier. Analytics excludes chat content, prompts, response text, names, email addresses, tokens, full URLs, user-entered labels, and raw error details.',
              '**Network and security data:** servers may process IP addresses, request times, response status, and abuse-prevention security records when receiving requests.',
              '**On-device data:** conversation history, confirmed memories, memory suggestions, custom chat backgrounds, preferences, caches, logs, and temporary context are stored in the app container. Relevant memories may be included as context in a chat request when they are useful to that request.',
              '**Cloud chat synchronization and service records:** eligible chat text and replies are linked to your account and stored on the server to synchronize and restore conversations. The server also stores records such as user ID, model, request status, duration, token usage, and Flux consumption. These records are separate from optional product analytics and do not stop being stored when product analytics is disabled.',
              '**Character and model cloud sync:** when you enable sync, character names, settings, prompts, model references, and related configuration may be uploaded to AIRI services and linked to your account. Imported models you explicitly upload, or enable for automatic upload, are stored as model files and necessary metadata in the cloud. This does not automatically upload bundled model files.',
            ],
            note: 'AIRI Lite does not request precise location, sell personal data, or use data for cross-app advertising tracking.',
          },
          {
            id: 'device-features',
            title: '2.1 Optional system features',
            items: [
              '**Voice input:** after you start recording, microphone audio is processed by Apple\'s on-device speech recognition. Language assets may need to be downloaded from Apple. The current voice-input feature does not upload recordings to AIRI or third-party AI services. Transcripts enter the editable composer first and are treated as AI content if you send them. Speech synthesis sends text to be spoken, rather than microphone recordings.',
              '**Weather and location:** when setting up weather, you can authorize a single foreground coarse-location fix or select a city manually. City search and place-name lookup use Apple Maps services. Forecast requests go directly from your device to MET Norway with coordinates rounded to about two decimal places; the provider can also see the request IP address. The selected location is stored locally. There is no continuous background location tracking, and weather location is not automatically added to chat or product analytics.',
              '**Calendar:** only after you connect and authorize your calendar does the app use EventKit to read today\'s remaining events for the on-device companion panel. The panel does not upload event titles to AIRI, AI services, or product analytics, or persist them. iOS manages any synchronization performed by your system calendar account.',
              '**Local notifications:** if you permit notifications or enable proactive contact, the app may display message text in system notifications, including on the lock screen. You can disable notifications or hide previews through the app and iOS notification settings. Cloud generation for proactive contact remains subject to this policy\'s AI-content rules.',
            ],
          },
          {
            id: 'cloud-sync',
            title: '2.2 Cloud sync and local copies',
            paragraphs: [
              'Character cloud sync and automatic upload of newly imported models have separate controls. Disabling sync stops new synchronization work; it does not automatically delete earlier uploads. Removing a model locally or uninstalling the app also does not automatically delete its cloud copy. Use the relevant cloud-deletion control or contact support to request removal.',
              'Character and model sync, chat sync, AI-content permission, and product analytics are separate controls. Disabling product analytics does not stop cloud sync you have enabled, necessary purchase validation, or service records.',
            ],
          },
          {
            id: 'analytics',
            title: '3. Product analytics',
            paragraphs: [
              'Product analytics is **off by default** in release builds. The app creates and sends allow-listed events only after you explicitly enable it under Settings → Data & Privacy. Turning it off immediately stops new analytics delivery and clears PostHog analytics state stored by the app on your device.',
              'The app does not capture screen images, and SDK-level automatic screen-view capture, element capture, session replay, surveys, and advertising uses are disabled. When enabled, only allow-listed events are sent, including page categories, principal feature actions, performance, and purchase-flow events, to diagnose failures, measure performance, and improve account and sign-in, launch, chat, voice, model and personalization settings, memory, and purchase flows.',
            ],
          },
          {
            id: 'purpose',
            title: '4. Why we use data',
            items: [
              'Create and maintain accounts, authenticate sign-ins, and provide services across sessions.',
              'Generate AI responses, speech, and other features you actively request.',
              'Process purchases, verify entitlements, maintain Flux balances, and prevent fraud.',
              'Analyze product use and performance when you consent.',
              'Protect the service, troubleshoot problems, and comply with legal obligations.',
              'Synchronize characters and models under your enabled settings, and provide weather, on-device calendar display, and local notifications.',
            ],
          },
          {
            id: 'sharing',
            title: '5. Service providers and sharing',
            paragraphs: [
              'We transfer data to service providers only as needed to provide a feature, keep the service secure, or meet legal obligations. Providers may include Apple for sign-in, app distribution, and in-app purchases; the AIRI official backend; third-party AI and speech service providers; and PostHog only when you enable analytics.',
              'The current default chat route uses OpenRouter, and default speech synthesis uses StepFun. Other available routes may use Amazon Bedrock, Alibaba Cloud, or other speech services. The service used depends on the selected feature and route configuration. Third parties may retain inputs, images, queries, or outputs under their policies and account settings; we do not promise zero data retention for every request.',
              'We require every third party that can access user data to provide the same or an equivalent level of protection as this policy and Apple’s requirements.',
              'We do not sell or rent personal data. We do not disclose it to other parties except when required by law, necessary to protect users or the service, or part of a business transfer that remains subject to this policy.',
              'RevenueCat provides subscription validation, entitlement synchronization, purchase restoration, and subscription operations. The app identifies a subscription account using the AIRI backend user ID and provides purchase and entitlement information. This necessary subscription processing is separate from the optional PostHog product-analytics switch.',
              'When weather is enabled, Apple Maps services process city searches or approximate coordinates, and MET Norway processes approximate coordinates and request IP addresses for forecasts. MET Norway service logs may be stored in Norway; see its official terms and privacy notice.',
              'AI-content retention and use for model training depend on the actual route, downstream model provider, applicable agreements, and deployment settings. We do not promise that every third party has zero retention or excludes all training use. Contact support about a particular model before sending sensitive content if you need that assurance.',
            ],
            links: [
              { label: 'Apple Privacy Policy', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog Privacy Policy', url: 'https://posthog.com/privacy' },
              { label: 'RevenueCat Privacy Policy', url: 'https://www.revenuecat.com/privacy/' },
              { label: 'OpenRouter Privacy Policy', url: 'https://openrouter.ai/privacy' },
              { label: 'MET Norway service and privacy information', url: 'https://api.met.no/doc/TermsOfService' },
            ],
          },
          {
            id: 'retention',
            title: '6. Retention',
            paragraphs: [
              'Use the in-app controls to clear local data, delete cloud conversations, or initiate account deletion. Deleting local copies or uninstalling the app does not automatically delete cloud content.',
              'Some historical chat content and backups may remain after account deletion. Transaction, usage, diagnostic, and security records may be retained for fulfillment, refunds, troubleshooting, fraud prevention, or legal obligations. Third-party data is handled under the relevant privacy policies and settings.',
              'Manage character cards and uploaded models through the relevant cloud controls; disabling sync does not automatically delete uploaded content. For questions about data retention or deletion, contact support-airi@moeru.ai.',
            ],
          },
          {
            id: 'choices',
            title: '7. Your choices and rights',
            items: [
              'Allow or decline AI services processing chat content under Settings → Data & Privacy. Turning it off stops the app from sending new chat or preview content to AIRI official services and third-party AI or speech service providers.',
              'Enable or disable product analytics under Settings → Data & Privacy.',
              'Review, edit, unpin, or delete local memories in the app, and remove a custom chat background.',
              'Manage Photos, Microphone, Location, Calendar, and Notifications permissions in iOS Settings. Weather can use a manually selected city. You can also disable character cloud sync and automatic upload of newly imported models.',
              'Request account deletion inside the app. You may also request access, correction, or deletion where applicable law provides those rights.',
            ],
          },
          {
            id: 'security',
            title: '8. Security and international processing',
            paragraphs: [
              'We use measures such as HTTPS, the iOS Keychain, data minimization, and access controls. No internet transmission or storage method can be guaranteed completely secure.',
              'AIRI services and their providers may process data outside your country or region. We use reasonable safeguards where required by applicable law.',
            ],
          },
          {
            id: 'children',
            title: '9. Children',
            paragraphs: [
              'AIRI Lite is not directed to children below the minimum age of digital consent in their region. If you believe a child provided personal data without appropriate consent, please contact us using the method below.',
            ],
          },
          {
            id: 'changes-contact',
            title: '10. Changes and contact',
            paragraphs: [
              'We may update this policy when app features or legal requirements change. The effective date on this page will be updated, and material changes will be communicated through an appropriate notice.',
              'You can delete your account directly in the app. For personal-data access, correction, deletion, or other privacy questions, contact support-airi@moeru.ai. Do not send passwords or verification codes, or post personal data in public GitHub issues.',
            ],
            links: [
              { label: 'AIRI Lite privacy repository', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        effectiveDate: 'November 13, 2026',
        description: 'Terms of Service for the AIRI Lite iOS app.',
        summary: 'These terms set the basic rules for using AIRI Lite accounts, AI chat, voice, purchases, and other mobile features.',
        sections: [
          {
            id: 'acceptance',
            title: '1. Accepting these terms',
            paragraphs: [
              'By downloading, accessing, or using AIRI Lite, you agree to these terms and the Privacy Policy. If you do not agree, do not use the app.',
              'AIRI Lite is under active development. TestFlight and other test builds may be unstable, change features, or stop operating and should not be relied on for critical tasks.',
            ],
          },
          {
            id: 'accounts',
            title: '2. Accounts and eligibility',
            items: [
              'You must meet the minimum age required to use the service in your region and have authority to agree to these terms.',
              'Provide accurate account information, protect your credentials, and take responsibility for activity under your account.',
              'If you discover unauthorized use, sign out other sessions, update your credentials, and contact us promptly.',
            ],
          },
          {
            id: 'ai',
            title: '3. AI content and limitations',
            paragraphs: [
              'AIRI Lite uses generative AI. Output may be inaccurate, incomplete, offensive, or unexpected and does not represent the views of the developer or contributors. Verify output before relying on it.',
              'The service does not provide medical, legal, financial, or other professional advice and must not be used for emergencies, high-risk control, or decisions that may cause personal injury or property damage.',
            ],
          },
          {
            id: 'conduct',
            title: '4. Acceptable use',
            items: [
              'Do not use the service to break the law, infringe rights, harass, deceive, harm others, or create or distribute illegal content.',
              'Do not bypass access controls, abuse quotas, automate attacks, disrupt the service, reverse-engineer another person’s credentials, or probe unauthorized data.',
              'Do not impersonate another person or represent AI output as having been created by a real person.',
              'Ensure that you have the rights needed for content you submit and that your use complies with applicable law.',
            ],
          },
          {
            id: 'content',
            title: '5. Your content',
            paragraphs: [
              'You retain your rights in content you submit. To provide features you request or enable, you grant us a limited, non-exclusive license to transmit, store, synchronize, display, and process that content and generate the requested results, only to the extent needed for those features. You can stop new processing and request deletion; retention and deletion of existing copies follow the Privacy Policy.',
              'Do not submit highly sensitive, confidential, or restricted information you are not authorized to process. You are responsible for reviewing output before sharing or using it.',
              'Before uploading a character card or model, make sure its license permits the relevant cloud storage, synchronization, and display. Uploading does not transfer ownership or automatically make private material publicly licensed. Third-party licenses supplied with that material continue to apply.',
            ],
          },
          {
            id: 'purchases',
            title: '6. Purchases, Flux, and refunds',
            paragraphs: [
              'In-app purchases are handled through Apple StoreKit and your App Store account. Prices, taxes, refunds, and payment methods are governed by Apple’s rules and the information shown at purchase.',
              'Flux is metered-use credit for AIRI official features that support the account\'s balance, as described by the relevant product. It is not currency and cannot be redeemed for cash or transferred. Flux obtained through in-app purchase does not automatically expire with time or subscription cancellation and is recorded separately from periodically refilled Capacitor quota.',
              'Request refunds through Apple\'s Report a Problem service; Apple decides under its applicable rules. Cancelling a subscription does not request a refund. For a transaction awaiting fulfillment or restoration, use the synchronization or restore controls, or contact support, rather than buying the same entitlement again. These terms do not limit consumer rights protected by law or Apple policy.',
            ],
            links: [
              { label: 'Apple Media Services Terms', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'subscriptions',
            title: '6.1 Capacitor auto-renewable subscriptions',
            items: [
              'Capacitor plans currently offered through the App Store are monthly auto-renewable subscriptions. The purchase page and Apple\'s confirmation screen show the plan name, included services, full billing-period price, currency, and duration.',
              'Your Apple account is charged when the purchase is confirmed. The subscription renews automatically unless you cancel before the end of the current period under Apple\'s requirements, usually at least 24 hours beforehand. Renewal may be charged during the 24 hours before expiration.',
              'Cancel using Manage Subscription in the app or Apple\'s subscription-management page. Access normally continues through the paid period. Uninstalling the app or deleting an AIRI account does not cancel a subscription. Subscriptions purchased through another channel must be managed through that channel.',
              'Capacitor provides usage quota within an active subscription, rather than unlimited usage or a cash balance. Quota refills to its limit at the plan\'s reset windows; unused amounts do not accumulate on top. The purchased plan and app show the quota, next refill, and expiration. Subscription quota cannot be converted to purchased Flux.',
              'An active subscription spends Capacitor quota first. If you enable Flux fallback, existing Flux may be spent after the quota runs out. With fallback disabled, exhausted active-plan quota waits for a refill without continuing to spend Flux. This switch does not buy new Flux automatically. Metered use after subscription expiration depends on your existing Flux balance.',
              'Apple\'s confirmation screen governs upgrades, downgrades, effective dates, and price adjustments. Restore Purchases synchronizes existing subscription entitlements; it does not reissue Flux that has already been spent.',
            ],
            links: [
              {
                label: 'Manage Apple subscriptions',
                url: 'https://apps.apple.com/account/subscriptions',
              },
              {
                label: 'Request an Apple refund',
                url: 'https://reportaproblem.apple.com/',
              },
            ],
          },
          {
            id: 'eula',
            title: '6.2 iOS application license (EULA)',
            paragraphs: [
              'The software license for an app obtained through the App Store is governed by Apple\'s Standard End User License Agreement (EULA), unless we separately provide a custom EULA in the applicable store. The terms on this page govern use of AIRI official services; applicable software and open-source licenses continue to apply.',
            ],
            links: [
              {
                label: 'Apple Standard EULA',
                url: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
              },
            ],
          },
          {
            id: 'third-party',
            title: '7. Third-party and open-source components',
            paragraphs: [
              'The app may rely on Apple, RevenueCat, AI and speech providers, PostHog, and MET Norway for optional weather. Their services may have their own terms, and we do not control their continued availability. The Privacy Policy describes where data is sent.',
              'AIRI Lite includes open-source software. The corresponding licenses continue to apply to those components, and these terms do not limit rights already granted under those licenses.',
            ],
          },
          {
            id: 'availability',
            title: '8. Availability, changes, and termination',
            paragraphs: [
              'We may maintain, modify, limit, or discontinue a feature. We may suspend access for security reasons, illegal conduct, or material violations of these terms and will provide notice when reasonably practical.',
              'You may stop using the service and request account deletion in the app at any time. Account deletion does not automatically reverse completed App Store transactions or cancel subscriptions managed by Apple.',
            ],
          },
          {
            id: 'disclaimer',
            title: '9. Disclaimers and limits of liability',
            paragraphs: [
              'To the maximum extent permitted by law, the service is provided “as is” and “as available,” without a promise of continuous availability, error-free operation, or fitness for a particular purpose.',
              'To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or lost-data or lost-profit damages. Nothing here excludes consumer rights or liabilities that cannot legally be excluded.',
            ],
          },
          {
            id: 'changes',
            title: '10. Changes and contact',
            paragraphs: [
              'We may update these terms and revise the effective date. Material changes will be communicated reasonably before taking effect. Continued use after that time means you accept the revised terms.',
              'For terms, account, purchase, or privacy questions, contact support-airi@moeru.ai. Documentation corrections can also be reported through the GitHub repository linked below. Do not post personal data in a public issue.',
            ],
          },
        ],
      },
      'account-deletion': {
        title: 'Account Deletion',
        effectiveDate: 'November 13, 2026',
        description: 'How to delete your AIRI Lite account and associated data.',
        summary: 'You can request account deletion directly inside AIRI Lite without visiting the main website or contacting support.',
        highlights: [
          { symbol: '1', text: '**Start in the app** under Settings → Account.' },
          { symbol: '2', text: '**Confirm deletion** without an email link. Follow the in-app instructions if identity verification is requested.' },
          { symbol: '3', text: '**Deletion cannot be undone.** You will need a new account to return.' },
        ],
        sections: [
          {
            id: 'steps',
            title: 'How to delete your account',
            steps: [
              'Sign in to **AIRI Lite** and open **Settings** using the settings button on the Stage screen or the App Settings entry on the character screen.',
              'Tap the account profile at the top of Settings to open **Account**.',
              'Scroll down and tap **Delete Account** below Sign Out. Read the warning and enter the requested confirmation (your account email for an email account), then tap **Delete Permanently**.',
              'If identity verification is requested, follow the in-app instructions to verify your password or reauthenticate with your sign-in provider. After deletion succeeds, the app displays “Account deleted” and returns to the sign-in screen. This flow does not require an email confirmation link.',
            ],
          },
          {
            id: 'deleted',
            title: 'What is deleted',
            items: [
              'Account deletion handles your profile, sign-in associations, and related cloud resources, including character cards and uploaded models.',
              'Some historical chats, transaction, usage, and diagnostic records, and backups may remain. See the Privacy Policy for details.',
              'Product-analytics identity stops being associated with the account. You can turn analytics off at any time before deletion.',
              'Disabling sync, removing local copies, or uninstalling the app does not automatically delete cloud content.',
            ],
            note: 'For questions about the scope of deletion or to exercise your personal-data rights, contact support-airi@moeru.ai. Do not send passwords or verification codes.',
          },
          {
            id: 'local',
            title: 'Data stored on your device',
            paragraphs: [
              'Account deletion primarily handles server-side account data. To also remove conversation history, memories, a custom chat background, caches, and other on-device data, use the related in-app controls or uninstall AIRI Lite from the device.',
            ],
          },
          {
            id: 'before',
            title: 'Before you delete',
            items: [
              'Account deletion cannot be undone.',
              'Unused Flux and other digital entitlements may be lost with the account.',
              'Deleting the account does not automatically request an Apple refund or cancel a subscription managed by Apple.',
              'Keep any required Apple transaction records first if you have a purchase or refund in progress.',
              'If you do not want further renewals, cancel through Apple\'s subscription-management page yourself. Cancelling a subscription and deleting an AIRI account are separate actions.',
            ],
            links: [
              { label: 'Manage Apple subscriptions', url: 'https://apps.apple.com/account/subscriptions' },
            ],
          },
          {
            id: 'help',
            title: 'If you cannot sign in',
            paragraphs: [
              'You can delete your account directly in the app. For personal-data access, correction, deletion, or other privacy questions, contact support-airi@moeru.ai. Do not send passwords or verification codes, or post personal data in public GitHub issues.',
            ],
            links: [
              { label: 'Open the support repository', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
    },
  },

  ja: {
    navigation: {
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      'account-deletion': 'アカウント削除',
    },
    ui: {
      skip: '本文へ移動',
      legal: '法務とプライバシー',
      primaryNavigation: '法的文書',
      language: '言語',
      effectiveDate: '発効日：',
      version: 'バージョン',
      onThisPage: 'このページの内容',
      footer: 'モバイル版法的文書',
      copyLink: 'リンクをコピー',
      copied: 'コピーしました',
    },
    pages: {
      privacy: {
        title: 'プライバシーポリシー',
        effectiveDate: '2026年11月13日',
        description: 'AIRI Lite iOS アプリのプライバシーポリシー。',
        summary: '本ポリシーでは、AIRI Lite のアカウント、AI チャット、音声、クラウド同期、購入、任意の天気・カレンダー機能、製品分析に関するデータ処理を説明します。利用できる機能はアプリのバージョンと設定によって異なります。',
        highlights: [
          { symbol: '○', text: '**製品分析は初期状態でオフ**で、アプリ内からいつでも変更できます。' },
          { symbol: '⌁', text: '**チャット本文は製品分析に含まれず**、広告トラッキングも行いません。' },
          { symbol: '⌂', text: '**メモリとカスタム背景は端末内に保存**され、ユーザーが管理できます。' },
        ],
        sections: [
          {
            id: 'support',
            title: "テクニカルサポートとフィードバック",
            paragraphs: ["AIRI Lite の使い方に関する質問、不具合の報告、ご意見は support-airi@moeru.ai までメールでお送りください。アプリのバージョン、利用環境、問題の詳細をご記載ください。パスワード、認証コード、カード情報は送信しないでください。"],
            links: [{ label: 'support-airi@moeru.ai', url: 'mailto:support-airi@moeru.ai' }],
          },
          {
            id: 'scope',
            title: '1. 適用範囲',
            paragraphs: [
              '本ポリシーは AIRI Lite iOS アプリと公式モバイルサービスにのみ適用されます。Project AIRI のウェブサイト、デスクトップアプリ、第三者サービスには、それぞれ別のプライバシーポリシーが適用されます。',
              '本ポリシーの「当方」とは、AIRI Lite の開発者および公式サービスを提供する Project AIRI のメンテナーを指します。第三者サービスを利用する場合、そのサービスの規約とプライバシーポリシーも適用されることがあります。',
            ],
          },
          {
            id: 'data',
            title: '2. 処理するデータ',
            items: [
              '**アカウントとサインイン情報：**氏名または表示名、メールアドレス、バックエンドのユーザー ID、サインイン方法、およびログイン維持に必要な認証情報。認証情報は iOS キーチェーンまたは保護されたアプリストレージに保存されます。',
              '**AI 機能の内容：**許可をいただいた上で、送信されたテキスト、画像、関連する会話内容、選択されたメモリを暗号化通信で AIRI および処理に必要な第三者 AI サービスへ送信します。ウェブ検索では検索サービスにクエリを、音声合成では音声サービスに読み上げるテキストを送信します。通信の暗号化は、受信側のサービスが内容を読めないことを意味しません。',
              '**購入と権利情報：**商品、取引またはレシート検証用の識別子、購入・更新状態、有効期限、Flux 残高、付与記録。決済は Apple が処理します。RevenueCat は、サブスクリプションの検証と同期のため、バックエンドのユーザー ID と購入・サブスクリプション・権利情報を受け取ります。当方は完全なカード情報を取得しません。',
              '**任意の製品分析：**有効にした場合、アプリバージョン、画面カテゴリ、機能操作と結果、操作入口、サインインまたは入力方法、モデルまたはサービス種別、性能測定時間、メッセージ数、Flux 残高、選択したプランと購入フローの段階、アカウントまたは端末の分析識別子を処理します。チャット本文、プロンプト、返信本文、氏名、メールアドレス、トークン、完全な URL、ユーザーが入力した名称、生のエラー詳細は含みません。',
              '**ネットワークとセキュリティ情報：**サーバーはリクエスト受信時に IP アドレス、時刻、応答状態、不正利用防止のセキュリティ記録を処理する場合があります。',
              '**端末内データ：**会話履歴、確認済みメモリ、メモリ候補、カスタムチャット背景、設定、キャッシュ、ログ、一時コンテキストはアプリコンテナに保存されます。現在のリクエストに有用なメモリは、チャットのコンテキストとして送信される場合があります。',
              '**会話のクラウド同期とサービス記録：**同期対象の会話テキストと応答はアカウントに関連付けられ、同期と会話の復元のためにサーバーに保存されます。ユーザー ID、モデル、リクエスト状態、所要時間、トークン使用量、Flux 消費量なども記録します。これらは任意の製品分析とは別であり、製品分析を無効にしても保存は停止しません。',
              '**キャラクターとモデルのクラウド同期：**同期を有効にすると、キャラクター名、設定、プロンプト、モデル参照と関連設定がアカウントに紐づけて AIRI サービスへ送信される場合があります。明示的にアップロードした、または自動アップロードを有効にしたインポート済みモデルは、ファイルと必要なメタデータとしてクラウドに保存されます。アプリ内蔵モデルのファイルが自動的にアップロードされることはありません。',
            ],
            note: 'AIRI Lite は正確な位置情報を要求せず、個人データを販売せず、クロスアプリ広告トラッキングを行いません。',
          },
          {
            id: 'device-features',
            title: '2.1 任意のシステム機能',
            items: [
              '**音声入力：**録音を開始すると、マイク音声は Apple の端末内音声認識で処理されます。Apple から言語リソースをダウンロードする場合があります。現在の音声入力機能は録音を AIRI や第三者の AI サービスへアップロードしません。認識結果は編集可能な入力欄に入り、送信した場合に AI コンテンツとして処理されます。音声合成で送信するのは読み上げ用テキストであり、マイク録音ではありません。',
              '**天気と位置：**天気の設定時に、単発のフォアグラウンドでのおおよその位置取得を許可するか、都市を手動で選択できます。都市検索と地名の取得には Apple の地図サービスを使用します。天気リクエストは端末から MET Norway に直接送信され、小数点以下約 2 桁に丸めた座標を含みます。提供者にはリクエスト元の IP アドレスも伝わります。選択した位置は端末内に保存し、継続的なバックグラウンド位置追跡は行いません。位置はチャットや製品分析に自動追加されません。',
              '**カレンダー：**接続と権限の許可後に限り、EventKit を使って当日の未終了の予定を読み取り、端末内のコンパニオンパネルに表示します。このパネルは予定のタイトルを AIRI、AI サービス、製品分析にアップロードせず、永続保存もしません。システムカレンダー自体のアカウント同期は iOS が管理します。',
              '**ローカル通知：**通知を許可するか能動的な連絡を有効にすると、システム通知にメッセージが表示され、ロック画面にも表示される場合があります。アプリと iOS の通知設定で通知を無効化したり、プレビューを非表示にしたりできます。能動的な連絡のクラウド生成にも本ポリシーの AI コンテンツ処理規則が適用されます。',
            ],
          },
          {
            id: 'cloud-sync',
            title: '2.2 クラウド同期とローカルコピー',
            paragraphs: [
              'キャラクターのクラウド同期と新規インポートモデルの自動アップロードは別々に設定します。同期を無効にすると新たな同期処理を停止しますが、以前のアップロードは自動削除されません。端末からのモデル削除やアプリのアンインストールもクラウド上のコピーを自動削除しません。対応するクラウド削除機能を使用するか、サポートへ削除を依頼してください。',
              'キャラクター・モデル同期、チャット同期、AI コンテンツ処理の許可、製品分析は別の制御項目です。製品分析を無効にしても、有効にしたクラウド同期、必要な購入検証、サービス記録は停止しません。',
            ],
          },
          {
            id: 'analytics',
            title: '3. 製品分析',
            paragraphs: [
              'リリース版の製品分析は**初期状態でオフ**です。「設定 → データとプライバシー」で明示的に有効にした場合に限り、許可リストのイベントが作成・送信されます。無効にすると新しい分析送信は直ちに停止し、アプリが端末に保存した PostHog の分析状態が消去されます。',
              '画面画像は取得せず、SDK による画面表示の自動取得、要素の自動取得、セッションリプレイ、アンケート、広告目的の利用も無効です。有効にした場合は、画面カテゴリ、主要機能の操作、性能、購入フローを含む許可リストのイベントのみを送信し、障害の診断、性能測定、アカウントとサインイン、起動、チャット、音声、モデルと個人設定、メモリ、購入フローの改善に使用します。',
            ],
          },
          {
            id: 'purpose',
            title: '4. 利用目的',
            items: [
              'アカウントの作成と維持、サインイン認証、セッションをまたぐサービス提供。',
              'ユーザーが要求した AI 返信、音声、その他の機能の生成。',
              '購入処理、権利確認、Flux 残高管理、不正利用防止。',
              '同意がある場合の製品利用状況と性能の分析。',
              'サービス保護、問題調査、法的義務への対応。',
              '有効にした設定に従うキャラクター・モデル同期と、天気、端末内カレンダー表示、ローカル通知の提供。',
            ],
          },
          {
            id: 'sharing',
            title: '5. サービス提供者と共有',
            paragraphs: [
              '機能提供、安全確保、法的義務の履行に必要な範囲でのみ、サービス提供者へデータを送信します。提供者には、サインイン・アプリ配布・アプリ内購入を扱う Apple、AIRI 公式バックエンド、第三者の AI・音声サービス提供者、分析を有効にした場合のみ利用する PostHog が含まれる場合があります。',
              '現在の標準チャット経路は OpenRouter、標準音声合成は StepFun を使用します。他の経路では Amazon Bedrock、Alibaba Cloud、その他の音声サービスを使用する場合があります。利用先は選択した機能と経路設定によります。第三者は各自のポリシーとアカウント設定に従い入力、画像、検索クエリ、出力を保持する場合があり、すべてのリクエストについてゼロデータ保持を保証するものではありません。',
              'ユーザーデータにアクセスできるすべての第三者に対し、本ポリシーおよび Apple の要件と同一または同等の水準でデータを保護することを求めます。',
              '個人データを販売または貸与しません。法律上必要な場合、ユーザーやサービスの安全保護に必要な場合、または本ポリシーに引き続き従う事業承継の場合を除き、他者へ開示しません。',
              'RevenueCat はサブスクリプションの検証、権利の同期、購入の復元、サブスクリプション運用に使用します。アプリは AIRI バックエンドのユーザー ID で契約アカウントを識別し、購入と権利の情報を提供します。この必要な処理は、任意の PostHog 製品分析スイッチとは別です。',
              '天気を有効にすると、Apple の地図サービスが都市検索またはおおよその座標を処理し、MET Norway が予報リクエストのおおよその座標と IP アドレスを処理します。MET Norway のサービスログはノルウェーに保存される場合があります。公式の利用規約とプライバシー説明をご確認ください。',
              'AI コンテンツの保存やモデル学習への利用は、実際の経路、下流のモデル提供者、適用契約、デプロイ設定によります。すべての第三者で保存が行われない、または学習に利用されないことを一律には保証しません。特定モデルの処理を確認したい場合は、機密情報を送信する前にサポートへお問い合わせください。',
            ],
            links: [
              { label: 'Apple プライバシーポリシー', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog プライバシーポリシー', url: 'https://posthog.com/privacy' },
              { label: 'RevenueCat プライバシーポリシー', url: 'https://www.revenuecat.com/privacy/' },
              { label: 'OpenRouter プライバシーポリシー', url: 'https://openrouter.ai/privacy' },
              { label: 'MET Norway のサービスとプライバシー', url: 'https://api.met.no/doc/TermsOfService' },
            ],
          },
          {
            id: 'retention',
            title: '6. 保存期間',
            paragraphs: [
              'アプリ内の操作で端末内データの消去、クラウド会話の削除、アカウント削除の申請ができます。ローカルのコピーを削除したり、アプリをアンインストールしたりしても、クラウド上の内容は自動削除されません。',
              'アカウント削除後も、過去の会話内容やバックアップの一部が残る場合があります。取引、使用量、診断、セキュリティ記録は、サービス提供、返金、障害調査、不正防止、法的義務のため保持される場合があります。第三者が保有するデータには、各自のプライバシーポリシーと設定が適用されます。',
              'キャラクターカードやアップロードしたモデルは、対応するクラウド管理機能で管理してください。同期を無効にしても、アップロード済みの内容は自動削除されません。データの保存や削除に関するお問い合わせは support-airi@moeru.ai までご連絡ください。',
            ],
          },
          {
            id: 'choices',
            title: '7. 選択肢と権利',
            items: [
              '「設定 → データとプライバシー」で、AI サービスによるチャット内容の処理を許可または拒否する。無効にすると、AIRI 公式サービスおよび第三者の AI・音声サービス提供者への新しいチャットや試聴内容の送信が停止します。',
              '「設定 → データとプライバシー」で製品分析を有効または無効にする。',
              'アプリ内でローカルメモリを確認、編集、ピン解除、削除し、カスタムチャット背景を削除する。',
              'iOS 設定で写真、マイク、位置情報、カレンダー、通知の権限を管理できます。天気には手動で選んだ都市も使用できます。キャラクターのクラウド同期と新規インポートモデルの自動アップロードも無効にできます。',
              'アプリ内からアカウント削除を申請する。適用法に基づき、個人データの開示、訂正、削除を求めることもできます。',
            ],
          },
          {
            id: 'security',
            title: '8. セキュリティと国外処理',
            paragraphs: [
              'HTTPS、iOS キーチェーン、データ最小化、アクセス制御などの対策を使用します。ただし、インターネット通信や保存方法に絶対的な安全性を保証することはできません。',
              'AIRI のサービスと提供者は、ユーザーの国や地域以外でデータを処理する場合があります。適用法で必要とされる合理的な保護措置を講じます。',
            ],
          },
          {
            id: 'children',
            title: '9. 子どものプライバシー',
            paragraphs: [
              'AIRI Lite は、地域で定められたデジタル同意の最低年齢未満の子どもを対象としていません。適切な同意なく子どもが個人データを提供したと思われる場合は、下記の方法でお知らせください。',
            ],
          },
          {
            id: 'changes-contact',
            title: '10. 変更とお問い合わせ',
            paragraphs: [
              'アプリ機能や法的要件の変更に応じて本ポリシーを更新する場合があります。このページの発効日を更新し、重要な変更は適切な方法で通知します。',
              'アカウントはアプリ内から直接削除できます。個人データの開示、訂正、削除、その他のプライバシーに関するお問い合わせは support-airi@moeru.ai までご連絡ください。パスワードや認証コードを送信したり、公開 GitHub Issue に個人データを書き込んだりしないでください。',
            ],
            links: [
              { label: 'AIRI Lite プライバシーリポジトリ', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: '利用規約',
        effectiveDate: '2026年11月13日',
        description: 'AIRI Lite iOS アプリの利用規約。',
        summary: '本規約は、AIRI Lite のアカウント、AI チャット、音声、購入、その他のモバイル機能を利用する際の基本ルールを定めます。',
        sections: [
          {
            id: 'acceptance',
            title: '1. 規約への同意',
            paragraphs: [
              'AIRI Lite をダウンロード、アクセス、または使用することで、本規約とプライバシーポリシーに同意したものとみなされます。同意しない場合はアプリを使用しないでください。',
              'AIRI Lite は開発中です。TestFlight などのテスト版は不安定で、機能が変更または停止する場合があり、重要な作業に依存すべきではありません。',
            ],
          },
          {
            id: 'accounts',
            title: '2. アカウントと利用資格',
            items: [
              '地域でサービス利用に必要な最低年齢を満たし、本規約に同意する権限が必要です。',
              '正確なアカウント情報を提供し、認証情報を保護し、アカウント上の活動に責任を負ってください。',
              '不正利用を発見した場合、他のセッションからサインアウトし、認証情報を更新して速やかに連絡してください。',
            ],
          },
          {
            id: 'ai',
            title: '3. AI コンテンツと制限',
            paragraphs: [
              'AIRI Lite は生成 AI を使用します。出力は不正確、不完全、不快、または予期しない場合があり、開発者や貢献者の見解を示すものではありません。利用前に確認してください。',
              '本サービスは医療、法律、金融、その他の専門的助言を提供せず、緊急事態、高リスク制御、人身・財産への損害につながる判断に使用してはなりません。',
            ],
          },
          {
            id: 'conduct',
            title: '4. 適切な利用',
            items: [
              '違法行為、権利侵害、嫌がらせ、欺瞞、他者への危害、違法コンテンツの作成・配布に使用しないでください。',
              'アクセス制御の回避、割当量の悪用、自動攻撃、サービス妨害、他者の認証情報の解析、権限のないデータの探索を行わないでください。',
              '他者になりすましたり、AI 出力を実在人物が作成したものと表示したりしないでください。',
              '送信コンテンツに必要な権利を有し、利用が適用法に従うことを確認してください。',
            ],
          },
          {
            id: 'content',
            title: '5. ユーザーコンテンツ',
            paragraphs: [
              '送信したコンテンツの権利はユーザーに留保されます。要求または有効にした機能を提供するために必要な範囲で、送信、保存、同期、表示、処理および結果生成に関する限定的かつ非独占的な利用許諾を当方に付与します。新たな処理を停止し、削除を依頼できます。既存コピーの保存と削除にはプライバシーポリシーが適用されます。',
              '処理する権限のない高度に機密、秘密、または制限対象の情報を送信しないでください。出力を共有・利用する前に確認する責任があります。',
              'キャラクターカードやモデルのアップロード前に、素材のライセンスが該当するクラウド保存、同期、表示を認めていることを確認してください。アップロードにより所有権が移転したり、非公開素材が自動的に公開ライセンスになったりすることはありません。素材に付随する第三者ライセンスは引き続き適用されます。',
            ],
          },
          {
            id: 'purchases',
            title: '6. 購入、Flux、返金',
            paragraphs: [
              'アプリ内購入は Apple StoreKit と App Store アカウントで処理されます。価格、税、返金、支払方法には Apple の規則と購入画面の情報が適用されます。',
              'Flux は、そのアカウントの残高に対応する AIRI 公式機能の従量制利用枠です。対象範囲は各製品の説明によります。通貨ではなく、現金化や譲渡はできません。アプリ内購入で取得した Flux は、時間の経過やサブスクリプションの解約によって自動失効せず、定期補充される Capacitor 枠とは別に記録されます。',
              '返金は Apple の問題報告窓口から申請し、Apple が適用規則に従って判断します。解約は返金申請ではありません。付与や復元を待っている取引については、同じ権利を再購入せず、同期・復元機能を使用するかサポートへお問い合わせください。法律と Apple の規則が保障する消費者の権利を本規約で制限するものではありません。',
            ],
            links: [
              { label: 'Apple メディアサービス利用規約', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'subscriptions',
            title: '6.1 Capacitor の自動更新サブスクリプション',
            items: [
              '現在 App Store で提供している Capacitor プランは、月単位の自動更新サブスクリプションです。プラン名、含まれるサービス、請求期間全体の価格、通貨、期間は購入画面と Apple の確認画面に表示されます。',
              '購入の確定時に Apple アカウントに課金されます。Apple の要件に従って期間終了前に解約しない限り、自動更新されます。通常は少なくとも 24 時間前までの解約が必要で、更新料金は期限前 24 時間以内に請求される場合があります。',
              'アプリ内のサブスクリプション管理、または Apple の管理ページから解約できます。通常、支払い済み期間の終了まで利用できます。アンインストールや AIRI アカウントの削除では解約されません。他の購入経路の契約は、その経路で管理してください。',
              'Capacitor は有効な契約中の利用枠であり、無制限利用や出金可能残高ではありません。プランの補充期間ごとに上限まで補充し、未使用分を追加で繰り越すことはありません。枠、次回補充、有効期限は購入したプランとアプリの表示によります。契約の利用枠を購入済み Flux に変換することはできません。',
              '有効な契約中は Capacitor 枠を先に使います。Flux へのフォールバックを有効にすると、枠を使い切った後に既存の Flux を消費できます。無効の場合は補充を待ち、Flux の消費を続けません。この設定で新しい Flux を自動購入することはありません。契約期限後の従量制利用は既存の Flux 残高によります。',
              'アップグレード、ダウングレード、適用時期、料金調整は Apple の確認画面に従います。購入の復元は既存の契約権利を同期するもので、消費済み Flux を再付与するものではありません。',
            ],
            links: [
              {
                label: 'Apple のサブスクリプション管理',
                url: 'https://apps.apple.com/account/subscriptions',
              },
              {
                label: 'Apple への返金申請',
                url: 'https://reportaproblem.apple.com/',
              },
            ],
          },
          {
            id: 'eula',
            title: '6.2 iOS アプリの使用許諾（EULA）',
            paragraphs: [
              'App Store から取得したアプリのソフトウェア使用許諾には、対象ストアで別途カスタム EULA を提供していない限り、Apple の標準エンドユーザー使用許諾契約（EULA）が適用されます。本ページは AIRI 公式サービスの利用規則です。適用されるソフトウェアおよびオープンソースのライセンスは引き続き有効です。',
            ],
            links: [
              {
                label: 'Apple 標準 EULA',
                url: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
              },
            ],
          },
          {
            id: 'third-party',
            title: '7. 第三者サービスとオープンソース',
            paragraphs: [
              'アプリは Apple、RevenueCat、AI・音声提供者、PostHog、および任意の天気機能で使用する MET Norway に依存する場合があります。各サービスにはそれぞれの規約が適用される場合があり、継続的な利用可能性を当方が管理することはできません。送信先はプライバシーポリシーをご確認ください。',
              'AIRI Lite にはオープンソースソフトウェアが含まれます。各ライセンスは引き続き適用され、本規約はライセンスで付与された権利を制限しません。',
            ],
          },
          {
            id: 'availability',
            title: '8. 提供、変更、終了',
            paragraphs: [
              '機能の保守、変更、制限、終了を行う場合があります。セキュリティ上の理由、違法行為、重大な規約違反に対してアクセスを停止することがあり、合理的に可能な場合は通知します。',
              'いつでも利用を停止し、アプリ内でアカウント削除を申請できます。アカウント削除によって完了済み App Store 取引が自動的に取り消されたり、Apple 管理のサブスクリプションが自動解約されたりすることはありません。',
            ],
          },
          {
            id: 'disclaimer',
            title: '9. 免責事項と責任制限',
            paragraphs: [
              '法律で許される最大限の範囲で、本サービスは「現状有姿」かつ「提供可能な状態」で提供され、継続提供、無エラー、特定目的への適合を保証しません。',
              '法律で許される最大限の範囲で、間接的、付随的、特別、結果的損害、データ損失、利益損失について責任を負いません。法律上除外できない消費者の権利や責任を除外するものではありません。',
            ],
          },
          {
            id: 'changes',
            title: '10. 変更とお問い合わせ',
            paragraphs: [
              '本規約を更新し、発効日を変更する場合があります。重要な変更は合理的な方法で事前に通知し、その後も利用を続けた場合は改定規約に同意したものとみなします。',
              '規約、アカウント、購入、プライバシーに関するお問い合わせは support-airi@moeru.ai へお送りください。文書の訂正は下部の GitHub リポジトリにも報告できます。公開 Issue に個人データを記載しないでください。',
            ],
          },
        ],
      },
      'account-deletion': {
        title: 'アカウント削除',
        effectiveDate: '2026年11月13日',
        description: 'AIRI Lite アカウントと関連データを削除する方法。',
        summary: 'メインサイトへのアクセスやサポートへの連絡なしで、AIRI Lite アプリ内から直接アカウント削除を申請できます。',
        highlights: [
          { symbol: '1', text: '「設定 → アカウント」から**アプリ内で開始**します。' },
          { symbol: '2', text: '**確認後に削除**します。メール確認は不要です。本人確認を求められた場合はアプリの案内に従ってください。' },
          { symbol: '3', text: '**削除は取り消せません。**再利用には新しいアカウントが必要です。' },
        ],
        sections: [
          {
            id: 'steps',
            title: 'アカウント削除の手順',
            steps: [
              '**AIRI Lite** にログインし、ステージ画面の設定ボタン、またはキャラクター画面のアプリ設定の入口から **設定** を開きます。',
              '設定の上部にあるプロフィールをタップし、**アカウント** ページを開きます。',
              '下にスクロールし、ログアウトの下にある **アカウントを削除** をタップします。注意事項を読み、求められた確認内容（メールアカウントの場合は登録メールアドレス）を入力して、**完全に削除** をタップします。',
              '本人確認を求められた場合は、アプリの案内に従ってパスワード確認またはログインサービスでの再認証を完了します。削除が成功すると「アカウントを削除しました」と表示され、ログイン画面に戻ります。メール内のリンクを開く必要はありません。',
            ],
          },
          {
            id: 'deleted',
            title: '削除される内容',
            items: [
              'アカウント削除では、プロフィール、ログインの関連付け、およびキャラクターカードやアップロードしたモデルなどの関連クラウド資源を処理します。',
              '過去の会話、取引、使用量、診断記録、バックアップの一部が残る場合があります。詳細はプライバシーポリシーをご確認ください。',
              '製品分析の識別子はアカウントとの新たな関連付けを停止します。削除前にいつでも分析をオフにできます。',
              '同期の無効化、ローカルコピーの削除、アンインストールでは、クラウド上の内容は自動削除されません。',
            ],
            note: '削除対象の範囲や個人データの権利については support-airi@moeru.ai までご連絡ください。パスワードや認証コードは送信しないでください。',
          },
          {
            id: 'local',
            title: '端末内に保存されたデータ',
            paragraphs: [
              'アカウント削除は主にサーバー上のアカウントデータを処理します。会話履歴、メモリ、カスタムチャット背景、キャッシュ、その他の端末内データも削除するには、アプリ内の各削除機能を使用するか、端末から AIRI Lite をアンインストールしてください。',
            ],
          },
          {
            id: 'before',
            title: '削除前の注意事項',
            items: [
              'アカウント削除は取り消せません。',
              '未使用の Flux などのデジタル権利はアカウント削除に伴い失われる場合があります。',
              'アカウント削除は Apple への返金申請や、Apple が管理するサブスクリプションの解約を自動的には行いません。',
              '購入または返金処理中の場合は、必要な Apple の取引記録を先に保管してください。',
              '次回以降の更新を望まない場合は、Apple のサブスクリプション管理ページで自動更新を解約してください。サブスクリプションの解約と AIRI アカウントの削除は別の操作です。',
            ],
            links: [
              { label: 'Apple のサブスクリプション管理', url: 'https://apps.apple.com/account/subscriptions' },
            ],
          },
          {
            id: 'help',
            title: 'サインインできない場合',
            paragraphs: [
              'アカウントはアプリ内から直接削除できます。個人データの開示、訂正、削除、その他のプライバシーに関するお問い合わせは support-airi@moeru.ai までご連絡ください。パスワードや認証コードを送信したり、公開 GitHub Issue に個人データを書き込んだりしないでください。',
            ],
            links: [
              { label: 'サポートリポジトリを開く', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
    },
  },
}
