const 数据文件 = "course-data.json";
const 本地课程数据 = JSON.parse(`{
  "brand": "知行新商学",
  "projectName": "企业AI转型官",
  "subtitle": "2026 · AI智能转型",
  "positioning": "做帮企业推动 AI 变革的人，而不只是会用 AI 的人",
  "wechat": "xhcc5277",
  "heroPoints": [
    {
      "name": "AI 转型顾问",
      "text": "帮企业做一次 AI 诊断 + 改造方案，报价 15 万-50 万。"
    },
    {
      "name": "企业 AI 负责人",
      "text": "年薪 80 万-150 万，各行业疯抢。"
    },
    {
      "name": "降本增效操盘手",
      "text": "帮企业一个部门省 50 万/年人力成本，成为不可替代的人。"
    }
  ],
  "comparison": [
    {
      "title": "AI转型官",
      "badge": "超值版",
      "items": [
        {
          "label": "学什么",
          "text": "怎么诊断企业、设计系统、推动落地"
        },
        {
          "label": "学完做什么",
          "text": "带领团队做 AI 转型，成为企业核心骨干"
        },
        {
          "label": "获得什么",
          "text": "一整套企业 AI 改造方案、可运行系统与能力认证"
        },
        {
          "label": "成为角色",
          "text": "企业里最懂 AI 的人"
        }
      ]
    },
    {
      "title": "AI操盘手",
      "badge": "",
      "items": [
        {
          "label": "学什么",
          "text": "20+ AI 工具怎么用"
        },
        {
          "label": "学完做什么",
          "text": "个人效率飞跃，做副业赚钱"
        },
        {
          "label": "获得什么",
          "text": "12 个 AI 系统成品"
        },
        {
          "label": "成为角色",
          "text": "AI 高手"
        }
      ]
    }
  ],
  "outcomes": [
    {
      "title": "AI 底层认知重塑",
      "text": "彻底理解大模型原理和能力边界，面对业务问题时，秒判 AI 能不能解决、该用什么方式解决。"
    },
    {
      "title": "企业 AI 诊断方法论",
      "text": "像咨询顾问一样诊断企业，完成成熟度评估、流程拆解、ROI 测算、项目优先级排序，并带回一份完整的企业 AI 改造方案。"
    },
    {
      "title": "AI 系统架构设计",
      "text": "从做 Demo 升级到设计系统，掌握企业级架构模式、数据流设计和知识库优化，搭出团队能直接使用的系统。"
    },
    {
      "title": "AI 风险管理与合规",
      "text": "用风险评估框架和企业 AI 使用规范，把法务、IT、老板最关心的问题提前解决。"
    },
    {
      "title": "组织推动与变革管理",
      "text": "拆解针对性工作，拿到团队认可，带走企业 AI 改造 90 天落地路线图。"
    }
  ],
  "schedule": [
    {
      "title": "入营前须知",
      "text": "提交企业资料、痛点清单，教学团队提前诊断并锁定改造课题。"
    },
    {
      "title": "第 1 个周末（面授 Day 1-2）",
      "text": "AI 原理认知重塑、企业诊断方法论、系统架构设计、分组实战工作坊。"
    },
    {
      "title": "实践期 A（2 周）",
      "text": "回公司做真实诊断，搭建 AI 系统原型，找同事试用，线上辅导推进。"
    },
    {
      "title": "第 2 个周末（面授 Day 3-4）",
      "text": "实践复盘、系统升级、风险管理、使用规范、组织推动和项目汇报。"
    },
    {
      "title": "实践期 B（2 周）",
      "text": "企业内 AI 改造项目推广，并完成能力认证。"
    }
  ],
  "deliverables": [
    {
      "title": "一套完整的企业 AI 转型成果",
      "items": [
        "企业 AI 成熟度评估报告",
        "业务流程 AI 改造机会地图（含 ROI 测算）",
        "AI 系统架构设计方案",
        "一个在企业内已有使用的 AI 系统",
        "企业 AI 使用规范",
        "给老板的 AI 项目汇报 PPT",
        "90 天 AI 落地路线图",
        "结业路演完整资料包"
      ]
    },
    {
      "title": "10 套方法论工具包",
      "items": [
        "AI 技术选型决策树",
        "AI 能力边界清单",
        "企业 AI 成熟度评估框架",
        "流程拆解五步法工作表",
        "AI 改造四象限评估模板",
        "ROI 测算公式与案例",
        "5 种架构模式手册",
        "AI 风险管理框架",
        "AI 使用规范模板",
        "90 天落地路线图模板"
      ]
    },
    {
      "title": "能力认证 + 职业价值",
      "items": [
        "AI 转型官能力认证证书",
        "个人 AI 能力档案，可用于求职或内部晋升",
        "进入 AI 人才库，可被推荐至有 AI 转型需求的企业",
        "复训权益：技术更新，你的知识也更新"
      ]
    },
    {
      "title": "额外价值",
      "items": [
        "课程结束后，教学团队为每位学员的企业老板出具一份报告：AI 能力评估、已完成项目效果和企业 AI 转型建议。"
      ]
    }
  ],
  "audiences": [
    {
      "title": "企业中高层 / 部门负责人",
      "text": "老板说“我们要搞 AI”，你需要成为那个能落地的人。"
    },
    {
      "title": "创业者 / 小企业主",
      "text": "想用 AI 改造自己的企业，但不知道从哪入手、怎么避坑。"
    },
    {
      "title": "想转型 AI 赛道的职场人",
      "text": "从“会用 AI 工具”到“能做 AI 咨询”，职业身价翻倍。"
    },
    {
      "title": "已完成操盘手课程的学员",
      "text": "工具都会了，但回到企业推不动，这门课解决的是推动的问题。"
    }
  ],
  "pricing": {
    "price": "10万",
    "unit": "人",
    "includes": [
      "4天面授",
      "4次线上辅导",
      "导师全程跟进",
      "能力认证",
      "复训权益",
      "企业定制化成果"
    ],
    "requirements": "已完成 AI 高阶操盘手 2 天 1 夜课程，或具备同等 AI 工具使用能力。",
    "classSize": "8-12 人精品小班",
    "location": "浙江省杭州市西湖区文二西路669号西溪智慧大厦5楼",
    "date": "2026年4月25日-2026年4月26日"
  },
  "faqs": [
    {
      "question": "这门课和 AI 高阶操盘手有什么关系？",
      "answer": "AI 高阶操盘手更偏工具与个人效率，企业 AI 转型官是在此基础上继续升级，重点训练企业诊断、方案设计、系统架构、ROI 测算和组织推动。"
    },
    {
      "question": "4 天面授结束后，还会继续辅导吗？",
      "answer": "会。课程不是 4 天结束，而是一个月的转型项目，中间包含实践期和线上辅导，帮助你把企业内的真实 AI 改造项目推进下去。"
    },
    {
      "question": "学完能拿到什么具体成果？",
      "answer": "你会带走企业 AI 成熟度评估报告、业务流程 AI 改造机会地图、系统架构方案、AI 使用规范、90 天落地路线图和给老板汇报的 PPT。"
    },
    {
      "question": "为什么价格是 10 万/人？",
      "answer": "这不是普通工具课，而是带真实企业问题交付转型成果的小班项目课。课程包含 4 天面授、4 次线上辅导、导师跟进、能力认证和企业定制化成果。"
    },
    {
      "question": "如何报名或确认自己是否适合？",
      "answer": "请先添加知行小助理微信 xhcc5277，说明你的岗位、企业情况和已掌握的 AI 工具能力，老师会协助判断是否适合进入本期班。"
    }
  ],
  "closing": [
    "别人还在“学 AI”，你已经拿着数据向老板汇报 ROI 了。",
    "别人还在做 Demo 发朋友圈，你已经靠着 AI 项目升职加薪了。"
  ]
}`);

const 获取 = (选择器) => document.querySelector(选择器);
const 获取全部 = (选择器) => [...document.querySelectorAll(选择器)];

let 报名微信 = "";

// 读取课程数据，后续可在这里替换为 Supabase 请求。
async function 读取数据() {
  try {
    const 响应 = await fetch(数据文件);
    if (!响应.ok) {
      throw new Error("课程数据加载失败");
    }
    return await 响应.json();
  } catch (错误) {
    console.warn("使用内嵌课程数据", 错误);
    return 本地课程数据;
  }
}

function 设置文本(选择器, 内容) {
  const 节点 = 获取(选择器);
  if (节点) 节点.textContent = 内容;
}

function 创建节点(标签, 类名, 文本) {
  const 节点 = document.createElement(标签);
  if (类名) 节点.className = 类名;
  if (文本) 节点.textContent = 文本;
  return 节点;
}

function 渲染亮点(亮点列表) {
  const 容器 = 获取("[data-hero-points]");
  亮点列表.forEach((亮点) => {
    const 卡片 = 创建节点("article", "feature-card");
    卡片.append(创建节点("h3", "", 亮点.name), 创建节点("p", "", 亮点.text));
    容器.append(卡片);
  });
}

function 渲染对比(对比列表) {
  const 容器 = 获取("[data-comparison]");
  对比列表.forEach((课程, 索引) => {
    const 卡片 = 创建节点("article", `comparison-card ${索引 === 0 ? "is-primary" : ""}`);
    const 标题行 = 创建节点("div", "title-row");
    标题行.append(创建节点("h3", "", 课程.title));
    if (课程.badge) 标题行.append(创建节点("span", "badge", 课程.badge));
    卡片.append(标题行);

    课程.items.forEach((条目) => {
      const 项 = 创建节点("div", "comparison-item");
      项.append(创建节点("strong", "", 条目.label), 创建节点("p", "", 条目.text));
      卡片.append(项);
    });

    容器.append(卡片);
  });
}

function 渲染收获(收获列表) {
  const 容器 = 获取("[data-outcomes]");
  收获列表.forEach((收获) => {
    const 卡片 = 创建节点("article", "outcome-card");
    卡片.append(创建节点("h3", "", 收获.title), 创建节点("p", "", 收获.text));
    容器.append(卡片);
  });
}

function 渲染时间线(阶段列表) {
  const 容器 = 获取("[data-schedule]");
  阶段列表.forEach((阶段) => {
    const 项 = 创建节点("article", "timeline-item");
    项.append(创建节点("h3", "", 阶段.title), 创建节点("p", "", 阶段.text));
    容器.append(项);
  });
}

function 渲染清单(容器, 列表) {
  const 清单 = 创建节点("ul", "check-list");
  列表.forEach((文本) => 清单.append(创建节点("li", "", 文本)));
  容器.append(清单);
}

function 渲染交付物(交付列表) {
  const 容器 = 获取("[data-deliverables]");
  交付列表.forEach((交付) => {
    const 卡片 = 创建节点("article", "deliverable-card");
    卡片.append(创建节点("h3", "", 交付.title));
    渲染清单(卡片, 交付.items);
    容器.append(卡片);
  });
}

function 渲染人群(人群列表) {
  const 容器 = 获取("[data-audiences]");
  人群列表.forEach((人群) => {
    const 卡片 = 创建节点("article", "audience-card");
    卡片.append(创建节点("h3", "", 人群.title), 创建节点("p", "", 人群.text));
    容器.append(卡片);
  });
}

function 渲染费用(费用) {
  设置文本("[data-price]", 费用.price);
  设置文本("[data-unit]", 费用.unit);
  设置文本("[data-requirements]", 费用.requirements);
  设置文本("[data-class-size]", 费用.classSize);
  设置文本("[data-location]", 费用.location);
  设置文本("[data-date]", 费用.date);

  const 容器 = 获取("[data-includes]");
  费用.includes.forEach((项目) => 容器.append(创建节点("span", "include-pill", 项目)));
}

function 渲染问题(问题列表) {
  const 容器 = 获取("[data-faqs]");
  问题列表.forEach((问题) => {
    const 项 = 创建节点("article", "faq-item");
    const 按钮 = 创建节点("button", "faq-question", 问题.question);
    const 答案 = 创建节点("div", "faq-answer");
    按钮.type = "button";
    按钮.addEventListener("click", () => 项.classList.toggle("is-open"));
    答案.append(创建节点("p", "", 问题.answer));
    项.append(按钮, 答案);
    容器.append(项);
  });
}

function 渲染结尾(文案列表) {
  const 容器 = 获取("[data-closing]");
  if (!容器) return;
  文案列表.forEach((文案) => 容器.append(创建节点("p", "closing-line", 文案)));
}

function 显示提示(文本) {
  const 提示 = 获取("[data-toast]");
  提示.textContent = 文本;
  提示.classList.add("is-visible");
  window.setTimeout(() => 提示.classList.remove("is-visible"), 1800);
}

function 备用复制(文本) {
  const 输入框 = 创建节点("textarea");
  输入框.value = 文本;
  输入框.setAttribute("readonly", "");
  输入框.style.position = "fixed";
  输入框.style.opacity = "0";
  document.body.append(输入框);
  输入框.select();
  document.execCommand("copy");
  输入框.remove();
}

async function 写入剪贴板(文本) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(文本);
    return;
  }
  备用复制(文本);
}

async function 复制微信() {
  if (!报名微信) return;
  try {
    await 写入剪贴板(报名微信);
    显示提示(`已复制报名微信：${报名微信}`);
  } catch {
    显示提示(`报名微信：${报名微信}`);
  }
}

function 绑定复制按钮() {
  获取全部("[data-copy-wechat]").forEach((按钮) => {
    按钮.addEventListener("click", 复制微信);
  });
}

function 渲染页面(数据) {
  报名微信 = 数据.wechat;
  设置文本("[data-subtitle]", 数据.subtitle);
  设置文本("[data-project-name]", 数据.projectName);
  设置文本("[data-positioning]", 数据.positioning);
  设置文本("[data-wechat]", 数据.wechat);
  渲染亮点(数据.heroPoints);
  渲染对比(数据.comparison);
  渲染收获(数据.outcomes);
  渲染时间线(数据.schedule);
  渲染交付物(数据.deliverables);
  渲染人群(数据.audiences);
  渲染费用(数据.pricing);
  渲染问题(数据.faqs);
  渲染结尾(数据.closing);
}

async function 初始化() {
  const 数据 = await 读取数据();
  渲染页面(数据);
  绑定复制按钮();
}

初始化().catch((错误) => {
  console.error(错误);
  获取("main").innerHTML = '<section class="section"><h1>课程数据加载失败</h1><p>请通过本地服务打开页面。</p></section>';
});
