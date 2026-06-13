const 数据文件 = "course-data.json";

const 获取 = (选择器) => document.querySelector(选择器);
const 获取全部 = (选择器) => [...document.querySelectorAll(选择器)];

let 报名微信 = "";

// 读取课程数据，后续可在这里替换为 Supabase 请求。
async function 读取数据() {
  const 响应 = await fetch(数据文件);
  if (!响应.ok) {
    throw new Error("课程数据加载失败");
  }
  return 响应.json();
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
