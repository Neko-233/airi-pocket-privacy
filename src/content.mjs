export const pageOrder = ['privacy', 'terms', 'account-deletion']

export const pageModifiedDates = {
  privacy: '2026-08-04',
  terms: '2026-08-03',
  'account-deletion': '2026-08-03',
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
        effectiveDate: '2026 年 8 月 4 日',
        description: 'AIRI Lite iOS 应用的隐私政策。',
        summary: '本政策说明 AIRI Lite 在提供账号、AI 对话、语音、购买和可选产品分析功能时如何处理数据。',
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
              '**AI 功能内容：**仅在您明确允许后，为生成回复，您发送的文字、相关对话上下文以及您选择或确认的相关记忆片段会通过加密连接发送至 AIRI 官方服务及完成请求所需的第三方 AI 服务提供商。使用语音合成时，待朗读文本也会被发送至第三方语音服务提供商。',
              '**购买与权益数据：**所选商品、交易或收据验证标识、购买状态、Flux 余额及履约记录。付款由 Apple 处理，我们不会获得完整银行卡信息。',
              '**可选产品分析：**开启后会处理应用版本、页面类别、功能操作及结果、功能入口、登录或输入方式、模型或服务类别、性能耗时、消息数量、Flux 余额、所选套餐与购买流程阶段，以及账号或设备分析标识。不会包含聊天正文、提示词、回复正文、姓名、电子邮件、令牌、完整 URL、用户填写的名称或原始错误详情。',
              '**网络与安全信息：**服务器在接收请求时可能处理 IP 地址、请求时间、响应状态和防滥用安全记录。',
              '**设备本地数据：**对话历史、已确认记忆、记忆候选、自定义聊天背景、偏好设置、缓存、日志和临时上下文保存在应用容器内。相关记忆在与当前请求有关时可能作为上下文随聊天请求发送。',
            ],
            note: 'AIRI Lite 不请求精确位置，不出售个人数据，也不使用数据进行跨应用广告追踪。',
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
            ],
          },
          {
            id: 'sharing',
            title: '5. 服务提供商与共享',
            paragraphs: [
              '我们只在提供功能、保障安全或履行法律义务所必需的范围内向服务提供商传输数据。这些服务商可能包括 Apple（登录、应用分发与应用内购买）、AIRI 官方后端、第三方 AI 与语音服务提供商，以及仅在您开启分析时使用的 PostHog。',
              '我们要求所有可访问用户数据的第三方提供与本政策及 Apple 要求相同或同等水平的数据保护。',
              '我们不会出售或出租个人数据。除非法律要求、保护用户或服务安全，或在业务承接且继续受本政策约束的情况下，我们不会向其他方披露个人数据。',
            ],
            links: [
              { label: 'Apple 隐私政策', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog 隐私政策', url: 'https://posthog.com/privacy' },
            ],
          },
          {
            id: 'retention',
            title: '6. 保存期限',
            paragraphs: [
              '设备本地数据会保留至您在应用内删除、清除应用数据或卸载应用。账号和服务数据通常在账号存续期间保留；发起账号删除后，可删除的关联数据会被删除或去标识化。',
              '为完成退款、财务审计、防欺诈、安全和法定义务，部分交易与安全记录可能按必要期限保留。备份中的残余副本会在正常轮换周期内清除。',
            ],
          },
          {
            id: 'choices',
            title: '7. 您的选择与权利',
            items: [
              '在“设置 → 数据与隐私”允许或拒绝 AI 服务处理聊天内容；关闭后，应用会停止向 AIRI 官方服务及第三方 AI 与语音服务提供商发送新的聊天或试听内容。',
              '在“设置 → 数据与隐私”开启或关闭产品分析。',
              '在应用内查看、编辑、取消置顶或删除本地记忆，并可清除自定义聊天背景。',
              '通过 iOS 设置管理照片、麦克风和通知等系统权限。',
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
              '账号删除请优先使用应用内入口。其他隐私问题或文档更正可通过本页底部的 GitHub 仓库联系我们；请勿在公开 Issue 中填写电子邮件、账号标识、交易信息或其他个人数据。',
            ],
            links: [
              { label: 'AIRI Lite 隐私仓库', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: '服务条款',
        effectiveDate: '2026 年 8 月 3 日',
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
              '您保留对自己提交内容的权利。为按您的要求运行服务，您授予我们一项有限、非独占、可撤销的许可，仅用于传输、处理和生成对应结果。',
              '不要提交您无权处理的高度敏感、机密或受限制信息。您负责在分享或使用输出前进行审查。',
            ],
          },
          {
            id: 'purchases',
            title: '6. 购买、Flux 与退款',
            paragraphs: [
              '应用内购买由 Apple 的 StoreKit 和您的 App Store 账号处理。价格、税费、退款和付款方式受 Apple 规则及购买界面显示的信息约束。',
              'Flux 或其他数字权益仅用于 AIRI Lite 中明确显示的功能，不是货币，不可兑换现金或转让。除法律或 Apple 规则另有要求外，已消耗的数字权益通常不可退还。',
            ],
            links: [
              { label: 'Apple 媒体服务条款', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'third-party',
            title: '7. 第三方与开源组件',
            paragraphs: [
              '应用可能依赖 Apple、AI/语音提供商、PostHog 或其他第三方服务。第三方服务可能受其自己的条款约束，且我们不控制其持续可用性。',
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
              '有关条款或文档的问题可通过本页底部的 GitHub 仓库反馈。请勿在公开 Issue 中提交个人数据。',
            ],
          },
        ],
      },
      'account-deletion': {
        title: '账号删除',
        effectiveDate: '2026 年 8 月 3 日',
        description: '如何删除 AIRI Lite 账号和关联数据。',
        summary: '您可以直接在 AIRI Lite 内发起账号删除，无需访问主站或联系客服。',
        highlights: [
          { symbol: '1', text: '**在应用内发起**，入口位于“数据与隐私”。' },
          { symbol: '2', text: '**按提示验证**，服务器可能要求邮件确认或重新登录。' },
          { symbol: '3', text: '**不可撤销**，完成后需创建新账号才能再次使用。' },
        ],
        sections: [
          {
            id: 'steps',
            title: '删除步骤',
            steps: [
              '打开 **AIRI Lite** 并进入角色页的设置。',
              '选择 **数据与隐私**。',
              '轻点 **删除账号**，阅读说明后选择 **继续删除**。',
              '如服务器要求，请完成邮件确认或重新登录验证。请求被接受后，应用会在本机退出登录。',
            ],
          },
          {
            id: 'deleted',
            title: '会删除什么',
            items: [
              '账号资料、登录关联和可删除的服务端用户数据。',
              '与账号关联且不再需要的服务状态和权益记录。',
              '可归属于账号的产品分析身份会停止继续关联；分析偏好可在删除前随时关闭。',
            ],
            note: '部分交易、安全、防欺诈或审计记录可能依据法律和正当业务需要保留，并在可行时去标识化。',
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
            ],
          },
          {
            id: 'help',
            title: '无法登录或需要帮助',
            paragraphs: [
              '如果无法进入应用内删除入口，请通过本页底部的 GitHub 仓库报告“无法访问账号删除入口”。公开反馈中不要填写电子邮件、用户 ID、交易号或其他个人数据；我们会提供下一步安全处理方式。',
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
        effectiveDate: '2026 年 8 月 4 日',
        description: 'AIRI Lite iOS 應用程式的隱私權政策。',
        summary: '本政策說明 AIRI Lite 在提供帳號、AI 對話、語音、購買及選用產品分析功能時如何處理資料。',
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
              '**AI 功能內容：**只有在您明確允許後，為產生回覆，您傳送的文字、相關對話內容，以及您選擇或確認的相關記憶片段，才會透過加密連線傳送至 AIRI 官方服務及完成請求所需的第三方 AI 服務供應商。使用語音合成時，待朗讀文字亦會傳送至第三方語音服務供應商。',
              '**購買與權益資料：**所選商品、交易或收據驗證識別碼、購買狀態、Flux 餘額及履約紀錄。付款由 Apple 處理，我們不會取得完整的信用卡資料。',
              '**選用產品分析：**開啟後會處理應用程式版本、頁面類別、功能操作及結果、功能入口、登入或輸入方式、模型或服務類別、效能耗時、訊息數量、Flux 餘額、所選方案與購買流程階段，以及帳號或裝置分析識別碼。不包含聊天正文、提示詞、回覆正文、姓名、電子郵件、權杖、完整 URL、使用者填寫的名稱或原始錯誤詳情。',
              '**網路與安全資訊：**伺服器接收請求時可能處理 IP 位址、請求時間、回應狀態及防濫用安全紀錄。',
              '**裝置本機資料：**對話紀錄、已確認記憶、記憶候選、自訂聊天背景、偏好設定、快取、記錄及暫時內容保存在應用程式容器。相關記憶在與目前請求有關時，可能作為內容隨聊天請求傳送。',
            ],
            note: 'AIRI Lite 不要求精確位置、不出售個人資料，也不使用資料進行跨應用程式廣告追蹤。',
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
            ],
          },
          {
            id: 'sharing',
            title: '5. 服務供應商與分享',
            paragraphs: [
              '我們僅在提供功能、確保安全或履行法律義務所需的範圍內，向服務供應商傳輸資料。這些供應商可能包括 Apple（登入、應用程式發佈與 App 內購買）、AIRI 官方後端、第三方 AI 與語音服務供應商，以及僅在您開啟分析時使用的 PostHog。',
              '我們要求所有可存取使用者資料的第三方，提供與本政策及 Apple 要求相同或同等程度的資料保護。',
              '我們不會出售或出租個人資料。除非法律要求、為保護使用者或服務安全，或在業務承接且持續受本政策約束的情況下，我們不會向其他方揭露個人資料。',
            ],
            links: [
              { label: 'Apple 隱私權政策', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog 隱私權政策', url: 'https://posthog.com/privacy' },
            ],
          },
          {
            id: 'retention',
            title: '6. 保存期限',
            paragraphs: [
              '裝置本機資料會保留至您在應用程式內刪除、清除應用程式資料或解除安裝。帳號與服務資料通常於帳號存續期間保留；提出帳號刪除後，可刪除的關聯資料將被刪除或去識別化。',
              '為完成退款、財務稽核、防詐騙、安全及法定義務，部分交易與安全紀錄可能依必要期限保留。備份中的殘留副本會在正常輪替週期內清除。',
            ],
          },
          {
            id: 'choices',
            title: '7. 您的選擇與權利',
            items: [
              '在「設定 → 資料與隱私」允許或拒絕 AI 服務處理聊天內容；關閉後，應用程式會停止向 AIRI 官方服務及第三方 AI 與語音服務供應商傳送新的聊天或試聽內容。',
              '在「設定 → 資料與隱私」開啟或關閉產品分析。',
              '在應用程式內檢視、編輯、取消置頂或刪除本機記憶，並可清除自訂聊天背景。',
              '透過 iOS 設定管理照片、麥克風與通知等系統權限。',
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
              '帳號刪除請優先使用應用程式內入口。其他隱私問題或文件修正可透過本頁底部的 GitHub 儲存庫聯絡我們；請勿在公開 Issue 中填寫電子郵件、帳號識別碼、交易資訊或其他個人資料。',
            ],
            links: [
              { label: 'AIRI Lite 隱私儲存庫', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: '服務條款',
        effectiveDate: '2026 年 8 月 3 日',
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
              '您保留對自己提交內容的權利。為依您的要求運作服務，您授予我們有限、非專屬、可撤銷的許可，僅用於傳輸、處理及產生對應結果。',
              '請勿提交您無權處理的高度敏感、機密或受限制資訊。分享或使用輸出前，您有責任進行審查。',
            ],
          },
          {
            id: 'purchases',
            title: '6. 購買、Flux 與退款',
            paragraphs: [
              'App 內購買由 Apple StoreKit 與您的 App Store 帳號處理。價格、稅費、退款及付款方式受 Apple 規則與購買介面顯示資訊約束。',
              'Flux 或其他數位權益僅供 AIRI Lite 中明確顯示的功能使用，不是貨幣、不可兌換現金或轉讓。除法律或 Apple 規則另有要求外，已使用的數位權益通常不予退款。',
            ],
            links: [
              { label: 'Apple 媒體服務條款', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'third-party',
            title: '7. 第三方與開源元件',
            paragraphs: [
              '應用程式可能依賴 Apple、AI／語音供應商、PostHog 或其他第三方服務。第三方服務可能受其自身條款約束，且我們無法控制其持續可用性。',
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
              '條款或文件問題可透過本頁底部的 GitHub 儲存庫回報。請勿在公開 Issue 中提交個人資料。',
            ],
          },
        ],
      },
      'account-deletion': {
        title: '帳號刪除',
        effectiveDate: '2026 年 8 月 3 日',
        description: '如何刪除 AIRI Lite 帳號與關聯資料。',
        summary: '您可直接在 AIRI Lite 內提出帳號刪除，無需造訪主站或聯絡客服。',
        highlights: [
          { symbol: '1', text: '**在應用程式內提出**，入口位於「資料與隱私」。' },
          { symbol: '2', text: '**依提示驗證**，伺服器可能要求電子郵件確認或重新登入。' },
          { symbol: '3', text: '**無法撤銷**，完成後需建立新帳號才能再次使用。' },
        ],
        sections: [
          {
            id: 'steps',
            title: '刪除步驟',
            steps: [
              '開啟 **AIRI Lite** 並進入角色頁的設定。',
              '選擇 **資料與隱私**。',
              '點一下 **刪除帳號**，閱讀說明後選擇 **繼續刪除**。',
              '如伺服器要求，請完成電子郵件確認或重新登入驗證。請求獲接受後，應用程式會在本機登出。',
            ],
          },
          {
            id: 'deleted',
            title: '將刪除的內容',
            items: [
              '帳號資料、登入關聯及可刪除的伺服器端使用者資料。',
              '與帳號關聯且不再需要的服務狀態及權益紀錄。',
              '可歸屬於帳號的產品分析身分將停止繼續關聯；分析偏好可在刪除前隨時關閉。',
            ],
            note: '部分交易、安全、防詐騙或稽核紀錄可能因法律與正當業務需要保留，並在可行時去識別化。',
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
            ],
          },
          {
            id: 'help',
            title: '無法登入或需要協助',
            paragraphs: [
              '若無法進入應用程式內的刪除入口，請透過本頁底部的 GitHub 儲存庫回報「無法存取帳號刪除入口」。公開回報中請勿填寫電子郵件、使用者 ID、交易號或其他個人資料；我們會提供下一步安全處理方式。',
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
        effectiveDate: 'August 4, 2026',
        description: 'Privacy Policy for the AIRI Lite iOS app.',
        summary: 'This policy explains how AIRI Lite handles data when providing accounts, AI chat, voice, purchases, and optional product analytics.',
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
              '**AI feature content:** only after you explicitly allow it, the text you send, relevant conversation context, and relevant memory excerpts you selected or confirmed are sent over encrypted connections to AIRI official services and third-party AI service providers needed to fulfill your request. When speech synthesis is used, the text to be spoken is also sent to third-party speech service providers.',
              '**Purchases and entitlements:** selected products, transaction or receipt-verification identifiers, purchase state, Flux balance, and fulfillment records. Apple processes payment details; we do not receive full payment-card information.',
              '**Optional product analytics:** when enabled, app version, page categories, feature actions and outcomes, entry points, sign-in or input methods, model or service categories, performance timings, message counts, Flux balance, selected plans and purchase-flow stages, and an account or device analytics identifier. Analytics excludes chat content, prompts, response text, names, email addresses, tokens, full URLs, user-entered labels, and raw error details.',
              '**Network and security data:** servers may process IP addresses, request times, response status, and abuse-prevention security records when receiving requests.',
              '**On-device data:** conversation history, confirmed memories, memory suggestions, custom chat backgrounds, preferences, caches, logs, and temporary context are stored in the app container. Relevant memories may be included as context in a chat request when they are useful to that request.',
            ],
            note: 'AIRI Lite does not request precise location, sell personal data, or use data for cross-app advertising tracking.',
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
            ],
          },
          {
            id: 'sharing',
            title: '5. Service providers and sharing',
            paragraphs: [
              'We transfer data to service providers only as needed to provide a feature, keep the service secure, or meet legal obligations. Providers may include Apple for sign-in, app distribution, and in-app purchases; the AIRI official backend; third-party AI and speech service providers; and PostHog only when you enable analytics.',
              'We require every third party that can access user data to provide the same or an equivalent level of protection as this policy and Apple’s requirements.',
              'We do not sell or rent personal data. We do not disclose it to other parties except when required by law, necessary to protect users or the service, or part of a business transfer that remains subject to this policy.',
            ],
            links: [
              { label: 'Apple Privacy Policy', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog Privacy Policy', url: 'https://posthog.com/privacy' },
            ],
          },
          {
            id: 'retention',
            title: '6. Retention',
            paragraphs: [
              'On-device data remains until you delete it in the app, clear app data, or uninstall the app. Account and service data is generally retained while your account remains active. After an account-deletion request, associated data that can be deleted is removed or de-identified.',
              'Some transaction and security records may be retained as necessary for refunds, financial audits, fraud prevention, security, and legal obligations. Residual copies in backups are removed through normal rotation cycles.',
            ],
          },
          {
            id: 'choices',
            title: '7. Your choices and rights',
            items: [
              'Allow or decline AI services processing chat content under Settings → Data & Privacy. Turning it off stops the app from sending new chat or preview content to AIRI official services and third-party AI or speech service providers.',
              'Enable or disable product analytics under Settings → Data & Privacy.',
              'Review, edit, unpin, or delete local memories in the app, and remove a custom chat background.',
              'Manage system permissions such as Photos, Microphone, and Notifications through iOS Settings.',
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
              'Use the in-app flow for account deletion. For other privacy questions or documentation corrections, use the GitHub repository linked below. Do not include email addresses, account identifiers, transaction details, or other personal data in a public issue.',
            ],
            links: [
              { label: 'AIRI Lite privacy repository', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        effectiveDate: 'August 3, 2026',
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
              'You retain your rights in content you submit. To operate the service as you request, you grant us a limited, non-exclusive, revocable license solely to transmit and process that content and generate the requested result.',
              'Do not submit highly sensitive, confidential, or restricted information you are not authorized to process. You are responsible for reviewing output before sharing or using it.',
            ],
          },
          {
            id: 'purchases',
            title: '6. Purchases, Flux, and refunds',
            paragraphs: [
              'In-app purchases are handled through Apple StoreKit and your App Store account. Prices, taxes, refunds, and payment methods are governed by Apple’s rules and the information shown at purchase.',
              'Flux and other digital entitlements may be used only for the AIRI Lite features shown in the app. They are not currency, cannot be redeemed for cash, and cannot be transferred. Consumed digital entitlements are generally non-refundable unless law or Apple policy requires otherwise.',
            ],
            links: [
              { label: 'Apple Media Services Terms', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'third-party',
            title: '7. Third-party and open-source components',
            paragraphs: [
              'The app may rely on Apple, AI or speech providers, PostHog, and other third-party services. Their own terms may apply, and we do not control their continued availability.',
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
              'Questions or documentation corrections may be reported through the GitHub repository linked at the bottom of this page. Do not submit personal data in a public issue.',
            ],
          },
        ],
      },
      'account-deletion': {
        title: 'Account Deletion',
        effectiveDate: 'August 3, 2026',
        description: 'How to delete your AIRI Lite account and associated data.',
        summary: 'You can request account deletion directly inside AIRI Lite without visiting the main website or contacting support.',
        highlights: [
          { symbol: '1', text: '**Start in the app** from Data & Privacy settings.' },
          { symbol: '2', text: '**Complete verification** if the server requests email confirmation or a new sign-in.' },
          { symbol: '3', text: '**Deletion cannot be undone.** You will need a new account to return.' },
        ],
        sections: [
          {
            id: 'steps',
            title: 'How to delete your account',
            steps: [
              'Open **AIRI Lite** and enter Settings from the Character screen.',
              'Select **Data & Privacy**.',
              'Tap **Delete Account**, read the explanation, then choose **Continue Deletion**.',
              'Complete email confirmation or sign-in verification if requested by the server. Once the request is accepted, the app signs you out on this device.',
            ],
          },
          {
            id: 'deleted',
            title: 'What is deleted',
            items: [
              'Your account profile, sign-in associations, and deletable server-side user data.',
              'Service state and entitlement records associated with the account when they are no longer needed.',
              'Product-analytics identity stops being associated with the account. You can turn analytics off at any time before deletion.',
            ],
            note: 'Some transaction, security, fraud-prevention, or audit records may be retained for legal and legitimate business needs and de-identified where practical.',
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
            ],
          },
          {
            id: 'help',
            title: 'If you cannot sign in',
            paragraphs: [
              'If you cannot reach the deletion control in the app, report that you “cannot access account deletion” through the GitHub repository linked below. Do not include your email address, user ID, transaction number, or other personal data in the public report. We will provide a safer next step.',
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
        effectiveDate: '2026年8月4日',
        description: 'AIRI Lite iOS アプリのプライバシーポリシー。',
        summary: '本ポリシーでは、AIRI Lite がアカウント、AI チャット、音声、購入、および任意の製品分析を提供する際のデータ取扱いを説明します。',
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
              '**AI 機能の内容：**明示的に許可した場合に限り、返信生成のため、送信したテキスト、関連する会話コンテキスト、選択または確認した関連メモリの抜粋が、暗号化された接続を通じて AIRI 公式サービスおよび処理に必要な第三者 AI サービス提供者へ送信されます。音声合成を使用する場合、読み上げるテキストも第三者の音声サービス提供者へ送信されます。',
              '**購入と権利情報：**選択商品、取引またはレシート検証識別子、購入状態、Flux 残高、提供記録。支払い情報は Apple が処理し、当方がカード番号全体を受け取ることはありません。',
              '**任意の製品分析：**有効にした場合、アプリバージョン、画面カテゴリ、機能操作と結果、操作入口、サインインまたは入力方法、モデルまたはサービス種別、性能測定時間、メッセージ数、Flux 残高、選択したプランと購入フローの段階、アカウントまたは端末の分析識別子を処理します。チャット本文、プロンプト、返信本文、氏名、メールアドレス、トークン、完全な URL、ユーザーが入力した名称、生のエラー詳細は含みません。',
              '**ネットワークとセキュリティ情報：**サーバーはリクエスト受信時に IP アドレス、時刻、応答状態、不正利用防止のセキュリティ記録を処理する場合があります。',
              '**端末内データ：**会話履歴、確認済みメモリ、メモリ候補、カスタムチャット背景、設定、キャッシュ、ログ、一時コンテキストはアプリコンテナに保存されます。現在のリクエストに有用なメモリは、チャットのコンテキストとして送信される場合があります。',
            ],
            note: 'AIRI Lite は正確な位置情報を要求せず、個人データを販売せず、クロスアプリ広告トラッキングを行いません。',
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
            ],
          },
          {
            id: 'sharing',
            title: '5. サービス提供者と共有',
            paragraphs: [
              '機能提供、安全確保、法的義務の履行に必要な範囲でのみ、サービス提供者へデータを送信します。提供者には、サインイン・アプリ配布・アプリ内購入を扱う Apple、AIRI 公式バックエンド、第三者の AI・音声サービス提供者、分析を有効にした場合のみ利用する PostHog が含まれる場合があります。',
              'ユーザーデータにアクセスできるすべての第三者に対し、本ポリシーおよび Apple の要件と同一または同等の水準でデータを保護することを求めます。',
              '個人データを販売または貸与しません。法律上必要な場合、ユーザーやサービスの安全保護に必要な場合、または本ポリシーに引き続き従う事業承継の場合を除き、他者へ開示しません。',
            ],
            links: [
              { label: 'Apple プライバシーポリシー', url: 'https://www.apple.com/legal/privacy/' },
              { label: 'PostHog プライバシーポリシー', url: 'https://posthog.com/privacy' },
            ],
          },
          {
            id: 'retention',
            title: '6. 保存期間',
            paragraphs: [
              '端末内データは、アプリ内で削除する、アプリデータを消去する、またはアプリをアンインストールするまで保存されます。アカウントとサービスデータは通常、アカウントが有効な間保存されます。削除申請後、削除可能な関連データは削除または匿名化されます。',
              '返金、会計監査、不正利用防止、セキュリティ、法的義務のため、一部の取引・セキュリティ記録を必要な期間保存する場合があります。バックアップ内の残存コピーは通常のローテーションで削除されます。',
            ],
          },
          {
            id: 'choices',
            title: '7. 選択肢と権利',
            items: [
              '「設定 → データとプライバシー」で、AI サービスによるチャット内容の処理を許可または拒否する。無効にすると、AIRI 公式サービスおよび第三者の AI・音声サービス提供者への新しいチャットや試聴内容の送信が停止します。',
              '「設定 → データとプライバシー」で製品分析を有効または無効にする。',
              'アプリ内でローカルメモリを確認、編集、ピン解除、削除し、カスタムチャット背景を削除する。',
              'iOS 設定から写真、マイク、通知などのシステム権限を管理する。',
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
              'アカウント削除はアプリ内の手順をご利用ください。その他のプライバシーに関する質問や文書修正は、下記 GitHub リポジトリへお寄せください。公開 Issue にメールアドレス、アカウント識別子、取引情報、その他の個人データを記載しないでください。',
            ],
            links: [
              { label: 'AIRI Lite プライバシーリポジトリ', url: 'https://github.com/Neko-233/airi-pocket-privacy' },
            ],
          },
        ],
      },
      terms: {
        title: '利用規約',
        effectiveDate: '2026年8月3日',
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
              '送信したコンテンツの権利はユーザーに留保されます。要求されたサービスを運用するため、当方に対し、送信・処理・結果生成に限定した、非独占的で撤回可能なライセンスを付与します。',
              '処理する権限のない高度に機密、秘密、または制限対象の情報を送信しないでください。出力を共有・利用する前に確認する責任があります。',
            ],
          },
          {
            id: 'purchases',
            title: '6. 購入、Flux、返金',
            paragraphs: [
              'アプリ内購入は Apple StoreKit と App Store アカウントで処理されます。価格、税、返金、支払方法には Apple の規則と購入画面の情報が適用されます。',
              'Flux などのデジタル権利は、アプリに表示された AIRI Lite 機能にのみ使用できます。通貨ではなく、現金化や譲渡はできません。法律または Apple の規則で必要な場合を除き、使用済みのデジタル権利は通常返金されません。',
            ],
            links: [
              { label: 'Apple メディアサービス利用規約', url: 'https://www.apple.com/legal/internet-services/itunes/' },
            ],
          },
          {
            id: 'third-party',
            title: '7. 第三者サービスとオープンソース',
            paragraphs: [
              'アプリは Apple、AI／音声提供者、PostHog などの第三者サービスに依存する場合があります。それぞれの規約が適用されることがあり、当方は継続的な利用可能性を管理できません。',
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
              '規約に関する質問や文書修正は、このページ下部の GitHub リポジトリへお寄せください。公開 Issue に個人データを記載しないでください。',
            ],
          },
        ],
      },
      'account-deletion': {
        title: 'アカウント削除',
        effectiveDate: '2026年8月3日',
        description: 'AIRI Lite アカウントと関連データを削除する方法。',
        summary: 'メインサイトへのアクセスやサポートへの連絡なしで、AIRI Lite アプリ内から直接アカウント削除を申請できます。',
        highlights: [
          { symbol: '1', text: '「データとプライバシー」から**アプリ内で開始**します。' },
          { symbol: '2', text: 'メール確認または再ログインを求められた場合は**確認を完了**します。' },
          { symbol: '3', text: '**削除は取り消せません。**再利用には新しいアカウントが必要です。' },
        ],
        sections: [
          {
            id: 'steps',
            title: 'アカウント削除の手順',
            steps: [
              '**AIRI Lite** を開き、キャラクター画面から設定へ進みます。',
              '**データとプライバシー**を選択します。',
              '**アカウントを削除**をタップし、説明を読んで**削除を続ける**を選択します。',
              'サーバーから求められた場合は、メール確認またはサインイン確認を完了します。申請が受理されると、この端末のアプリからサインアウトします。',
            ],
          },
          {
            id: 'deleted',
            title: '削除される内容',
            items: [
              'アカウントプロフィール、サインインの関連付け、削除可能なサーバー上のユーザーデータ。',
              '不要となったアカウント関連のサービス状態と権利記録。',
              '製品分析の識別子はアカウントとの新たな関連付けを停止します。削除前にいつでも分析をオフにできます。',
            ],
            note: '取引、セキュリティ、不正防止、監査の一部記録は、法的または正当な事業上の必要性により保存され、可能な場合は匿名化されることがあります。',
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
            ],
          },
          {
            id: 'help',
            title: 'サインインできない場合',
            paragraphs: [
              'アプリ内の削除機能にアクセスできない場合は、下記 GitHub リポジトリから「アカウント削除にアクセスできない」と報告してください。公開投稿にはメールアドレス、ユーザー ID、取引番号、その他の個人データを記載しないでください。安全な次の手順をご案内します。',
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
