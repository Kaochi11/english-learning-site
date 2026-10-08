/* ============================================================
   data.js — 全站内容数据（纯 JS，无网络依赖）
   ------------------------------------------------------------
   想自己加内容？直接照着下面的格式往下写就行。
   ============================================================ */

/* ------------------------------------------------------------
   1. 单词库
   w = 单词   p = 音标   t = 词性   m = 中文释义
   e = 英文例句   z = 例句翻译   c = 分类 id
   ------------------------------------------------------------ */
var WORD_BANK = [

  /* ===== 日常生活 daily ===== */
  { w: "routine", p: "/ruːˈtiːn/", t: "n./adj.", m: "常规；例行公事；日常的", e: "Exercise is part of my daily routine.", z: "运动是我日常的一部分。", c: "daily" },
  { w: "errand", p: "/ˈerənd/", t: "n.", m: "差事，跑腿的事", e: "I have a few errands to run this afternoon.", z: "今天下午我有几件杂事要办。", c: "daily" },
  { w: "leftover", p: "/ˈleftəʊvə(r)/", t: "n./adj.", m: "剩饭；剩余的", e: "We had leftovers for dinner last night.", z: "昨晚我们把剩菜当晚饭吃了。", c: "daily" },
  { w: "chore", p: "/tʃɔː(r)/", t: "n.", m: "家务活，杂务", e: "Washing dishes is my least favourite chore.", z: "洗碗是我最不喜欢的家务。", c: "daily" },
  { w: "tidy", p: "/ˈtaɪdi/", t: "adj./v.", m: "整齐的；收拾", e: "Please tidy up your desk before you leave.", z: "走之前请把桌子收拾干净。", c: "daily" },
  { w: "appliance", p: "/əˈplaɪəns/", t: "n.", m: "家用电器", e: "The kitchen appliances are all brand new.", z: "厨房电器都是全新的。", c: "daily" },
  { w: "neighbour", p: "/ˈneɪbə(r)/", t: "n.", m: "邻居", e: "Our neighbour helped us move the sofa.", z: "邻居帮我们搬了沙发。", c: "daily" },
  { w: "grocery", p: "/ˈɡrəʊsəri/", t: "n.", m: "食品杂货", e: "I need to buy some groceries on the way home.", z: "回家路上我得买点吃的。", c: "daily" },
  { w: "commute", p: "/kəˈmjuːt/", t: "v./n.", m: "通勤，上下班往返", e: "She commutes to work by subway every day.", z: "她每天坐地铁通勤。", c: "daily" },
  { w: "laundry", p: "/ˈlɔːndri/", t: "n.", m: "要洗的衣物；洗衣", e: "I do the laundry every Sunday morning.", z: "我每周日早上洗衣服。", c: "daily" },
  { w: "utensil", p: "/juːˈtensl/", t: "n.", m: "用具，器皿", e: "Put the cooking utensils back in the drawer.", z: "把厨具放回抽屉里。", c: "daily" },
  { w: "cosy", p: "/ˈkəʊzi/", t: "adj.", m: "舒适温馨的", e: "The little café feels warm and cosy.", z: "这家小咖啡馆又暖和又温馨。", c: "daily" },
  { w: "declutter", p: "/ˌdiːˈklʌtə(r)/", t: "v.", m: "清理杂物，整理收纳", e: "I spent the weekend decluttering my closet.", z: "我周末清理了衣柜。", c: "daily" },
  { w: "bargain", p: "/ˈbɑːɡən/", t: "n./v.", m: "便宜货；讨价还价", e: "This coat was a real bargain.", z: "这件外套真是买得便宜。", c: "daily" },
  { w: "recycle", p: "/ˌriːˈsaɪkl/", t: "v.", m: "回收利用", e: "We recycle paper, glass and plastic at home.", z: "我们在家回收纸、玻璃和塑料。", c: "daily" },

  /* ===== 学习与工作 study ===== */
  { w: "deadline", p: "/ˈdedlaɪn/", t: "n.", m: "截止日期，最后期限", e: "The deadline for the essay is next Friday.", z: "论文的截止日期是下周五。", c: "study" },
  { w: "revision", p: "/rɪˈvɪʒn/", t: "n.", m: "复习；修改", e: "I need to do some revision before the exam.", z: "考试前我需要复习一下。", c: "study" },
  { w: "assignment", p: "/əˈsaɪnmənt/", t: "n.", m: "作业，任务", e: "She finished the assignment ahead of time.", z: "她提前完成了作业。", c: "study" },
  { w: "productive", p: "/prəˈdʌktɪv/", t: "adj.", m: "效率高的，多产的", e: "I had a really productive morning.", z: "我早上效率特别高。", c: "study" },
  { w: "procrastinate", p: "/prəʊˈkræstɪneɪt/", t: "v.", m: "拖延，耽搁", e: "Stop procrastinating and start writing.", z: "别拖了，开始写吧。", c: "study" },
  { w: "concentrate", p: "/ˈkɒnsntreɪt/", t: "v.", m: "集中注意力", e: "It's hard to concentrate in a noisy room.", z: "在吵闹的房间里很难集中注意力。", c: "study" },
  { w: "memorise", p: "/ˈmeməraɪz/", t: "v.", m: "记住，背诵", e: "Don't just memorise the words—use them.", z: "别光背单词，要用起来。", c: "study" },
  { w: "feedback", p: "/ˈfiːdbæk/", t: "n.", m: "反馈，意见", e: "The teacher gave me useful feedback.", z: "老师给了我很有用的反馈。", c: "study" },
  { w: "colleague", p: "/ˈkɒliːɡ/", t: "n.", m: "同事", e: "My colleagues are easy to work with.", z: "我的同事都很好相处。", c: "study" },
  { w: "schedule", p: "/ˈʃedjuːl/", t: "n./v.", m: "日程表；安排", e: "Let's schedule a meeting for Monday.", z: "我们把会议安排在周一吧。", c: "study" },
  { w: "efficient", p: "/ɪˈfɪʃnt/", t: "adj.", m: "高效的", e: "This is a more efficient way to study.", z: "这是更高效的学习方法。", c: "study" },
  { w: "summarise", p: "/ˈsʌməraɪz/", t: "v.", m: "总结，概括", e: "Can you summarise the article in one sentence?", z: "你能用一句话总结这篇文章吗？", c: "study" },
  { w: "deadline-driven", p: "/ˈdedlaɪn ˈdrɪvn/", t: "adj.", m: "被截止日期推着走的", e: "I work best when I'm deadline-driven.", z: "有截止日期压着的时候我状态最好。", c: "study" },
  { w: "distraction", p: "/dɪˈstrækʃn/", t: "n.", m: "干扰，分心的事物", e: "Turn off notifications to avoid distraction.", z: "关掉通知，避免分心。", c: "study" },
  { w: "milestone", p: "/ˈmaɪlstəʊn/", t: "n.", m: "里程碑，重要节点", e: "Finishing this course is a real milestone.", z: "学完这门课是个真正的里程碑。", c: "study" },

  /* ===== 情感与态度 emotion ===== */
  { w: "grateful", p: "/ˈɡreɪtfl/", t: "adj.", m: "感激的", e: "I'm grateful for all your help.", z: "我很感激你的所有帮助。", c: "emotion" },
  { w: "anxious", p: "/ˈæŋkʃəs/", t: "adj.", m: "焦虑的，担心的", e: "She felt anxious before the interview.", z: "面试前她感到焦虑。", c: "emotion" },
  { w: "frustrated", p: "/frʌˈstreɪtɪd/", t: "adj.", m: "沮丧的，受挫的", e: "I get frustrated when I can't find the right word.", z: "想不起合适的词时我会很沮丧。", c: "emotion" },
  { w: "thrilled", p: "/θrɪld/", t: "adj.", m: "非常兴奋的", e: "We're thrilled about the news.", z: "我们对这个消息感到非常兴奋。", c: "emotion" },
  { w: "overwhelmed", p: "/ˌəʊvəˈwelmd/", t: "adj.", m: "不知所措的，被压垮的", e: "I felt overwhelmed by the amount of work.", z: "工作量让我有点招架不住。", c: "emotion" },
  { w: "confident", p: "/ˈkɒnfɪdənt/", t: "adj.", m: "自信的", e: "Practice made me more confident in speaking.", z: "练习让我说话更有自信了。", c: "emotion" },
  { w: "reluctant", p: "/rɪˈlʌktənt/", t: "adj.", m: "不情愿的", e: "He was reluctant to speak in public.", z: "他不愿意当众发言。", c: "emotion" },
  { w: "curious", p: "/ˈkjʊəriəs/", t: "adj.", m: "好奇的", e: "Stay curious and keep asking questions.", z: "保持好奇，继续提问。", c: "emotion" },
  { w: "embarrassed", p: "/ɪmˈbærəst/", t: "adj.", m: "尴尬的", e: "I was embarrassed by my mistake.", z: "我因为犯错感到尴尬。", c: "emotion" },
  { w: "determined", p: "/dɪˈtɜːmɪnd/", t: "adj.", m: "有决心的，坚定的", e: "She's determined to master English.", z: "她决心要掌握英语。", c: "emotion" },
  { w: "sympathetic", p: "/ˌsɪmpəˈθetɪk/", t: "adj.", m: "有同情心的", e: "My friend was sympathetic when I failed.", z: "我失败时朋友很体谅我。", c: "emotion" },
  { w: "content", p: "/kənˈtent/", t: "adj.", m: "满足的，满意的", e: "I feel content with my progress so far.", z: "我对目前的进展感到满意。", c: "emotion" },
  { w: "irritated", p: "/ˈɪrɪteɪtɪd/", t: "adj.", m: "恼火的，烦躁的", e: "The noise left me irritated.", z: "那噪音让我很烦躁。", c: "emotion" },
  { w: "hesitant", p: "/ˈhezɪtənt/", t: "adj.", m: "犹豫的", e: "Don't be hesitant to ask questions.", z: "别犹豫，尽管提问。", c: "emotion" },
  { w: "motivated", p: "/ˈməʊtɪveɪtɪd/", t: "adj.", m: "有动力的，积极的", e: "Small wins keep me motivated.", z: "小小的进步让我保持动力。", c: "emotion" },

  /* ===== 旅行出行 travel ===== */
  { w: "itinerary", p: "/aɪˈtɪnərəri/", t: "n.", m: "行程单，旅行路线", e: "Let me check our travel itinerary.", z: "让我看一下我们的行程安排。", c: "travel" },
  { w: "layover", p: "/ˈleɪəʊvə(r)/", t: "n.", m: "中途停留，转机等待", e: "We have a three-hour layover in Doha.", z: "我们在多哈要转机等三小时。", c: "travel" },
  { w: "boarding pass", p: "/ˈbɔːdɪŋ pɑːs/", t: "n.", m: "登机牌", e: "Please have your boarding pass ready.", z: "请准备好你的登机牌。", c: "travel" },
  { w: "luggage", p: "/ˈlʌɡɪdʒ/", t: "n.", m: "行李", e: "My luggage didn't arrive with the flight.", z: "我的行李没随航班到达。", c: "travel" },
  { w: "reservation", p: "/ˌrezəˈveɪʃn/", t: "n.", m: "预订", e: "I have a reservation under the name Chen.", z: "我有一个姓陈的预订。", c: "travel" },
  { w: "sightseeing", p: "/ˈsaɪtsiːɪŋ/", t: "n.", m: "观光，游览", e: "We spent the day sightseeing downtown.", z: "我们在市中心观光了一天。", c: "travel" },
  { w: "landmark", p: "/ˈlændmɑːk/", t: "n.", m: "地标，著名建筑", e: "The tower is the city's most famous landmark.", z: "那座塔是这座城市最著名的地标。", c: "travel" },
  { w: "delayed", p: "/dɪˈleɪd/", t: "adj.", m: "延误的", e: "Our flight was delayed by two hours.", z: "我们的航班延误了两小时。", c: "travel" },
  { w: "currency", p: "/ˈkʌrənsi/", t: "n.", m: "货币", e: "Where can I exchange foreign currency?", z: "我在哪里可以兑换外币？", c: "travel" },
  { w: "check-in", p: "/ˈtʃek ɪn/", t: "n.", m: "办理入住/登机手续", e: "Check-in opens at three o'clock.", z: "三点开始办理入住。", c: "travel" },
  { w: "souvenir", p: "/ˌsuːvəˈnɪə(r)/", t: "n.", m: "纪念品", e: "I bought a small souvenir for my sister.", z: "我给妹妹买了个小纪念品。", c: "travel" },
  { w: "departure", p: "/dɪˈpɑːtʃə(r)/", t: "n.", m: "出发，离开", e: "Our departure time is 7:40 a.m.", z: "我们的出发时间是早上7点40。", c: "travel" },
  { w: "shuttle", p: "/ˈʃʌtl/", t: "n.", m: "穿梭巴士，班车", e: "Take the free shuttle to the airport.", z: "坐免费班车去机场。", c: "travel" },
  { w: "customs", p: "/ˈkʌstəmz/", t: "n.", m: "海关", e: "We went through customs quickly.", z: "我们很快就过了海关。", c: "travel" },
  { w: "off the beaten track", p: "/ˌɒf ðə ˈbiːtn træk/", t: "phr.", m: "人迹罕至的，冷门的", e: "We prefer places off the beaten track.", z: "我们更喜欢冷门的地方。", c: "travel" },

  /* ===== 商务职场 business ===== */
  { w: "negotiate", p: "/nɪˈɡəʊʃieɪt/", t: "v.", m: "谈判，协商", e: "We need to negotiate the price.", z: "我们需要就价格进行谈判。", c: "business" },
  { w: "proposal", p: "/prəˈpəʊzl/", t: "n.", m: "提案，建议书", e: "The client accepted our proposal.", z: "客户接受了我们的提案。", c: "business" },
  { w: "revenue", p: "/ˈrevənjuː/", t: "n.", m: "收入，营业额", e: "Revenue grew by 12% last quarter.", z: "上季度收入增长了12%。", c: "business" },
  { w: "stakeholder", p: "/ˈsteɪkhəʊldə(r)/", t: "n.", m: "利益相关方", e: "We need to align all stakeholders first.", z: "我们得先让各方达成一致。", c: "business" },
  { w: "budget", p: "/ˈbʌdʒɪt/", t: "n.", m: "预算", e: "The project is over budget.", z: "这个项目超出了预算。", c: "business" },
  { w: "postpone", p: "/pəˈspəʊn/", t: "v.", m: "推迟，延期", e: "Can we postpone the meeting to Friday?", z: "我们能把会议推迟到周五吗？", c: "business" },
  { w: "leverage", p: "/ˈliːvərɪdʒ/", t: "v./n.", m: "利用；杠杆", e: "We can leverage our existing network.", z: "我们可以利用现有的网络。", c: "business" },
  { w: "scalable", p: "/ˈskeɪləbl/", t: "adj.", m: "可扩展的", e: "The model is simple and scalable.", z: "这个模式简单且可扩展。", c: "business" },
  { w: "deliverable", p: "/dɪˈlɪvərəbl/", t: "n.", m: "交付成果，可交付物", e: "We agreed on three key deliverables.", z: "我们就三项关键交付成果达成了一致。", c: "business" },
  { w: "consensus", p: "/kənˈsensəs/", t: "n.", m: "共识", e: "We finally reached a consensus.", z: "我们最终达成了共识。", c: "business" },
  { w: "streamline", p: "/ˈstriːmlaɪn/", t: "v.", m: "简化流程，提高效率", e: "Let's streamline the approval process.", z: "我们把审批流程简化一下吧。", c: "business" },
  { w: "pipeline", p: "/ˈpaɪplaɪn/", t: "n.", m: "管道；在推进的项目", e: "We have three deals in the pipeline.", z: "我们还有三个项目在推进中。", c: "business" },
  { w: "onboarding", p: "/ˈɒnbɔːdɪŋ/", t: "n.", m: "入职培训；新用户引导", e: "New staff go through a week of onboarding.", z: "新员工要参加一周的入职培训。", c: "business" },
  { w: "turnover", p: "/ˈtɜːnəʊvə(r)/", t: "n.", m: "营业额；人员流动率", e: "High staff turnover is a warning sign.", z: "员工流动率高是个警示信号。", c: "business" },
  { w: "benchmark", p: "/ˈbentʃmɑːk/", t: "n./v.", m: "基准，标杆", e: "This report sets a new benchmark.", z: "这份报告树立了新的标杆。", c: "business" },

  /* ===== 科技网络 tech ===== */
  { w: "algorithm", p: "/ˈælɡərɪðəm/", t: "n.", m: "算法", e: "The algorithm learns from your choices.", z: "算法会从你的选择中学习。", c: "tech" },
  { w: "update", p: "/ˌʌpˈdeɪt/", t: "v./n.", m: "更新，升级", e: "Please update the app to the latest version.", z: "请把应用更新到最新版本。", c: "tech" },
  { w: "privacy", p: "/ˈprɪvəsi/", t: "n.", m: "隐私", e: "Online privacy matters more than ever.", z: "网络隐私比以往任何时候都重要。", c: "tech" },
  { w: "device", p: "/dɪˈvaɪs/", t: "n.", m: "设备", e: "You can sync your notes across devices.", z: "你可以在多台设备间同步笔记。", c: "tech" },
  { w: "browse", p: "/braʊz/", t: "v.", m: "浏览", e: "I browsed the web for half an hour.", z: "我上网浏览了半小时。", c: "tech" },
  { w: "install", p: "/ɪnˈstɔːl/", t: "v.", m: "安装", e: "Install the plug-in and restart the browser.", z: "安装插件然后重启浏览器。", c: "tech" },
  { w: "backup", p: "/ˈbækʌp/", t: "n.", m: "备份", e: "Always keep a backup of your files.", z: "一定要给你的文件做备份。", c: "tech" },
  { w: "notification", p: "/ˌnəʊtɪfɪˈkeɪʃn/", t: "n.", m: "通知，提醒", e: "Turn off notifications while you study.", z: "学习时把通知关掉。", c: "tech" },
  { w: "download", p: "/ˌdaʊnˈləʊd/", t: "v.", m: "下载", e: "You can download the audio for free.", z: "你可以免费下载音频。", c: "tech" },
  { w: "user-friendly", p: "/ˌjuːzə ˈfrendli/", t: "adj.", m: "易于使用的", e: "The new interface is very user-friendly.", z: "新界面非常好用。", c: "tech" },
  { w: "generate", p: "/ˈdʒenəreɪt/", t: "v.", m: "生成，产生", e: "The tool generates a study plan for you.", z: "这个工具能为你生成学习计划。", c: "tech" },
  { w: "secure", p: "/sɪˈkjʊə(r)/", t: "adj./v.", m: "安全的；保护", e: "Make sure the website is secure.", z: "确认这个网站是安全的。", c: "tech" },
  { w: "feature", p: "/ˈfiːtʃə(r)/", t: "n.", m: "功能，特色", e: "This feature saves me a lot of time.", z: "这个功能帮我省了很多时间。", c: "tech" },
  { w: "glitch", p: "/ɡlɪtʃ/", t: "n.", m: "小故障，小毛病", e: "There's a glitch in the payment system.", z: "支付系统出了点小故障。", c: "tech" },
  { w: "sync", p: "/sɪŋk/", t: "v./n.", m: "同步", e: "The app syncs your notes automatically.", z: "这个应用会自动同步你的笔记。", c: "tech" },

  /* ===== 健康医疗 health ===== */
  { w: "symptom", p: "/ˈsɪmptəm/", t: "n.", m: "症状", e: "A sore throat is a common symptom.", z: "喉咙痛是常见症状。", c: "health" },
  { w: "prescription", p: "/prɪˈskrɪpʃn/", t: "n.", m: "处方，药方", e: "The doctor gave me a prescription.", z: "医生给我开了处方。", c: "health" },
  { w: "appointment", p: "/əˈpɔɪntmənt/", t: "n.", m: "预约", e: "I'd like to make an appointment with Dr. Lee.", z: "我想预约李医生。", c: "health" },
  { w: "recover", p: "/rɪˈkʌvə(r)/", t: "v.", m: "恢复，康复", e: "He's recovering well after the operation.", z: "手术之后他恢复得很好。", c: "health" },
  { w: "immune", p: "/ɪˈmjuːn/", t: "adj.", m: "免疫的", e: "Sleep helps keep your immune system strong.", z: "睡眠有助于保持免疫系统强健。", c: "health" },
  { w: "nutrition", p: "/njuˈtrɪʃn/", t: "n.", m: "营养", e: "Good nutrition supports brain function.", z: "良好的营养有助于大脑运转。", c: "health" },
  { w: "stiff", p: "/stɪf/", t: "adj.", m: "僵硬的，酸痛的", e: "My neck feels stiff after sitting all day.", z: "坐了一整天，我脖子发僵。", c: "health" },
  { w: "exhausted", p: "/ɪɡˈzɔːstɪd/", t: "adj.", m: "精疲力竭的", e: "I was exhausted after the long flight.", z: "长途飞行后我累坏了。", c: "health" },
  { w: "checkup", p: "/ˈtʃekʌp/", t: "n.", m: "体检", e: "I have a checkup every six months.", z: "我每半年体检一次。", c: "health" },
  { w: "chronic", p: "/ˈkrɒnɪk/", t: "adj.", m: "慢性的，长期的", e: "Chronic stress affects your sleep.", z: "长期压力会影响睡眠。", c: "health" },
  { w: "therapy", p: "/ˈθerəpi/", t: "n.", m: "治疗，疗法", e: "Physical therapy helped her knee.", z: "物理治疗对她的膝盖有帮助。", c: "health" },
  { w: "balanced", p: "/ˈbælənst/", t: "adj.", m: "均衡的", e: "Try to eat a balanced diet.", z: "尽量保持饮食均衡。", c: "health" },
  { w: "breathe", p: "/briːð/", t: "v.", m: "呼吸", e: "Take a moment and breathe slowly.", z: "停一下，慢慢呼吸。", c: "health" },
  { w: "moderate", p: "/ˈmɒdərət/", t: "adj.", m: "适度的，中等的", e: "Moderate exercise is good for the heart.", z: "适度运动对心脏有益。", c: "health" },
  { w: "well-being", p: "/ˌwel ˈbiːɪŋ/", t: "n.", m: "身心健康，福祉", e: "Reading improves my mental well-being.", z: "阅读改善了我的心理健康。", c: "health" },

  /* ===== 学术高频 academic ===== */
  { w: "significant", p: "/sɪɡˈnɪfɪkənt/", t: "adj.", m: "重大的；显著的", e: "There was a significant improvement.", z: "有了显著的提升。", c: "academic" },
  { w: "analyse", p: "/ˈænəlaɪz/", t: "v.", m: "分析", e: "Let's analyse the data carefully.", z: "我们仔细分析一下这些数据。", c: "academic" },
  { w: "hypothesis", p: "/haɪˈpɒθəsɪs/", t: "n.", m: "假设", e: "The results support our hypothesis.", z: "结果支持我们的假设。", c: "academic" },
  { w: "evidence", p: "/ˈevɪdəns/", t: "n.", m: "证据", e: "There is strong evidence for this claim.", z: "这一说法有强有力的证据。", c: "academic" },
  { w: "evaluate", p: "/ɪˈvæljueɪt/", t: "v.", m: "评估，评价", e: "We need to evaluate the results.", z: "我们需要评估结果。", c: "academic" },
  { w: "approach", p: "/əˈprəʊtʃ/", t: "n./v.", m: "方法；接近", e: "This approach works better for beginners.", z: "这个方法对初学者更有效。", c: "academic" },
  { w: "framework", p: "/ˈfreɪmwɜːk/", t: "n.", m: "框架，体系", e: "The theory offers a useful framework.", z: "这个理论提供了一个有用的框架。", c: "academic" },
  { w: "consequence", p: "/ˈkɒnsɪkwəns/", t: "n.", m: "结果，后果", e: "Every choice has a consequence.", z: "每个选择都有其后果。", c: "academic" },
  { w: "phenomenon", p: "/fəˈnɒmɪnən/", t: "n.", m: "现象", e: "This is a common phenomenon in language learning.", z: "这是语言学习中常见的现象。", c: "academic" },
  { w: "assume", p: "/əˈsjuːm/", t: "v.", m: "假定，认为", e: "Don't assume the answer is obvious.", z: "别以为答案很明显。", c: "academic" },
  { w: "criteria", p: "/kraɪˈtɪəriə/", t: "n.", m: "标准，准则", e: "What are the criteria for grading?", z: "评分的标准是什么？", c: "academic" },
  { w: "imply", p: "/ɪmˈplaɪ/", t: "v.", m: "暗示，意味着", e: "The data imply a clear trend.", z: "数据暗示出清晰的趋势。", c: "academic" },
  { w: "subsequent", p: "/ˈsʌbsɪkwənt/", t: "adj.", m: "随后的，接着的", e: "Subsequent studies confirmed the finding.", z: "随后的研究证实了这一发现。", c: "academic" },
  { w: "derive", p: "/dɪˈraɪv/", t: "v.", m: "得出；源自", e: "The word derives from Latin.", z: "这个词源自拉丁语。", c: "academic" },
  { w: "comprehensive", p: "/ˌkɒmprɪˈhensɪv/", t: "adj.", m: "全面的，综合的", e: "She gave a comprehensive summary.", z: "她做了全面的总结。", c: "academic" }
];

/* ------------------------------------------------------------
   1a. 雅思词书单词
   b = 所属词书   c = 浏览分类（exam / spoken）
   ------------------------------------------------------------ */
var IELTS_WORDS = [

  /* ===== 雅思核心词 ielts-core ===== */
  { w: "acquire", p: "/əˈkwaɪə(r)/", t: "v.", m: "获得，习得", e: "Children acquire language naturally.", z: "孩子能自然地习得语言。", c: "exam", b: "ielts-core" },
  { w: "allocate", p: "/ˈæləkeɪt/", t: "v.", m: "分配，拨给", e: "The city allocated more funds to public transport.", z: "市政府给公共交通拨了更多资金。", c: "exam", b: "ielts-core" },
  { w: "anticipate", p: "/ænˈtɪsɪpeɪt/", t: "v.", m: "预料，预期", e: "We anticipate a steady rise in demand.", z: "我们预计需求会稳步上升。", c: "exam", b: "ielts-core" },
  { w: "assess", p: "/əˈses/", t: "v.", m: "评估，评定", e: "Teachers assess progress every term.", z: "老师每学期评估一次学习进展。", c: "exam", b: "ielts-core" },
  { w: "beneficial", p: "/ˌbenɪˈfɪʃl/", t: "adj.", m: "有益的", e: "Regular exercise is beneficial to mental health.", z: "规律运动对心理健康有益。", c: "exam", b: "ielts-core" },
  { w: "cease", p: "/siːs/", t: "v.", m: "停止，终止", e: "The factory ceased production last year.", z: "这家工厂去年停止了生产。", c: "exam", b: "ielts-core" },
  { w: "conserve", p: "/kənˈsɜːv/", t: "v.", m: "保护，节约", e: "We should conserve water in dry seasons.", z: "旱季我们应该节约用水。", c: "exam", b: "ielts-core" },
  { w: "constitute", p: "/ˈkɒnstɪtjuːt/", t: "v.", m: "构成，占", e: "Women constitute nearly half the workforce.", z: "女性占劳动力的近一半。", c: "exam", b: "ielts-core" },
  { w: "crucial", p: "/ˈkruːʃl/", t: "adj.", m: "至关重要的", e: "Sleep is crucial for memory.", z: "睡眠对记忆至关重要。", c: "exam", b: "ielts-core" },
  { w: "deteriorate", p: "/dɪˈtɪəriəreɪt/", t: "v.", m: "恶化，变坏", e: "Air quality deteriorated rapidly.", z: "空气质量迅速恶化。", c: "exam", b: "ielts-core" },
  { w: "diminish", p: "/dɪˈmɪnɪʃ/", t: "v.", m: "减少，减弱", e: "Interest in the topic has diminished.", z: "对这个话题的兴趣已经减弱。", c: "exam", b: "ielts-core" },
  { w: "eliminate", p: "/ɪˈlɪmɪneɪt/", t: "v.", m: "消除，淘汰", e: "The new system eliminated unnecessary steps.", z: "新系统去掉了不必要的步骤。", c: "exam", b: "ielts-core" },
  { w: "enhance", p: "/ɪnˈhɑːns/", t: "v.", m: "提高，增强", e: "Music can enhance concentration.", z: "音乐可以提高专注力。", c: "exam", b: "ielts-core" },
  { w: "feasible", p: "/ˈfiːzəbl/", t: "adj.", m: "可行的", e: "Is this plan feasible within a year?", z: "这个计划一年内可行吗？", c: "exam", b: "ielts-core" },
  { w: "fluctuate", p: "/ˈflʌktʃueɪt/", t: "v.", m: "波动，起伏", e: "Prices fluctuate throughout the year.", z: "价格全年都在波动。", c: "exam", b: "ielts-core" },
  { w: "implement", p: "/ˈɪmplɪment/", t: "v.", m: "实施，执行", e: "The school implemented a new policy.", z: "学校实施了一项新政策。", c: "exam", b: "ielts-core" },
  { w: "inevitable", p: "/ɪnˈevɪtəbl/", t: "adj.", m: "不可避免的", e: "Some change is inevitable.", z: "有些改变是不可避免的。", c: "exam", b: "ielts-core" },
  { w: "minimize", p: "/ˈmɪnɪmaɪz/", t: "v.", m: "使最小化，尽量减少", e: "Try to minimize screen time before bed.", z: "睡前尽量减少看屏幕。", c: "exam", b: "ielts-core" },
  { w: "overwhelming", p: "/ˌəʊvəˈwelmɪŋ/", t: "adj.", m: "压倒性的，巨大的", e: "The response was overwhelming.", z: "反响极其热烈。", c: "exam", b: "ielts-core" },
  { w: "prevalent", p: "/ˈprevələnt/", t: "adj.", m: "普遍的，流行的", e: "Remote work is increasingly prevalent.", z: "远程办公越来越普遍。", c: "exam", b: "ielts-core" },
  { w: "prohibit", p: "/prəˈhɪbɪt/", t: "v.", m: "禁止", e: "Smoking is prohibited in the building.", z: "大楼内禁止吸烟。", c: "exam", b: "ielts-core" },
  { w: "remarkable", p: "/rɪˈmɑːkəbl/", t: "adj.", m: "显著的，非凡的", e: "She made remarkable progress in three months.", z: "她三个月里取得了显著进步。", c: "exam", b: "ielts-core" },
  { w: "restrict", p: "/rɪˈstrɪkt/", t: "v.", m: "限制，约束", e: "Some sites restrict access to children.", z: "有些网站限制儿童访问。", c: "exam", b: "ielts-core" },
  { w: "retain", p: "/rɪˈteɪn/", t: "v.", m: "保留；记住", e: "It's hard to retain new words without review.", z: "不复习很难记住新词。", c: "exam", b: "ielts-core" },
  { w: "sufficient", p: "/səˈfɪʃnt/", t: "adj.", m: "足够的", e: "We don't have sufficient evidence.", z: "我们没有足够的证据。", c: "exam", b: "ielts-core" },
  { w: "sustain", p: "/səˈsteɪn/", t: "v.", m: "维持，支撑", e: "Can the economy sustain this growth?", z: "经济能维持这种增长吗？", c: "exam", b: "ielts-core" },
  { w: "undergo", p: "/ˌʌndəˈɡəʊ/", t: "v.", m: "经历，经受", e: "The city has undergone major changes.", z: "这座城市经历了巨大变化。", c: "exam", b: "ielts-core" },
  { w: "valid", p: "/ˈvælɪd/", t: "adj.", m: "有效的；有根据的", e: "That's a valid point.", z: "这个观点站得住脚。", c: "exam", b: "ielts-core" },
  { w: "widespread", p: "/ˈwaɪdspred/", t: "adj.", m: "广泛的，普遍的", e: "The practice is widespread in rural areas.", z: "这种做法在农村地区很普遍。", c: "exam", b: "ielts-core" },
  { w: "yield", p: "/jiːld/", t: "v./n.", m: "产生（结果）；产量", e: "The method yielded surprising results.", z: "这个方法产生了出人意料的结果。", c: "exam", b: "ielts-core" },

  /* ===== 雅思学术词 ielts-academic ===== */
  { w: "abstract", p: "/ˈæbstrækt/", t: "adj./n.", m: "抽象的；论文摘要", e: "The concept is too abstract for beginners.", z: "这个概念对初学者来说太抽象了。", c: "exam", b: "ielts-academic" },
  { w: "accumulate", p: "/əˈkjuːmjəleɪt/", t: "v.", m: "积累，积聚", e: "Evidence has accumulated over the years.", z: "证据这些年不断积累。", c: "exam", b: "ielts-academic" },
  { w: "acknowledge", p: "/əkˈnɒlɪdʒ/", t: "v.", m: "承认；致谢", e: "Most researchers acknowledge this limitation.", z: "多数研究者承认这一局限。", c: "exam", b: "ielts-academic" },
  { w: "arbitrary", p: "/ˈɑːbɪtrəri/", t: "adj.", m: "任意的，武断的", e: "The boundary seems arbitrary.", z: "这个界限看起来很随意。", c: "exam", b: "ielts-academic" },
  { w: "cognitive", p: "/ˈkɒɡnətɪv/", t: "adj.", m: "认知的", e: "Sleep affects cognitive performance.", z: "睡眠会影响认知表现。", c: "exam", b: "ielts-academic" },
  { w: "coherent", p: "/kəʊˈhɪərənt/", t: "adj.", m: "连贯的，条理清楚的", e: "A good essay needs a coherent argument.", z: "好文章需要连贯的论证。", c: "exam", b: "ielts-academic" },
  { w: "comparable", p: "/ˈkɒmpərəbl/", t: "adj.", m: "可比的，类似的", e: "The two systems are broadly comparable.", z: "这两个体系大体上可比。", c: "exam", b: "ielts-academic" },
  { w: "contradict", p: "/ˌkɒntrəˈdɪkt/", t: "v.", m: "反驳；与…矛盾", e: "These findings contradict earlier studies.", z: "这些发现与早前的研究相矛盾。", c: "exam", b: "ielts-academic" },
  { w: "controversy", p: "/ˈkɒntrəvɜːsi/", t: "n.", m: "争议，争论", e: "The policy caused considerable controversy.", z: "这项政策引发了相当大的争议。", c: "exam", b: "ielts-academic" },
  { w: "correlate", p: "/ˈkɒrəleɪt/", t: "v.", m: "相关联", e: "Income correlates with life expectancy.", z: "收入与预期寿命相关。", c: "exam", b: "ielts-academic" },
  { w: "deduce", p: "/dɪˈdjuːs/", t: "v.", m: "推断，演绎", e: "We can deduce the cause from the data.", z: "我们可以从数据推断出原因。", c: "exam", b: "ielts-academic" },
  { w: "empirical", p: "/ɪmˈpɪrɪkl/", t: "adj.", m: "实证的，经验的", e: "The claim lacks empirical support.", z: "这一说法缺乏实证支持。", c: "exam", b: "ielts-academic" },
  { w: "explicit", p: "/ɪkˈsplɪsɪt/", t: "adj.", m: "明确的，直白的", e: "The instructions were explicit.", z: "说明写得很明确。", c: "exam", b: "ielts-academic" },
  { w: "hierarchy", p: "/ˈhaɪərɑːki/", t: "n.", m: "等级制度，层级", e: "The company has a flat hierarchy.", z: "这家公司层级很扁平。", c: "exam", b: "ielts-academic" },
  { w: "implicit", p: "/ɪmˈplɪsɪt/", t: "adj.", m: "隐含的，不言明的", e: "There is an implicit assumption here.", z: "这里有一个隐含的假设。", c: "exam", b: "ielts-academic" },
  { w: "inhibit", p: "/ɪnˈhɪbɪt/", t: "v.", m: "抑制，阻碍", e: "Fear can inhibit learning.", z: "恐惧会阻碍学习。", c: "exam", b: "ielts-academic" },
  { w: "integrate", p: "/ˈɪntɪɡreɪt/", t: "v.", m: "整合，融入", e: "Schools should integrate technology into teaching.", z: "学校应把技术融入教学。", c: "exam", b: "ielts-academic" },
  { w: "intervene", p: "/ˌɪntəˈviːn/", t: "v.", m: "干预，介入", e: "Governments rarely intervene in this market.", z: "政府很少干预这个市场。", c: "exam", b: "ielts-academic" },
  { w: "notion", p: "/ˈnəʊʃn/", t: "n.", m: "概念，观念", e: "The notion of success varies by culture.", z: "成功的观念因文化而异。", c: "exam", b: "ielts-academic" },
  { w: "paradigm", p: "/ˈpærədaɪm/", t: "n.", m: "范式，典范", e: "This marked a paradigm shift.", z: "这标志着一个范式转变。", c: "exam", b: "ielts-academic" },
  { w: "predominant", p: "/prɪˈdɒmɪnənt/", t: "adj.", m: "占主导的，主要的", e: "Coal was the predominant source of energy.", z: "煤炭曾是主要的能源来源。", c: "exam", b: "ielts-academic" },
  { w: "rational", p: "/ˈræʃnəl/", t: "adj.", m: "理性的，合理的", e: "Consumers are not always rational.", z: "消费者并不总是理性的。", c: "exam", b: "ielts-academic" },
  { w: "reinforce", p: "/ˌriːɪnˈfɔːs/", t: "v.", m: "强化，加强", e: "Repetition reinforces memory.", z: "重复能强化记忆。", c: "exam", b: "ielts-academic" },
  { w: "scope", p: "/skəʊp/", t: "n.", m: "范围，余地", e: "This is beyond the scope of the study.", z: "这超出了本研究的范围。", c: "exam", b: "ielts-academic" },
  { w: "speculate", p: "/ˈspekjuleɪt/", t: "v.", m: "推测，猜想", e: "Researchers can only speculate about the cause.", z: "研究者只能对原因作出推测。", c: "exam", b: "ielts-academic" },
  { w: "underlying", p: "/ˌʌndəˈlaɪɪŋ/", t: "adj.", m: "根本的，潜在的", e: "We must address the underlying problem.", z: "我们必须解决根本问题。", c: "exam", b: "ielts-academic" },
  { w: "aggregate", p: "/ˈæɡrɪɡət/", t: "n./adj.", m: "总量；总计的", e: "The aggregate figure hides regional differences.", z: "总量数字掩盖了地区差异。", c: "exam", b: "ielts-academic" },
  { w: "discrepancy", p: "/dɪsˈkrepənsi/", t: "n.", m: "差异，不一致", e: "There is a discrepancy between the two reports.", z: "两份报告之间存在出入。", c: "exam", b: "ielts-academic" },
  { w: "compensate", p: "/ˈkɒmpenseɪt/", t: "v.", m: "补偿，弥补", e: "Higher pay compensates for longer hours.", z: "更高的薪水弥补了更长的工作时间。", c: "exam", b: "ielts-academic" },

  /* ===== 雅思写作提分 ielts-writing ===== */
  { w: "account for", p: "/əˈkaʊnt fɔː(r)/", t: "phr.", m: "占（比例）；解释", e: "Coal accounts for 40% of total energy use.", z: "煤炭占总能源消耗的40%。", c: "exam", b: "ielts-writing" },
  { w: "marginally", p: "/ˈmɑːdʒɪnəli/", t: "adv.", m: "略微地，小幅地", e: "Sales rose marginally over the period.", z: "这一期间销量小幅上升。", c: "exam", b: "ielts-writing" },
  { w: "sharply", p: "/ˈʃɑːpli/", t: "adv.", m: "急剧地，大幅度地", e: "Prices fell sharply after 2015.", z: "2015年后价格急剧下跌。", c: "exam", b: "ielts-writing" },
  { w: "plateau", p: "/ˈplætəʊ/", t: "v./n.", m: "趋于平稳；平台期", e: "Growth plateaued in the final year.", z: "最后一年增长趋于平稳。", c: "exam", b: "ielts-writing" },
  { w: "peak", p: "/piːk/", t: "v./n.", m: "达到顶峰；峰值", e: "Visitors peaked in August.", z: "游客数量在八月达到顶峰。", c: "exam", b: "ielts-writing" },
  { w: "substantial", p: "/səbˈstænʃl/", t: "adj.", m: "大量的，可观的", e: "There was a substantial increase in spending.", z: "支出出现了大幅增长。", c: "exam", b: "ielts-writing" },
  { w: "considerable", p: "/kənˈsɪdərəbl/", t: "adj.", m: "相当大的", e: "A considerable number of people disagreed.", z: "相当多的人持反对意见。", c: "exam", b: "ielts-writing" },
  { w: "proportion", p: "/prəˈpɔːʃn/", t: "n.", m: "比例，占比", e: "The proportion of graduates rose steadily.", z: "毕业生所占比例稳步上升。", c: "exam", b: "ielts-writing" },
  { w: "outweigh", p: "/ˌaʊtˈweɪ/", t: "v.", m: "比…更重要，超过", e: "The benefits far outweigh the drawbacks.", z: "好处远远大于弊端。", c: "exam", b: "ielts-writing" },
  { w: "advocate", p: "/ˈædvəkeɪt/", t: "v.", m: "提倡，主张", e: "Some experts advocate stricter regulations.", z: "一些专家主张更严格的监管。", c: "exam", b: "ielts-writing" },
  { w: "justify", p: "/ˈdʒʌstɪfaɪ/", t: "v.", m: "证明…正当，为…辩护", e: "Nothing can justify such waste.", z: "任何理由都无法为这种浪费辩护。", c: "exam", b: "ielts-writing" },
  { w: "mitigate", p: "/ˈmɪtɪɡeɪt/", t: "v.", m: "减轻，缓解", e: "Planting trees can mitigate air pollution.", z: "植树可以缓解空气污染。", c: "exam", b: "ielts-writing" },
  { w: "tackle", p: "/ˈtækl/", t: "v.", m: "应对，解决", e: "Governments must tackle youth unemployment.", z: "政府必须解决青年失业问题。", c: "exam", b: "ielts-writing" },
  { w: "address", p: "/əˈdres/", t: "v.", m: "处理，应对（问题）", e: "The report fails to address the root cause.", z: "这份报告没有触及根本原因。", c: "exam", b: "ielts-writing" },
  { w: "whereas", p: "/ˌweərˈæz/", t: "conj.", m: "然而，相比之下", e: "Men favoured cycling, whereas women preferred walking.", z: "男性偏爱骑车，而女性更喜欢步行。", c: "exam", b: "ielts-writing" },
  { w: "consequently", p: "/ˈkɒnsɪkwəntli/", t: "adv.", m: "因此，结果", e: "Costs rose and, consequently, prices followed.", z: "成本上升，价格也随之上涨。", c: "exam", b: "ielts-writing" },
  { w: "nevertheless", p: "/ˌnevəðəˈles/", t: "adv.", m: "尽管如此", e: "The plan is costly; nevertheless, it is necessary.", z: "这个计划成本高，但仍然必要。", c: "exam", b: "ielts-writing" },
  { w: "furthermore", p: "/ˌfɜːðəˈmɔː(r)/", t: "adv.", m: "此外，而且", e: "Furthermore, the data is out of date.", z: "此外，这些数据已经过时。", c: "exam", b: "ielts-writing" },
  { w: "arguably", p: "/ˈɑːɡjuəbli/", t: "adv.", m: "可以说，大概", e: "This is arguably the best solution.", z: "这可以说是最好的方案。", c: "exam", b: "ielts-writing" },
  { w: "pivotal", p: "/ˈpɪvətl/", t: "adj.", m: "关键的，核心的", e: "Education plays a pivotal role in development.", z: "教育在发展中的关键作用。", c: "exam", b: "ielts-writing" },
  { w: "detrimental", p: "/ˌdetrɪˈmentl/", t: "adj.", m: "有害的", e: "Excessive screen time is detrimental to eyesight.", z: "过度看屏幕对视力有害。", c: "exam", b: "ielts-writing" },
  { w: "viable", p: "/ˈvaɪəbl/", t: "adj.", m: "可行的，行得通的", e: "Public transport is a viable alternative.", z: "公共交通是一个可行的替代方案。", c: "exam", b: "ielts-writing" },
  { w: "compelling", p: "/kəmˈpelɪŋ/", t: "adj.", m: "有说服力的，引人注目的", e: "There is compelling evidence for this view.", z: "这一观点有强有力的证据。", c: "exam", b: "ielts-writing" },
  { w: "premise", p: "/ˈpremɪs/", t: "n.", m: "前提，假定", e: "The argument rests on a false premise.", z: "这个论证建立在一个错误的前提上。", c: "exam", b: "ielts-writing" },
  { w: "implication", p: "/ˌɪmplɪˈkeɪʃn/", t: "n.", m: "影响，含义", e: "The implications for education are significant.", z: "这对教育的影响很重大。", c: "exam", b: "ielts-writing" },
  { w: "prevailing", p: "/prɪˈveɪlɪŋ/", t: "adj.", m: "普遍的，主流的", e: "The prevailing view has changed recently.", z: "主流观点最近发生了变化。", c: "exam", b: "ielts-writing" },
  { w: "sustainable", p: "/səˈsteɪnəbl/", t: "adj.", m: "可持续的", e: "We need a sustainable model of growth.", z: "我们需要可持续的增长模式。", c: "exam", b: "ielts-writing" },
  { w: "eradicate", p: "/ɪˈrædɪkeɪt/", t: "v.", m: "根除，彻底消除", e: "The disease was eradicated in the 1980s.", z: "这种疾病在八十年代被根除。", c: "exam", b: "ielts-writing" },

  /* ===== 雅思口语表达 ielts-speaking ===== */
  { w: "be into", p: "/biː ˈɪntə/", t: "phr.", m: "对…很感兴趣", e: "I'm really into photography these days.", z: "我最近特别迷摄影。", c: "spoken", b: "ielts-speaking" },
  { w: "keen on", p: "/kiːn ɒn/", t: "phr.", m: "热衷于，喜欢", e: "I'm quite keen on hiking at weekends.", z: "我周末挺喜欢去徒步。", c: "spoken", b: "ielts-speaking" },
  { w: "a big fan of", p: "/ə bɪɡ fæn əv/", t: "phr.", m: "…的忠实爱好者", e: "I'm a big fan of documentaries.", z: "我是纪录片的忠实观众。", c: "spoken", b: "ielts-speaking" },
  { w: "look forward to", p: "/lʊk ˈfɔːwəd tuː/", t: "phr.", m: "期待", e: "I'm looking forward to the holiday.", z: "我很期待这次假期。", c: "spoken", b: "ielts-speaking" },
  { w: "get the hang of", p: "/ɡet ðə hæŋ əv/", t: "phr.", m: "掌握诀窍，上手", e: "It took me a week to get the hang of it.", z: "我花了一周才上手。", c: "spoken", b: "ielts-speaking" },
  { w: "be used to", p: "/biː juːst tuː/", t: "phr.", m: "习惯于", e: "I'm used to getting up early.", z: "我习惯早起。", c: "spoken", b: "ielts-speaking" },
  { w: "come up with", p: "/kʌm ʌp wɪð/", t: "phr.", m: "想出（主意）", e: "We came up with a simple solution.", z: "我们想出了一个简单的办法。", c: "spoken", b: "ielts-speaking" },
  { w: "figure out", p: "/ˈfɪɡə(r) aʊt/", t: "phr.", m: "弄清楚，搞明白", e: "I finally figured out what went wrong.", z: "我终于弄明白哪里出错了。", c: "spoken", b: "ielts-speaking" },
  { w: "hang out", p: "/hæŋ aʊt/", t: "phr.", m: "闲逛，一起消磨时间", e: "We usually hang out at the weekend.", z: "我们一般周末一起玩。", c: "spoken", b: "ielts-speaking" },
  { w: "chill out", p: "/tʃɪl aʊt/", t: "phr.", m: "放松，歇一歇", e: "I just want to chill out at home.", z: "我只想在家放松一下。", c: "spoken", b: "ielts-speaking" },
  { w: "on top of things", p: "/ɒn tɒp əv θɪŋz/", t: "phr.", m: "把一切掌控得很好", e: "She always stays on top of things.", z: "她总能把事情安排得井井有条。", c: "spoken", b: "ielts-speaking" },
  { w: "burn out", p: "/bɜːn aʊt/", t: "phr.", m: "精疲力竭；（人）累垮", e: "Studying non-stop will burn you out.", z: "不停地学会把人累垮。", c: "spoken", b: "ielts-speaking" },
  { w: "catch up with", p: "/kætʃ ʌp wɪð/", t: "phr.", m: "叙旧；赶上", e: "Let's catch up with each other soon.", z: "我们找时间聚聚吧。", c: "spoken", b: "ielts-speaking" },
  { w: "take up", p: "/teɪk ʌp/", t: "phr.", m: "开始从事（爱好）", e: "I took up swimming last year.", z: "我去年开始游泳。", c: "spoken", b: "ielts-speaking" },
  { w: "put off", p: "/pʊt ɒf/", t: "phr.", m: "推迟；使反感", e: "Don't put off what you can do today.", z: "今天能做的事别拖到明天。", c: "spoken", b: "ielts-speaking" },
  { w: "run out of", p: "/rʌn aʊt əv/", t: "phr.", m: "用完，耗尽", e: "We ran out of time in the exam.", z: "考试时我们时间不够了。", c: "spoken", b: "ielts-speaking" },
  { w: "deal with", p: "/diːl wɪð/", t: "phr.", m: "处理，应对", e: "I had to deal with a lot of pressure.", z: "我不得不应对很大压力。", c: "spoken", b: "ielts-speaking" },
  { w: "make sense", p: "/meɪk sens/", t: "phr.", m: "讲得通，有道理", e: "That makes sense to me now.", z: "现在我明白这是怎么回事了。", c: "spoken", b: "ielts-speaking" },
  { w: "worth it", p: "/wɜːθ ɪt/", t: "phr.", m: "值得", e: "It was hard, but it was worth it.", z: "过程很辛苦，但很值得。", c: "spoken", b: "ielts-speaking" },
  { w: "as far as I'm concerned", p: "/əz fɑːr əz aɪm kənˈsɜːnd/", t: "phr.", m: "就我而言", e: "As far as I'm concerned, that's fine.", z: "对我来说，这样就行。", c: "spoken", b: "ielts-speaking" },
  { w: "to be honest", p: "/tə bi ˈɒnɪst/", t: "phr.", m: "说实话", e: "To be honest, I've never thought about it.", z: "说实话，我没想过这个问题。", c: "spoken", b: "ielts-speaking" },
  { w: "it depends", p: "/ɪt dɪˈpendz/", t: "phr.", m: "看情况", e: "It depends on how much time I have.", z: "这要看我时间够不够。", c: "spoken", b: "ielts-speaking" },
  { w: "off the top of my head", p: "/ɒf ðə tɒp əv maɪ hed/", t: "phr.", m: "我一时想到的", e: "Off the top of my head, maybe three hours.", z: "随口说的话，大概三小时吧。", c: "spoken", b: "ielts-speaking" },
  { w: "a bit of a", p: "/ə bɪt əv ə/", t: "phr.", m: "有点…（弱化语气）", e: "It was a bit of a challenge.", z: "那算是个小小的挑战。", c: "spoken", b: "ielts-speaking" },
  { w: "that's a tough one", p: "/ðæts ə tʌf wʌn/", t: "phr.", m: "这问题不太好回答", e: "That's a tough one — let me think.", z: "这问题有点难，让我想想。", c: "spoken", b: "ielts-speaking" },
  { w: "to put it another way", p: "/tə pʊt ɪt əˈnʌðə weɪ/", t: "phr.", m: "换个说法", e: "To put it another way, it's a trade-off.", z: "换句话说，这是一种取舍。", c: "spoken", b: "ielts-speaking" },
  { w: "hands down", p: "/hændz daʊn/", t: "phr.", m: "毫无疑问，绝对", e: "That's hands down the best café here.", z: "这绝对是这里最好的咖啡馆。", c: "spoken", b: "ielts-speaking" },
  { w: "couldn't agree more", p: "/ˈkʊdnt əˈɡriː mɔː(r)/", t: "phr.", m: "完全同意", e: "I couldn't agree more with that view.", z: "我完全同意这个看法。", c: "spoken", b: "ielts-speaking" },
  { w: "see your point", p: "/siː jɔː(r) pɔɪnt/", t: "phr.", m: "理解你的意思", e: "I see your point, but I'd add one thing.", z: "我明白你的意思，但我想补充一点。", c: "spoken", b: "ielts-speaking" },
  { w: "all in all", p: "/ɔːl ɪn ɔːl/", t: "phr.", m: "总的来说", e: "All in all, it was a good experience.", z: "总的来说，这是一次不错的经历。", c: "spoken", b: "ielts-speaking" }
];

WORD_BANK = WORD_BANK.concat(IELTS_WORDS);

/* ------------------------------------------------------------
   1c. 高考 / 四六级词书单词
   ------------------------------------------------------------ */
var CN_EXAM_WORDS = [

  /* ===== 高考核心词 gaokao ===== */
  { w: "abandon", p: "/əˈbændən/", t: "v.", m: "放弃；抛弃", e: "Never abandon a plan just because it is hard.", z: "别因为难就放弃一个计划。", c: "gaokao", b: "gaokao" },
  { w: "absorb", p: "/əbˈzɔːb/", t: "v.", m: "吸收；使专心", e: "Plants absorb water through their roots.", z: "植物通过根部吸收水分。", c: "gaokao", b: "gaokao" },
  { w: "accomplish", p: "/əˈkʌmplɪʃ/", t: "v.", m: "完成，实现", e: "She accomplished the task ahead of time.", z: "她提前完成了任务。", c: "gaokao", b: "gaokao" },
  { w: "adapt", p: "/əˈdæpt/", t: "v.", m: "适应；改编", e: "It takes time to adapt to a new school.", z: "适应新学校需要时间。", c: "gaokao", b: "gaokao" },
  { w: "adequate", p: "/ˈædɪkwət/", t: "adj.", m: "足够的，适当的", e: "Make sure you get adequate sleep.", z: "确保你有足够的睡眠。", c: "gaokao", b: "gaokao" },
  { w: "admire", p: "/ədˈmaɪə(r)/", t: "v.", m: "钦佩，欣赏", e: "I admire her courage.", z: "我钦佩她的勇气。", c: "gaokao", b: "gaokao" },
  { w: "aggressive", p: "/əˈɡresɪv/", t: "adj.", m: "好斗的；有闯劲的", e: "He is too aggressive in discussions.", z: "他在讨论中太咄咄逼人。", c: "gaokao", b: "gaokao" },
  { w: "alternative", p: "/ɔːlˈtɜːnətɪv/", t: "n./adj.", m: "替代方案；可供选择的", e: "Is there an alternative to this plan?", z: "这个计划有替代方案吗？", c: "gaokao", b: "gaokao" },
  { w: "ambition", p: "/æmˈbɪʃn/", t: "n.", m: "雄心，抱负", e: "Her ambition is to become a doctor.", z: "她的抱负是成为医生。", c: "gaokao", b: "gaokao" },
  { w: "anxiety", p: "/æŋˈzaɪəti/", t: "n.", m: "焦虑，忧虑", e: "Exams often cause anxiety.", z: "考试常常引起焦虑。", c: "gaokao", b: "gaokao" },
  { w: "appreciate", p: "/əˈpriːʃieɪt/", t: "v.", m: "感激；欣赏", e: "I really appreciate your help.", z: "我非常感激你的帮助。", c: "gaokao", b: "gaokao" },
  { w: "appropriate", p: "/əˈprəʊpriət/", t: "adj.", m: "合适的，恰当的", e: "Wear something appropriate for the occasion.", z: "穿适合这个场合的衣服。", c: "gaokao", b: "gaokao" },
  { w: "approve", p: "/əˈpruːv/", t: "v.", m: "批准；赞成", e: "My parents approved of my choice.", z: "我父母赞成我的选择。", c: "gaokao", b: "gaokao" },
  { w: "arrange", p: "/əˈreɪndʒ/", t: "v.", m: "安排；整理", e: "Let's arrange a time to meet.", z: "我们约个时间见面吧。", c: "gaokao", b: "gaokao" },
  { w: "attitude", p: "/ˈætɪtjuːd/", t: "n.", m: "态度，看法", e: "A positive attitude helps a lot.", z: "积极的态度很有帮助。", c: "gaokao", b: "gaokao" },
  { w: "aware", p: "/əˈweə(r)/", t: "adj.", m: "意识到的，知道的", e: "Are you aware of the new rules?", z: "你知道新规定吗？", c: "gaokao", b: "gaokao" },
  { w: "balance", p: "/ˈbæləns/", t: "n./v.", m: "平衡；使平衡", e: "It's hard to balance study and rest.", z: "在学习和休息之间取得平衡很难。", c: "gaokao", b: "gaokao" },
  { w: "behave", p: "/bɪˈheɪv/", t: "v.", m: "表现，举止", e: "The children behaved well all day.", z: "孩子们一整天都很乖。", c: "gaokao", b: "gaokao" },
  { w: "capable", p: "/ˈkeɪpəbl/", t: "adj.", m: "有能力的，能干的", e: "She is capable of solving it herself.", z: "她有能力自己解决。", c: "gaokao", b: "gaokao" },
  { w: "cautious", p: "/ˈkɔːʃəs/", t: "adj.", m: "谨慎的，小心的", e: "Be cautious when crossing the road.", z: "过马路时要小心。", c: "gaokao", b: "gaokao" },
  { w: "challenge", p: "/ˈtʃælɪndʒ/", t: "n./v.", m: "挑战；向…挑战", e: "Learning a language is a real challenge.", z: "学一门语言是真正的挑战。", c: "gaokao", b: "gaokao" },
  { w: "combine", p: "/kəmˈbaɪn/", t: "v.", m: "结合，联合", e: "Combine study with regular breaks.", z: "把学习和定时休息结合起来。", c: "gaokao", b: "gaokao" },
  { w: "comment", p: "/ˈkɒment/", t: "n./v.", m: "评论，意见", e: "He made no comment on the result.", z: "他对结果没有发表评论。", c: "gaokao", b: "gaokao" },
  { w: "communicate", p: "/kəˈmjuːnɪkeɪt/", t: "v.", m: "交流，沟通", e: "We communicate mainly by email.", z: "我们主要通过邮件沟通。", c: "gaokao", b: "gaokao" },
  { w: "complain", p: "/kəmˈpleɪn/", t: "v.", m: "抱怨，投诉", e: "Stop complaining and start working.", z: "别抱怨了，开始干活吧。", c: "gaokao", b: "gaokao" },
  { w: "conclusion", p: "/kənˈkluːʒn/", t: "n.", m: "结论；结束", e: "We reached the same conclusion.", z: "我们得出了相同的结论。", c: "gaokao", b: "gaokao" },
  { w: "confirm", p: "/kənˈfɜːm/", t: "v.", m: "确认，证实", e: "Please confirm your booking by Friday.", z: "请在周五前确认预订。", c: "gaokao", b: "gaokao" },
  { w: "consider", p: "/kənˈsɪdə(r)/", t: "v.", m: "考虑；认为", e: "Have you considered studying abroad?", z: "你考虑过出国留学吗？", c: "gaokao", b: "gaokao" },
  { w: "contribute", p: "/kənˈtrɪbjuːt/", t: "v.", m: "贡献；促成", e: "Everyone contributed to the project.", z: "每个人都为这个项目出了力。", c: "gaokao", b: "gaokao" },
  { w: "convenient", p: "/kənˈviːniənt/", t: "adj.", m: "方便的，便利的", e: "Come whenever it is convenient for you.", z: "你方便的时候随时来。", c: "gaokao", b: "gaokao" },
  { w: "convince", p: "/kənˈvɪns/", t: "v.", m: "使确信，说服", e: "He convinced me to try again.", z: "他说服我再试一次。", c: "gaokao", b: "gaokao" },
  { w: "courage", p: "/ˈkʌrɪdʒ/", t: "n.", m: "勇气，胆量", e: "It takes courage to speak in public.", z: "当众讲话需要勇气。", c: "gaokao", b: "gaokao" },
  { w: "declare", p: "/dɪˈkleə(r)/", t: "v.", m: "宣布，声明", e: "The results will be declared tomorrow.", z: "结果明天公布。", c: "gaokao", b: "gaokao" },
  { w: "decrease", p: "/dɪˈkriːs/", t: "v./n.", m: "减少，下降", e: "The number of accidents decreased.", z: "事故数量下降了。", c: "gaokao", b: "gaokao" },
  { w: "deliver", p: "/dɪˈlɪvə(r)/", t: "v.", m: "递送；发表", e: "The parcel will be delivered tomorrow.", z: "包裹明天送到。", c: "gaokao", b: "gaokao" },
  { w: "demand", p: "/dɪˈmɑːnd/", t: "v./n.", m: "要求；需求", e: "The job demands a lot of patience.", z: "这份工作需要极大的耐心。", c: "gaokao", b: "gaokao" },
  { w: "depend", p: "/dɪˈpend/", t: "v.", m: "依靠；取决于", e: "Success depends on daily effort.", z: "成功取决于每天的努力。", c: "gaokao", b: "gaokao" },
  { w: "distinguish", p: "/dɪˈstɪŋɡwɪʃ/", t: "v.", m: "区分，辨别", e: "Can you distinguish the two sounds?", z: "你能分辨这两个音吗？", c: "gaokao", b: "gaokao" },
  { w: "encourage", p: "/ɪnˈkʌrɪdʒ/", t: "v.", m: "鼓励，支持", e: "My teacher encouraged me to keep going.", z: "老师鼓励我坚持下去。", c: "gaokao", b: "gaokao" },
  { w: "enthusiastic", p: "/ɪnˌθjuːziˈæstɪk/", t: "adj.", m: "热情的，热心的", e: "She is enthusiastic about the plan.", z: "她对这个计划充满热情。", c: "gaokao", b: "gaokao" },

  /* ===== 四级词汇 cet4 ===== */
  { w: "accompany", p: "/əˈkʌmpəni/", t: "v.", m: "陪伴，伴随", e: "She accompanied me to the hospital.", z: "她陪我去了医院。", c: "cet", b: "cet4" },
  { w: "accurate", p: "/ˈækjərət/", t: "adj.", m: "准确的，精确的", e: "Please give me an accurate figure.", z: "请给我一个准确的数字。", c: "cet", b: "cet4" },
  { w: "achieve", p: "/əˈtʃiːv/", t: "v.", m: "实现，达到", e: "You can achieve more than you think.", z: "你能做到的比你想象的更多。", c: "cet", b: "cet4" },
  { w: "adjust", p: "/əˈdʒʌst/", t: "v.", m: "调整；适应", e: "Adjust your plan when something changes.", z: "情况变化时就调整计划。", c: "cet", b: "cet4" },
  { w: "admit", p: "/ədˈmɪt/", t: "v.", m: "承认；准许进入", e: "He admitted that he was wrong.", z: "他承认自己错了。", c: "cet", b: "cet4" },
  { w: "affect", p: "/əˈfekt/", t: "v.", m: "影响；感染", e: "Lack of sleep affects your memory.", z: "睡眠不足会影响记忆力。", c: "cet", b: "cet4" },
  { w: "afford", p: "/əˈfɔːd/", t: "v.", m: "买得起，负担得起", e: "I can't afford a new laptop right now.", z: "我现在买不起新笔记本。", c: "cet", b: "cet4" },
  { w: "amount", p: "/əˈmaʊnt/", t: "n./v.", m: "数量；总计", e: "A large amount of time was wasted.", z: "大量时间被浪费了。", c: "cet", b: "cet4" },
  { w: "apply", p: "/əˈplaɪ/", t: "v.", m: "申请；应用", e: "I applied for a scholarship.", z: "我申请了奖学金。", c: "cet", b: "cet4" },
  { w: "attach", p: "/əˈtætʃ/", t: "v.", m: "附上；使依恋", e: "Please attach your CV to the email.", z: "请把简历附在邮件里。", c: "cet", b: "cet4" },
  { w: "attempt", p: "/əˈtempt/", t: "n./v.", m: "尝试，试图", e: "He made one last attempt to pass.", z: "他做了最后一次尝试想通过。", c: "cet", b: "cet4" },
  { w: "attract", p: "/əˈtrækt/", t: "v.", m: "吸引，引起", e: "The city attracts millions of visitors.", z: "这座城市吸引数百万游客。", c: "cet", b: "cet4" },
  { w: "available", p: "/əˈveɪləbl/", t: "adj.", m: "可获得的；有空的", e: "Tickets are still available online.", z: "网上还有票。", c: "cet", b: "cet4" },
  { w: "barrier", p: "/ˈbæriə(r)/", t: "n.", m: "障碍，屏障", e: "Language is often the biggest barrier.", z: "语言往往是最主要的障碍。", c: "cet", b: "cet4" },
  { w: "benefit", p: "/ˈbenɪfɪt/", t: "n./v.", m: "益处；使受益", e: "Everyone benefits from clean air.", z: "每个人都从清洁空气中受益。", c: "cet", b: "cet4" },
  { w: "capacity", p: "/kəˈpæsəti/", t: "n.", m: "容量；能力", e: "The hall has a capacity of 500.", z: "这个大厅能容纳五百人。", c: "cet", b: "cet4" },
  { w: "character", p: "/ˈkærəktə(r)/", t: "n.", m: "性格；角色；汉字", e: "Hard times build character.", z: "艰难的时光能锤炼性格。", c: "cet", b: "cet4" },
  { w: "claim", p: "/kleɪm/", t: "v./n.", m: "声称；索赔", e: "He claims to know the answer.", z: "他声称知道答案。", c: "cet", b: "cet4" },
  { w: "commit", p: "/kəˈmɪt/", t: "v.", m: "承诺；犯（错、罪）", e: "She committed herself to the project.", z: "她全身心投入了这个项目。", c: "cet", b: "cet4" },
  { w: "compete", p: "/kəmˈpiːt/", t: "v.", m: "竞争，比赛", e: "Hundreds of students competed for it.", z: "数百名学生为此竞争。", c: "cet", b: "cet4" },
  { w: "complex", p: "/ˈkɒmpleks/", t: "adj./n.", m: "复杂的；综合体", e: "The problem is more complex than it looks.", z: "这个问题比看上去复杂。", c: "cet", b: "cet4" },
  { w: "concern", p: "/kənˈsɜːn/", t: "n./v.", m: "担心；关系到", e: "Air pollution is a growing concern.", z: "空气污染越来越令人担忧。", c: "cet", b: "cet4" },
  { w: "conduct", p: "/kənˈdʌkt/", t: "v./n.", m: "进行；行为", e: "They conducted a survey among students.", z: "他们在学生中做了一项调查。", c: "cet", b: "cet4" },
  { w: "conflict", p: "/ˈkɒnflɪkt/", t: "n./v.", m: "冲突，矛盾", e: "There is a conflict between the two plans.", z: "这两个计划之间存在冲突。", c: "cet", b: "cet4" },
  { w: "constant", p: "/ˈkɒnstənt/", t: "adj.", m: "持续的；不变的", e: "Constant practice is the key.", z: "持续练习才是关键。", c: "cet", b: "cet4" },
  { w: "consume", p: "/kənˈsjuːm/", t: "v.", m: "消耗；消费", e: "This app consumes a lot of battery.", z: "这个应用很耗电。", c: "cet", b: "cet4" },
  { w: "contrast", p: "/ˈkɒntrɑːst/", t: "n./v.", m: "对比，对照", e: "In contrast, the second group improved.", z: "相比之下，第二组进步了。", c: "cet", b: "cet4" },
  { w: "cooperate", p: "/kəʊˈɒpəreɪt/", t: "v.", m: "合作，配合", e: "The two teams cooperated closely.", z: "两个团队密切合作。", c: "cet", b: "cet4" },
  { w: "current", p: "/ˈkʌrənt/", t: "adj./n.", m: "当前的；水流，电流", e: "The current situation is improving.", z: "目前的情况正在好转。", c: "cet", b: "cet4" },
  { w: "define", p: "/dɪˈfaɪn/", t: "v.", m: "定义，界定", e: "How do you define success?", z: "你怎么定义成功？", c: "cet", b: "cet4" },
  { w: "demonstrate", p: "/ˈdemənstreɪt/", t: "v.", m: "证明；演示", e: "The study demonstrates a clear link.", z: "这项研究证明了两者之间的明确关联。", c: "cet", b: "cet4" },
  { w: "deny", p: "/dɪˈnaɪ/", t: "v.", m: "否认；拒绝给予", e: "He denied taking the money.", z: "他否认拿了钱。", c: "cet", b: "cet4" },
  { w: "deserve", p: "/dɪˈzɜːv/", t: "v.", m: "应得，值得", e: "You deserve a break after all that work.", z: "干了这么多活，你该休息一下。", c: "cet", b: "cet4" },
  { w: "despite", p: "/dɪˈspaɪt/", t: "prep.", m: "尽管，虽然", e: "Despite the rain, they kept walking.", z: "尽管下雨，他们还是继续走。", c: "cet", b: "cet4" },
  { w: "distribute", p: "/dɪˈstrɪbjuːt/", t: "v.", m: "分发；分布", e: "The books were distributed to every class.", z: "书被分发到每个班级。", c: "cet", b: "cet4" },
  { w: "essential", p: "/ɪˈsenʃl/", t: "adj.", m: "必不可少的，本质的", e: "Water is essential to life.", z: "水对生命必不可少。", c: "cet", b: "cet4" },
  { w: "establish", p: "/ɪˈstæblɪʃ/", t: "v.", m: "建立，创办", e: "The school was established in 1920.", z: "这所学校创办于1920年。", c: "cet", b: "cet4" },
  { w: "estimate", p: "/ˈestɪmeɪt/", t: "v./n.", m: "估计，估算", e: "Experts estimate the cost at ten million.", z: "专家估计成本为一千万。", c: "cet", b: "cet4" },
  { w: "eventually", p: "/ɪˈventʃuəli/", t: "adv.", m: "最终，终于", e: "He eventually found the answer.", z: "他最终找到了答案。", c: "cet", b: "cet4" },
  { w: "expand", p: "/ɪkˈspænd/", t: "v.", m: "扩大，扩展", e: "The company plans to expand overseas.", z: "公司计划向海外扩张。", c: "cet", b: "cet4" },

  /* ===== 六级词汇 cet6 ===== */
  { w: "abolish", p: "/əˈbɒlɪʃ/", t: "v.", m: "废除，取消", e: "The law was abolished in 1998.", z: "这项法律于1998年废止。", c: "cet", b: "cet6" },
  { w: "abrupt", p: "/əˈbrʌpt/", t: "adj.", m: "突然的；生硬的", e: "The meeting came to an abrupt end.", z: "会议突然结束了。", c: "cet", b: "cet6" },
  { w: "accelerate", p: "/əkˈseləreɪt/", t: "v.", m: "加速，促进", e: "The pace of change has accelerated.", z: "变化的速度加快了。", c: "cet", b: "cet6" },
  { w: "accommodate", p: "/əˈkɒmədeɪt/", t: "v.", m: "容纳；顺应", e: "The hall can accommodate 800 people.", z: "这个大厅可容纳八百人。", c: "cet", b: "cet6" },
  { w: "acquaint", p: "/əˈkweɪnt/", t: "v.", m: "使熟悉，使了解", e: "You should acquaint yourself with the rules.", z: "你应当熟悉一下规则。", c: "cet", b: "cet6" },
  { w: "adjacent", p: "/əˈdʒeɪsnt/", t: "adj.", m: "相邻的，邻近的", e: "The library is adjacent to the lab.", z: "图书馆紧邻实验室。", c: "cet", b: "cet6" },
  { w: "aggravate", p: "/ˈæɡrəveɪt/", t: "v.", m: "加重，使恶化", e: "Stress can aggravate the illness.", z: "压力会使病情加重。", c: "cet", b: "cet6" },
  { w: "ambiguous", p: "/æmˈbɪɡjuəs/", t: "adj.", m: "模棱两可的，含糊的", e: "His answer was deliberately ambiguous.", z: "他的回答故意含糊其辞。", c: "cet", b: "cet6" },
  { w: "amend", p: "/əˈmend/", t: "v.", m: "修改，修订", e: "The contract was amended twice.", z: "合同修改了两次。", c: "cet", b: "cet6" },
  { w: "ample", p: "/ˈæmpl/", t: "adj.", m: "充足的，宽敞的", e: "There is ample time to prepare.", z: "有充足的时间准备。", c: "cet", b: "cet6" },
  { w: "anonymous", p: "/əˈnɒnɪməs/", t: "adj.", m: "匿名的，无名的", e: "The donation came from an anonymous donor.", z: "这笔捐款来自一位匿名捐赠者。", c: "cet", b: "cet6" },
  { w: "applaud", p: "/əˈplɔːd/", t: "v.", m: "鼓掌；称赞", e: "The audience applauded warmly.", z: "观众热烈鼓掌。", c: "cet", b: "cet6" },
  { w: "approximate", p: "/əˈprɒksɪmət/", t: "adj.", m: "大约的，近似的", e: "The approximate cost is 300 yuan.", z: "大约的花费是三百元。", c: "cet", b: "cet6" },
  { w: "articulate", p: "/ɑːˈtɪkjuleɪt/", t: "v./adj.", m: "清楚表达；表达清晰的", e: "She can articulate her ideas clearly.", z: "她能清楚地表达自己的想法。", c: "cet", b: "cet6" },
  { w: "ascend", p: "/əˈsend/", t: "v.", m: "上升，攀登", e: "The plane ascended quickly.", z: "飞机迅速爬升。", c: "cet", b: "cet6" },
  { w: "assert", p: "/əˈsɜːt/", t: "v.", m: "断言，坚称", e: "She asserted that the data was reliable.", z: "她断言这些数据是可靠的。", c: "cet", b: "cet6" },
  { w: "attain", p: "/əˈteɪn/", t: "v.", m: "达到，获得", e: "He attained a high level of skill.", z: "他达到了很高的技术水平。", c: "cet", b: "cet6" },
  { w: "attribute", p: "/əˈtrɪbjuːt/", t: "v./n.", m: "把…归因于；属性", e: "She attributes her success to hard work.", z: "她把成功归因于努力。", c: "cet", b: "cet6" },
  { w: "authentic", p: "/ɔːˈθentɪk/", t: "adj.", m: "真实的，可靠的", e: "This is an authentic Italian recipe.", z: "这是一份正宗的意大利食谱。", c: "cet", b: "cet6" },
  { w: "bias", p: "/ˈbaɪəs/", t: "n./v.", m: "偏见；使有偏见", e: "The report shows a clear bias.", z: "这份报告带有明显的偏见。", c: "cet", b: "cet6" },
  { w: "boost", p: "/buːst/", t: "v./n.", m: "促进，提高", e: "The news boosted investor confidence.", z: "这个消息提振了投资者信心。", c: "cet", b: "cet6" },
  { w: "boundary", p: "/ˈbaʊndri/", t: "n.", m: "边界，界限", e: "The river forms the boundary.", z: "这条河形成了边界。", c: "cet", b: "cet6" },
  { w: "clarify", p: "/ˈklærəfaɪ/", t: "v.", m: "澄清，阐明", e: "Could you clarify what you mean?", z: "你能澄清一下你的意思吗？", c: "cet", b: "cet6" },
  { w: "coincide", p: "/ˌkəʊɪnˈsaɪd/", t: "v.", m: "同时发生；一致", e: "My holiday coincides with hers.", z: "我的假期和她的撞上了。", c: "cet", b: "cet6" },
  { w: "collapse", p: "/kəˈlæps/", t: "v./n.", m: "倒塌；崩溃", e: "The bridge collapsed in the storm.", z: "桥在暴风雨中坍塌了。", c: "cet", b: "cet6" },
  { w: "commence", p: "/kəˈmens/", t: "v.", m: "开始，着手", e: "The course commences in September.", z: "课程九月开始。", c: "cet", b: "cet6" },
  { w: "compatible", p: "/kəmˈpætəbl/", t: "adj.", m: "兼容的；相容的", e: "This file isn't compatible with the old app.", z: "这个文件和旧版应用不兼容。", c: "cet", b: "cet6" },
  { w: "compel", p: "/kəmˈpel/", t: "v.", m: "强迫，迫使", e: "Illness compelled him to retire early.", z: "疾病迫使他提前退休。", c: "cet", b: "cet6" },
  { w: "competent", p: "/ˈkɒmpɪtənt/", t: "adj.", m: "有能力的，称职的", e: "She is a highly competent manager.", z: "她是一位非常称职的管理者。", c: "cet", b: "cet6" },
  { w: "comply", p: "/kəmˈplaɪ/", t: "v.", m: "遵守，服从", e: "All staff must comply with the rules.", z: "所有员工都必须遵守规定。", c: "cet", b: "cet6" },
  { w: "conceive", p: "/kənˈsiːv/", t: "v.", m: "构想，设想", e: "It's hard to conceive of life without the internet.", z: "很难想象没有互联网的生活。", c: "cet", b: "cet6" },
  { w: "confidential", p: "/ˌkɒnfɪˈdenʃl/", t: "adj.", m: "机密的，保密的", e: "Please keep this information confidential.", z: "请对这则信息保密。", c: "cet", b: "cet6" },
  { w: "conform", p: "/kənˈfɔːm/", t: "v.", m: "遵守；相一致", e: "Products must conform to safety standards.", z: "产品必须符合安全标准。", c: "cet", b: "cet6" },
  { w: "conspicuous", p: "/kənˈspɪkjuəs/", t: "adj.", m: "显眼的，引人注目的", e: "The sign was conspicuous from the road.", z: "从路上看这个牌子很显眼。", c: "cet", b: "cet6" },
  { w: "contemplate", p: "/ˈkɒntəmpleɪt/", t: "v.", m: "考虑，沉思", e: "He is contemplating a career change.", z: "他正在考虑转行。", c: "cet", b: "cet6" },
  { w: "controversial", p: "/ˌkɒntrəˈvɜːʃl/", t: "adj.", m: "有争议的", e: "It remains a controversial issue.", z: "这仍然是一个有争议的问题。", c: "cet", b: "cet6" },
  { w: "conventional", p: "/kənˈvenʃənl/", t: "adj.", m: "传统的，常规的", e: "Conventional methods still work well.", z: "传统方法依然很有效。", c: "cet", b: "cet6" },
  { w: "cope", p: "/kəʊp/", t: "v.", m: "应对，处理", e: "How do you cope with pressure?", z: "你怎么应对压力？", c: "cet", b: "cet6" },
  { w: "cumulative", p: "/ˈkjuːmjələtɪv/", t: "adj.", m: "累积的，渐增的", e: "The cumulative effect is significant.", z: "累积效应相当显著。", c: "cet", b: "cet6" },
  { w: "dedicate", p: "/ˈdedɪkeɪt/", t: "v.", m: "致力于，献身于", e: "She dedicated ten years to the research.", z: "她为这项研究投入了十年。", c: "cet", b: "cet6" }
];

WORD_BANK = WORD_BANK.concat(CN_EXAM_WORDS);

/* ------------------------------------------------------------
   1d. 扩充词库：高考 / 四级 / 六级 / 雅思
   ------------------------------------------------------------ */
var EXTRA_WORDS = [

  /* ===== 高考核心词（扩充）===== */
  { w: "access", p: "/ˈækses/", t: "n./v.", m: "通道；使用权；进入", e: "Students have free access to the library.", z: "学生可以免费使用图书馆。", c: "gaokao", b: "gaokao" },
  { w: "accident", p: "/ˈæksɪdənt/", t: "n.", m: "事故；意外", e: "The accident was caused by careless driving.", z: "这起事故是粗心驾驶造成的。", c: "gaokao", b: "gaokao" },
  { w: "account", p: "/əˈkaʊnt/", t: "n./v.", m: "账户；描述；解释", e: "He gave a clear account of what happened.", z: "他清楚地描述了发生的事情。", c: "gaokao", b: "gaokao" },
  { w: "adventure", p: "/ədˈventʃə(r)/", t: "n.", m: "冒险；奇遇", e: "The trip turned into a real adventure.", z: "这次旅行变成了一场真正的冒险。", c: "gaokao", b: "gaokao" },
  { w: "advertise", p: "/ˈædvətaɪz/", t: "v.", m: "做广告，宣传", e: "They advertise their products online.", z: "他们在网上为产品做广告。", c: "gaokao", b: "gaokao" },
  { w: "aim", p: "/eɪm/", t: "n./v.", m: "目标；瞄准；旨在", e: "The course aims to improve speaking skills.", z: "这门课旨在提高口语能力。", c: "gaokao", b: "gaokao" },
  { w: "allow", p: "/əˈlaʊ/", t: "v.", m: "允许；考虑到", e: "My parents allow me to stay up late on Fridays.", z: "父母允许我周五晚睡。", c: "gaokao", b: "gaokao" },
  { w: "apologize", p: "/əˈpɒlədʒaɪz/", t: "v.", m: "道歉", e: "You should apologize for being late.", z: "你应该为迟到道歉。", c: "gaokao", b: "gaokao" },
  { w: "appearance", p: "/əˈpɪərəns/", t: "n.", m: "外貌；出现", e: "Don't judge people by their appearance.", z: "不要以貌取人。", c: "gaokao", b: "gaokao" },
  { w: "argument", p: "/ˈɑːɡjumənt/", t: "n.", m: "争论；论点", e: "They had an argument about money.", z: "他们为钱吵了一架。", c: "gaokao", b: "gaokao" },
  { w: "aspect", p: "/ˈæspekt/", t: "n.", m: "方面；层面", e: "We discussed every aspect of the plan.", z: "我们讨论了这个计划的每个方面。", c: "gaokao", b: "gaokao" },
  { w: "associate", p: "/əˈsəʊʃieɪt/", t: "v./n.", m: "联想；交往；同事", e: "I always associate this song with summer.", z: "我总把这首歌和夏天联系在一起。", c: "gaokao", b: "gaokao" },
  { w: "avoid", p: "/əˈvɔɪd/", t: "v.", m: "避免，防止", e: "Try to avoid using your phone before bed.", z: "尽量别在睡前玩手机。", c: "gaokao", b: "gaokao" },
  { w: "background", p: "/ˈbækɡraʊnd/", t: "n.", m: "背景；经历", e: "Students here come from different backgrounds.", z: "这里的学生来自不同背景。", c: "gaokao", b: "gaokao" },
  { w: "blame", p: "/bleɪm/", t: "v./n.", m: "责备；责任", e: "Don't blame others for your mistakes.", z: "别把自己的错误怪到别人头上。", c: "gaokao", b: "gaokao" },
  { w: "brief", p: "/briːf/", t: "adj./n.", m: "简短的；简介", e: "He gave a brief introduction to the topic.", z: "他对这个话题做了简短介绍。", c: "gaokao", b: "gaokao" },
  { w: "brilliant", p: "/ˈbrɪliənt/", t: "adj.", m: "出色的；明亮的", e: "That was a brilliant idea.", z: "那是个绝妙的主意。", c: "gaokao", b: "gaokao" },
  { w: "calm", p: "/kɑːm/", t: "adj./v.", m: "平静的；使镇静", e: "Stay calm and read the question again.", z: "保持冷静，再读一遍题目。", c: "gaokao", b: "gaokao" },
  { w: "career", p: "/kəˈrɪə(r)/", t: "n.", m: "职业生涯，事业", e: "She started her career as a teacher.", z: "她以教师的身份开始了职业生涯。", c: "gaokao", b: "gaokao" },
  { w: "ceremony", p: "/ˈserəməni/", t: "n.", m: "典礼，仪式", e: "The opening ceremony starts at nine.", z: "开幕式九点开始。", c: "gaokao", b: "gaokao" },
  { w: "charge", p: "/tʃɑːdʒ/", t: "v./n.", m: "收费；充电；指控", e: "The museum doesn't charge for entry.", z: "这家博物馆不收入场费。", c: "gaokao", b: "gaokao" },
  { w: "climate", p: "/ˈklaɪmət/", t: "n.", m: "气候；氛围", e: "The climate here is mild all year round.", z: "这里全年气候温和。", c: "gaokao", b: "gaokao" },
  { w: "comfortable", p: "/ˈkʌmftəbl/", t: "adj.", m: "舒适的；自在的", e: "I feel comfortable speaking in small groups.", z: "在小组里发言我觉得很自在。", c: "gaokao", b: "gaokao" },
  { w: "compare", p: "/kəmˈpeə(r)/", t: "v.", m: "比较，对比", e: "Compare your answer with the model one.", z: "把你的答案和范文对比一下。", c: "gaokao", b: "gaokao" },
  { w: "condition", p: "/kənˈdɪʃn/", t: "n.", m: "条件；状况", e: "Working conditions have improved a lot.", z: "工作条件改善了很多。", c: "gaokao", b: "gaokao" },
  { w: "considerate", p: "/kənˈsɪdərət/", t: "adj.", m: "体贴的，考虑周到的", e: "It was considerate of you to wait for me.", z: "你等我真是太体贴了。", c: "gaokao", b: "gaokao" },
  { w: "connect", p: "/kəˈnekt/", t: "v.", m: "连接；联系", e: "Please connect the printer to your laptop.", z: "请把打印机连到你的笔记本上。", c: "gaokao", b: "gaokao" },
  { w: "contact", p: "/ˈkɒntækt/", t: "n./v.", m: "联系；联系人", e: "Feel free to contact me any time.", z: "随时可以联系我。", c: "gaokao", b: "gaokao" },
  { w: "contain", p: "/kənˈteɪn/", t: "v.", m: "包含；容纳", e: "This drink contains no sugar.", z: "这种饮料不含糖。", c: "gaokao", b: "gaokao" },
  { w: "culture", p: "/ˈkʌltʃə(r)/", t: "n.", m: "文化，文明", e: "Learning a language means learning a culture.", z: "学一门语言就是学一种文化。", c: "gaokao", b: "gaokao" },
  { w: "custom", p: "/ˈkʌstəm/", t: "n.", m: "习俗；习惯", e: "It is a custom to give gifts at New Year.", z: "过年送礼是一种习俗。", c: "gaokao", b: "gaokao" },
  { w: "damage", p: "/ˈdæmɪdʒ/", t: "n./v.", m: "损害，破坏", e: "The storm caused serious damage.", z: "暴风雨造成了严重破坏。", c: "gaokao", b: "gaokao" },
  { w: "decision", p: "/dɪˈsɪʒn/", t: "n.", m: "决定，决心", e: "It was a difficult decision to make.", z: "这是个很难做的决定。", c: "gaokao", b: "gaokao" },
  { w: "describe", p: "/dɪˈskraɪb/", t: "v.", m: "描述，形容", e: "Can you describe what you saw?", z: "你能描述一下你看到的东西吗？", c: "gaokao", b: "gaokao" },
  { w: "design", p: "/dɪˈzaɪn/", t: "n./v.", m: "设计；构思", e: "The course is designed for beginners.", z: "这门课是为初学者设计的。", c: "gaokao", b: "gaokao" },
  { w: "detail", p: "/ˈdiːteɪl/", t: "n.", m: "细节，详情", e: "Please explain it in more detail.", z: "请更详细地解释一下。", c: "gaokao", b: "gaokao" },
  { w: "develop", p: "/dɪˈveləp/", t: "v.", m: "发展；培养", e: "Reading helps develop your vocabulary.", z: "阅读有助于扩大词汇量。", c: "gaokao", b: "gaokao" },
  { w: "discover", p: "/dɪˈskʌvə(r)/", t: "v.", m: "发现，找到", e: "She discovered a simple way to remember words.", z: "她发现了一个记单词的简单方法。", c: "gaokao", b: "gaokao" },
  { w: "discuss", p: "/dɪˈskʌs/", t: "v.", m: "讨论，商量", e: "Let's discuss the plan tomorrow.", z: "我们明天讨论这个计划吧。", c: "gaokao", b: "gaokao" },
  { w: "effort", p: "/ˈefət/", t: "n.", m: "努力，尝试", e: "Every effort you make counts.", z: "你付出的每一分努力都算数。", c: "gaokao", b: "gaokao" },
  { w: "emotion", p: "/ɪˈməʊʃn/", t: "n.", m: "情感，情绪", e: "Music can express strong emotions.", z: "音乐能表达强烈的情感。", c: "gaokao", b: "gaokao" },
  { w: "energy", p: "/ˈenədʒi/", t: "n.", m: "能量；精力", e: "I have more energy in the morning.", z: "我早上精力更充沛。", c: "gaokao", b: "gaokao" },
  { w: "environment", p: "/ɪnˈvaɪrənmənt/", t: "n.", m: "环境，周围状况", e: "We should protect the environment.", z: "我们应该保护环境。", c: "gaokao", b: "gaokao" },
  { w: "equal", p: "/ˈiːkwəl/", t: "adj./v.", m: "相等的；等于", e: "Everyone should have equal chances.", z: "每个人都该有平等的机会。", c: "gaokao", b: "gaokao" },
  { w: "escape", p: "/ɪˈskeɪp/", t: "v./n.", m: "逃跑；逃避", e: "Reading is a way to escape from stress.", z: "阅读是一种逃离压力的方式。", c: "gaokao", b: "gaokao" },
  { w: "examine", p: "/ɪɡˈzæmɪn/", t: "v.", m: "检查；考查", e: "The doctor examined my throat.", z: "医生检查了我的喉咙。", c: "gaokao", b: "gaokao" },
  { w: "excellent", p: "/ˈeksələnt/", t: "adj.", m: "优秀的，极好的", e: "She did an excellent job on the report.", z: "她的报告做得非常出色。", c: "gaokao", b: "gaokao" },
  { w: "experience", p: "/ɪkˈspɪəriəns/", t: "n./v.", m: "经验；经历；体验", e: "Travelling gives you valuable experience.", z: "旅行能给你宝贵的经历。", c: "gaokao", b: "gaokao" },
  { w: "explain", p: "/ɪkˈspleɪn/", t: "v.", m: "解释，说明", e: "Could you explain that again?", z: "你能再解释一遍吗？", c: "gaokao", b: "gaokao" },
  { w: "express", p: "/ɪkˈspres/", t: "v./adj.", m: "表达；快速的", e: "It's hard to express feelings in a foreign language.", z: "用外语表达感情很难。", c: "gaokao", b: "gaokao" },
  { w: "familiar", p: "/fəˈmɪliə(r)/", t: "adj.", m: "熟悉的，常见的", e: "The word looks familiar but I forget the meaning.", z: "这个词看着眼熟，但我想不起意思。", c: "gaokao", b: "gaokao" },
  { w: "figure", p: "/ˈfɪɡə(r)/", t: "n./v.", m: "数字；身材；认为", e: "The figures show a clear rise in sales.", z: "这些数字显示销量明显上升。", c: "gaokao", b: "gaokao" },
  { w: "focus", p: "/ˈfəʊkəs/", t: "v./n.", m: "集中；焦点", e: "Focus on one task at a time.", z: "一次专注做一件事。", c: "gaokao", b: "gaokao" },
  { w: "forgive", p: "/fəˈɡɪv/", t: "v.", m: "原谅，宽恕", e: "She forgave him for being rude.", z: "她原谅了他的无礼。", c: "gaokao", b: "gaokao" },
  { w: "fortunate", p: "/ˈfɔːtʃənət/", t: "adj.", m: "幸运的", e: "I was fortunate to meet such a good teacher.", z: "我很幸运遇到这么好的老师。", c: "gaokao", b: "gaokao" },
  { w: "freedom", p: "/ˈfriːdəm/", t: "n.", m: "自由；自主", e: "Everyone needs a sense of freedom.", z: "每个人都需要一点自由感。", c: "gaokao", b: "gaokao" },
  { w: "frequent", p: "/ˈfriːkwənt/", t: "adj.", m: "频繁的，经常的", e: "He is a frequent visitor to the library.", z: "他经常去图书馆。", c: "gaokao", b: "gaokao" },
  { w: "function", p: "/ˈfʌŋkʃn/", t: "n./v.", m: "功能；起作用", e: "This button has two functions.", z: "这个按钮有两个功能。", c: "gaokao", b: "gaokao" },
  { w: "generation", p: "/ˌdʒenəˈreɪʃn/", t: "n.", m: "一代人；产生", e: "Each generation has its own way of learning.", z: "每一代人都有自己的学习方式。", c: "gaokao", b: "gaokao" },
  { w: "gradually", p: "/ˈɡrædʒuəli/", t: "adv.", m: "逐渐地，慢慢地", e: "Your accent will improve gradually.", z: "你的口音会慢慢改善。", c: "gaokao", b: "gaokao" }
];

WORD_BANK = WORD_BANK.concat(EXTRA_WORDS);

var CET_EXTRA = [

  /* ===== 四级词汇（扩充）===== */
  { w: "absence", p: "/ˈæbsəns/", t: "n.", m: "缺席；缺乏", e: "His absence from class was noticed.", z: "他缺课被注意到了。", c: "cet", b: "cet4" },
  { w: "absolute", p: "/ˈæbsəluːt/", t: "adj.", m: "绝对的；完全的", e: "I have absolute confidence in her.", z: "我对她有绝对的信心。", c: "cet", b: "cet4" },
  { w: "abuse", p: "/əˈbjuːz/", t: "v./n.", m: "滥用；虐待", e: "Don't abuse your power.", z: "不要滥用你的权力。", c: "cet", b: "cet4" },
  { w: "academic", p: "/ˌækəˈdemɪk/", t: "adj.", m: "学术的；学业的", e: "Her academic performance improved steadily.", z: "她的学业成绩稳步提高。", c: "cet", b: "cet4" },
  { w: "accept", p: "/əkˈsept/", t: "v.", m: "接受；同意", e: "She accepted the offer without hesitation.", z: "她毫不犹豫地接受了这份工作。", c: "cet", b: "cet4" },
  { w: "achievement", p: "/əˈtʃiːvmənt/", t: "n.", m: "成就，成绩", e: "Passing the exam was a real achievement.", z: "通过考试是个实实在在的成就。", c: "cet", b: "cet4" },
  { w: "adopt", p: "/əˈdɒpt/", t: "v.", m: "采用；收养", e: "The school adopted a new teaching method.", z: "学校采用了新的教学方法。", c: "cet", b: "cet4" },
  { w: "advance", p: "/ədˈvɑːns/", t: "v./n.", m: "前进；进展", e: "Medical science advances quickly.", z: "医学进步很快。", c: "cet", b: "cet4" },
  { w: "advantage", p: "/ədˈvɑːntɪdʒ/", t: "n.", m: "优势，好处", e: "Small classes have clear advantages.", z: "小班有明显优势。", c: "cet", b: "cet4" },
  { w: "agency", p: "/ˈeɪdʒənsi/", t: "n.", m: "代理机构；作用", e: "She works for a travel agency.", z: "她在一家旅行社工作。", c: "cet", b: "cet4" },
  { w: "alarm", p: "/əˈlɑːm/", t: "n./v.", m: "警报；使惊恐", e: "The fire alarm went off at midnight.", z: "火警半夜响了。", c: "cet", b: "cet4" },
  { w: "alliance", p: "/əˈlaɪəns/", t: "n.", m: "联盟，同盟", e: "The two companies formed an alliance.", z: "两家公司结成了联盟。", c: "cet", b: "cet4" },
  { w: "announce", p: "/əˈnaʊns/", t: "v.", m: "宣布，公布", e: "The results will be announced on Friday.", z: "结果将在周五公布。", c: "cet", b: "cet4" },
  { w: "annual", p: "/ˈænjuəl/", t: "adj.", m: "每年的，年度的", e: "The annual meeting is held in June.", z: "年度会议在六月举行。", c: "cet", b: "cet4" },
  { w: "applause", p: "/əˈplɔːz/", t: "n.", m: "掌声，喝彩", e: "The speech ended in loud applause.", z: "演讲在热烈的掌声中结束。", c: "cet", b: "cet4" },
  { w: "appeal", p: "/əˈpiːl/", t: "v./n.", m: "吸引；呼吁；上诉", e: "The idea appeals to young people.", z: "这个想法吸引年轻人。", c: "cet", b: "cet4" },
  { w: "appoint", p: "/əˈpɔɪnt/", t: "v.", m: "任命；约定", e: "She was appointed as head of the team.", z: "她被任命为团队负责人。", c: "cet", b: "cet4" },
  { w: "apartment", p: "/əˈpɑːtmənt/", t: "n.", m: "公寓", e: "They rented a small apartment downtown.", z: "他们在市中心租了一间小公寓。", c: "cet", b: "cet4" },
  { w: "apparent", p: "/əˈpærənt/", t: "adj.", m: "明显的；表面的", e: "It soon became apparent that he was lying.", z: "很快就明显看出他在撒谎。", c: "cet", b: "cet4" },
  { w: "arise", p: "/əˈraɪz/", t: "v.", m: "出现，发生", e: "Problems arise when rules are unclear.", z: "规则不清楚时就会出问题。", c: "cet", b: "cet4" },
  { w: "aside", p: "/əˈsaɪd/", t: "adv.", m: "在旁边；除…以外", e: "Aside from English, she speaks French.", z: "除了英语，她还会说法语。", c: "cet", b: "cet4" },
  { w: "assemble", p: "/əˈsembl/", t: "v.", m: "组装；集合", e: "The students assembled in the hall.", z: "学生们在礼堂集合。", c: "cet", b: "cet4" },
  { w: "asset", p: "/ˈæset/", t: "n.", m: "资产；宝贵的人或物", e: "Patience is a great asset for a teacher.", z: "耐心是老师的宝贵品质。", c: "cet", b: "cet4" },
  { w: "assign", p: "/əˈsaɪn/", t: "v.", m: "分配；布置（任务）", e: "The teacher assigned us a group project.", z: "老师给我们布置了一个小组项目。", c: "cet", b: "cet4" },
  { w: "assist", p: "/əˈsɪst/", t: "v.", m: "帮助，协助", e: "Volunteers assisted with the event.", z: "志愿者协助了这次活动。", c: "cet", b: "cet4" },
  { w: "assumption", p: "/əˈsʌmpʃn/", t: "n.", m: "假设，假定", e: "Your argument rests on a false assumption.", z: "你的论证建立在一个错误假设上。", c: "cet", b: "cet4" },
  { w: "assure", p: "/əˈʃʊə(r)/", t: "v.", m: "向…保证，使确信", e: "I can assure you that it will work.", z: "我向你保证这会有效。", c: "cet", b: "cet4" },
  { w: "atmosphere", p: "/ˈætməsfɪə(r)/", t: "n.", m: "大气；氛围", e: "The café has a relaxed atmosphere.", z: "这家咖啡馆氛围轻松。", c: "cet", b: "cet4" },
  { w: "authority", p: "/ɔːˈθɒrəti/", t: "n.", m: "权威；当局", e: "The local authority approved the plan.", z: "当地政府批准了这个计划。", c: "cet", b: "cet4" },
  { w: "average", p: "/ˈævərɪdʒ/", t: "adj./n.", m: "平均的；平均数", e: "The average score was 72.", z: "平均分是72分。", c: "cet", b: "cet4" },
  { w: "awkward", p: "/ˈɔːkwəd/", t: "adj.", m: "尴尬的；难处理的", e: "There was an awkward silence.", z: "出现了尴尬的沉默。", c: "cet", b: "cet4" },
  { w: "basically", p: "/ˈbeɪsɪkli/", t: "adv.", m: "基本上，大体上", e: "Basically, the plan is the same.", z: "基本上，计划是一样的。", c: "cet", b: "cet4" },
  { w: "belief", p: "/bɪˈliːf/", t: "n.", m: "信念，看法", e: "It is my belief that practice matters most.", z: "我认为练习最重要。", c: "cet", b: "cet4" },
  { w: "belong", p: "/bɪˈlɒŋ/", t: "v.", m: "属于；适合", e: "This book belongs to the library.", z: "这本书是图书馆的。", c: "cet", b: "cet4" },
  { w: "beneath", p: "/bɪˈniːθ/", t: "prep.", m: "在…下面；不如", e: "The valley lies beneath the mountains.", z: "山谷位于群山之下。", c: "cet", b: "cet4" },
  { w: "bother", p: "/ˈbɒðə(r)/", t: "v./n.", m: "打扰；麻烦", e: "Sorry to bother you so late.", z: "抱歉这么晚打扰你。", c: "cet", b: "cet4" },
  { w: "branch", p: "/brɑːntʃ/", t: "n.", m: "树枝；分支机构", e: "The bank opened a new branch here.", z: "这家银行在这里开了新分行。", c: "cet", b: "cet4" },
  { w: "burden", p: "/ˈbɜːdn/", t: "n./v.", m: "负担；使负担", e: "High rent is a heavy burden for students.", z: "高房租对学生是沉重的负担。", c: "cet", b: "cet4" },
  { w: "calculate", p: "/ˈkælkjuleɪt/", t: "v.", m: "计算；估计", e: "Let me calculate the total cost.", z: "让我算一下总花费。", c: "cet", b: "cet4" },
  { w: "campaign", p: "/kæmˈpeɪn/", t: "n./v.", m: "运动；活动", e: "They launched a campaign against littering.", z: "他们发起了一场反对乱扔垃圾的活动。", c: "cet", b: "cet4" },
  { w: "cancel", p: "/ˈkænsl/", t: "v.", m: "取消；抵消", e: "The flight was cancelled because of the storm.", z: "航班因暴风雨取消。", c: "cet", b: "cet4" },
  { w: "candidate", p: "/ˈkændɪdət/", t: "n.", m: "候选人；应试者", e: "There are five candidates for the job.", z: "这个职位有五名候选人。", c: "cet", b: "cet4" },
  { w: "capital", p: "/ˈkæpɪtl/", t: "n./adj.", m: "首都；资本；大写的", e: "Beijing is the capital of China.", z: "北京是中国的首都。", c: "cet", b: "cet4" },
  { w: "category", p: "/ˈkætəɡəri/", t: "n.", m: "类别，种类", e: "The books are sorted into categories.", z: "这些书按类别分类。", c: "cet", b: "cet4" },
  { w: "channel", p: "/ˈtʃænl/", t: "n./v.", m: "频道；渠道；引导", e: "She changed the channel to watch the news.", z: "她换到新闻频道。", c: "cet", b: "cet4" },
  { w: "chapter", p: "/ˈtʃæptə(r)/", t: "n.", m: "章节；时期", e: "I read three chapters last night.", z: "我昨晚读了三章。", c: "cet", b: "cet4" },
  { w: "chemical", p: "/ˈkemɪkl/", t: "adj./n.", m: "化学的；化学品", e: "The factory released harmful chemicals.", z: "这家工厂排放了有害化学物质。", c: "cet", b: "cet4" },
  { w: "circumstance", p: "/ˈsɜːkəmstəns/", t: "n.", m: "情况，环境", e: "Under no circumstances should you give up.", z: "无论如何你都不该放弃。", c: "cet", b: "cet4" },
  { w: "cite", p: "/saɪt/", t: "v.", m: "引用，引证", e: "He cited three studies to support his point.", z: "他引用了三项研究来支持观点。", c: "cet", b: "cet4" },
  { w: "civil", p: "/ˈsɪvl/", t: "adj.", m: "公民的；民用的；文明的", e: "The civil war lasted for years.", z: "内战持续了多年。", c: "cet", b: "cet4" },
  { w: "client", p: "/ˈklaɪənt/", t: "n.", m: "客户，委托人", e: "The client was happy with the design.", z: "客户对设计很满意。", c: "cet", b: "cet4" },
  { w: "combination", p: "/ˌkɒmbɪˈneɪʃn/", t: "n.", m: "组合，结合", e: "A combination of effort and luck helped.", z: "努力加上运气起了作用。", c: "cet", b: "cet4" },
  { w: "commercial", p: "/kəˈmɜːʃl/", t: "adj./n.", m: "商业的；广告", e: "The film was a commercial success.", z: "这部电影在商业上很成功。", c: "cet", b: "cet4" },
  { w: "commission", p: "/kəˈmɪʃn/", t: "n./v.", m: "佣金；委员会；委托", e: "The agent earns a 5% commission.", z: "代理商赚取5%的佣金。", c: "cet", b: "cet4" },
  { w: "community", p: "/kəˈmjuːnəti/", t: "n.", m: "社区；群体", e: "The whole community joined the clean-up.", z: "整个社区都参加了清扫。", c: "cet", b: "cet4" },
  { w: "complaint", p: "/kəmˈpleɪnt/", t: "n.", m: "抱怨；投诉", e: "We received several complaints about noise.", z: "我们收到了几起噪音投诉。", c: "cet", b: "cet4" },
  { w: "confidence", p: "/ˈkɒnfɪdəns/", t: "n.", m: "信心，信任", e: "Practice builds confidence.", z: "练习能建立信心。", c: "cet", b: "cet4" },
  { w: "conservative", p: "/kənˈsɜːvətɪv/", t: "adj.", m: "保守的，谨慎的", e: "He takes a conservative approach to investing.", z: "他投资态度保守。", c: "cet", b: "cet4" },
  { w: "construct", p: "/kənˈstrʌkt/", t: "v.", m: "建造；构建", e: "They constructed a new bridge in two years.", z: "他们用两年建了一座新桥。", c: "cet", b: "cet4" },
  { w: "contemporary", p: "/kənˈtemprəri/", t: "adj.", m: "当代的；同时代的", e: "The museum shows contemporary art.", z: "这家博物馆展出当代艺术。", c: "cet", b: "cet4" },
  { w: "contract", p: "/ˈkɒntrækt/", t: "n./v.", m: "合同；收缩", e: "Please sign the contract before Friday.", z: "请在周五前签合同。", c: "cet", b: "cet4" },
  { w: "convenience", p: "/kənˈviːniəns/", t: "n.", m: "便利，方便", e: "Online payment offers great convenience.", z: "在线支付非常方便。", c: "cet", b: "cet4" },

  /* ===== 六级词汇（扩充）===== */
  { w: "accord", p: "/əˈkɔːd/", t: "n./v.", m: "一致；给予", e: "His actions accord with his words.", z: "他言行一致。", c: "cet", b: "cet6" },
  { w: "acute", p: "/əˈkjuːt/", t: "adj.", m: "敏锐的；急性的；严重的", e: "There is an acute shortage of nurses.", z: "护士严重短缺。", c: "cet", b: "cet6" },
  { w: "adhere", p: "/ədˈhɪə(r)/", t: "v.", m: "遵守；黏附", e: "All members must adhere to the rules.", z: "所有成员都必须遵守规则。", c: "cet", b: "cet6" },
  { w: "administer", p: "/ədˈmɪnɪstə(r)/", t: "v.", m: "管理；实施；给药", e: "The fund is administered by a local charity.", z: "这笔基金由当地一家慈善机构管理。", c: "cet", b: "cet6" },
  { w: "adverse", p: "/ˈædvɜːs/", t: "adj.", m: "不利的，有害的", e: "Adverse weather delayed the flight.", z: "恶劣天气导致航班延误。", c: "cet", b: "cet6" },
  { w: "aesthetic", p: "/iːsˈθetɪk/", t: "adj.", m: "美学的，审美的", e: "The design has great aesthetic value.", z: "这个设计有很高的美学价值。", c: "cet", b: "cet6" },
  { w: "affiliate", p: "/əˈfɪlieɪt/", t: "v./n.", m: "使隶属；分支机构", e: "The clinic is affiliated with a university.", z: "这家诊所隶属于一所大学。", c: "cet", b: "cet6" },
  { w: "allege", p: "/əˈledʒ/", t: "v.", m: "断言，指称", e: "He alleges that the report is false.", z: "他声称这份报告是假的。", c: "cet", b: "cet6" },
  { w: "alleviate", p: "/əˈliːvieɪt/", t: "v.", m: "减轻，缓解", e: "The medicine alleviated the pain.", z: "这种药减轻了疼痛。", c: "cet", b: "cet6" },
  { w: "analogy", p: "/əˈnælədʒi/", t: "n.", m: "类比，比拟", e: "He drew an analogy between the brain and a computer.", z: "他把大脑和计算机作了类比。", c: "cet", b: "cet6" },
  { w: "apparatus", p: "/ˌæpəˈreɪtəs/", t: "n.", m: "仪器，设备", e: "The lab has modern apparatus.", z: "实验室有现代化的仪器。", c: "cet", b: "cet6" },
  { w: "array", p: "/əˈreɪ/", t: "n./v.", m: "一系列；排列", e: "The shop offers a wide array of goods.", z: "这家店提供的商品种类繁多。", c: "cet", b: "cet6" },
  { w: "aspire", p: "/əˈspaɪə(r)/", t: "v.", m: "渴望，追求", e: "She aspires to be a diplomat.", z: "她渴望成为外交官。", c: "cet", b: "cet6" },
  { w: "assessment", p: "/əˈsesmənt/", t: "n.", m: "评估，评价", e: "The assessment takes place every term.", z: "每学期进行一次评估。", c: "cet", b: "cet6" },
  { w: "audit", p: "/ˈɔːdɪt/", t: "n./v.", m: "审计，查账", e: "The company is audited annually.", z: "公司每年接受审计。", c: "cet", b: "cet6" },
  { w: "autonomy", p: "/ɔːˈtɒnəmi/", t: "n.", m: "自治；自主权", e: "Teachers were given more autonomy.", z: "教师获得了更多自主权。", c: "cet", b: "cet6" },
  { w: "avert", p: "/əˈvɜːt/", t: "v.", m: "避免，防止；转移", e: "Quick action averted a disaster.", z: "迅速的处置避免了一场灾难。", c: "cet", b: "cet6" },
  { w: "benevolent", p: "/bəˈnevələnt/", t: "adj.", m: "仁慈的，慈善的", e: "A benevolent stranger paid for her ticket.", z: "一位好心的陌生人替她付了车票。", c: "cet", b: "cet6" },
  { w: "bizarre", p: "/bɪˈzɑː(r)/", t: "adj.", m: "奇异的，古怪的", e: "The story has a bizarre ending.", z: "这个故事有个离奇的结局。", c: "cet", b: "cet6" },
  { w: "blatant", p: "/ˈbleɪtnt/", t: "adj.", m: "明显的（贬义），公然的", e: "That was a blatant lie.", z: "那是个明目张胆的谎言。", c: "cet", b: "cet6" },
  { w: "bolster", p: "/ˈbəʊlstə(r)/", t: "v.", m: "支持，增强", e: "The results bolstered his confidence.", z: "这些结果增强了他的信心。", c: "cet", b: "cet6" },
  { w: "breach", p: "/briːtʃ/", t: "n./v.", m: "违反；缺口", e: "The company was fined for a breach of contract.", z: "公司因违约被罚款。", c: "cet", b: "cet6" },
  { w: "brutal", p: "/ˈbruːtl/", t: "adj.", m: "残酷的，野蛮的", e: "The competition is brutal.", z: "竞争非常残酷。", c: "cet", b: "cet6" },
  { w: "cater", p: "/ˈkeɪtə(r)/", t: "v.", m: "迎合；提供饮食", e: "The course caters to different levels.", z: "这门课适合不同水平的人。", c: "cet", b: "cet6" },
  { w: "collaborate", p: "/kəˈlæbəreɪt/", t: "v.", m: "合作，协作", e: "The two universities collaborated on the study.", z: "两所大学合作开展了这项研究。", c: "cet", b: "cet6" },
  { w: "commodity", p: "/kəˈmɒdəti/", t: "n.", m: "商品，日用品", e: "Water is becoming a precious commodity.", z: "水正成为一种珍贵资源。", c: "cet", b: "cet6" },
  { w: "commonplace", p: "/ˈkɒmənpleɪs/", t: "adj.", m: "平常的，普遍的", e: "Remote meetings are now commonplace.", z: "远程会议现在很普遍。", c: "cet", b: "cet6" },
  { w: "complement", p: "/ˈkɒmplɪment/", t: "v./n.", m: "补充，与…相配", e: "The wine complements the dish perfectly.", z: "这款酒和这道菜很搭。", c: "cet", b: "cet6" },
  { w: "compliance", p: "/kəmˈplaɪəns/", t: "n.", m: "遵守，合规", e: "Compliance with safety rules is mandatory.", z: "遵守安全规定是强制的。", c: "cet", b: "cet6" },
  { w: "comprehend", p: "/ˌkɒmprɪˈhend/", t: "v.", m: "理解，领会", e: "It's hard to comprehend such numbers.", z: "这样的数字很难理解。", c: "cet", b: "cet6" },
  { w: "comprise", p: "/kəmˈpraɪz/", t: "v.", m: "由…组成，包含", e: "The team comprises eight members.", z: "这个团队由八人组成。", c: "cet", b: "cet6" },
  { w: "conceal", p: "/kənˈsiːl/", t: "v.", m: "隐藏，隐瞒", e: "He could not conceal his disappointment.", z: "他无法掩饰失望。", c: "cet", b: "cet6" },
  { w: "concede", p: "/kənˈsiːd/", t: "v.", m: "承认；让步", e: "She conceded that she had made a mistake.", z: "她承认自己犯了个错。", c: "cet", b: "cet6" },
  { w: "concise", p: "/kənˈsaɪs/", t: "adj.", m: "简洁的，简明的", e: "Keep your answer concise.", z: "答案要写得简洁。", c: "cet", b: "cet6" },
  { w: "condemn", p: "/kənˈdem/", t: "v.", m: "谴责；判刑", e: "The government condemned the attack.", z: "政府谴责了这次袭击。", c: "cet", b: "cet6" },
  { w: "confer", p: "/kənˈfɜː(r)/", t: "v.", m: "授予；商议", e: "The university conferred a degree on him.", z: "大学授予他学位。", c: "cet", b: "cet6" },
  { w: "confine", p: "/kənˈfaɪn/", t: "v.", m: "限制；监禁", e: "Please confine your answer to one page.", z: "请把答案控制在一页以内。", c: "cet", b: "cet6" },
  { w: "confront", p: "/kənˈfrʌnt/", t: "v.", m: "面对，对抗", e: "We must confront the problem directly.", z: "我们必须直接面对这个问题。", c: "cet", b: "cet6" },
  { w: "consecutive", p: "/kənˈsekjətɪv/", t: "adj.", m: "连续的", e: "It rained for five consecutive days.", z: "连续下了五天雨。", c: "cet", b: "cet6" },
  { w: "consolidate", p: "/kənˈsɒlɪdeɪt/", t: "v.", m: "巩固，加强", e: "Review helps consolidate new words.", z: "复习有助于巩固新词。", c: "cet", b: "cet6" },
  { w: "contaminate", p: "/kənˈtæmɪneɪt/", t: "v.", m: "污染，弄脏", e: "The river was contaminated by waste.", z: "这条河被废料污染了。", c: "cet", b: "cet6" },
  { w: "conversely", p: "/ˈkɒnvɜːsli/", t: "adv.", m: "相反地", e: "Conversely, too little stress can reduce effort.", z: "相反，压力过小也会降低努力程度。", c: "cet", b: "cet6" },
  { w: "convert", p: "/kənˈvɜːt/", t: "v.", m: "转换，转变", e: "They converted the factory into a museum.", z: "他们把工厂改造成了博物馆。", c: "cet", b: "cet6" },
  { w: "convey", p: "/kənˈveɪ/", t: "v.", m: "传达；运送", e: "Words cannot convey how grateful I am.", z: "言语无法表达我有多感激。", c: "cet", b: "cet6" },
  { w: "counterpart", p: "/ˈkaʊntəpɑːt/", t: "n.", m: "对应的人或物", e: "The minister met her French counterpart.", z: "这位部长会见了她的法国同行。", c: "cet", b: "cet6" },
  { w: "credibility", p: "/ˌkredəˈbɪləti/", t: "n.", m: "可信度，信誉", e: "The mistake damaged his credibility.", z: "这个错误损害了他的信誉。", c: "cet", b: "cet6" },
  { w: "criterion", p: "/kraɪˈtɪəriən/", t: "n.", m: "标准，准则", e: "What is the main criterion for selection?", z: "筛选的主要标准是什么？", c: "cet", b: "cet6" },
  { w: "curriculum", p: "/kəˈrɪkjələm/", t: "n.", m: "课程，全部课程", e: "The school added coding to the curriculum.", z: "学校把编程加入了课程。", c: "cet", b: "cet6" },
  { w: "cynical", p: "/ˈsɪnɪkl/", t: "adj.", m: "愤世嫉俗的，怀疑的", e: "He is cynical about politicians' promises.", z: "他对政客的承诺持怀疑态度。", c: "cet", b: "cet6" },
  { w: "deliberate", p: "/dɪˈlɪbərət/", t: "adj./v.", m: "故意的；深思熟虑", e: "It was a deliberate attempt to mislead.", z: "那是故意误导。", c: "cet", b: "cet6" },
  { w: "denote", p: "/dɪˈnəʊt/", t: "v.", m: "表示，意味着", e: "The red line denotes the average.", z: "红线表示平均值。", c: "cet", b: "cet6" },
  { w: "deprive", p: "/dɪˈpraɪv/", t: "v.", m: "剥夺，使丧失", e: "Noise deprived him of sleep.", z: "噪音让他无法入睡。", c: "cet", b: "cet6" },
  { w: "designate", p: "/ˈdezɪɡneɪt/", t: "v.", m: "指定，命名", e: "This area is designated as a nature reserve.", z: "这片区域被指定为自然保护区。", c: "cet", b: "cet6" },
  { w: "devise", p: "/dɪˈvaɪz/", t: "v.", m: "设计，想出", e: "They devised a clever solution.", z: "他们想出了一个巧妙的办法。", c: "cet", b: "cet6" },
  { w: "differentiate", p: "/ˌdɪfəˈrenʃieɪt/", t: "v.", m: "区分，辨别", e: "It's important to differentiate fact from opinion.", z: "区分事实和观点很重要。", c: "cet", b: "cet6" },
  { w: "discard", p: "/dɪsˈkɑːd/", t: "v.", m: "丢弃，抛弃", e: "Discard old notes once you have reviewed them.", z: "复习完的旧笔记可以丢掉。", c: "cet", b: "cet6" },
  { w: "disclose", p: "/dɪsˈkləʊz/", t: "v.", m: "透露，公开", e: "The company refused to disclose the figures.", z: "公司拒绝透露这些数字。", c: "cet", b: "cet6" },
  { w: "discrete", p: "/dɪˈskriːt/", t: "adj.", m: "分离的，不连续的", e: "The course is divided into discrete units.", z: "这门课分成若干独立单元。", c: "cet", b: "cet6" },
  { w: "disrupt", p: "/dɪsˈrʌpt/", t: "v.", m: "打断，扰乱", e: "The storm disrupted train services.", z: "暴风雨打乱了列车运行。", c: "cet", b: "cet6" },
  { w: "diverse", p: "/daɪˈvɜːs/", t: "adj.", m: "多样的，不同的", e: "The city has a diverse population.", z: "这座城市人口构成多样。", c: "cet", b: "cet6" }
];

WORD_BANK = WORD_BANK.concat(CET_EXTRA);

var IELTS_EXTRA = [

  /* ===== 雅思核心词（扩充）===== */
  { w: "abundant", p: "/əˈbʌndənt/", t: "adj.", m: "丰富的，大量的", e: "The region has abundant natural resources.", z: "这个地区自然资源丰富。", c: "exam", b: "ielts-core" },
  { w: "accordingly", p: "/əˈkɔːdɪŋli/", t: "adv.", m: "因此；相应地", e: "The plan changed, and we adjusted accordingly.", z: "计划变了，我们也相应做了调整。", c: "exam", b: "ielts-core" },
  { w: "albeit", p: "/ˌɔːlˈbiːɪt/", t: "conj.", m: "尽管，虽然", e: "It was a useful result, albeit a modest one.", z: "这是个有用的结果，尽管不算显著。", c: "exam", b: "ielts-core" },
  { w: "alter", p: "/ˈɔːltə(r)/", t: "v.", m: "改变，改动", e: "Climate change may alter farming patterns.", z: "气候变化可能改变耕作方式。", c: "exam", b: "ielts-core" },
  { w: "amplify", p: "/ˈæmplɪfaɪ/", t: "v.", m: "放大，增强", e: "Social media can amplify false information.", z: "社交媒体会放大虚假信息。", c: "exam", b: "ielts-core" },
  { w: "assurance", p: "/əˈʃʊərəns/", t: "n.", m: "保证；信心", e: "The manager gave us an assurance of quality.", z: "经理向我们保证了质量。", c: "exam", b: "ielts-core" },
  { w: "capability", p: "/ˌkeɪpəˈbɪləti/", t: "n.", m: "能力，性能", e: "The test measures problem-solving capability.", z: "这项测试衡量解决问题的能力。", c: "exam", b: "ielts-core" },
  { w: "commitment", p: "/kəˈmɪtmənt/", t: "n.", m: "投入，承诺", e: "Learning a language requires long-term commitment.", z: "学语言需要长期的投入。", c: "exam", b: "ielts-core" },
  { w: "comparison", p: "/kəmˈpærɪsn/", t: "n.", m: "比较，对照", e: "The chart makes a comparison between four cities.", z: "这张图对四个城市做了比较。", c: "exam", b: "ielts-core" },
  { w: "competence", p: "/ˈkɒmpɪtəns/", t: "n.", m: "能力，胜任", e: "The course develops communicative competence.", z: "这门课培养交际能力。", c: "exam", b: "ielts-core" },
  { w: "complexity", p: "/kəmˈpleksəti/", t: "n.", m: "复杂性", e: "The complexity of the issue is often underestimated.", z: "这个问题的复杂性常被低估。", c: "exam", b: "ielts-core" },
  { w: "component", p: "/kəmˈpəʊnənt/", t: "n.", m: "组成部分，成分", e: "Speaking is a key component of the test.", z: "口语是这项考试的关键部分。", c: "exam", b: "ielts-core" },
  { w: "compromise", p: "/ˈkɒmprəmaɪz/", t: "n./v.", m: "妥协，折中", e: "Both sides made a compromise.", z: "双方都做了让步。", c: "exam", b: "ielts-core" },
  { w: "concentration", p: "/ˌkɒnsnˈtreɪʃn/", t: "n.", m: "专注；浓度", e: "Noise reduces concentration.", z: "噪音会降低专注度。", c: "exam", b: "ielts-core" },
  { w: "constraint", p: "/kənˈstreɪnt/", t: "n.", m: "限制，约束", e: "Time constraints affect how much we can do.", z: "时间限制影响我们能做多少。", c: "exam", b: "ielts-core" },
  { w: "consumption", p: "/kənˈsʌmpʃn/", t: "n.", m: "消耗，消费量", e: "Water consumption rose sharply.", z: "用水量急剧上升。", c: "exam", b: "ielts-core" },
  { w: "cooperation", p: "/kəʊˌɒpəˈreɪʃn/", t: "n.", m: "合作，配合", e: "International cooperation is essential here.", z: "这里需要国际合作。", c: "exam", b: "ielts-core" },
  { w: "coverage", p: "/ˈkʌvərɪdʒ/", t: "n.", m: "覆盖范围；报道", e: "The media gave the event wide coverage.", z: "媒体对这次活动做了广泛报道。", c: "exam", b: "ielts-core" },
  { w: "crisis", p: "/ˈkraɪsɪs/", t: "n.", m: "危机", e: "The city faces a housing crisis.", z: "这座城市面临住房危机。", c: "exam", b: "ielts-core" },
  { w: "criticism", p: "/ˈkrɪtɪsɪzəm/", t: "n.", m: "批评，指责", e: "The policy drew heavy criticism.", z: "这项政策招致严厉批评。", c: "exam", b: "ielts-core" },
  { w: "deficiency", p: "/dɪˈfɪʃnsi/", t: "n.", m: "缺乏，不足", e: "Vitamin deficiency can cause tiredness.", z: "缺乏维生素会导致疲倦。", c: "exam", b: "ielts-core" },
  { w: "distinction", p: "/dɪˈstɪŋkʃn/", t: "n.", m: "区别；优秀", e: "We should make a clear distinction between the two.", z: "我们应清楚区分这两者。", c: "exam", b: "ielts-core" },
  { w: "distribution", p: "/ˌdɪstrɪˈbjuːʃn/", t: "n.", m: "分布，分配", e: "The map shows the distribution of rainfall.", z: "这张图显示了降雨的分布。", c: "exam", b: "ielts-core" },
  { w: "diversity", p: "/daɪˈvɜːsəti/", t: "n.", m: "多样性", e: "Cultural diversity enriches a city.", z: "文化多样性让城市更丰富。", c: "exam", b: "ielts-core" },
  { w: "dominance", p: "/ˈdɒmɪnəns/", t: "n.", m: "主导地位，优势", e: "The company's dominance is unchallenged.", z: "这家公司的主导地位无人挑战。", c: "exam", b: "ielts-core" },
  { w: "duration", p: "/djuˈreɪʃn/", t: "n.", m: "持续时间，期间", e: "The course is two months in duration.", z: "这门课为期两个月。", c: "exam", b: "ielts-core" },
  { w: "economic", p: "/ˌiːkəˈnɒmɪk/", t: "adj.", m: "经济的", e: "Tourism brings clear economic benefits.", z: "旅游业带来明显的经济效益。", c: "exam", b: "ielts-core" },
  { w: "emission", p: "/ɪˈmɪʃn/", t: "n.", m: "排放（物）", e: "Carbon emissions must be reduced.", z: "碳排放必须减少。", c: "exam", b: "ielts-core" },
  { w: "emphasis", p: "/ˈemfəsɪs/", t: "n.", m: "强调，重点", e: "The school puts emphasis on reading.", z: "这所学校重视阅读。", c: "exam", b: "ielts-core" },
  { w: "employment", p: "/ɪmˈplɔɪmənt/", t: "n.", m: "就业；雇用", e: "Youth employment is a major concern.", z: "青年就业是个大问题。", c: "exam", b: "ielts-core" },
  { w: "encouragement", p: "/ɪnˈkʌrɪdʒmənt/", t: "n.", m: "鼓励", e: "A little encouragement goes a long way.", z: "一点鼓励就能起很大作用。", c: "exam", b: "ielts-core" },
  { w: "engagement", p: "/ɪnˈɡeɪdʒmənt/", t: "n.", m: "参与；约定", e: "Student engagement improved with group work.", z: "小组作业提高了学生的参与度。", c: "exam", b: "ielts-core" },
  { w: "exception", p: "/ɪkˈsepʃn/", t: "n.", m: "例外", e: "There is no exception to this rule.", z: "这条规则没有例外。", c: "exam", b: "ielts-core" },
  { w: "exclusion", p: "/ɪkˈskluːʒn/", t: "n.", m: "排除，排斥", e: "Social exclusion affects mental health.", z: "社会排斥会影响心理健康。", c: "exam", b: "ielts-core" },
  { w: "expenditure", p: "/ɪkˈspendɪtʃə(r)/", t: "n.", m: "支出，开销", e: "Government expenditure on health rose.", z: "政府在医疗上的支出增加了。", c: "exam", b: "ielts-core" },
  { w: "exposure", p: "/ɪkˈspəʊʒə(r)/", t: "n.", m: "暴露；接触", e: "Early exposure to books helps children read.", z: "早期接触书籍有助于孩子阅读。", c: "exam", b: "ielts-core" },
  { w: "extent", p: "/ɪkˈstent/", t: "n.", m: "程度，范围", e: "To what extent do you agree?", z: "你在多大程度上同意？", c: "exam", b: "ielts-core" },
  { w: "facility", p: "/fəˈsɪləti/", t: "n.", m: "设施；便利", e: "The school has excellent sports facilities.", z: "这所学校有很好的体育设施。", c: "exam", b: "ielts-core" },
  { w: "fluctuation", p: "/ˌflʌktʃuˈeɪʃn/", t: "n.", m: "波动，起伏", e: "There was a slight fluctuation in sales.", z: "销量有小幅波动。", c: "exam", b: "ielts-core" },
  { w: "foundation", p: "/faʊnˈdeɪʃn/", t: "n.", m: "基础；基金会", e: "Vocabulary is the foundation of reading.", z: "词汇是阅读的基础。", c: "exam", b: "ielts-core" },
  { w: "frequency", p: "/ˈfriːkwənsi/", t: "n.", m: "频率，次数", e: "The frequency of visits increased.", z: "访问频率上升了。", c: "exam", b: "ielts-core" },
  { w: "funding", p: "/ˈfʌndɪŋ/", t: "n.", m: "资金，拨款", e: "The project lost its public funding.", z: "这个项目失去了公共资金支持。", c: "exam", b: "ielts-core" },
  { w: "guidance", p: "/ˈɡaɪdns/", t: "n.", m: "指导，引导", e: "Students need guidance on how to revise.", z: "学生需要复习方法的指导。", c: "exam", b: "ielts-core" },
  { w: "hardship", p: "/ˈhɑːdʃɪp/", t: "n.", m: "艰难，困苦", e: "The family went through great hardship.", z: "这个家庭经历了很多艰难。", c: "exam", b: "ielts-core" },
  { w: "immigration", p: "/ˌɪmɪˈɡreɪʃn/", t: "n.", m: "移民（入境）", e: "Immigration has changed the city's culture.", z: "移民改变了这座城市的文化。", c: "exam", b: "ielts-core" },
  { w: "impact", p: "/ˈɪmpækt/", t: "n./v.", m: "影响，冲击", e: "The policy had a huge impact on farmers.", z: "这项政策对农民影响巨大。", c: "exam", b: "ielts-core" },
  { w: "incentive", p: "/ɪnˈsentɪv/", t: "n.", m: "激励，动机", e: "Tax breaks are an incentive to invest.", z: "减税是投资的激励。", c: "exam", b: "ielts-core" },
  { w: "indication", p: "/ˌɪndɪˈkeɪʃn/", t: "n.", m: "迹象，表明", e: "There is no indication that it will improve.", z: "没有迹象表明情况会好转。", c: "exam", b: "ielts-core" },
  { w: "inequality", p: "/ˌɪnɪˈkwɒləti/", t: "n.", m: "不平等", e: "Income inequality has widened.", z: "收入不平等扩大了。", c: "exam", b: "ielts-core" },
  { w: "infrastructure", p: "/ˈɪnfrəstrʌktʃə(r)/", t: "n.", m: "基础设施", e: "The city invested heavily in infrastructure.", z: "这座城市在基础设施上投入很大。", c: "exam", b: "ielts-core" },

  /* ===== 雅思学术词（扩充）===== */
  { w: "acquisition", p: "/ˌækwɪˈzɪʃn/", t: "n.", m: "获得；习得", e: "Language acquisition starts in infancy.", z: "语言习得从婴儿期就开始了。", c: "exam", b: "ielts-academic" },
  { w: "adaptation", p: "/ˌædæpˈteɪʃn/", t: "n.", m: "适应；改编", e: "Adaptation to a new climate takes time.", z: "适应新气候需要时间。", c: "exam", b: "ielts-academic" },
  { w: "administration", p: "/ədˌmɪnɪˈstreɪʃn/", t: "n.", m: "管理；行政", e: "The administration of the fund is transparent.", z: "这笔基金的管理是透明的。", c: "exam", b: "ielts-academic" },
  { w: "allocation", p: "/ˌæləˈkeɪʃn/", t: "n.", m: "分配，配置", e: "The allocation of resources is unequal.", z: "资源分配不均。", c: "exam", b: "ielts-academic" },
  { w: "alteration", p: "/ˌɔːltəˈreɪʃn/", t: "n.", m: "改变，改动", e: "Any alteration to the plan must be approved.", z: "计划的任何改动都需批准。", c: "exam", b: "ielts-academic" },
  { w: "ambiguity", p: "/ˌæmbɪˈɡjuːəti/", t: "n.", m: "歧义，模棱两可", e: "The wording creates unnecessary ambiguity.", z: "这个措辞造成了不必要的歧义。", c: "exam", b: "ielts-academic" },
  { w: "analysis", p: "/əˈnæləsɪs/", t: "n.", m: "分析", e: "The analysis revealed a clear pattern.", z: "分析揭示了一个清晰的模式。", c: "exam", b: "ielts-academic" },
  { w: "anomaly", p: "/əˈnɒməli/", t: "n.", m: "异常，反常", e: "The data point is an anomaly.", z: "这个数据点是个异常值。", c: "exam", b: "ielts-academic" },
  { w: "application", p: "/ˌæplɪˈkeɪʃn/", t: "n.", m: "应用；申请", e: "The practical application of the theory is limited.", z: "这个理论的实际应用有限。", c: "exam", b: "ielts-academic" },
  { w: "assimilation", p: "/əˌsɪməˈleɪʃn/", t: "n.", m: "吸收；同化", e: "The assimilation of new ideas takes time.", z: "新观念的吸收需要时间。", c: "exam", b: "ielts-academic" },
  { w: "causality", p: "/kɔːˈzæləti/", t: "n.", m: "因果关系", e: "Correlation does not prove causality.", z: "相关并不等于因果。", c: "exam", b: "ielts-academic" },
  { w: "citation", p: "/saɪˈteɪʃn/", t: "n.", m: "引用，引文", e: "Every claim needs a citation.", z: "每个论断都需要引用来源。", c: "exam", b: "ielts-academic" },
  { w: "classification", p: "/ˌklæsɪfɪˈkeɪʃn/", t: "n.", m: "分类，归类", e: "The classification is based on size.", z: "分类依据是大小。", c: "exam", b: "ielts-academic" },
  { w: "cognition", p: "/kɒɡˈnɪʃn/", t: "n.", m: "认知", e: "Sleep affects cognition and memory.", z: "睡眠影响认知和记忆。", c: "exam", b: "ielts-academic" },
  { w: "coherence", p: "/kəʊˈhɪərəns/", t: "n.", m: "连贯性", e: "Coherence is one of the marking criteria.", z: "连贯性是评分标准之一。", c: "exam", b: "ielts-academic" },
  { w: "comprehension", p: "/ˌkɒmprɪˈhenʃn/", t: "n.", m: "理解（力）", e: "Reading comprehension improves with practice.", z: "阅读理解会随练习提高。", c: "exam", b: "ielts-academic" },
  { w: "conceptual", p: "/kənˈseptʃuəl/", t: "adj.", m: "概念上的", e: "The paper has a conceptual framework.", z: "这篇论文有一个概念框架。", c: "exam", b: "ielts-academic" },
  { w: "conformity", p: "/kənˈfɔːməti/", t: "n.", m: "一致；从众", e: "Peer pressure encourages conformity.", z: "同伴压力会促使人从众。", c: "exam", b: "ielts-academic" },
  { w: "context", p: "/ˈkɒntekst/", t: "n.", m: "语境，背景", e: "Guess the meaning from the context.", z: "从语境中猜意思。", c: "exam", b: "ielts-academic" },
  { w: "contradiction", p: "/ˌkɒntrəˈdɪkʃn/", t: "n.", m: "矛盾，对立", e: "There is a contradiction between the two studies.", z: "这两项研究之间存在矛盾。", c: "exam", b: "ielts-academic" },
  { w: "correlation", p: "/ˌkɒrəˈleɪʃn/", t: "n.", m: "相关性", e: "There is a strong correlation between the two.", z: "两者之间有很强的相关性。", c: "exam", b: "ielts-academic" },
  { w: "critique", p: "/krɪˈtiːk/", t: "n./v.", m: "批评性分析，评论", e: "The article offers a critique of the policy.", z: "这篇文章对政策做了批评性分析。", c: "exam", b: "ielts-academic" },
  { w: "deduction", p: "/dɪˈdʌkʃn/", t: "n.", m: "推论；扣除", e: "The conclusion follows by deduction.", z: "这个结论通过推论得出。", c: "exam", b: "ielts-academic" },
  { w: "definition", p: "/ˌdefɪˈnɪʃn/", t: "n.", m: "定义", e: "The definition of success varies.", z: "成功的定义因人而异。", c: "exam", b: "ielts-academic" },
  { w: "demonstration", p: "/ˌdemənˈstreɪʃn/", t: "n.", m: "演示；证明", e: "The demonstration convinced the audience.", z: "这次演示说服了观众。", c: "exam", b: "ielts-academic" },
  { w: "deviation", p: "/ˌdiːviˈeɪʃn/", t: "n.", m: "偏差，偏离", e: "A small deviation is acceptable.", z: "小的偏差是可以接受的。", c: "exam", b: "ielts-academic" },
  { w: "dimension", p: "/daɪˈmenʃn/", t: "n.", m: "维度，方面", e: "The issue has an ethical dimension.", z: "这个问题有伦理层面。", c: "exam", b: "ielts-academic" },
  { w: "documentation", p: "/ˌdɒkjumenˈteɪʃn/", t: "n.", m: "文件，文档记录", e: "Keep documentation of every experiment.", z: "每次实验都要留存记录。", c: "exam", b: "ielts-academic" },
  { w: "domain", p: "/dəˈmeɪn/", t: "n.", m: "领域，范围", e: "This lies outside my domain of expertise.", z: "这超出了我的专业领域。", c: "exam", b: "ielts-academic" },
  { w: "dynamic", p: "/daɪˈnæmɪk/", t: "adj./n.", m: "动态的；动力", e: "The market is highly dynamic.", z: "这个市场变化很快。", c: "exam", b: "ielts-academic" },
  { w: "element", p: "/ˈelɪmənt/", t: "n.", m: "要素，元素", e: "Trust is a key element of teamwork.", z: "信任是团队合作的关键要素。", c: "exam", b: "ielts-academic" },
  { w: "evaluation", p: "/ɪˌvæljuˈeɪʃn/", t: "n.", m: "评估，评价", e: "The evaluation took three months.", z: "评估花了三个月。", c: "exam", b: "ielts-academic" },
  { w: "experiment", p: "/ɪkˈsperɪmənt/", t: "n./v.", m: "实验；尝试", e: "The experiment produced unexpected results.", z: "实验产生了意外的结果。", c: "exam", b: "ielts-academic" },
  { w: "exploration", p: "/ˌekspləˈreɪʃn/", t: "n.", m: "探索，勘探", e: "Space exploration is expensive.", z: "太空探索耗资巨大。", c: "exam", b: "ielts-academic" },
  { w: "extraction", p: "/ɪkˈstrækʃn/", t: "n.", m: "提取，开采", e: "The extraction of oil damages the land.", z: "石油开采会破坏土地。", c: "exam", b: "ielts-academic" },
  { w: "formulation", p: "/ˌfɔːmjuˈleɪʃn/", t: "n.", m: "制定，构想", e: "The formulation of policy takes time.", z: "政策制定需要时间。", c: "exam", b: "ielts-academic" },
  { w: "generalization", p: "/ˌdʒenrəlaɪˈzeɪʃn/", t: "n.", m: "概括，泛化", e: "Be careful about making generalizations.", z: "做概括时要谨慎。", c: "exam", b: "ielts-academic" },
  { w: "identification", p: "/aɪˌdentɪfɪˈkeɪʃn/", t: "n.", m: "识别；身份证明", e: "The identification of the cause took years.", z: "查明原因花了好几年。", c: "exam", b: "ielts-academic" },
  { w: "illustration", p: "/ˌɪləˈstreɪʃn/", t: "n.", m: "例证；插图", e: "This is a good illustration of the problem.", z: "这是这个问题的一个好例证。", c: "exam", b: "ielts-academic" },
  { w: "indicator", p: "/ˈɪndɪkeɪtə(r)/", t: "n.", m: "指标，标志", e: "Literacy is an indicator of development.", z: "识字率是发展的一个指标。", c: "exam", b: "ielts-academic" },
  { w: "innovation", p: "/ˌɪnəˈveɪʃn/", t: "n.", m: "创新，革新", e: "Innovation drives economic growth.", z: "创新推动经济增长。", c: "exam", b: "ielts-academic" },
  { w: "interpretation", p: "/ɪnˌtɜːprɪˈteɪʃn/", t: "n.", m: "解释，解读", e: "The data allows several interpretations.", z: "这些数据可以有多种解读。", c: "exam", b: "ielts-academic" },
  { w: "investigation", p: "/ɪnˌvestɪˈɡeɪʃn/", t: "n.", m: "调查，研究", e: "The investigation is still ongoing.", z: "调查仍在进行。", c: "exam", b: "ielts-academic" },
  { w: "justification", p: "/ˌdʒʌstɪfɪˈkeɪʃn/", t: "n.", m: "正当理由，辩护", e: "There is no justification for such waste.", z: "这种浪费没有任何正当理由。", c: "exam", b: "ielts-academic" },
  { w: "mechanism", p: "/ˈmekənɪzəm/", t: "n.", m: "机制，机理", e: "The mechanism behind the effect is unclear.", z: "这种效应背后的机制尚不清楚。", c: "exam", b: "ielts-academic" },
  { w: "methodology", p: "/ˌmeθəˈdɒlədʒi/", t: "n.", m: "方法论，方法", e: "The methodology section explains the design.", z: "方法论部分说明了研究设计。", c: "exam", b: "ielts-academic" },
  { w: "objective", p: "/əbˈdʒektɪv/", t: "adj./n.", m: "客观的；目标", e: "Try to stay objective when reviewing.", z: "复习时要尽量保持客观。", c: "exam", b: "ielts-academic" },
  { w: "orientation", p: "/ˌɔːriənˈteɪʃn/", t: "n.", m: "方向，定位", e: "The course has a practical orientation.", z: "这门课偏重实用。", c: "exam", b: "ielts-academic" },
  { w: "parameter", p: "/pəˈræmɪtə(r)/", t: "n.", m: "参数，界限", e: "We must work within these parameters.", z: "我们必须在这些限定条件内工作。", c: "exam", b: "ielts-academic" },
  { w: "prevalence", p: "/ˈprevələns/", t: "n.", m: "普遍，流行程度", e: "The prevalence of the condition is rising.", z: "这种病症的流行程度在上升。", c: "exam", b: "ielts-academic" }
];

WORD_BANK = WORD_BANK.concat(IELTS_EXTRA);

var IELTS_EXTRA2 = [

  /* ===== 雅思写作提分（扩充）===== */
  { w: "approximately", p: "/əˈprɒksɪmətli/", t: "adv.", m: "大约，大概", e: "Approximately 30% of students chose this option.", z: "大约30%的学生选择了这个选项。", c: "exam", b: "ielts-writing" },
  { w: "respectively", p: "/rɪˈspektɪvli/", t: "adv.", m: "分别地，各自地", e: "The figures were 40% and 25% respectively.", z: "这两个数字分别是40%和25%。", c: "exam", b: "ielts-writing" },
  { w: "correspondingly", p: "/ˌkɒrəˈspɒndɪŋli/", t: "adv.", m: "相应地", e: "Costs rose and prices increased correspondingly.", z: "成本上升，价格也相应上涨。", c: "exam", b: "ielts-writing" },
  { w: "subsequently", p: "/ˈsʌbsɪkwəntli/", t: "adv.", m: "随后，接着", e: "Sales fell and subsequently recovered.", z: "销量下降，随后恢复。", c: "exam", b: "ielts-writing" },
  { w: "alternatively", p: "/ɔːlˈtɜːnətɪvli/", t: "adv.", m: "或者，另一种方式", e: "Alternatively, the data can be grouped by region.", z: "另一种做法是按地区分组。", c: "exam", b: "ielts-writing" },
  { w: "overall", p: "/ˌəʊvərˈɔːl/", t: "adv./adj.", m: "总体而言；总体的", e: "Overall, the trend was upward.", z: "总体而言，趋势是上升的。", c: "exam", b: "ielts-writing" },
  { w: "notably", p: "/ˈnəʊtəbli/", t: "adv.", m: "尤其，显著地", e: "Notably, the figure doubled in one year.", z: "值得注意的是，这个数字一年内翻了一倍。", c: "exam", b: "ielts-writing" },
  { w: "remarkably", p: "/rɪˈmɑːkəbli/", t: "adv.", m: "显著地，惊人地", e: "The number rose remarkably after 2010.", z: "2010年后数量显著上升。", c: "exam", b: "ielts-writing" },
  { w: "steadily", p: "/ˈstedɪli/", t: "adv.", m: "稳步地", e: "Membership grew steadily over the decade.", z: "会员数在这十年里稳步增长。", c: "exam", b: "ielts-writing" },
  { w: "moderately", p: "/ˈmɒdərətli/", t: "adv.", m: "适度地，中等地", e: "Prices increased moderately.", z: "价格温和上涨。", c: "exam", b: "ielts-writing" },
  { w: "significantly", p: "/sɪɡˈnɪfɪkəntli/", t: "adv.", m: "显著地，大幅地", e: "The figure dropped significantly after 2005.", z: "2005年后这个数字大幅下降。", c: "exam", b: "ielts-writing" },
  { w: "likewise", p: "/ˈlaɪkwaɪz/", t: "adv.", m: "同样地", e: "Likewise, spending on health increased.", z: "同样地，医疗支出也增加了。", c: "exam", b: "ielts-writing" },
  { w: "nonetheless", p: "/ˌnʌnðəˈles/", t: "adv.", m: "尽管如此", e: "The cost is high; nonetheless, it is worthwhile.", z: "成本很高，但仍然值得。", c: "exam", b: "ielts-writing" },
  { w: "thereby", p: "/ˌðeəˈbaɪ/", t: "adv.", m: "从而，因此", e: "They cut waste, thereby saving money.", z: "他们减少了浪费，从而省了钱。", c: "exam", b: "ielts-writing" },
  { w: "hence", p: "/hens/", t: "adv.", m: "因此", e: "Demand rose; hence prices went up.", z: "需求上升，因此价格上涨。", c: "exam", b: "ielts-writing" },
  { w: "moreover", p: "/mɔːrˈəʊvə(r)/", t: "adv.", m: "此外，而且", e: "Moreover, the sample was too small.", z: "此外，样本太小。", c: "exam", b: "ielts-writing" },
  { w: "therefore", p: "/ˈðeəfɔː(r)/", t: "adv.", m: "因此，所以", e: "The evidence is weak; therefore the claim fails.", z: "证据不足，所以这一说法不成立。", c: "exam", b: "ielts-writing" },
  { w: "attributable", p: "/əˈtrɪbjətəbl/", t: "adj.", m: "可归因于的", e: "The rise is largely attributable to tourism.", z: "这一增长主要归因于旅游业。", c: "exam", b: "ielts-writing" },
  { w: "comparative", p: "/kəmˈpærətɪv/", t: "adj.", m: "比较的，相对的", e: "The report offers a comparative analysis.", z: "这份报告做了比较分析。", c: "exam", b: "ielts-writing" },
  { w: "dominant", p: "/ˈdɒmɪnənt/", t: "adj.", m: "占主导的", e: "Coal remained the dominant fuel.", z: "煤炭仍是最主要的燃料。", c: "exam", b: "ielts-writing" },
  { w: "escalate", p: "/ˈeskəleɪt/", t: "v.", m: "升级，加剧", e: "Housing costs have escalated rapidly.", z: "住房成本迅速上涨。", c: "exam", b: "ielts-writing" },
  { w: "exemplify", p: "/ɪɡˈzemplɪfaɪ/", t: "v.", m: "举例说明", e: "This case exemplifies the wider problem.", z: "这个案例说明了更广泛的问题。", c: "exam", b: "ielts-writing" },
  { w: "illustrate", p: "/ˈɪləstreɪt/", t: "v.", m: "说明，阐明", e: "The chart illustrates changes over time.", z: "这张图说明了随时间的变化。", c: "exam", b: "ielts-writing" },
  { w: "indicate", p: "/ˈɪndɪkeɪt/", t: "v.", m: "表明，显示", e: "The data indicate a clear upward trend.", z: "数据表明有明确的上升趋势。", c: "exam", b: "ielts-writing" },
  { w: "manifest", p: "/ˈmænɪfest/", t: "v./adj.", m: "显现；明显的", e: "The problem manifests itself in several ways.", z: "这个问题以几种方式显现出来。", c: "exam", b: "ielts-writing" },
  { w: "marginal", p: "/ˈmɑːdʒɪnl/", t: "adj.", m: "微小的；边缘的", e: "The change was marginal.", z: "这一变化很微小。", c: "exam", b: "ielts-writing" },
  { w: "negligible", p: "/ˈneɡlɪdʒəbl/", t: "adj.", m: "微不足道的", e: "The difference is negligible.", z: "差别微乎其微。", c: "exam", b: "ielts-writing" },
  { w: "perspective", p: "/pəˈspektɪv/", t: "n.", m: "视角，观点", e: "From an economic perspective, it makes sense.", z: "从经济角度看，这是合理的。", c: "exam", b: "ielts-writing" },
  { w: "precedent", p: "/ˈpresɪdənt/", t: "n.", m: "先例，前例", e: "This sets a dangerous precedent.", z: "这开了一个危险的先例。", c: "exam", b: "ielts-writing" },
  { w: "rationale", p: "/ˌræʃəˈnɑːl/", t: "n.", m: "理由，依据", e: "Explain the rationale behind your choice.", z: "解释你选择的理由。", c: "exam", b: "ielts-writing" },
  { w: "remainder", p: "/rɪˈmeɪndə(r)/", t: "n.", m: "剩余部分", e: "The remainder of the group chose neither.", z: "剩下的人两个都没选。", c: "exam", b: "ielts-writing" },
  { w: "sector", p: "/ˈsektə(r)/", t: "n.", m: "部门，行业", e: "The service sector grew fastest.", z: "服务业增长最快。", c: "exam", b: "ielts-writing" },
  { w: "sequence", p: "/ˈsiːkwəns/", t: "n./v.", m: "顺序；序列", e: "Describe the stages in sequence.", z: "按顺序描述这些阶段。", c: "exam", b: "ielts-writing" },
  { w: "statistically", p: "/stəˈtɪstɪkli/", t: "adv.", m: "从统计上看", e: "The two groups are statistically similar.", z: "这两组在统计上相似。", c: "exam", b: "ielts-writing" },
  { w: "substantially", p: "/səbˈstænʃəli/", t: "adv.", m: "大幅地，实质上", e: "Spending increased substantially.", z: "支出大幅增加。", c: "exam", b: "ielts-writing" },
  { w: "tendency", p: "/ˈtendənsi/", t: "n.", m: "趋势，倾向", e: "There is a tendency to overlook the data.", z: "人们有忽视数据的倾向。", c: "exam", b: "ielts-writing" },
  { w: "transition", p: "/trænˈzɪʃn/", t: "n./v.", m: "过渡，转变", e: "The transition from school to work is hard.", z: "从学校到工作的过渡很难。", c: "exam", b: "ielts-writing" },
  { w: "unprecedented", p: "/ʌnˈpresɪdentɪd/", t: "adj.", m: "前所未有的", e: "The growth is unprecedented in scale.", z: "这种增长规模前所未有。", c: "exam", b: "ielts-writing" },
  { w: "utilization", p: "/ˌjuːtəlaɪˈzeɪʃn/", t: "n.", m: "利用，使用", e: "Land utilization has changed since 1990.", z: "土地用途自1990年以来发生了变化。", c: "exam", b: "ielts-writing" },
  { w: "vicinity", p: "/vəˈsɪnəti/", t: "n.", m: "附近，周边", e: "House prices in the vicinity rose.", z: "周边房价上涨了。", c: "exam", b: "ielts-writing" },
  { w: "quantify", p: "/ˈkwɒntɪfaɪ/", t: "v.", m: "量化，定量说明", e: "It is difficult to quantify the benefit.", z: "这种好处很难量化。", c: "exam", b: "ielts-writing" },

  /* ===== 雅思口语表达（扩充）===== */
  { w: "actually", p: "/ˈæktʃuəli/", t: "adv.", m: "其实，实际上", e: "Actually, I've never thought about it before.", z: "其实我以前从没想过这个问题。", c: "spoken", b: "ielts-speaking" },
  { w: "absolutely", p: "/ˈæbsəluːtli/", t: "adv.", m: "绝对地，完全同意", e: "Absolutely — I couldn't agree more.", z: "绝对是，我完全同意。", c: "spoken", b: "ielts-speaking" },
  { w: "definitely", p: "/ˈdefɪnətli/", t: "adv.", m: "肯定地，当然", e: "I'd definitely recommend it to others.", z: "我肯定会推荐给别人。", c: "spoken", b: "ielts-speaking" },
  { w: "obviously", p: "/ˈɒbviəsli/", t: "adv.", m: "显然，很明显", e: "Obviously, it depends on the situation.", z: "显然这要看情况。", c: "spoken", b: "ielts-speaking" },
  { w: "personally", p: "/ˈpɜːsənəli/", t: "adv.", m: "就我个人而言", e: "Personally, I prefer reading to watching.", z: "就我个人而言，我更喜欢阅读而不是看视频。", c: "spoken", b: "ielts-speaking" },
  { w: "honestly", p: "/ˈɒnɪstli/", t: "adv.", m: "老实说", e: "Honestly, I found it quite difficult at first.", z: "老实说，我一开始觉得挺难的。", c: "spoken", b: "ielts-speaking" },
  { w: "literally", p: "/ˈlɪtərəli/", t: "adv.", m: "真的，确实（口语强调）", e: "I literally had no time to prepare.", z: "我真的没时间准备。", c: "spoken", b: "ielts-speaking" },
  { w: "pretty", p: "/ˈprɪti/", t: "adv.", m: "挺，相当（口语）", e: "It's pretty common in my hometown.", z: "这在我家乡挺常见的。", c: "spoken", b: "ielts-speaking" },
  { w: "totally", p: "/ˈtəʊtəli/", t: "adv.", m: "完全，彻底", e: "I totally understand why people do that.", z: "我完全理解人们为什么那么做。", c: "spoken", b: "ielts-speaking" },
  { w: "stuff", p: "/stʌf/", t: "n.", m: "东西，材料（口语）", e: "I usually read stuff about history.", z: "我通常读历史方面的东西。", c: "spoken", b: "ielts-speaking" },
  { w: "a bunch of", p: "/ə bʌntʃ əv/", t: "phr.", m: "一堆，许多", e: "I have a bunch of hobbies.", z: "我有一堆爱好。", c: "spoken", b: "ielts-speaking" },
  { w: "get along with", p: "/ɡet əˈlɒŋ wɪð/", t: "phr.", m: "与…相处融洽", e: "I get along well with my colleagues.", z: "我和同事相处得很好。", c: "spoken", b: "ielts-speaking" },
  { w: "look up to", p: "/lʊk ʌp tuː/", t: "phr.", m: "敬仰，钦佩", e: "I look up to my grandfather.", z: "我很敬佩我爷爷。", c: "spoken", b: "ielts-speaking" },
  { w: "put up with", p: "/pʊt ʌp wɪð/", t: "phr.", m: "忍受，容忍", e: "I can't put up with constant noise.", z: "我受不了持续的噪音。", c: "spoken", b: "ielts-speaking" },
  { w: "come across", p: "/kʌm əˈkrɒs/", t: "phr.", m: "偶然遇到；给人印象", e: "I came across a great book last week.", z: "我上周偶然发现了一本好书。", c: "spoken", b: "ielts-speaking" },
  { w: "run into", p: "/rʌn ˈɪntuː/", t: "phr.", m: "偶然碰见；遭遇", e: "I ran into an old friend downtown.", z: "我在市中心碰见了一位老朋友。", c: "spoken", b: "ielts-speaking" },
  { w: "turn out", p: "/tɜːn aʊt/", t: "phr.", m: "结果是，证明是", e: "It turned out to be a great decision.", z: "结果证明这是个很好的决定。", c: "spoken", b: "ielts-speaking" },
  { w: "work out", p: "/wɜːk aʊt/", t: "phr.", m: "解决；锻炼；结果良好", e: "Things worked out better than I expected.", z: "事情的结果比我预想的好。", c: "spoken", b: "ielts-speaking" },
  { w: "give it a go", p: "/ɡɪv ɪt ə ɡəʊ/", t: "phr.", m: "试一试", e: "I'd never tried it, so I gave it a go.", z: "我从没试过，所以试了一下。", c: "spoken", b: "ielts-speaking" },
  { w: "in the long run", p: "/ɪn ðə lɒŋ rʌn/", t: "phr.", m: "从长远来看", e: "In the long run, it saves time.", z: "从长远看，这能省时间。", c: "spoken", b: "ielts-speaking" },
  { w: "on the whole", p: "/ɒn ðə həʊl/", t: "phr.", m: "总的来说", e: "On the whole, I had a positive experience.", z: "总的来说，我的体验是正面的。", c: "spoken", b: "ielts-speaking" },
  { w: "to some extent", p: "/tə sʌm ɪkˈstent/", t: "phr.", m: "在某种程度上", e: "To some extent, I agree with that.", z: "在某种程度上，我同意这一点。", c: "spoken", b: "ielts-speaking" },
  { w: "as far as I know", p: "/əz fɑːr əz aɪ nəʊ/", t: "phr.", m: "据我所知", e: "As far as I know, it's still open.", z: "据我所知，它还开着。", c: "spoken", b: "ielts-speaking" },
  { w: "if I remember correctly", p: "/ɪf aɪ rɪˈmembə kəˈrektli/", t: "phr.", m: "如果我没记错的话", e: "If I remember correctly, it opened in 2010.", z: "如果我没记错，它是2010年开的。", c: "spoken", b: "ielts-speaking" },
  { w: "from my point of view", p: "/frəm maɪ pɔɪnt əv vjuː/", t: "phr.", m: "从我的角度看", e: "From my point of view, that's a fair trade-off.", z: "在我看来，这是个公平的取舍。", c: "spoken", b: "ielts-speaking" },
  { w: "I'd rather", p: "/aɪd ˈrɑːðə(r)/", t: "phr.", m: "我宁愿", e: "I'd rather stay home than go out tonight.", z: "今晚我宁愿待在家也不出去。", c: "spoken", b: "ielts-speaking" },
  { w: "I'm not sure about that", p: "/aɪm nɒt ʃʊə(r) əˈbaʊt ðæt/", t: "phr.", m: "这个我不太确定", e: "I'm not sure about that, to be honest.", z: "老实说，这个我不太确定。", c: "spoken", b: "ielts-speaking" },
  { w: "that's a good point", p: "/ðæts ə ɡʊd pɔɪnt/", t: "phr.", m: "这个观点不错", e: "That's a good point I hadn't considered.", z: "这个观点我没想到，很有道理。", c: "spoken", b: "ielts-speaking" },
  { w: "to be fair", p: "/tə bi feə(r)/", t: "phr.", m: "公平地说", e: "To be fair, they did try their best.", z: "公平地说，他们确实尽力了。", c: "spoken", b: "ielts-speaking" },
  { w: "more often than not", p: "/mɔːr ˈɒfn ðən nɒt/", t: "phr.", m: "多半，往往", e: "More often than not, I walk to work.", z: "我多半是走路去上班。", c: "spoken", b: "ielts-speaking" },
  { w: "at the end of the day", p: "/ət ði end əv ðə deɪ/", t: "phr.", m: "说到底，归根结底", e: "At the end of the day, health matters most.", z: "说到底，健康最重要。", c: "spoken", b: "ielts-speaking" },
  { w: "keep in touch", p: "/kiːp ɪn tʌtʃ/", t: "phr.", m: "保持联系", e: "We still keep in touch after graduation.", z: "毕业后我们仍保持联系。", c: "spoken", b: "ielts-speaking" },
  { w: "take my time", p: "/teɪk maɪ taɪm/", t: "phr.", m: "慢慢来，不着急", e: "I like to take my time when reading.", z: "我读书时喜欢慢慢来。", c: "spoken", b: "ielts-speaking" },
  { w: "be worth doing", p: "/bi wɜːθ ˈduːɪŋ/", t: "phr.", m: "值得做", e: "It's worth visiting if you have time.", z: "有时间的话值得去看看。", c: "spoken", b: "ielts-speaking" },
  { w: "make up my mind", p: "/meɪk ʌp maɪ maɪnd/", t: "phr.", m: "下定决心，做决定", e: "It took me a while to make up my mind.", z: "我花了一阵子才下定决心。", c: "spoken", b: "ielts-speaking" },
  { w: "it's up to you", p: "/ɪts ʌp tə juː/", t: "phr.", m: "由你决定", e: "Either way is fine — it's up to you.", z: "两种都行，你决定。", c: "spoken", b: "ielts-speaking" },
  { w: "I'd love to", p: "/aɪd lʌv tuː/", t: "phr.", m: "我很愿意", e: "I'd love to, but I'm busy that day.", z: "我很想去，但那天我有事。", c: "spoken", b: "ielts-speaking" },
  { w: "never mind", p: "/ˈnevə maɪnd/", t: "phr.", m: "没关系，算了", e: "Never mind, we can try again tomorrow.", z: "没关系，我们明天再试。", c: "spoken", b: "ielts-speaking" },
  { w: "sounds good", p: "/saʊndz ɡʊd/", t: "phr.", m: "听起来不错", e: "Sounds good — let's meet at six.", z: "听起来不错，我们六点见。", c: "spoken", b: "ielts-speaking" },
  { w: "seriously", p: "/ˈsɪəriəsli/", t: "adv.", m: "真的；认真地", e: "Seriously, you should try it sometime.", z: "说真的，你有机会该试试。", c: "spoken", b: "ielts-speaking" },
  { w: "end up", p: "/end ʌp/", t: "phr.", m: "最终变成，结果是", e: "We ended up staying for three hours.", z: "结果我们待了三个小时。", c: "spoken", b: "ielts-speaking" }
];

WORD_BANK = WORD_BANK.concat(IELTS_EXTRA2);

var CORE_EXTRA = [
  { w: "bill", p: "/bɪl/", t: "n.", m: "账单；钞票", e: "Could we get the bill, please?", z: "麻烦结一下账好吗？", c: "daily", b: "core" },
  { w: "blanket", p: "/ˈblæŋkɪt/", t: "n.", m: "毯子，毛毯", e: "It's cold — grab an extra blanket.", z: "天冷，多拿一条毯子。", c: "daily", b: "core" },
  { w: "borrow", p: "/ˈbɒrəʊ/", t: "v.", m: "借入，借用", e: "Can I borrow your charger for a minute?", z: "充电器借我用一下行吗？", c: "daily", b: "core" },
  { w: "brand", p: "/brænd/", t: "n./v.", m: "品牌；打烙印", e: "I don't care much about brand names.", z: "我不太在意品牌。", c: "daily", b: "core" },
  { w: "cabinet", p: "/ˈkæbɪnət/", t: "n.", m: "橱柜；内阁", e: "The cups are in the kitchen cabinet.", z: "杯子在厨房的橱柜里。", c: "daily", b: "core" },
  { w: "cashier", p: "/kæˈʃɪə(r)/", t: "n.", m: "收银员", e: "The cashier gave me the wrong change.", z: "收银员找错钱了。", c: "daily", b: "core" },
  { w: "ceiling", p: "/ˈsiːlɪŋ/", t: "n.", m: "天花板；上限", e: "There's a stain on the ceiling.", z: "天花板上有一块污渍。", c: "daily", b: "core" },
  { w: "checkout", p: "/ˈtʃekaʊt/", t: "n.", m: "结账处；退房", e: "There was a long queue at the checkout.", z: "结账处排了很长的队。", c: "daily", b: "core" },
  { w: "chopsticks", p: "/ˈtʃɒpstɪks/", t: "n.", m: "筷子", e: "Could I have a pair of chopsticks?", z: "能给我一双筷子吗？", c: "daily", b: "core" },
  { w: "closet", p: "/ˈklɒzɪt/", t: "n.", m: "壁橱，衣橱", e: "Hang your coat in the closet.", z: "把外套挂到壁橱里。", c: "daily", b: "core" },
  { w: "counter", p: "/ˈkaʊntə(r)/", t: "n.", m: "柜台；计数器", e: "Please pay at the counter over there.", z: "请到那边的柜台付款。", c: "daily", b: "core" },
  { w: "cupboard", p: "/ˈkʌbəd/", t: "n.", m: "碗柜，橱柜", e: "The plates are in the cupboard.", z: "盘子放在碗柜里。", c: "daily", b: "core" },
  { w: "delivery", p: "/dɪˈlɪvəri/", t: "n.", m: "递送，投递", e: "The delivery should arrive before noon.", z: "快递应该中午前到。", c: "daily", b: "core" },
  { w: "discount", p: "/ˈdɪskaʊnt/", t: "n./v.", m: "折扣；打折", e: "Students get a 10% discount.", z: "学生可以打九折。", c: "daily", b: "core" },
  { w: "drawer", p: "/drɔː(r)/", t: "n.", m: "抽屉", e: "The scissors are in the top drawer.", z: "剪刀在最上面的抽屉里。", c: "daily", b: "core" },
  { w: "elevator", p: "/ˈelɪveɪtə(r)/", t: "n.", m: "电梯", e: "Take the elevator to the fifth floor.", z: "坐电梯到五楼。", c: "daily", b: "core" },
  { w: "fence", p: "/fens/", t: "n.", m: "栅栏，围栏", e: "The garden is surrounded by a low fence.", z: "花园被一圈矮栅栏围着。", c: "daily", b: "core" },
  { w: "garage", p: "/ˈɡærɑːʒ/", t: "n.", m: "车库；修车厂", e: "The car is in the garage.", z: "车在车库里。", c: "daily", b: "core" },
  { w: "hallway", p: "/ˈhɔːlweɪ/", t: "n.", m: "走廊，门厅", e: "Leave your shoes in the hallway.", z: "把鞋放在门厅。", c: "daily", b: "core" },
  { w: "ingredient", p: "/ɪnˈɡriːdiənt/", t: "n.", m: "原料，成分", e: "Check the ingredients before you buy it.", z: "买之前看看成分表。", c: "daily", b: "core" },
  { w: "kettle", p: "/ˈketl/", t: "n.", m: "水壶", e: "Put the kettle on for tea.", z: "把水壶烧上准备泡茶。", c: "daily", b: "core" },
  { w: "landlord", p: "/ˈlændlɔːd/", t: "n.", m: "房东", e: "The landlord raised the rent again.", z: "房东又涨房租了。", c: "daily", b: "core" },
  { w: "lawn", p: "/lɔːn/", t: "n.", m: "草坪", e: "He mows the lawn every Saturday.", z: "他每周六修剪草坪。", c: "daily", b: "core" },
  { w: "mattress", p: "/ˈmætrəs/", t: "n.", m: "床垫", e: "This mattress is too soft for me.", z: "这个床垫对我来说太软了。", c: "daily", b: "core" },
  { w: "microwave", p: "/ˈmaɪkrəweɪv/", t: "n.", m: "微波炉", e: "Just heat it in the microwave for two minutes.", z: "放微波炉里热两分钟就行。", c: "daily", b: "core" },
  { w: "pillow", p: "/ˈpɪləʊ/", t: "n.", m: "枕头", e: "I need a firmer pillow.", z: "我需要硬一点的枕头。", c: "daily", b: "core" },
  { w: "plumbing", p: "/ˈplʌmɪŋ/", t: "n.", m: "管道系统；水管工程", e: "The plumbing needs to be repaired.", z: "管道需要修了。", c: "daily", b: "core" },
  { w: "receipt", p: "/rɪˈsiːt/", t: "n.", m: "收据，发票", e: "Keep the receipt in case you need a refund.", z: "留好收据以防需要退款。", c: "daily", b: "core" },
  { w: "refrigerator", p: "/rɪˈfrɪdʒəreɪtə(r)/", t: "n.", m: "冰箱", e: "Put the milk back in the refrigerator.", z: "把牛奶放回冰箱。", c: "daily", b: "core" },
  { w: "rental", p: "/ˈrentl/", t: "n./adj.", m: "租金；租赁的", e: "The rental agreement lasts one year.", z: "租约为期一年。", c: "daily", b: "core" },
  { w: "rubbish", p: "/ˈrʌbɪʃ/", t: "n.", m: "垃圾；废话", e: "Please take the rubbish out.", z: "请把垃圾拿出去。", c: "daily", b: "core" },
  { w: "socket", p: "/ˈsɒkɪt/", t: "n.", m: "插座；插孔", e: "Is there a socket near the desk?", z: "桌子附近有插座吗？", c: "daily", b: "core" },
  { w: "stairs", p: "/steəz/", t: "n.", m: "楼梯", e: "I take the stairs instead of the lift.", z: "我走楼梯不坐电梯。", c: "daily", b: "core" },
  { w: "tenant", p: "/ˈtenənt/", t: "n.", m: "租户，房客", e: "The tenant pays the bills separately.", z: "租户自己付水电费。", c: "daily", b: "core" },
  { w: "towel", p: "/ˈtaʊəl/", t: "n.", m: "毛巾", e: "Could I get an extra towel?", z: "能再给我一条毛巾吗？", c: "daily", b: "core" },
  { w: "trolley", p: "/ˈtrɒli/", t: "n.", m: "手推车，购物车", e: "Grab a trolley at the entrance.", z: "在入口拿一辆购物车。", c: "daily", b: "core" },
  { w: "vacuum", p: "/ˈvækjuːm/", t: "v./n.", m: "用吸尘器打扫；真空", e: "I vacuum the floor twice a week.", z: "我一周吸两次地。", c: "daily", b: "core" },
  { w: "wardrobe", p: "/ˈwɔːdrəʊb/", t: "n.", m: "衣柜；全部衣物", e: "She hung the dress in the wardrobe.", z: "她把裙子挂进了衣柜。", c: "daily", b: "core" },
  { w: "warranty", p: "/ˈwɒrənti/", t: "n.", m: "保修，质保", e: "The laptop comes with a two-year warranty.", z: "这台笔记本有两年保修。", c: "daily", b: "core" },
  { w: "workout", p: "/ˈwɜːkaʊt/", t: "n.", m: "锻炼，健身", e: "A short workout in the morning helps.", z: "早上做一小会儿运动很有帮助。", c: "daily", b: "core" },
  { w: "parcel", p: "/ˈpɑːsl/", t: "n.", m: "包裹", e: "A parcel arrived for you this morning.", z: "今早有个包裹给你。", c: "daily", b: "core" }
];

WORD_BANK = WORD_BANK.concat(CORE_EXTRA);

/* ------------------------------------------------------------
   1e. 四六级扩充词
   ------------------------------------------------------------ */
var CET_MORE = [

  /* ===== 四级（扩充）===== */
  { w: "accustom", p: "/əˈkʌstəm/", t: "v.", m: "使习惯于", e: "It took me a while to accustom myself to the climate.", z: "我花了一阵子才适应这里的气候。", c: "cet", b: "cet4" },
  { w: "affection", p: "/əˈfekʃn/", t: "n.", m: "喜爱，感情", e: "She has great affection for her students.", z: "她非常喜爱她的学生。", c: "cet", b: "cet4" },
  { w: "agriculture", p: "/ˈæɡrɪkʌltʃə(r)/", t: "n.", m: "农业", e: "Agriculture remains the main industry here.", z: "农业仍是这里的主要产业。", c: "cet", b: "cet4" },
  { w: "ambassador", p: "/æmˈbæsədə(r)/", t: "n.", m: "大使", e: "He served as ambassador for six years.", z: "他做了六年大使。", c: "cet", b: "cet4" },
  { w: "ambitious", p: "/æmˈbɪʃəs/", t: "adj.", m: "有雄心的；雄心勃勃的", e: "She is ambitious and works hard.", z: "她有抱负，也很努力。", c: "cet", b: "cet4" },
  { w: "amuse", p: "/əˈmjuːz/", t: "v.", m: "使发笑，使消遣", e: "The story amused the whole class.", z: "这个故事把全班都逗笑了。", c: "cet", b: "cet4" },
  { w: "angle", p: "/ˈæŋɡl/", t: "n./v.", m: "角度；角度", e: "Let's look at it from another angle.", z: "我们换个角度看这件事。", c: "cet", b: "cet4" },
  { w: "apology", p: "/əˈpɒlədʒi/", t: "n.", m: "道歉，歉意", e: "He made a public apology.", z: "他公开道了歉。", c: "cet", b: "cet4" },
  { w: "architecture", p: "/ˈɑːkɪtektʃə(r)/", t: "n.", m: "建筑学；建筑风格", e: "The city is famous for its modern architecture.", z: "这座城市以现代建筑闻名。", c: "cet", b: "cet4" },
  { w: "artificial", p: "/ˌɑːtɪˈfɪʃl/", t: "adj.", m: "人造的，人工的", e: "Artificial lighting keeps the plants growing.", z: "人工光照让植物继续生长。", c: "cet", b: "cet4" },
  { w: "artistic", p: "/ɑːˈtɪstɪk/", t: "adj.", m: "艺术的；有艺术天赋的", e: "She comes from a very artistic family.", z: "她来自一个很有艺术氛围的家庭。", c: "cet", b: "cet4" },
  { w: "athlete", p: "/ˈæθliːt/", t: "n.", m: "运动员", e: "The athlete trains six days a week.", z: "这名运动员每周训练六天。", c: "cet", b: "cet4" },
  { w: "audience", p: "/ˈɔːdiəns/", t: "n.", m: "观众，听众", e: "The audience clapped for a long time.", z: "观众鼓掌了很久。", c: "cet", b: "cet4" },
  { w: "automatic", p: "/ˌɔːtəˈmætɪk/", t: "adj.", m: "自动的；无意识的", e: "The door is automatic.", z: "这扇门是自动的。", c: "cet", b: "cet4" },
  { w: "barely", p: "/ˈbeəli/", t: "adv.", m: "几乎不，勉强", e: "I could barely hear him over the noise.", z: "噪音太大，我几乎听不见他说话。", c: "cet", b: "cet4" },
  { w: "battery", p: "/ˈbætri/", t: "n.", m: "电池", e: "My phone battery died again.", z: "我手机又没电了。", c: "cet", b: "cet4" },
  { w: "bend", p: "/bend/", t: "v./n.", m: "弯曲；拐弯处", e: "Bend your knees when you lift it.", z: "搬的时候屈膝。", c: "cet", b: "cet4" },
  { w: "bitter", p: "/ˈbɪtə(r)/", t: "adj.", m: "苦的；痛苦的；激烈的", e: "The medicine tastes bitter.", z: "这药尝起来很苦。", c: "cet", b: "cet4" },
  { w: "blend", p: "/blend/", t: "v./n.", m: "混合；混合物", e: "Blend the flour and butter together.", z: "把面粉和黄油混合在一起。", c: "cet", b: "cet4" },
  { w: "bound", p: "/baʊnd/", t: "adj./v.", m: "一定的；前往；跳跃", e: "He's bound to be late again.", z: "他肯定又要迟到了。", c: "cet", b: "cet4" },
  { w: "broadcast", p: "/ˈbrɔːdkɑːst/", t: "v./n.", m: "广播，播出", e: "The match will be broadcast live.", z: "比赛将现场直播。", c: "cet", b: "cet4" },
  { w: "bubble", p: "/ˈbʌbl/", t: "n./v.", m: "气泡；沸腾", e: "Children love blowing bubbles.", z: "孩子们喜欢吹泡泡。", c: "cet", b: "cet4" },
  { w: "cattle", p: "/ˈkætl/", t: "n.", m: "牛，牲口", e: "The farmer keeps cattle and sheep.", z: "这位农民养牛和羊。", c: "cet", b: "cet4" },
  { w: "certificate", p: "/səˈtɪfɪkət/", t: "n.", m: "证书，证明", e: "You'll get a certificate after the course.", z: "课程结束后你会拿到一张证书。", c: "cet", b: "cet4" },
  { w: "charity", p: "/ˈtʃærəti/", t: "n.", m: "慈善；慈善机构", e: "The money goes to a children's charity.", z: "这笔钱捐给了一家儿童慈善机构。", c: "cet", b: "cet4" },
  { w: "chase", p: "/tʃeɪs/", t: "v./n.", m: "追赶，追逐", e: "The dog chased the ball across the field.", z: "狗追着球跑过草地。", c: "cet", b: "cet4" },
  { w: "cheerful", p: "/ˈtʃɪəfl/", t: "adj.", m: "愉快的，开朗的", e: "She stayed cheerful despite the delay.", z: "尽管延误了，她还是很开朗。", c: "cet", b: "cet4" },
  { w: "clue", p: "/kluː/", t: "n.", m: "线索，提示", e: "The police found an important clue.", z: "警方找到了一条重要线索。", c: "cet", b: "cet4" },
  { w: "colony", p: "/ˈkɒləni/", t: "n.", m: "殖民地；群体", e: "The island was once a British colony.", z: "这个岛曾是英国殖民地。", c: "cet", b: "cet4" },
  { w: "comfort", p: "/ˈkʌmfət/", t: "n./v.", m: "舒适；安慰", e: "Your words brought me great comfort.", z: "你的话给了我很大安慰。", c: "cet", b: "cet4" },
  { w: "command", p: "/kəˈmɑːnd/", t: "n./v.", m: "命令；掌握", e: "She has an excellent command of English.", z: "她的英语掌握得非常好。", c: "cet", b: "cet4" },
  { w: "companion", p: "/kəmˈpæniən/", t: "n.", m: "同伴，伙伴", e: "A dog makes a loyal companion.", z: "狗是忠诚的伙伴。", c: "cet", b: "cet4" },
  { w: "compliment", p: "/ˈkɒmplɪmənt/", t: "n./v.", m: "赞美，称赞", e: "He took her remark as a compliment.", z: "他把她的评价当成了赞美。", c: "cet", b: "cet4" },
  { w: "conclude", p: "/kənˈkluːd/", t: "v.", m: "得出结论；结束", e: "We concluded that the plan was too risky.", z: "我们得出结论：这个计划风险太大。", c: "cet", b: "cet4" },
  { w: "confess", p: "/kənˈfes/", t: "v.", m: "承认；坦白", e: "He confessed that he had forgotten.", z: "他承认自己忘了。", c: "cet", b: "cet4" },
  { w: "confuse", p: "/kənˈfjuːz/", t: "v.", m: "使困惑；混淆", e: "Don't confuse me with my brother.", z: "别把我和我弟弟弄混。", c: "cet", b: "cet4" },
  { w: "congratulate", p: "/kənˈɡrætʃuleɪt/", t: "v.", m: "祝贺", e: "Let me congratulate you on your success.", z: "恭喜你取得成功。", c: "cet", b: "cet4" },
  { w: "consist", p: "/kənˈsɪst/", t: "v.", m: "由…组成；在于", e: "The team consists of five members.", z: "这个团队由五名成员组成。", c: "cet", b: "cet4" },
  { w: "consultant", p: "/kənˈsʌltənt/", t: "n.", m: "顾问", e: "They hired a consultant to review the plan.", z: "他们请了一位顾问来审核这个方案。", c: "cet", b: "cet4" },
  { w: "continuous", p: "/kənˈtɪnjuəs/", t: "adj.", m: "连续的，不间断的", e: "Continuous rain flooded the roads.", z: "连续降雨淹了道路。", c: "cet", b: "cet4" },
  { w: "corporate", p: "/ˈkɔːpərət/", t: "adj.", m: "公司的，企业的", e: "Corporate culture matters to new staff.", z: "企业文化对新员工很重要。", c: "cet", b: "cet4" },
  { w: "correspond", p: "/ˌkɒrəˈspɒnd/", t: "v.", m: "相符；通信", e: "The results correspond with our prediction.", z: "结果与我们的预测相符。", c: "cet", b: "cet4" },
  { w: "costume", p: "/ˈkɒstjuːm/", t: "n.", m: "服装，戏服", e: "She wore a traditional costume.", z: "她穿着传统服装。", c: "cet", b: "cet4" },
  { w: "cottage", p: "/ˈkɒtɪdʒ/", t: "n.", m: "小屋，村舍", e: "They rented a cottage by the lake.", z: "他们在湖边租了一间小屋。", c: "cet", b: "cet4" },
  { w: "crawl", p: "/krɔːl/", t: "v.", m: "爬行；缓慢行进", e: "The traffic crawled along the highway.", z: "高速上的车流缓慢爬行。", c: "cet", b: "cet4" },
  { w: "create", p: "/kriˈeɪt/", t: "v.", m: "创造，创作", e: "The project created hundreds of jobs.", z: "这个项目创造了数百个工作岗位。", c: "cet", b: "cet4" },
  { w: "creature", p: "/ˈkriːtʃə(r)/", t: "n.", m: "生物，动物", e: "The forest is full of small creatures.", z: "森林里到处是小生物。", c: "cet", b: "cet4" },
  { w: "credit", p: "/ˈkredɪt/", t: "n./v.", m: "信用；学分；归功于", e: "You should give her credit for the idea.", z: "这个主意应该归功于她。", c: "cet", b: "cet4" },
  { w: "crime", p: "/kraɪm/", t: "n.", m: "犯罪，罪行", e: "The city has cut crime by a third.", z: "这座城市把犯罪率降低了三分之一。", c: "cet", b: "cet4" },
  { w: "crop", p: "/krɒp/", t: "n./v.", m: "农作物；收获", e: "Rice is the main crop in this region.", z: "水稻是这个地区的主要作物。", c: "cet", b: "cet4" },

  /* ===== 六级（扩充）===== */
  { w: "abide", p: "/əˈbaɪd/", t: "v.", m: "遵守；忍受", e: "You must abide by the rules.", z: "你必须遵守规则。", c: "cet", b: "cet6" },
  { w: "abnormal", p: "/æbˈnɔːml/", t: "adj.", m: "不正常的，异常的", e: "The test showed an abnormal result.", z: "检测显示出异常结果。", c: "cet", b: "cet6" },
  { w: "absurd", p: "/əbˈsɜːd/", t: "adj.", m: "荒谬的，荒唐的", e: "It is absurd to blame the weather.", z: "把责任推给天气是荒谬的。", c: "cet", b: "cet6" },
  { w: "abundance", p: "/əˈbʌndəns/", t: "n.", m: "丰富，充裕", e: "There is an abundance of fresh water here.", z: "这里有丰富的淡水。", c: "cet", b: "cet6" },
  { w: "acceptance", p: "/əkˈseptəns/", t: "n.", m: "接受；认可", e: "The plan won wide acceptance.", z: "这个方案得到了广泛认可。", c: "cet", b: "cet6" },
  { w: "accessible", p: "/əkˈsesəbl/", t: "adj.", m: "可接近的；易理解的", e: "The museum is accessible by bus.", z: "坐公交可以到这家博物馆。", c: "cet", b: "cet6" },
  { w: "accountability", p: "/əˌkaʊntəˈbɪləti/", t: "n.", m: "问责，责任", e: "Public officials should face accountability.", z: "公职人员应当接受问责。", c: "cet", b: "cet6" },
  { w: "activate", p: "/ˈæktɪveɪt/", t: "v.", m: "激活，启动", e: "Press this button to activate the alarm.", z: "按这个按钮启动警报。", c: "cet", b: "cet6" },
  { w: "adore", p: "/əˈdɔː(r)/", t: "v.", m: "热爱，喜爱", e: "She adores her little nephew.", z: "她非常喜欢她的小侄子。", c: "cet", b: "cet6" },
  { w: "advent", p: "/ˈædvent/", t: "n.", m: "到来，出现", e: "The advent of the internet changed everything.", z: "互联网的出现改变了一切。", c: "cet", b: "cet6" },
  { w: "alien", p: "/ˈeɪliən/", t: "adj./n.", m: "外国的；陌生的；外星人", e: "The customs felt alien to me at first.", z: "这些习俗一开始让我觉得很陌生。", c: "cet", b: "cet6" },
  { w: "alignment", p: "/əˈlaɪnmənt/", t: "n.", m: "一致；对齐", e: "There is close alignment between the two plans.", z: "两个方案高度一致。", c: "cet", b: "cet6" },
  { w: "amendment", p: "/əˈmendmənt/", t: "n.", m: "修正，修正案", e: "The amendment was passed by a small majority.", z: "这项修正案以微弱多数通过。", c: "cet", b: "cet6" },
  { w: "analytical", p: "/ˌænəˈlɪtɪkl/", t: "adj.", m: "分析的，善于分析的", e: "The job requires strong analytical skills.", z: "这份工作需要很强的分析能力。", c: "cet", b: "cet6" },
  { w: "anchor", p: "/ˈæŋkə(r)/", t: "n./v.", m: "锚；使固定；主播", e: "The boat dropped anchor in the bay.", z: "船在海湾抛了锚。", c: "cet", b: "cet6" },
  { w: "appetite", p: "/ˈæpɪtaɪt/", t: "n.", m: "食欲；欲望", e: "Exercise gave me a good appetite.", z: "运动让我胃口很好。", c: "cet", b: "cet6" },
  { w: "applicable", p: "/əˈplɪkəbl/", t: "adj.", m: "适用的，可应用的", e: "This rule is not applicable to part-time staff.", z: "这条规则不适用于兼职员工。", c: "cet", b: "cet6" },
  { w: "apt", p: "/æpt/", t: "adj.", m: "恰当的；易于…的", e: "That's an apt description.", z: "这个描述很贴切。", c: "cet", b: "cet6" },
  { w: "archive", p: "/ˈɑːkaɪv/", t: "n./v.", m: "档案；存档", e: "The documents are kept in the archive.", z: "这些文件存放在档案室。", c: "cet", b: "cet6" },
  { w: "arena", p: "/əˈriːnə/", t: "n.", m: "竞技场；活动舞台", e: "She entered the political arena early.", z: "她很早就进入了政治舞台。", c: "cet", b: "cet6" },
  { w: "arrogant", p: "/ˈærəɡənt/", t: "adj.", m: "傲慢的，自大的", e: "His arrogant manner annoyed everyone.", z: "他傲慢的态度惹恼了所有人。", c: "cet", b: "cet6" },
  { w: "ascribe", p: "/əˈskraɪb/", t: "v.", m: "把…归因于", e: "She ascribes her success to luck.", z: "她把成功归因于运气。", c: "cet", b: "cet6" },
  { w: "aspiration", p: "/ˌæspəˈreɪʃn/", t: "n.", m: "志向，抱负", e: "His aspiration is to work in medicine.", z: "他的志向是从医。", c: "cet", b: "cet6" },
  { w: "assault", p: "/əˈsɔːlt/", t: "n./v.", m: "袭击，攻击", e: "The soldiers launched an assault at dawn.", z: "士兵们黎明时发起了进攻。", c: "cet", b: "cet6" },
  { w: "astonish", p: "/əˈstɒnɪʃ/", t: "v.", m: "使惊讶", e: "The result astonished everyone.", z: "这个结果让所有人吃惊。", c: "cet", b: "cet6" },
  { w: "attachment", p: "/əˈtætʃmənt/", t: "n.", m: "附件；依恋", e: "Please open the attachment for details.", z: "详情请打开附件。", c: "cet", b: "cet6" },
  { w: "auction", p: "/ˈɔːkʃn/", t: "n./v.", m: "拍卖", e: "The painting was sold at auction.", z: "这幅画在拍卖会上售出。", c: "cet", b: "cet6" },
  { w: "augment", p: "/ɔːɡˈment/", t: "v.", m: "增加，增强", e: "He augmented his income with odd jobs.", z: "他靠打零工增加收入。", c: "cet", b: "cet6" },
  { w: "authorize", p: "/ˈɔːθəraɪz/", t: "v.", m: "授权，批准", e: "Only the manager can authorize payments.", z: "只有经理可以批准付款。", c: "cet", b: "cet6" },
  { w: "awareness", p: "/əˈweənəs/", t: "n.", m: "意识，认识", e: "The campaign raised public awareness.", z: "这次活动提高了公众意识。", c: "cet", b: "cet6" },
  { w: "bachelor", p: "/ˈbætʃələ(r)/", t: "n.", m: "学士；单身汉", e: "She has a bachelor's degree in law.", z: "她有法学学士学位。", c: "cet", b: "cet6" },
  { w: "banquet", p: "/ˈbæŋkwɪt/", t: "n.", m: "宴会", e: "A banquet was held in his honour.", z: "为他举办了一场宴会。", c: "cet", b: "cet6" },
  { w: "betray", p: "/bɪˈtreɪ/", t: "v.", m: "背叛；泄露", e: "He would never betray a friend.", z: "他绝不会背叛朋友。", c: "cet", b: "cet6" },
  { w: "beverage", p: "/ˈbevərɪdʒ/", t: "n.", m: "饮料", e: "Hot beverages are served free of charge.", z: "热饮免费供应。", c: "cet", b: "cet6" },
  { w: "blast", p: "/blɑːst/", t: "n./v.", m: "爆炸；一阵强风", e: "The blast broke windows across the street.", z: "爆炸震碎了街对面的窗户。", c: "cet", b: "cet6" },
  { w: "bloom", p: "/bluːm/", t: "v./n.", m: "开花；花朵", e: "The cherry trees bloom in April.", z: "樱花树四月开花。", c: "cet", b: "cet6" },
  { w: "boast", p: "/bəʊst/", t: "v.", m: "自夸；拥有（值得骄傲的）", e: "The city boasts three world-class museums.", z: "这座城市拥有三座世界级博物馆。", c: "cet", b: "cet6" },
  { w: "bold", p: "/bəʊld/", t: "adj.", m: "大胆的；粗体的", e: "It was a bold decision.", z: "那是个大胆的决定。", c: "cet", b: "cet6" },
  { w: "bonus", p: "/ˈbəʊnəs/", t: "n.", m: "奖金；额外好处", e: "Staff received a year-end bonus.", z: "员工拿到了年终奖。", c: "cet", b: "cet6" },
  { w: "bounce", p: "/baʊns/", t: "v./n.", m: "弹跳；反弹", e: "The ball bounced off the wall.", z: "球从墙上弹了回来。", c: "cet", b: "cet6" },
  { w: "breakdown", p: "/ˈbreɪkdaʊn/", t: "n.", m: "故障；崩溃；分类", e: "The breakdown of the talks surprised everyone.", z: "谈判破裂让所有人意外。", c: "cet", b: "cet6" },
  { w: "breakthrough", p: "/ˈbreɪkθruː/", t: "n.", m: "突破，重大进展", e: "Researchers made a major breakthrough.", z: "研究人员取得了重大突破。", c: "cet", b: "cet6" },
  { w: "brink", p: "/brɪŋk/", t: "n.", m: "边缘，濒临", e: "The company was on the brink of collapse.", z: "公司濒临倒闭。", c: "cet", b: "cet6" },
  { w: "brisk", p: "/brɪsk/", t: "adj.", m: "轻快的；活跃的", e: "A brisk walk clears your head.", z: "快步走能让头脑清醒。", c: "cet", b: "cet6" },
  { w: "brochure", p: "/ˈbrəʊʃə(r)/", t: "n.", m: "小册子，宣传册", e: "Pick up a brochure at the entrance.", z: "在入口拿一本宣传册。", c: "cet", b: "cet6" },
  { w: "bulletin", p: "/ˈbʊlətɪn/", t: "n.", m: "公告，简报", e: "The news bulletin is updated hourly.", z: "新闻简报每小时更新一次。", c: "cet", b: "cet6" },
  { w: "bump", p: "/bʌmp/", t: "v./n.", m: "碰撞；肿块", e: "I bumped into an old classmate.", z: "我碰巧遇到了一位老同学。", c: "cet", b: "cet6" },
  { w: "bureaucracy", p: "/bjʊəˈrɒkrəsi/", t: "n.", m: "官僚机构；繁文缛节", e: "Too much bureaucracy slows everything down.", z: "繁文缛节太多，什么都变慢了。", c: "cet", b: "cet6" },
  { w: "burst", p: "/bɜːst/", t: "v./n.", m: "爆裂；突发", e: "The pipe burst in the cold weather.", z: "天冷，水管爆了。", c: "cet", b: "cet6" },
  { w: "bypass", p: "/ˈbaɪpɑːs/", t: "v./n.", m: "绕过；旁路", e: "You can bypass the queue with an online ticket.", z: "网上购票可以不用排队。", c: "cet", b: "cet6" }
];

WORD_BANK = WORD_BANK.concat(CET_MORE);

/* 分类元数据 */
var WORD_CATEGORIES = [
  { id: "daily",     name: "日常生活", en: "Daily Life",      icon: "🏠", desc: "吃饭、购物、家务、通勤" },
  { id: "study",     name: "学习与工作", en: "Study & Work",    icon: "📚", desc: "作业、效率、会议、反馈" },
  { id: "emotion",   name: "情感与态度", en: "Feelings",        icon: "💬", desc: "描述心情与性格的形容词" },
  { id: "travel",    name: "旅行出行", en: "Travel",           icon: "✈️", desc: "机场、酒店、问路、观光" },
  { id: "business",  name: "商务职场", en: "Business",         icon: "💼", desc: "谈判、预算、汇报、合作" },
  { id: "tech",      name: "科技网络", en: "Technology",       icon: "💻", desc: "软件、设备、隐私、功能" },
  { id: "health",    name: "健康医疗", en: "Health",           icon: "🩺", desc: "症状、就诊、作息、饮食" },
  { id: "academic",  name: "学术高频", en: "Academic",         icon: "🎓", desc: "写作与阅读中最常出现的词" },
  { id: "exam",      name: "雅思考试词", en: "IELTS",           icon: "🎯", desc: "听说读写四项的核心考点词" },
  { id: "spoken",    name: "口语表达", en: "Spoken",           icon: "💬", desc: "母语者日常真正在用的说法" },
  { id: "gaokao",    name: "高考词汇", en: "Gaokao",            icon: "🎒", desc: "高考英语高频实词与搭配" },
  { id: "cet",       name: "四六级词汇", en: "CET",             icon: "📗", desc: "四级基础 + 六级进阶核心词" }
];

/* ------------------------------------------------------------
   1b. 词书（背单词时选择背哪一本）
   ------------------------------------------------------------ */
var WORDBOOKS = [
  {
    id: "core", name: "核心基础", en: "Core Everyday", icon: "🧱",
    desc: "日常生活、学习工作、情感表达的高频道词，打好地基用这本",
    tags: ["零基础", "日常"]
  },
  {
    id: "gaokao", name: "高考核心词", en: "Gaokao", icon: "🎒",
    desc: "高考英语的高频实词，附常用搭配；写作阅读都用得上",
    tags: ["高考", "高中"]
  },
  {
    id: "cet4", name: "四级词汇", en: "CET-4", icon: "📗",
    desc: "大学英语四级的核心词，阅读和听力里的常客",
    tags: ["四级", "大学"]
  },
  {
    id: "cet6", name: "六级词汇", en: "CET-6", icon: "📕",
    desc: "六级进阶词，写法偏学术，作文和翻译提分靠它",
    tags: ["六级", "进阶"]
  },
  {
    id: "ielts-core", name: "雅思核心词", en: "IELTS Core", icon: "🎯",
    desc: "雅思听说读写四项最常出现的必背高频词",
    tags: ["IELTS", "高频"]
  },
  {
    id: "ielts-academic", name: "雅思学术词", en: "Academic Word List", icon: "🎓",
    desc: "阅读长文与写作论证里的学术词汇，认得出也写得出",
    tags: ["IELTS", "阅读", "写作"]
  },
  {
    id: "ielts-writing", name: "雅思写作提分", en: "Writing Booster", icon: "✍️",
    desc: "Task 1 趋势描述 + Task 2 论证表达的提分词组",
    tags: ["IELTS", "写作"]
  },
  {
    id: "ielts-speaking", name: "雅思口语表达", en: "Speaking Booster", icon: "🗣️",
    desc: "Part 1–3 高频地道说法，背完能直接用出来",
    tags: ["IELTS", "口语"]
  }
];

/* ------------------------------------------------------------
   2. 语法库
   ------------------------------------------------------------ */
var GRAMMAR_TOPICS = [
  {
    id: "tenses",
    title: "时态总览：一张表看懂 12 个时态",
    en: "Overview of Tenses",
    level: "核心",
    intro: "英语时态 = 时间（过去 / 现在 / 将来）+ 状态（一般 / 进行 / 完成 / 完成进行）。先把这两条轴记住，剩下的都是组合。",
    table: {
      head: ["", "一般 Simple", "进行 Continuous", "完成 Perfect", "完成进行 Perfect Cont."],
      rows: [
        ["现在", "work / works<br><small>常态、事实</small>", "am/is/are working<br><small>此刻正在进行</small>", "have/has worked<br><small>已完成，与现在相关</small>", "have been working<br><small>从过去持续到现在</small>"],
        ["过去", "worked<br><small>过去发生的事</small>", "was/were working<br><small>过去某刻正在进行</small>", "had worked<br><small>过去之前已完成</small>", "had been working<br><small>过去持续了一段时间</small>"],
        ["将来", "will work<br><small>预测、意愿</small>", "will be working<br><small>将来某刻正在进行</small>", "will have worked<br><small>将来某时前已完成</small>", "will have been working<br><small>到将来某时已持续</small>"]
      ]
    },
    rules: [
      "<b>先判断时间</b>：句子里有没有 now / yesterday / next week / since 2020 这类信号词？",
      "<b>再判断状态</b>：是习惯（一般）、进行中（进行）、还是“已经完成并影响现在”（完成）？",
      "<b>中文没有时态</b>，所以要用英文的逻辑去想时间轴，而不是逐字翻译。"
    ],
    examples: [
      { en: "I work from home twice a week.", zh: "我每周在家工作两次。", note: "一般现在时 → 反复发生的习惯" },
      { en: "I'm working on a new project this month.", zh: "我这个月在做一个新项目。", note: "现在进行时 → 临时性、阶段性" },
      { en: "I have worked here for five years.", zh: "我在这里工作五年了。", note: "现在完成时 → 从过去持续到现在" }
    ],
    mistakes: [
      { wrong: "I am knowing the answer.", right: "I know the answer.", why: "know / like / want / belong 等状态动词不用进行时。" },
      { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", why: "yesterday 是明确过去时间，必须用一般过去时。" }
    ],
    tip: "练习方法：拿一段中文新闻，强迫自己先用“时间轴 + 状态”分类，再动笔翻译。"
  },
  {
    id: "present-perfect",
    title: "现在完成时：中文里最容易搞混的时态",
    en: "Present Perfect",
    level: "核心",
    intro: "现在完成时不是“过去发生的事”，而是“过去发生、并且对现在有影响的事”。它永远不与明确的过去时间连用。",
    rules: [
      "结构：<b>have / has + 过去分词</b>",
      "<b>常用搭配</b>：just, already, yet, ever, never, so far, recently",
      "<b>持续时间</b>：for + 一段时间 / since + 起点",
      "<b>和一般过去时的分界</b>：有没有明确的过去时间点？有就用过去时。"
    ],
    examples: [
      { en: "I've just finished my homework.", zh: "我刚写完作业。", note: "强调“现在完成了”这个结果" },
      { en: "She has lived in Beijing since 2019.", zh: "她从2019年起就住在北京。", note: "since + 起点" },
      { en: "Have you ever been to Japan?", zh: "你去过日本吗？", note: "谈人生经历，不关心具体时间" }
    ],
    mistakes: [
      { wrong: "I have finished it two days ago.", right: "I finished it two days ago.", why: "ago / last week / in 2010 都是明确过去时间。" },
      { wrong: "I have gone to Japan last year.", right: "I went to Japan last year.", why: "“have gone to”表示人已经去了（现在不在这里），也不能配过去时间。" }
    ],
    tip: "口语里 have 常缩读成 've：I've / we've / they've，听的时候要注意这个弱读。"
  },
  {
    id: "passive",
    title: "被动语态：什么时候该用 be + 过去分词",
    en: "Passive Voice",
    level: "进阶",
    intro: "当“动作的承受者”比“动作的执行者”更重要，或者执行者未知、不必提时，用被动语态。",
    rules: [
      "结构：<b>be + 过去分词</b>（时态体现在 be 上）",
      "by + 执行者：只有需要说明“被谁”的时候才加",
      "常见于：新闻、学术写作、说明流程、道歉与公告"
    ],
    examples: [
      { en: "The bridge was built in 1998.", zh: "这座桥建于1998年。", note: "一般过去时的被动" },
      { en: "English is spoken all over the world.", zh: "全世界都在说英语。", note: "一般现在时的被动" },
      { en: "The problem is being solved.", zh: "这个问题正在被解决。", note: "进行时被动：be being + 过去分词" }
    ],
    mistakes: [
      { wrong: "The book was wrote by him.", right: "The book was written by him.", why: "被动必须用过去分词，不是过去式。" },
      { wrong: "My car is repaired yesterday.", right: "My car was repaired yesterday.", why: "时态要看 be 动词。" }
    ],
    tip: "中文习惯说“被”，但英语里很多被动不翻译成“被”：It is said that... 据说……"
  },
  {
    id: "modal",
    title: "情态动词：can / could / should / must / might",
    en: "Modal Verbs",
    level: "核心",
    intro: "情态动词表示“可能性、能力、义务、建议”。后面永远跟动词原形，不加 to（除了 have to / ought to）。",
    table: {
      head: ["情态动词", "核心意思", "例句"],
      rows: [
        ["can / could", "能力、请求", "Could you help me?"],
        ["should", "建议、“应该”", "You should get more sleep."],
        ["must", "强烈的义务、推测", "You must wear a seatbelt."],
        ["have to", "客观不得不", "I have to work this weekend."],
        ["might / may", "可能性（较低）", "It might rain later."],
        ["had better", "最好（带警告）", "You'd better hurry."]
      ]
    },
    rules: [
      "情态动词后接<b>动词原形</b>：He can swim.（不说 can swims）",
      "否定直接加 not：can't / shouldn't / mustn't",
      "推测的确定程度：must（一定）&gt; should（应该）&gt; may / might（可能）&gt; could（不太确定）"
    ],
    examples: [
      { en: "You mustn't smoke here.", zh: "你不能在这里吸烟。", note: "mustn't = 禁止" },
      { en: "You don't have to come early.", zh: "你不必早来。", note: "don't have to = 不必（≠ 禁止）" },
      { en: "She may have missed the train.", zh: "她可能没赶上车。", note: "may have + 过去分词 = 对过去的推测" }
    ],
    mistakes: [
      { wrong: "He can to drive.", right: "He can drive.", why: "情态动词后不加 to。" },
      { wrong: "You mustn't come if you're busy.", right: "You don't have to come if you're busy.", why: "想说“不必”而不是“禁止”。" }
    ],
    tip: "礼貌程度阶梯：Can you… &lt; Could you… &lt; Would you mind…，越靠后越客气。"
  },
  {
    id: "clauses",
    title: "从句：定语从句、宾语从句、状语从句",
    en: "Clauses",
    level: "进阶",
    intro: "英语句子的“骨架”只有一个主句，其他信息用从句挂在上面。分不清从句类型，长句就读不懂。",
    rules: [
      "<b>定语从句</b>：修饰名词，紧紧跟在被修饰词后面。who（人）/ which（物）/ that（人或物）/ where（地点）/ whose（所属）",
      "<b>宾语从句</b>：整句当动词的宾语，用陈述语序（不是疑问语序）",
      "<b>状语从句</b>：表示时间、原因、条件、让步。because / although / when / if / unless / as soon as"
    ],
    examples: [
      { en: "The man who lives next door is a doctor.", zh: "住在隔壁的那个人是医生。", note: "定语从句修饰 the man" },
      { en: "I don't know where he went.", zh: "我不知道他去了哪里。", note: "宾语从句用陈述语序：he went，而不是 did he go" },
      { en: "Although it was raining, we went out.", zh: "虽然下着雨，我们还是出去了。", note: "although 和 but 不能同时出现" }
    ],
    mistakes: [
      { wrong: "I don't know where did he go.", right: "I don't know where he went.", why: "宾语从句用陈述语序。" },
      { wrong: "Although it was late, but we kept working.", right: "Although it was late, we kept working.", why: "中文“虽然…但是…”不能照搬。" }
    ],
    tip: "读长句时先找主句的主语和谓语，把从句用括号括起来，句子立刻变简单。"
  },
  {
    id: "articles",
    title: "冠词 a / an / the：中文里根本不存在的难题",
    en: "Articles",
    level: "基础",
    intro: "汉语没有冠词，所以这是中国学习者最顽固的错误之一。判断逻辑其实只有两步。",
    rules: [
      "<b>第一步：可数吗？</b>可数单数名词前必须有冠词或限定词（a / the / my / this）。",
      "<b>第二步：特指吗？</b>说话双方都知道是哪一个 → the；泛指某一个 → a / an。",
      "<b>a 还是 an</b>：看读音不看字母——an hour（h 不发音）、a university（读 /juː/）",
      "<b>不用冠词</b>：泛指复数、不可数名词、专有名词、固定搭配（go to school, at home, by bus）"
    ],
    examples: [
      { en: "I saw a dog. The dog was barking.", zh: "我看见一只狗。那只狗在叫。", note: "第一次提到用 a，再次提到用 the" },
      { en: "Water is essential for life.", zh: "水对生命必不可少。", note: "不可数名词泛指，不加冠词" },
      { en: "She plays the piano.", zh: "她弹钢琴。", note: "乐器前用 the" }
    ],
    mistakes: [
      { wrong: "I want to be a engineer.", right: "I want to be an engineer.", why: "engineer 以元音音素开头，用 an。" },
      { wrong: "I go to the school by the bus.", right: "I go to school by bus.", why: "表示“上学”“坐公交”这类常规活动，不加冠词。" }
    ],
    tip: "读文章时专门圈出所有冠词，坚持两周，你会突然“看见”规律。"
  },
  {
    id: "comparison",
    title: "比较级与最高级：比来比去怎么说",
    en: "Comparatives & Superlatives",
    level: "基础",
    intro: "比较级用于两者对比，最高级用于三者及以上。规则不复杂，例外和搭配才是重点。",
    table: {
      head: ["情况", "比较级", "最高级"],
      rows: [
        ["单音节（tall）", "taller than", "the tallest"],
        ["以 -e 结尾（nice）", "nicer than", "the nicest"],
        ["辅音+y（happy）", "happier than", "the happiest"],
        ["重读闭音节（big）", "bigger than", "the biggest"],
        ["多音节（expensive）", "more expensive than", "the most expensive"],
        ["不规则（good）", "better than", "the best"]
      ]
    },
    rules: [
      "“和……一样”：<b>as + 原级 + as</b>",
      "“不如……”：<b>not as / so + 原级 + as</b>",
      "强调程度：much / far / a lot + 比较级（much better）",
      "“越……越……”：<b>the + 比较级, the + 比较级</b>"
    ],
    examples: [
      { en: "This book is much more useful than that one.", zh: "这本书比那本有用得多。", note: "much 修饰比较级" },
      { en: "The more you practise, the more confident you become.", zh: "你练习得越多，就越自信。", note: "the + 比较级, the + 比较级" },
      { en: "It's the best decision I've ever made.", zh: "这是我做过的最好的决定。", note: "最高级常配 ever + 现在完成时" }
    ],
    mistakes: [
      { wrong: "She is more taller than me.", right: "She is taller than me.", why: "不能同时用 more 和 -er。" },
      { wrong: "He is the most tallest.", right: "He is the tallest.", why: "不能同时用 most 和 -est。" }
    ],
    tip: "口语里比较级常用来软化语气：Could you speak a bit more slowly?"
  },
  {
    id: "gerund",
    title: "非谓语动词：to do 还是 doing",
    en: "Gerund vs. Infinitive",
    level: "进阶",
    intro: "一个句子里已经有一个谓语了，其他动词就得“降级”成非谓语形式：to do、doing 或 done。选哪个，看前面的动词和固定搭配。",
    table: {
      head: ["后接 doing", "后接 to do", "两者意思不同"],
      rows: [
        ["enjoy / avoid / finish", "want / decide / hope", "remember doing 记得做过"],
        ["suggest / mind / practise", "plan / agree / manage", "remember to do 记得去做"],
        ["keep / give up / look forward to", "offer / promise / refuse", "stop doing 停止做"],
        ["be used to（习惯于）", "be used to do（被用来做）", "stop to do 停下来去做"]
      ]
    },
    rules: [
      "介词后面一定用 <b>doing</b>：good at swimming, interested in learning",
      "情态动词后面一定用 <b>动词原形</b>",
      "使役动词：make / let / have + sb + do（不加 to）；但被动要加回 to：be made to do"
    ],
    examples: [
      { en: "I'm looking forward to hearing from you.", zh: "期待你的回复。", note: "to 在这里是介词，所以用 hearing" },
      { en: "Remember to lock the door.", zh: "记得锁门。", note: "还没锁，提醒去做" },
      { en: "I remember locking the door.", zh: "我记得我锁了门。", note: "已经锁了，回忆做过的事" }
    ],
    mistakes: [
      { wrong: "I look forward to hear from you.", right: "I look forward to hearing from you.", why: "to 是介词，后面接动名词。" },
      { wrong: "He suggested to go home.", right: "He suggested going home.", why: "suggest 后面接 doing 或 that 从句。" }
    ],
    tip: "把这些动词当成“词组”来背：enjoy doing、want to do，比单独背语法规则有效。"
  },
  {
    id: "subjunctive",
    title: "虚拟语气：假设、愿望与礼貌",
    en: "Subjunctive",
    level: "高阶",
    intro: "虚拟语气用来表达“与事实不符的假设”“强烈愿望”或“礼貌请求”。标志是：时间上“退一步”。",
    rules: [
      "<b>与现在相反</b>：If + 过去式, would + 动词原形",
      "<b>与过去相反</b>：If + had done, would have done",
      "<b>愿望</b>：I wish + 过去式（现在）/ had done（过去）",
      "<b>建议要求</b>：suggest / insist / demand + that + sb + (should) do"
    ],
    examples: [
      { en: "If I were you, I would take the job.", zh: "如果我是你，我会接受这份工作。", note: "与现在事实相反，be 动词统一用 were" },
      { en: "I wish I had studied harder.", zh: "我真希望当初学得更努力。", note: "对过去的遗憾" },
      { en: "It's time we left.", zh: "我们该走了。", note: "It's time + 过去式，表示“早该做了”" }
    ],
    mistakes: [
      { wrong: "If I would have time, I would help.", right: "If I had time, I would help.", why: "if 从句里不用 would。" },
      { wrong: "I wish I am taller.", right: "I wish I were taller.", why: "wish 后面的假设要用过去式。" }
    ],
    tip: "虚拟语气在口语里高频出现在礼貌表达：Would you mind if I sat here?"
  },
  {
    id: "word-order",
    title: "语序与倒装：句子怎么排才不会中式",
    en: "Word Order & Inversion",
    level: "进阶",
    intro: "英语靠语序表意：主语—谓语—宾语。状语的位置灵活但有规律；倒装只在特定结构中用。",
    rules: [
      "<b>基本顺序</b>：主语 → 谓语 → 宾语 → 方式 → 地点 → 时间",
      "<b>频度副词</b>放在实义动词前、be 动词后：I always get up early. / He is always late.",
      "<b>否定词开头要倒装</b>：Never have I seen such a thing.",
      "<b>Only + 状语开头倒装</b>：Only then did I understand."
    ],
    examples: [
      { en: "She speaks English very well.", zh: "她英语说得非常好。", note: "方式状语在宾语之后" },
      { en: "I go to the gym twice a week.", zh: "我一周去两次健身房。", note: "频度+时间在句末" },
      { en: "Never have I heard such a story.", zh: "我从没听过这样的故事。", note: "否定词开头，助动词提前" }
    ],
    mistakes: [
      { wrong: "I very like this song.", right: "I really like this song.", why: "very 不能直接修饰动词，要用 really / very much。" },
      { wrong: "I every day go to school.", right: "I go to school every day.", why: "中文时间状语前置的习惯不能照搬。" }
    ],
    tip: "写句子后自查：主语是不是在最前面？动词有没有跟紧主语？"
  }
];

/* ------------------------------------------------------------
   3. 句型库
   ------------------------------------------------------------ */
var SENTENCE_PATTERNS = [
  {
    id: "sp-it",
    pattern: "It is + adj. + (for/of sb.) + to do sth.",
    cn: "做某事对某人来说是……",
    level: "基础",
    use: "最实用的句型之一：表达评价、观点、难易程度，几乎万能。",
    examples: [
      { en: "It is important to practise every day.", zh: "每天练习很重要。" },
      { en: "It's hard for beginners to hear the difference.", zh: "初学者很难听出区别。" },
      { en: "It was kind of you to help me.", zh: "你帮我真是太好了。" }
    ],
    tip: "for sb. 用于描述事情的性质；of sb. 用于描述人的品质（kind / nice / polite / careless）。"
  },
  {
    id: "sp-there",
    pattern: "There is / are + 名词 + 地点",
    cn: "某地有某物",
    level: "基础",
    use: "表示“存在”。注意 be 动词和后面第一个名词保持一致。",
    examples: [
      { en: "There is a book on the table.", zh: "桌上有一本书。" },
      { en: "There are two options for you.", zh: "你有两个选择。" },
      { en: "There is a lot of information online.", zh: "网上有大量信息。" }
    ],
    tip: "不能说 There have，也不要说 There is two books。"
  },
  {
    id: "sp-not-only",
    pattern: "not only … but also …",
    cn: "不仅……而且……",
    level: "进阶",
    use: "写作与口语中的高级连接结构，用于强调双重优点。",
    examples: [
      { en: "She not only speaks English but also writes it well.", zh: "她不仅会说英语，写得也很好。" },
      { en: "Reading is not only useful but also enjoyable.", zh: "阅读不仅有用，而且有趣。" },
      { en: "Not only did he apologise, but he also fixed the problem.", zh: "他不仅道歉了，还解决了问题。" }
    ],
    tip: "若 not only 放在句首，后半句要用倒装：Not only did he…"
  },
  {
    id: "sp-emphasis",
    pattern: "It is / was … that / who …",
    cn: "强调句：正是……",
    level: "进阶",
    use: "把句子中想强调的成分放到 It is 和 that 之间。考试和写作都很吃香。",
    examples: [
      { en: "It was Mike who called you last night.", zh: "昨晚给你打电话的正是 Mike。" },
      { en: "It is practice that makes the difference.", zh: "正是练习带来了差别。" },
      { en: "It was in 2020 that we first met.", zh: "我们第一次见面正是在2020年。" }
    ],
    tip: "去掉 It is 和 that 后，句子仍然完整——这就是判断强调句的方法。"
  },
  {
    id: "sp-wish",
    pattern: "I wish + 从句（虚拟）",
    cn: "我希望……（可惜不是）",
    level: "进阶",
    use: "表达遗憾、愿望或不满，情感色彩很强。",
    examples: [
      { en: "I wish I could speak English fluently.", zh: "真希望我能说一口流利的英语。" },
      { en: "I wish it weren't so cold today.", zh: "真希望今天没那么冷。" },
      { en: "I wish I had started earlier.", zh: "真希望我早点开始。" }
    ],
    tip: "现在愿望用过去式，过去遗憾用 had done。"
  },
  {
    id: "sp-as-long-as",
    pattern: "as long as / as soon as / unless",
    cn: "只要……/ 一……就……/ 除非……",
    level: "基础",
    use: "口语里最常用的条件与时间连接词，能让句子立刻变自然。",
    examples: [
      { en: "As long as you keep going, you'll improve.", zh: "只要你坚持，就会进步。" },
      { en: "I'll call you as soon as I arrive.", zh: "我一到就给你打电话。" },
      { en: "I won't go unless you come with me.", zh: "除非你陪我，否则我不去。" }
    ],
    tip: "时间和条件状语从句中，用一般现在时表示将来：as soon as I arrive（不是 will arrive）。"
  },
  {
    id: "sp-mind",
    pattern: "Would you mind + doing…?",
    cn: "你介意……吗？",
    level: "基础",
    use: "最礼貌的请求方式之一，日常和服务场景高频。",
    examples: [
      { en: "Would you mind speaking more slowly?", zh: "你介意说慢一点吗？" },
      { en: "Would you mind if I opened the window?", zh: "我开窗你介意吗？" },
      { en: "Not at all — go ahead.", zh: "完全不介意，请便。", note: "回答：介意要说 Yes, I do mind.；不介意说 Not at all." }
    ],
    tip: "mind 后面接 doing，不接 to do。回答“不介意”千万别说 Yes。"
  },
  {
    id: "sp-the-reason",
    pattern: "The reason why … is that …",
    cn: "……的原因是……",
    level: "进阶",
    use: "写议论文、做陈述时的万能句型，逻辑清晰。",
    examples: [
      { en: "The reason why I study English is that I love travelling.", zh: "我学英语的原因是我喜欢旅行。" },
      { en: "The main reason is that it saves time.", zh: "主要原因是这能省时间。" },
      { en: "That's why I decided to change my plan.", zh: "这就是我决定改变计划的原因。" }
    ],
    tip: "The reason is because… 是常见错句，应用 The reason is that…"
  },
  {
    id: "sp-comparison",
    pattern: "The + 比较级 …, the + 比较级 …",
    cn: "越……越……",
    level: "进阶",
    use: "句式漂亮，口语写作都能用，表达递进关系。",
    examples: [
      { en: "The more you read, the faster you read.", zh: "读得越多，读得越快。" },
      { en: "The sooner we start, the better.", zh: "越早开始越好。" },
      { en: "The harder it gets, the more I want to try.", zh: "越难我越想试试。" }
    ],
    tip: "常与 The better. 搭配，表达“越好”。"
  },
  {
    id: "sp-used-to",
    pattern: "used to do / be used to doing",
    cn: "过去常常……/ 习惯于……",
    level: "进阶",
    use: "一个 to，两种含义，考试高频陷阱，口语也常用。",
    examples: [
      { en: "I used to be afraid of speaking English.", zh: "我以前害怕说英语。" },
      { en: "I'm used to getting up early.", zh: "我习惯早起了。" },
      { en: "This tool is used to check grammar.", zh: "这个工具用来检查语法。" }
    ],
    tip: "used to do 强调过去和现在的对比；be used to doing 里 to 是介词。"
  }
];

/* ------------------------------------------------------------
   4. 口语场景
   ------------------------------------------------------------ */
var SPEAKING_SCENARIOS = [
  {
    id: "greeting",
    icon: "👋",
    title: "打招呼与寒暄",
    en: "Greetings & Small Talk",
    level: "入门",
    intro: "别只会说 How are you? — I'm fine, thank you。真实的英语寒暄有很多种说法，掌握三种就能应付大部分场合。",
    dialogue: [
      { who: "A", en: "Hey, how's it going?", zh: "嘿，最近怎么样？" },
      { who: "B", en: "Pretty good, thanks. How about you?", zh: "挺好的，谢谢。你呢？" },
      { who: "A", en: "Not bad. Busy week, though.", zh: "还行，不过这周挺忙的。" },
      { who: "B", en: "Tell me about it. I've been swamped too.", zh: "可不是嘛，我也忙得不可开交。" }
    ],
    phrases: [
      { en: "How's it going?", zh: "最近怎么样？（随意）" },
      { en: "What have you been up to?", zh: "你最近在忙什么？" },
      { en: "Long time no see!", zh: "好久不见！" },
      { en: "I've been swamped.", zh: "我忙得不可开交。" },
      { en: "Say hi to your family for me.", zh: "替我向你家人问好。" }
    ],
    tips: [
      "How are you? 在英语里是问候，不是真的问病情，回答“Pretty good”就够了。",
      "寒暄后接一个反问（How about you?）能让对话继续，这是母语者的习惯。"
    ]
  },
  {
    id: "restaurant",
    icon: "🍽️",
    title: "餐厅点餐",
    en: "Ordering at a Restaurant",
    level: "入门",
    intro: "从进门到结账的完整流程，记住这几句就能自助点餐。",
    dialogue: [
      { who: "A", en: "Hi, do you have a table for two?", zh: "你好，有两人的桌子吗？" },
      { who: "B", en: "Sure, right this way. Can I get you something to drink?", zh: "当然，这边请。想先喝点什么吗？" },
      { who: "A", en: "Just water, please. And I'll have the grilled chicken.", zh: "水就好，谢谢。我要烤鸡。" },
      { who: "B", en: "How would you like it cooked?", zh: "您想要几成熟？" },
      { who: "A", en: "Medium, please. Could we get the bill later?", zh: "五分熟。我们待会儿再结账可以吗？" }
    ],
    phrases: [
      { en: "I'll have… / I'd like…", zh: "我要……（点单最常用）" },
      { en: "Could I see the menu, please?", zh: "可以给我看下菜单吗？" },
      { en: "Is this spicy?", zh: "这个辣吗？" },
      { en: "I'm allergic to nuts.", zh: "我对坚果过敏。" },
      { en: "Could we get the bill, please?", zh: "可以结账吗？" },
      { en: "Can I get this to go?", zh: "这个可以打包吗？" }
    ],
    tips: [
      "点单时说 I'll have… 比 I want… 自然礼貌得多。",
      "服务员的 Can I get you…? 意思是“要给你拿点什么吗”，不是问你能不能。"
    ]
  },
  {
    id: "directions",
    icon: "🧭",
    title: "问路与指路",
    en: "Asking for Directions",
    level: "入门",
    intro: "出门在外最实用的一段对话，听懂 left / right / block / around the corner 就够用了。",
    dialogue: [
      { who: "A", en: "Excuse me, how do I get to the train station?", zh: "打扰一下，去火车站怎么走？" },
      { who: "B", en: "Go straight for two blocks, then turn left at the lights.", zh: "直走两个街区，然后在红绿灯处左转。" },
      { who: "A", en: "Is it far from here?", zh: "离这儿远吗？" },
      { who: "B", en: "About a ten-minute walk. You can't miss it.", zh: "大概走十分钟。你不会错过的。" },
      { who: "A", en: "Thanks a lot, you've been really helpful.", zh: "太感谢了，你帮了大忙。" }
    ],
    phrases: [
      { en: "Excuse me, how do I get to…?", zh: "请问，去……怎么走？" },
      { en: "Is it within walking distance?", zh: "走路能到吗？" },
      { en: "Turn right / left at the lights.", zh: "在红绿灯处右转／左转。" },
      { en: "It's just around the corner.", zh: "就在拐角处。" },
      { en: "I think I'm lost.", zh: "我好像迷路了。" }
    ],
    tips: [
      "开口前先说 Excuse me，这是英语里礼貌打断别人的必备词。",
      "没听清时长句最好用：Sorry, could you repeat that more slowly?"
    ]
  },
  {
    id: "shopping",
    icon: "🛍️",
    title: "购物与退换货",
    en: "Shopping & Returns",
    level: "入门",
    intro: "试穿、问价、砍价、退换货，一次讲清楚。",
    dialogue: [
      { who: "A", en: "Do you have this in a smaller size?", zh: "这个有小一点的码吗？" },
      { who: "B", en: "Let me check. Yes, we have it in medium.", zh: "我查一下。有中码。" },
      { who: "A", en: "Can I try it on?", zh: "我可以试穿吗？" },
      { who: "B", en: "Of course, the fitting room is over there.", zh: "当然，试衣间在那边。" },
      { who: "A", en: "It fits well. I'll take it.", zh: "挺合身的，我买了。" }
    ],
    phrases: [
      { en: "How much is it?", zh: "多少钱？" },
      { en: "Is there any discount?", zh: "有折扣吗？" },
      { en: "Could I get a refund?", zh: "我可以退款吗？" },
      { en: "I'd like to exchange this for a larger one.", zh: "我想换成大一点的。" },
      { en: "Do you accept credit cards?", zh: "可以刷卡吗？" }
    ],
    tips: [
      "问价格用 How much is it?；问数量用 How many…? 别混。",
      "It fits well 表示合身；It suits me 表示适合我（风格/场合）。"
    ]
  },
  {
    id: "interview",
    icon: "💼",
    title: "面试与自我介绍",
    en: "Job Interview",
    level: "进阶",
    intro: "面试英语的诀窍不是词汇多难，而是结构清楚、表达自信。",
    dialogue: [
      { who: "A", en: "Tell me a bit about yourself.", zh: "简单介绍一下你自己。" },
      { who: "B", en: "Sure. I've been working as a designer for three years.", zh: "好的。我做了三年设计师。" },
      { who: "B", en: "I specialise in user research and I'm comfortable working across teams.", zh: "我擅长用户研究，也习惯跨团队协作。" },
      { who: "A", en: "What's your biggest strength?", zh: "你最大的优势是什么？" },
      { who: "B", en: "I'd say it's my ability to learn quickly under pressure.", zh: "我想是我在压力下快速学习的能力。" }
    ],
    phrases: [
      { en: "I've been working as a… for… years.", zh: "我做……已经……年了。" },
      { en: "I'm good at… / I specialise in…", zh: "我擅长……" },
      { en: "One challenge I faced was…", zh: "我遇到的一个挑战是……" },
      { en: "Could you tell me more about the role?", zh: "能多介绍一下这个岗位吗？" },
      { en: "I'm looking forward to hearing from you.", zh: "期待您的回复。" }
    ],
    tips: [
      "自我介绍遵循“现在—能力—动机”三段：我在做什么、我擅长什么、我为什么来。",
      "被问到不会的问题，可以说 That's a great question. Let me think for a second."
    ]
  },
  {
    id: "phone",
    icon: "📞",
    title: "打电话与线上会议",
    en: "Phone Calls & Meetings",
    level: "进阶",
    intro: "看不到表情，全靠语言清晰。掌握下面几句，电话英语不再紧张。",
    dialogue: [
      { who: "A", en: "Hello, this is Anna speaking. May I speak to Mr. Chen?", zh: "你好，我是 Anna。请问陈先生在吗？" },
      { who: "B", en: "Speaking. How can I help you?", zh: "我就是。有什么事吗？" },
      { who: "A", en: "I'm calling about tomorrow's meeting.", zh: "我打电话是想说说明天的会议。" },
      { who: "A", en: "Could we push it back to three o'clock?", zh: "能推迟到三点吗？" },
      { who: "B", en: "That works for me. Let me send a new invite.", zh: "我可以。我发个新的会议邀请。" }
    ],
    phrases: [
      { en: "This is … speaking.", zh: "我是……（电话用语）" },
      { en: "Could you repeat that, please?", zh: "能再说一遍吗？" },
      { en: "Sorry, the line is breaking up.", zh: "抱歉，信号有点断断续续。" },
      { en: "Let me get back to you on that.", zh: "这件事我回头答复你。" },
      { en: "Can everyone hear me?", zh: "大家能听到我说话吗？" }
    ],
    tips: [
      "电话里不用 I am…，自我介绍习惯说 This is … speaking。",
      "会议里想插话：Sorry, can I jump in here?"
    ]
  },
  {
    id: "doctor",
    icon: "🩺",
    title: "看病与描述症状",
    en: "At the Doctor's",
    level: "进阶",
    intro: "描述身体不适的固定说法，学会就能准确表达。",
    dialogue: [
      { who: "A", en: "What seems to be the problem?", zh: "哪里不舒服？" },
      { who: "B", en: "I've had a sore throat and a headache for two days.", zh: "我喉咙痛、头痛，已经两天了。" },
      { who: "A", en: "Any fever?", zh: "有发烧吗？" },
      { who: "B", en: "A slight one last night. I also feel a bit dizzy.", zh: "昨晚有点低烧，还觉得有点头晕。" },
      { who: "A", en: "I'll give you a prescription. Take it twice a day.", zh: "我给你开个处方，一天吃两次。" }
    ],
    phrases: [
      { en: "I've had … for … days.", zh: "我……已经……天了。" },
      { en: "I feel dizzy / sick.", zh: "我头晕／想吐。" },
      { en: "It hurts when I breathe.", zh: "呼吸的时候会疼。" },
      { en: "I'm allergic to penicillin.", zh: "我对青霉素过敏。" },
      { en: "Do I need to come back?", zh: "我需要复诊吗？" }
    ],
    tips: [
      "描述症状用现在完成时最自然：I've had a cough for a week.",
      "pain 是名词，hurt 是动词：My knee hurts. / I have a pain in my knee."
    ]
  },
  {
    id: "opinion",
    icon: "💡",
    title: "表达观点与讨论",
    en: "Giving Opinions",
    level: "进阶",
    intro: "从“我觉得”到“我不同意”，掌握一套表达框架，讨论时就不再只会说 I think。",
    dialogue: [
      { who: "A", en: "What do you think about learning grammar rules?", zh: "你怎么看学习语法规则？" },
      { who: "B", en: "To be honest, I think they're useful as a reference.", zh: "说实话，我觉得作为参考是有用的。" },
      { who: "B", en: "But I learn more from actually using the language.", zh: "但我从实际使用语言中学到的更多。" },
      { who: "A", en: "I see your point, but without rules I get confused.", zh: "我明白你的意思，但没有规则我会混乱。" },
      { who: "B", en: "That's fair. Maybe a bit of both works best.", zh: "有道理。也许两者结合最好。" }
    ],
    phrases: [
      { en: "In my opinion… / To be honest…", zh: "在我看来／说实话……" },
      { en: "I see your point, but…", zh: "我理解你的意思，但是……" },
      { en: "That's a good point.", zh: "这个观点不错。" },
      { en: "I couldn't agree more.", zh: "我完全同意。" },
      { en: "I'm not sure I follow.", zh: "我不太确定我理解你的意思。" }
    ],
    tips: [
      "先承认对方（I see your point）再反驳，是英语讨论里非常重要的礼貌策略。",
      "避免一直说 I think，可以换：I'd say / It seems to me / From my experience。"
    ]
  }
];

/* ------------------------------------------------------------
   5. 学习方法
   ------------------------------------------------------------ */
var STUDY_METHODS = [
  {
    icon: "🔁",
    title: "间隔重复（艾宾浩斯复习法）",
    en: "Spaced Repetition",
    goal: "让单词从“见过”变成“记得”",
    desc: "记忆的敌人不是难度，而是遗忘曲线。同一个词在即将忘记时复习一次，效果远好于连续背十遍。",
    steps: [
      "第 1 天学新词，当天复习一次",
      "第 2 天、第 4 天、第 7 天、第 15 天各复习一次",
      "每次复习：3 秒内想起来 → 通过；超过 → 回到前一阶段",
      "把“想不起来的词”单独建一个小清单，重点攻破"
    ],
    tool: "本站的「背单词」页面已经内置了这个节奏，选完词直接开始就行。"
  },
  {
    icon: "🗣️",
    title: "影子跟读",
    en: "Shadowing",
    goal: "同时解决发音、语调和流利度",
    desc: "听到一句就跟着读一句，像影子一样紧贴原声，延迟不超过 1 秒。这是公认最高效的口语训练法之一。",
    steps: [
      "选 1–2 分钟、语速适中的材料（播客、剧集片段都可以）",
      "第一遍：只听，理解大意",
      "第二遍：看着文本跟读，模仿语音语调",
      "第三遍：不看文本跟读，只跟声音",
      "最后：录音对比，找出总是跟不上的地方"
    ],
    tool: "在「口语」页面点 🔊 按钮听示范句子，然后跟着读。"
  },
  {
    icon: "🧠",
    title: "主动回忆",
    en: "Active Recall",
    goal: "检验你是否真的会了",
    desc: "重读笔记会让你“感觉学会了”，但真正的记忆来自“逼自己想出来”。看中文想英文，比看英文读中文有效得多。",
    steps: [
      "合上资料，先自己回忆刚才学的内容",
      "用“看中文 → 说英文”的方式自测，而不是反过来",
      "把答错的内容标记出来，下一次优先复习",
      "每学完一个单元，口头总结 3 句话"
    ],
    tool: "「背单词」的选择题、拼写题模式就是主动回忆训练。"
  },
  {
    icon: "📚",
    title: "可理解输入（i+1）",
    en: "Comprehensible Input",
    goal: "让语感和词汇自然增长",
    desc: "选择刚好比你当前水平难一点点的材料，理解 80%–95%。太简单没进步，太难只会挫败。",
    steps: [
      "分级读物、简易新闻、带字幕的剧都是好素材",
      "遇到生词先猜，猜不出再查，不要每个词都查",
      "同一题材连续读几篇，高频词会自己重复出现",
      "每天 20 分钟持续输入，胜过周末突击 3 小时"
    ],
    tool: "「单词」页面按主题分组，方便你在同一语境里反复遇到同类词。"
  },
  {
    icon: "✍️",
    title: "输出驱动学习",
    en: "Output-Driven Learning",
    goal: "把被动词汇变成主动词汇",
    desc: "认识一个词 ≠ 会用这个词。只有自己说出口、写出来，才算真正掌握。",
    steps: [
      "每天用 3 个新词各写一句关于自己生活的话",
      "用今天学的句型造句，而不是抄例句",
      "把句子读出来，录音听一遍",
      "一周后回头改写，看看能不能说得更好"
    ],
    tool: "「句型」页面每一条都配有例句，照着结构换自己的内容。"
  },
  {
    icon: "⏱️",
    title: "最小可持续计划",
    en: "Minimum Viable Routine",
    goal: "让坚持变得几乎不可能失败",
    desc: "大多数人放弃不是因为方法错，而是因为计划太大。把目标定到“最忙的一天也能完成”的程度。",
    steps: [
      "设定每日最小量：10 个词 + 5 分钟朗读",
      "固定时间点触发（比如早饭时、通勤路上）",
      "打卡记录连续天数，断了不惩罚，第二天继续",
      "每两周给自己加一点点难度"
    ],
    tool: "「背单词」页面会记录你的连续打卡天数和今日进度。"
  }
];

/* ------------------------------------------------------------
   6. 雅思备考 · 听说读写四项
   practice.type：dictation 听写 ／ quiz 选择题 ／ timer 口语计时
   ------------------------------------------------------------ */
var IELTS_SKILLS = [

  /* ================= 听力 ================= */
  {
    id: "listening",
    icon: "🎧",
    title: "听力",
    en: "Listening",
    minutes: "30 分钟 + 10 分钟誊写",
    questions: "40 题 · 4 个 Section",
    brief: "四段录音只播一遍，语速接近真实生活。Section 1–2 是日常场景（订房、咨询、参观），Section 3–4 是学术场景（讨论、讲座）。真正的难点不是词汇量，而是「同义替换」和「边听边写」的同步能力。",
    format: {
      head: ["Section", "场景", "题型", "难度"],
      rows: [
        ["1", "两人日常对话（租房、报名、预订）", "表格填空", "★"],
        ["2", "一人独白（景点介绍、活动说明）", "地图题 / 配对", "★★"],
        ["3", "2–3 人学术讨论（作业、实验）", "选择 / 匹配", "★★★"],
        ["4", "学术讲座独白", "笔记填空", "★★★★"]
      ]
    },
    tips: [
      "<b>播放前抢读题干。</b>利用每段开始前的几十秒把关键词圈出来——人名、地名、数字、时间。这是听力提分最快的一个习惯。",
      "<b>答案是「换一种说法」出来的。</b>题目写 <span class='en'>not expensive</span>，录音说的是 <span class='en'>affordable</span>；题目写 <span class='en'>book early</span>，录音说 <span class='en'>in advance</span>。练听力本质上是在练同义替换。",
      "<b>转折词后面才是答案。</b><span class='en'>but / however / actually / in fact</span> 后面往往跟着修正后的信息，前面那些多半是干扰项。",
      "<b>拼写题会念字母。</b>听到 <span class='en'>double p</span> 就要写两个 p。街道名、站名这类词经常直接拼读出来。",
      "<b>注意数字陷阱。</b>13 / 30、15 / 50 靠重音区分：<span class='en'>thirTEEN</span> 重音在后，<span class='en'>THIRty</span> 重音在前。",
      "<b>看清字数限制。</b><span class='en'>NO MORE THAN TWO WORDS</span> 意味着写三个词就是错，即使内容是对的。"
    ],
    vocabTitle: "高频场景词",
    vocab: [
      { en: "deposit", zh: "押金" },
      { en: "utility bills", zh: "水电杂费" },
      { en: "furnished", zh: "带家具的" },
      { en: "vacancy", zh: "空房；空缺" },
      { en: "itinerary", zh: "行程安排" },
      { en: "refreshments", zh: "茶点，点心" },
      { en: "questionnaire", zh: "问卷" },
      { en: "tutorial", zh: "小班辅导课" },
      { en: "field trip", zh: "实地考察" },
      { en: "student card", zh: "学生证" }
    ],
    practice: {
      type: "dictation",
      title: "听写练习",
      desc: "点播放，把整句话一字不差地写下来。写错了再看答案——这比反复听更能暴露薄弱点。",
      items: [
        { en: "The library is closed on public holidays.", zh: "图书馆在公共假日闭馆。" },
        { en: "Please bring your student card to the first session.", zh: "请带学生证参加第一节课。" },
        { en: "The tour departs from the main entrance at nine thirty.", zh: "游览团九点半从正门出发。" },
        { en: "Accommodation is included in the course fee.", zh: "住宿费用已包含在课程费里。" },
        { en: "You will need to submit the form by Friday the fifteenth.", zh: "你需要在十五号周五之前提交表格。" },
        { en: "The lecture has been moved to the second floor.", zh: "讲座改到二楼了。" },
        { en: "Bicycles must be left in the rack outside.", zh: "自行车必须停在外面的车架上。" },
        { en: "Refreshments will be served in the common room.", zh: "茶点会在公共休息室供应。" }
      ]
    }
  },

  /* ================= 阅读 ================= */
  {
    id: "reading",
    icon: "📖",
    title: "阅读",
    en: "Reading",
    minutes: "60 分钟 / 3 篇",
    questions: "40 题 · 每篇约 900–1000 词",
    brief: "文章来自学术期刊和科普读物。考的不是「读懂」，而是「在有限时间里定位到答案」。每篇控制在 20 分钟以内，是拿分的关键。",
    format: {
      head: ["题型", "考什么", "做题顺序"],
      rows: [
        ["填空 / 摘要题", "定位 + 同义替换", "先做，最好拿分"],
        ["判断题 T/F/NG", "逻辑关系判断", "第二"],
        ["选择题", "细节理解与推断", "第二"],
        ["标题匹配", "段落大意", "最后做，最费时"],
        ["人名观点 / 段落信息匹配", "细节定位", "最后做"]
      ]
    },
    tips: [
      "<b>先读题，再读文。</b>除了标题匹配，其他题型都先看题目、圈定位词，再带着问题回原文扫读。这样读文章是「被用」的，不是白读。",
      "<b>TRUE / FALSE / NOT GIVEN 只有三条判定标准：</b>与原文一致 → TRUE；与原文<b>明确相反</b> → FALSE；原文<b>根本没提</b> → NOT GIVEN。不要用常识去补原文没写的东西，这是失分最多的一条。",
      "<b>同义替换就是答案的位置。</b>题干里的词在原文里几乎不会原样出现。看到 <span class='en'>decline</span> 就要想到 <span class='en'>fall / drop / decrease</span>。",
      "<b>顺序题按顺序找。</b>填空、判断、选择在原文里基本按顺序出现；人名匹配、段落匹配是乱序的，留到最后。",
      "<b>时间硬性切分 20 / 20 / 20。</b>第一篇超时立刻跳到第二篇，最后一篇不要只剩五分钟匆匆乱涂。"
    ],
    vocabTitle: "逻辑信号词",
    vocab: [
      { en: "however", zh: "然而（转折）" },
      { en: "whereas", zh: "相比之下" },
      { en: "therefore", zh: "因此" },
      { en: "moreover", zh: "而且" },
      { en: "conversely", zh: "相反地" },
      { en: "for instance", zh: "例如" },
      { en: "in contrast", zh: "与此相反" },
      { en: "as a result", zh: "结果是" },
      { en: "nevertheless", zh: "尽管如此" },
      { en: "that said", zh: "话虽如此" }
    ],
    practice: {
      type: "quiz",
      title: "TRUE / FALSE / NOT GIVEN 练习",
      desc: "读下面这段短文，判断题干与原文的关系。记住：原文没提到的永远是 NOT GIVEN，哪怕你觉得它「应该是真的」。",
      passage: "The first public libraries appeared in the nineteenth century, funded largely by local taxes. Although they were open to all, working hours meant that many labourers could not visit during the week. Some libraries therefore began opening on Sunday evenings, a change that proved unexpectedly popular. By 1900, Sunday opening had become standard in most large cities.",
      items: [
        {
          q: "Public libraries were mainly funded by local taxes.",
          opts: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: 0,
          why: "原文说 funded largely by local taxes，largely 对应 mainly，意思一致 → TRUE。"
        },
        {
          q: "Sunday opening was less popular than libraries had expected.",
          opts: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: 1,
          why: "原文说 proved unexpectedly popular（出乎意料地受欢迎），与题干「不如预期」正好相反 → FALSE。"
        },
        {
          q: "Most library staff supported the change to Sunday opening.",
          opts: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: 2,
          why: "原文完全没提工作人员的态度。「他们应该支持」属于用常识补信息 → NOT GIVEN。"
        }
      ]
    }
  },

  /* ================= 写作 ================= */
  {
    id: "writing",
    icon: "✍️",
    title: "写作",
    en: "Writing",
    minutes: "60 分钟",
    questions: "Task 1（150 词）+ Task 2（250 词）",
    brief: "Task 2 分值更高，建议先写 Task 2（40 分钟），再写 Task 1（20 分钟）。评分看四项：任务完成度、连贯与衔接、词汇丰富度、语法多样性与准确性——结构清楚比堆难词更容易提分。",
    format: {
      head: ["", "Task 1", "Task 2"],
      rows: [
        ["时间", "20 分钟", "40 分钟"],
        ["词数", "至少 150 词", "至少 250 词"],
        ["内容", "描述图表：线图／柱图／饼图／表格／流程图／地图", "就一个观点写议论文，回答题目的全部要求"],
        ["结构", "改写题目 → Overview → 2 段细节", "引言（改写+立场）→ 主体 1 → 主体 2 → 结论"],
        ["重点", "写清趋势、比较、极值", "立场明确 + 每段一个论点 + 举例"]
      ]
    },
    tips: [
      "<b>Task 1 一定要有 overview。</b>放在引言之后、细节之前，用一句话概括最显著的整体特征（最高点、最低点、总体趋势）。没有 overview 会直接压住分数上限。",
      "<b>趋势词分三档用：</b>小幅用 <span class='en'>marginally / slightly</span>，中幅用 <span class='en'>steadily / notably</span>，大幅用 <span class='en'>sharply / dramatically</span>。全程只用 increase 和 decrease 会显得单调。",
      "<b>Task 2 每段只讲一个论点。</b>论点句 + 解释一句 + 举例一句，比堆三个没有展开的观点更容易拿分。",
      "<b>用让步句体现思辨。</b><span class='en'>While it is true that… , I would argue that…</span> 一句话同时展示语法多样性和论证深度。",
      "<b>别背模板开头。</b>把 <span class='en'>With the development of society</span> 这类套话换成对题目的具体改写，分数立刻不一样。",
      "<b>留 3 分钟检查。</b>主谓一致、单复数、冠词、时态——这些小错累积起来对语法分的伤害比用词简单更大。"
    ],
    vocabTitle: "提分词组",
    vocab: [
      { en: "account for", zh: "占（比例）" },
      { en: "a substantial increase", zh: "大幅增长" },
      { en: "remain stable", zh: "保持稳定" },
      { en: "peak at", zh: "在…达到峰值" },
      { en: "outweigh the drawbacks", zh: "好处大于弊端" },
      { en: "mitigate the problem", zh: "缓解问题" },
      { en: "play a pivotal role", zh: "起关键作用" },
      { en: "as a consequence", zh: "因此" },
      { en: "it is worth noting that", zh: "值得注意的是" },
      { en: "a viable alternative", zh: "可行的替代方案" }
    ],
    practice: {
      type: "quiz",
      title: "提分表达练习",
      desc: "同一个意思，学术写作里该怎么说？选出更合适的那一个。",
      items: [
        {
          q: "图表显示 1990 到 2000 年销量大幅上升。",
          opts: ["Sales went up a lot.", "Sales increased substantially.", "Sales became more bigger."],
          answer: 1,
          why: "a lot 太口语，more bigger 语法错误。substantially 是 Task 1 描述大幅上升的标准用词。"
        },
        {
          q: "The cost is high; ______, the long-term benefits are clear.",
          opts: ["because", "nevertheless", "so that"],
          answer: 1,
          why: "前后是让步关系（成本虽高，长期收益明显），用 nevertheless。"
        },
        {
          q: "Task 2 的引言段应该包含什么？",
          opts: ["把题目原句抄一遍", "改写题目 + 明确表明立场", "直接写第一个论点的例子"],
          answer: 1,
          why: "引言的作用是 paraphrase（改写）+ thesis（立场）。直接抄题会被当作背诵模板。"
        },
        {
          q: "把 “good for the environment” 升级成更学术的说法。",
          opts: ["nice for nature", "environmentally beneficial", "good for the earth"],
          answer: 1,
          why: "environmentally beneficial 是学术写作的固定搭配，另外两个偏口语。"
        },
        {
          q: "Task 1 的 overview（总体概述）应该放在哪里？",
          opts: ["引言之后、细节段之前", "文章最后一段", "可以不写"],
          answer: 0,
          why: "overview 必须在引言之后，并与细节段分开。缺少 overview 会明显限制分数上限。"
        }
      ]
    }
  },

  /* ================= 口语 ================= */
  {
    id: "speaking",
    icon: "🗣️",
    title: "口语",
    en: "Speaking",
    minutes: "11–14 分钟",
    questions: "3 个 Part",
    brief: "与考官一对一，全程录音。评分看四项：流利与连贯、词汇丰富度、语法多样性与准确性、发音。敢说、能说下去，比说得完美更重要。",
    format: {
      head: ["Part", "形式", "时长", "要点"],
      rows: [
        ["Part 1", "日常话题问答", "4–5 分钟", "每问答 2–3 句，别只说 Yes / No"],
        ["Part 2", "个人陈述（Cue Card）", "1 分钟准备 + 2 分钟陈述", "用 4W1H 框架串起来，说满两分钟"],
        ["Part 3", "深入讨论", "4–5 分钟", "抽象问题用让步 + 举例，别给一句话答案"]
      ]
    },
    tips: [
      "<b>Part 1 不要答成选择题。</b>问 <span class='en'>Do you like reading?</span>，只回 <span class='en'>Yes.</span> 就浪费了一次展示机会。加上原因和细节：<span class='en'>Yes, I'm a big fan of detective novels — I usually read before bed.</span>",
      "<b>Part 2 用 4W1H 搭框架：</b>What（是什么）、When（什么时候）、Where（在哪）、Who（和谁）、How（感受）。准备的一分钟就按这五项各写一个词，说的时候依次展开。",
      "<b>卡住时别沉默。</b>用填充词争取时间：<span class='en'>Well… / That's a tough one. / Let me think for a second. / How should I put it…</span>",
      "<b>Part 3 用「让步 + 转折 + 举例」。</b><span class='en'>I see your point, but I'd say… For example…</span> 既有思辨又有内容。",
      "<b>发音不追口音，要追清楚。</b>单词重音、句尾降调、连读——这三项比单个音标更影响考官的理解。",
      "<b>练「说满时间」。</b>大多数人不是不会说，而是说不长。用下面的计时器练 Part 2，练到两分钟不冷场。"
    ],
    vocabTitle: "高分表达",
    vocab: [
      { en: "I'm really into…", zh: "我特别迷…" },
      { en: "To be honest, …", zh: "说实话…" },
      { en: "It depends on…", zh: "这取决于…" },
      { en: "I'd say…", zh: "我觉得…" },
      { en: "That's a tough one.", zh: "这问题不太好答。" },
      { en: "Off the top of my head…", zh: "一时想到的话…" },
      { en: "What I like most is…", zh: "我最喜欢的是…" },
      { en: "Looking back, …", zh: "回头看…" },
      { en: "All in all, …", zh: "总的来说…" },
      { en: "To put it another way, …", zh: "换个说法…" }
    ],
    practice: {
      type: "timer",
      title: "Part 2 计时练习",
      desc: "抽一张话题卡，先给自己 1 分钟准备（拿纸写 4W1H 关键词），再用 2 分钟把它说完整。这是提分最快的单项训练。",
      prep: 60,
      speak: 120,
      cards: [
        { topic: "Describe a place you like to spend time in.", points: ["Where it is", "How often you go there", "What you do there", "Why you like it"] },
        { topic: "Describe a skill you have learned recently.", points: ["What it is", "When you started", "How you learned it", "How you feel about it"] },
        { topic: "Describe a person who has influenced you.", points: ["Who the person is", "How you know them", "What they did", "Why they influenced you"] },
        { topic: "Describe a memorable journey you have taken.", points: ["Where you went", "Who you went with", "What happened", "Why it was memorable"] },
        { topic: "Describe an important decision you made.", points: ["What the decision was", "When you made it", "Who helped you", "What the result was"] },
        { topic: "Describe a book or film that changed your thinking.", points: ["What it was about", "When you read or watched it", "What impressed you", "How it changed your view"] },
        { topic: "Describe a piece of technology you use every day.", points: ["What it is", "How long you have used it", "What you use it for", "Why it is important to you"] },
        { topic: "Describe a time you helped someone.", points: ["Who you helped", "What the situation was", "What you did", "How you felt afterwards"] }
      ]
    }
  }
];

/* ------------------------------------------------------------
   7. 雅思分项技巧手册（按单项 id 组织）
   块类型：list / steps / table / pairs / examples / note
   ------------------------------------------------------------ */
var IELTS_SECTIONS = {

  /* ===================== 听力 ===================== */
  listening: [
    {
      title: "四个 Section 的应对重点",
      en: "By section",
      blocks: [
        { type: "table", table: {
          head: ["Section", "场景", "主要题型", "这一节的难点"],
          rows: [
            ["1", "两人日常对话（租房、报名、预订）", "表格填空", "数字、日期、人名拼写；语速偏快但词汇简单"],
            ["2", "一人独白（景点介绍、活动说明）", "地图题 / 配对", "方位词；同一地点被否定后再改口"],
            ["3", "2–3 人学术讨论（作业、实验）", "选择 / 匹配", "多人观点交叉，要靠声音区分谁在说"],
            ["4", "学术讲座独白", "笔记填空", "纯学术词汇，只有一次机会，必须提前读题"]
          ]
        } }
      ]
    },
    {
      title: "同义替换：听力真正的考点",
      en: "Paraphrase",
      blocks: [
        { type: "list", items: [
          "题目里的词，录音里几乎不会原样出现。你听到的是它的「另一种说法」。",
          "训练方法：不要背单词表，改背「词对」。每做完一套题，把答案句和题干写成对照，积累成自己的替换表。"
        ] },
        { type: "pairs", items: [
          { a: "not expensive", b: "affordable / reasonable" },
          { a: "book early", b: "in advance" },
          { a: "a short walk", b: "within walking distance" },
          { a: "the majority of", b: "most / nearly all" },
          { a: "reduce", b: "cut down / lower" },
          { a: "free of charge", b: "at no cost" },
          { a: "rent", b: "lease / hire" },
          { a: "a place to stay", b: "accommodation" }
        ] }
      ]
    },
    {
      title: "数字、日期与拼写",
      en: "Numbers & spelling",
      blocks: [
        { type: "table", table: {
          head: ["类型", "注意什么", "例子"],
          rows: [
            ["13 / 30", "重音位置不同", "thirTEEN（重音在后） vs THIRty（重音在前）"],
            ["日期", "英式先说日、美式先说月", "the 15th of March / March 15"],
            ["价格", "听到 double、a quarter、half", "£4.50 = four pounds fifty"],
            ["拼写", "会逐个字母念，注意 double", "B-R-A-double T"],
            ["电话号码", "会分组念，0 读作 oh", "0798 三个一组"]
          ]
        } },
        { type: "note", text: "答案写完后检查单复数、大小写和字数限制。NO MORE THAN TWO WORDS 就是硬规定，写三个词直接算错。" }
      ]
    },
    {
      title: "地图题的方位词",
      en: "Map labelling",
      blocks: [
        { type: "pairs", items: [
          { a: "at the top / bottom", b: "在上方 / 下方" },
          { a: "on the left / right", b: "在左 / 右侧" },
          { a: "opposite", b: "在…对面" },
          { a: "next to / adjacent to", b: "紧挨着" },
          { a: "in the corner", b: "在角落" },
          { a: "just past", b: "在…过去一点" },
          { a: "bend / curve", b: "拐弯处" },
          { a: "crossroads / junction", b: "十字路口" }
        ] },
        { type: "list", items: [
          "开始播放前，先在地图上标出入口（entrance）和方向标（北在哪）。",
          "地图题最常见的坑：先说了 A 位置，紧接着用 but / actually 改成 B，答案永远在后面那个。"
        ] }
      ]
    },
    {
      title: "五类常见陷阱",
      en: "Traps",
      blocks: [
        { type: "list", items: [
          "<b>过度修正。</b>说话人先给一个信息，马上又说 <span class='en'>Sorry, that's the wrong one</span>，你必须跟着改。",
          "<b>信息错位。</b>表格里的行标题在录音开始前就给了，但答案出现的位置未必按表格顺序。",
          "<b>字数超限。</b>内容对但字数超了，一样算错。",
          "<b>拼写错误。</b>拼错不给分，哪怕发音完全正确。",
          "<b>漏掉复数。</b>答案是被数出来的东西（三个因素、两个好处），漏了 s 就是错。"
        ] }
      ]
    }
  ],

  /* ===================== 阅读 ===================== */
  reading: [
    {
      title: "八种题型的做题步骤",
      en: "Question types",
      blocks: [
        { type: "steps", title: "① 判断题 T/F/NG · Y/N/NG（细节题 / 顺序题 / 中等）", items: [
          "审题：画出关键词——大写的特殊名词、数字、符号、斜体词；再看名词、动词、形容词、副词。",
          "用关键词回原文定位出答案句（注意同义替换，关键词可能原词出现，也可能被换掉）。",
          "理解答案句的语意，而不是只找一个相同的词。",
          "按三条标准判断：与原文一致 → T；与原文明确相反 → F；原文根本没提 → NG。"
        ] },
        { type: "steps", title: "② 填空题（句子 / 表格 / 摘要 / 流程）", items: [
          "先读空格前后的表达，预判这个空需要什么词性、大概是什么意思。",
          "画出关键词去原文定位。",
          "答案一定是原文里的原词，不能自己改形式；跳着抄多个单词（比如 A 和 C 但漏了 B）算错。",
          "写完把整句通读一遍，检查语意和词性是否合适。"
        ] },
        { type: "steps", title: "③ 选择题（单选 / 多选 5选2、7选3）", items: [
          "只看题干，先不要看选项——看了记不住，还会先入为主。",
          "用关键词定位到原文的相关范围。",
          "自己想一个答案，然后才去浏览选项，选和你理解最接近的那个。",
          "正确选项的特点是：和原文有同义替换。原词照抄的往往是干扰项。"
        ] },
        { type: "steps", title: "④ 简答题（顺序题 / 难度偏低）", items: [
          "题目结构 = 疑问词 + 限定和修饰内容，这个结构本身提示了答案的内容。",
          "例：What color represented the rich in the 19th century? → 答案一定是一种颜色。",
          "答案一定是原文原词，注意字数要求。"
        ] },
        { type: "steps", title: "⑤ 句子配对（细节题 / 顺序题 / 难度偏低）", items: [
          "题目给前半句，选项是后半句。先画关键词定位答案句。",
          "理解答案句后，再浏览选项，选语意最接近的（注意同义替换）。"
        ] },
        { type: "steps", title: "⑥ 特殊名词配对（人名 / 机构 / 地名 / 时间）", items: [
          "先把原文里所有选项出现的位置圈出来——选项在文中按顺序出现。",
          "人名第二次出现时往往只写姓氏，别漏找。",
          "读第一个选项前后的句子，理解他做了什么、说了什么。",
          "再回题目画关键词，看哪一题的意思和刚才理解的一致，直接配对；对不上的就是多余选项。"
        ] },
        { type: "steps", title: "⑦ 段落标题配对（宏观题，建议最后做）", items: [
          "依次浏览小标题，先看已经读过的段落能不能配。",
          "没读过的段落用「首二末」策略：读第一句、第二句、最后一句。",
          "注意段落里高频出现的「语意群」词。比如标题是 research，段落里会反复出现 studies / review / evidence / results。"
        ] },
        { type: "steps", title: "⑧ 段落信息配对（乱序题 / 难度最高）", items: [
          "这题是大海捞针，必须对文章结构有宏观把握，放最后做。",
          "先看有没有 NB: you may use any letter more than once。有这句话就一定会有选项被重复使用，最多重复两次；没有这句话就说明每个选项只出现一次。",
          "记结构比记细节有用：拿一篇讲蝙蝠的文章举例，通常是「前段讲种类和栖息地 → 中段讲捕食方式 → 后段讲技术应用」。"
        ] }
      ]
    },
    {
      title: "同义替换的四种形式",
      en: "Four kinds of paraphrase",
      blocks: [
        { type: "pairs", items: [
          { a: "① 近义词", b: "advantage = benefit = positive effect" },
          { a: "② 词性变化", b: "react to → reaction to" },
          { a: "③ 指代关系", b: "many students choose to study abroad → this trend" },
          { a: "④ 不同表达、相同语意", b: "study abroad → went to study at an American university" }
        ] },
        { type: "list", items: [
          "第 ④ 类最难，因为它长得完全不像。判断依据是语意，不是长相。",
          "遇到代词（this / that / it / which / such）一定要回到前一句或前文找它指代的对象。"
        ] }
      ]
    },
    {
      title: "判断题的常见逻辑",
      en: "T/F/NG logic",
      blocks: [
        { type: "table", table: {
          head: ["原文说的", "题目说的", "答案"],
          rows: [
            ["A 是 B 的主要原因", "C 是 B 的主要原因", "False"],
            ["A 的目的是 B", "A 的目的是 C", "False"],
            ["A 会造成 B 的影响", "A 会造成 C 的影响", "Not Given"],
            ["A 比 B 更受欢迎", "B 比 A 更受欢迎", "False"],
            ["英国的 A 很流行", "全世界 A 都很流行", "Not Given"]
          ]
        } },
        { type: "note", text: "判断错题时，先分清是四种原因里的哪一种：① 题目语意没读懂（词汇／语法）② 定位错了（关键词选得不好，或没看出同义替换）③ 答案句理解错 ④ 判断思路错（想太多、主观推断）。定位对了但答案错，多半是第 ④ 类。" }
      ]
    },
    {
      title: "时间分配与分数换算",
      en: "Timing & band",
      blocks: [
        { type: "table", table: {
          head: ["文章", "建议用时", "答对数", "换算分数"],
          rows: [
            ["第 1 篇（最简单）", "16–17 分钟", "20–22 题", "5.5"],
            ["第 2 篇", "20 分钟", "23–26 题", "6"],
            ["第 3 篇（最难）", "23–24 分钟", "27–29 题", "6.5"],
            ["—", "—", "30–32 题", "7"]
          ]
        } },
        { type: "list", items: [
          "难度递增，所以时间不是平均分的。第一篇要抢出时间留给第三篇。",
          "一篇超时就立刻跳到下一篇，不要恋战。"
        ] }
      ]
    },
    {
      title: "两个高频误区",
      en: "Common mistakes",
      blocks: [
        { type: "list", items: [
          "<b>用常识补原文没写的信息。</b>这是判断题失分最多的一条。原文没提，哪怕你觉得「应该是真的」，也是 NOT GIVEN。",
          "<b>多选题先看选项。</b>看了记不住，还容易先入为主，导致回原文时只找支持那个选项的证据。"
        ] }
      ]
    }
  ]
};

/* ---------- 写作技巧 ---------- */
IELTS_SECTIONS.writing = [
  {
    title: "评分标准怎么算分",
    en: "Marking",
    blocks: [
      { type: "table", table: {
        head: ["维度", "看什么", "怎么提分"],
        rows: [
          ["任务完成", "内容是否覆盖题目全部要求", "Task 1 必须有 overview；Task 2 每个问题都要回答"],
          ["连贯与衔接", "连接手段 / 代词 / 指代关系 / 段落逻辑", "一段一个中心；用 this trend、such a problem 回指上文"],
          ["词汇", "准确性 / 多样性 / 复杂性", "同一个意思准备 2–3 种说法，避免通篇 increase / decrease"],
          ["语法", "准确性 / 多样性 / 复杂性", "主动被动交替；适当用从句，但错句比简单句更扣分"]
        ]
      } },
      { type: "note", text: "四项分别打分后取平均，而且用的是「退位制」：6 6 5 6 平均 5.75，最后算 5.5 而不是 6。所以不要有明显短板——词汇再好，语法 5 分也会把总分拉下来。" }
    ]
  },
  {
    title: "Task 1 审题：先判断动静",
    en: "Step 1 · Read the chart",
    blocks: [
      { type: "list", items: [
        "先看有没有两个及以上的时间点：有就是<b>动态图</b>，用一般过去时；只有一个时间点或没有时间信息就是<b>静态图</b>，用一般现在时。",
        "线图一定是动态图；单饼图一定是静态图；柱图、表格、多饼图可动可静。",
        "判断完动静，再拆四件事：<b>数据概念</b>（the number of 数量 / the percentage of 比例 / the length of 长度 / the price of 价格）、<b>对象</b>、<b>对象做了或被做了什么</b>、<b>地点和时间</b>。"
      ] },
      { type: "note", text: "英式拼写建议统一（centre / programme / analyse），不要英美混用。" }
    ]
  },
  {
    title: "开头段：把题目改写一遍",
    en: "Step 2 · Introduction",
    blocks: [
      { type: "list", items: [
        "<b>不能抄题。</b>照抄题目会被当作背诵模板。",
        "题目里的 below 要删掉；show 用一般现在时。",
        "基本句式：<span class='en'>The line graph / bar chart / pie chart / table shows</span> + 数据概念 of 对象 + 后置定语 + 地点 + 时间。",
        "备用句式：<span class='en'>The chart shows 信息1, together with 信息2</span> —— 注意两个信息都必须是名词性短语，不能是句子。"
      ] },
      { type: "examples", items: [
        { en: "The line graph shows the number of overseas tourists travelling to Townsville, Queensland from 1990 to 2020.", zh: "动态图：注意 travelling 用现在分词，因为 tourists 是主动去做这件事。" },
        { en: "The pie chart shows the number of households speaking different languages at home in Winchester, California.", zh: "静态图：speaking 表示主动，全句用一般现在时。" },
        { en: "The bar chart shows the percentage of people facing integration problems when living abroad, divided into different age groups.", zh: "如果对象按年龄段分组，句末用 divided into different age groups 补一句。" }
      ] }
    ]
  },
  {
    title: "后置定语：英文和中文的顺序相反",
    en: "Modifiers",
    blocks: [
      { type: "list", items: [
        "<b>前置修饰</b>（和中文顺序一致）：形容词 + 名词，如 <span class='en'>big tree</span>。",
        "<b>后置修饰</b>（和中文相反）：名词 + 修饰内容，用来表达更复杂的语意。分三种写法——"
      ] },
      { type: "examples", items: [
        { en: "a girl with a hat　/　a girl wearing a hat　/　a girl who wears a hat", zh: "一个戴着帽子的女孩：介词短语 / 现在分词（主动）/ 从句" },
        { en: "people from China　/　people coming from China　/　people who come from China", zh: "来自中国的人：介词短语最自然简洁，从句最罗嗦" },
        { en: "a dog that will be sent to America", zh: "一只即将被送往美国的小狗：被动内容用从句或过去分词" }
      ] }
    ]
  },
  {
    title: "分段思路与主体段框架",
    en: "Step 3 · Paragraphing",
    blocks: [
      { type: "list", items: [
        "核心思路是<b>按某个标准给数据对象分组</b>，而不是机械地一个对象写一段。",
        "常用分法：按整体趋势分 / 按对象属性分（亚洲国家 vs 英语国家）/ 大数值与其他数值分 / 按数据规律分（AB 有共性、CDE 有共性）。",
        "线图只有两条线时的误区：一条线写一段。正确做法是找时间点，把时间切成 2–3 段，在每段里同时描述并对比两条线。",
        "组合图：一张图一段。"
      ] },
      { type: "examples", items: [
        { en: "Looking at making friends in more detail, we can see that …", zh: "主体段一：先说第一个分组" },
        { en: "Turning to learning the local language, it is noteworthy that …", zh: "主体段二：转接到第二个分组" },
        { en: "When it comes to finding places to live, it is clear that …", zh: "主体段三：第三个分组" }
      ] }
    ]
  },
  {
    title: "数值描述的四种句式",
    en: "Describing figures",
    blocks: [
      { type: "examples", items: [
        { en: "The number of students who do sports regularly is 30.", zh: "句式一：数量 is + 数值。注意定语从句里的时态。" },
        { en: "36% of people aged 35-54 have problems making friends.", zh: "句式二：数值 + of + 对象 + 动词。比例常用这个句式。" },
        { en: "The percentage of people over 55 who have problems learning the local language is the largest, at 55%.", zh: "句式三：最大 / 第二大 / 最少，用 at + 数值收尾。注意 percentage 用 large 不用 many。" },
        { en: "Learning the local language is the most difficult for people over 55 (55%).", zh: "句式四：转述语意。把数据背后的意思讲出来，得分最高，也最不机械。" }
      ] },
      { type: "list", items: [
        "形容词别用错：<span class='en'>percentage</span> 配 large / high / low；<span class='en'>number</span> 配 many / few；<span class='en'>amount</span> 配 much / little。",
        "比较两个对象：<span class='en'>The number of A is more than that of B</span>，这里的 that / those 不能省。",
        "表达倍数：twice / three times / double / triple。差值用 <span class='en'>is 50 more than</span>。"
      ] }
    ]
  },
  {
    title: "动态图：上升下降怎么写",
    en: "Trend language",
    blocks: [
      { type: "table", table: {
        head: ["", "动词（原形 → 过去式）", "名词"],
        rows: [
          ["上升", "increase → increased／rise → rose／grow → grew／go up → went up", "an increase／a rise／a growth／an upward trend"],
          ["下降", "decrease → decreased／drop → dropped／fall → fell／decline → declined", "a decrease／a drop／a fall／a decline／a downward trend"]
        ]
      } },
      { type: "table", table: {
        head: ["幅度", "形容词", "副词"],
        rows: [
          ["大幅", "dramatic／rapid／considerable／sharp／remarkable", "dramatically／rapidly／considerably／sharply／remarkably"],
          ["小幅", "slight／slow／gradual／gentle／moderate", "slightly／slowly／gradually／gently／moderately"]
        ]
      } },
      { type: "examples", items: [
        { en: "The percentage of students who often did sports went down slowly from 70% to 60% between 1990 and 2000.", zh: "句式一：数据对象 + 动词趋势 + 副词幅度 + 数据 + 时间" },
        { en: "There was a slight drop in the percentage of students who often exercised from 70% in 1990 to 60% in 2000.", zh: "句式二：There was + a + 形容词 + 名词 + in + 对象 …" },
        { en: "The percentage increased dramatically from 10% to 70% between 1990 and 2000, and then there was a slow drop to 60% in 2010.", zh: "两个动作先后发生用 and then 连接，后半句里的重复部分可以省略。" }
      ] },
      { type: "note", text: "避免重复的两把武器：代词（that / those / it）和省略。前文已经提过的部分，不影响语法就可以删掉。" }
    ]
  },
  {
    title: "峰值、低谷、波动、平稳、交叉、差距",
    en: "Special features",
    blocks: [
      { type: "examples", items: [
        { en: "The number peaked at 3 million in 2010. / reached a peak of 3 million in 2010.", zh: "峰值：peaked at + 数值 / reached a peak of + 数值" },
        { en: "Sales bottomed out at 20 units in 2015. / reached a low point of 20 units.", zh: "低谷：bottomed out at / reached a low point of" },
        { en: "The figure fluctuated between 30% and 45% over the period.", zh: "波动：fluctuate between … and …" },
        { en: "The percentage remained stable at 40% for a decade.", zh: "平稳：remained stable at / levelled off at" },
        { en: "The number of boys overtook that of girls in 2000.", zh: "交叉反超：overtake / surpass，注意用 that of 保持一致" },
        { en: "The gap between A and B widened gradually.", zh: "差距：widen / narrow，是偏动态的表达；The gap was the largest 是偏静态的" }
      ] },
      { type: "note", text: "在「开放性时间段」（如 1990–2020）里最值通常出现在拐点，所以描述峰值必须带上时间点。周期性时间（12 个月、一周七天、人的一生）里最值可以不带具体时间。" }
    ]
  },
  {
    title: "小作文的连接手段",
    en: "Cohesion",
    blocks: [
      { type: "pairs", items: [
        { a: "表示相似", b: "Similarly, … / There is a similar trend in …" },
        { a: "表示差异", b: "However, … / By contrast, … / In comparison, … / while …" },
        { a: "先后发生（只用于动态图）", b: "Then, … / After that, … / …, and then …" },
        { a: "从概括到具体", b: "To be more specific, … / Specifically, …" },
        { a: "大约", b: "about / around / approximately / roughly + 数值" },
        { a: "超过 / 不到", b: "just over / more than；just under / just below / fewer than" }
      ] },
      { type: "table", table: {
        head: ["介词", "搭配", "例子"],
        rows: [
          ["from … to …", "升降起止", "from 70% to 60%"],
          ["by / of", "增减量", "increased by 10% / an increase of 10%"],
          ["between … and …", "波动范围", "fluctuated between 30 and 45"],
          ["at", "峰值 / 平稳值", "peaked at 3 million / remained stable at 40%"],
          ["in / on / at", "时间点", "in 2010 / on Monday / at 8 a.m."],
          ["over / during / throughout", "贯穿整段时间", "over the period"]
        ]
      } }
    ]
  },
  {
    title: "流程图怎么写",
    en: "Process diagrams",
    blocks: [
      { type: "list", items: [
        "四种类型：加工制作（考得最多）、自然循环（动物生长、水循环）、装置图、文字流程（考驾照、找工作）。",
        "<b>时态一律一般现在时；语态多用被动。</b>因为重点是「发生了什么」，而不是谁做的。",
        "被动语态的禁区：不及物动词没有被动（grow up 不能写成 be grown up）；系动词没有被动（become / remain / turn into）；一个句子里不能有两个谓语，<span class='en'>The first stage is the water is poured</span> 是错的，应写成 <span class='en'>The first stage is pouring the water…</span> 或 <span class='en'>The first stage is to pour…</span>。",
        "不要用祈使句（First, pour the water…），那不符合写作文体。"
      ] },
      { type: "pairs", items: [
        { a: "首先", b: "First, … / In the first stage, … / The process begins with …" },
        { a: "然后", b: "Then, … / After that, … / In the next stage, … / Subsequently, …" },
        { a: "与此同时", b: "Meanwhile, … / At the same time, …" },
        { a: "或者", b: "Alternatively, … / An alternative way to do … is …" },
        { a: "最后", b: "Finally, … / In the final stage, … / Ultimately, …" }
      ] },
      { type: "examples", items: [
        { en: "Limestone and clay are poured into a crusher which is used to crush them into powder.", zh: "步骤一：原材料 + 工具 + 操作 → 产物。用 which 从句把工具的作用讲清楚。" },
        { en: "The powder is transported into a mixer to be mixed.", zh: "步骤二：用 to be mixed 表示目的，比 and then mixed 更紧凑。" },
        { en: "The heated mixture is put on a conveyer belt and ground into cement by a grinder.", zh: "步骤三：过去分词 heated 作前置定语；ground 是 grind 的过去分词。" }
      ] },
      { type: "list", items: [
        "结尾段不要重复过程，而是点评：整体工艺的复杂程度、原材料的种类多少、或者循环的周期性。",
        "例：<span class='en'>Overall, the process of making cement is more complex than producing concrete.</span>"
      ] }
    ]
  },
  {
    title: "Task 2 三种题型与对应写法",
    en: "Task 2 question types",
    blocks: [
      { type: "table", table: {
        head: ["题型", "典型问法", "立场怎么给"],
        rows: [
          ["报告类", "原因 / 措施 / 影响（问题）两两组合", "不需要表态，只要按题目问的写。注意影响有好有坏，问题一定是坏的"],
          ["利弊分析", "Do the advantages outweigh the disadvantages? / Is this positive or negative?", "必须选边：利大于弊 或 弊大于利。写「利弊都有」等于没有立场"],
          ["同不同意", "To what extent do you agree or disagree? / How true is this statement?", "完全同意 / 完全不同意 / 部分同意但整体同意都可；用「让步 + 立论」"],
          ["讨论双方观点", "Discuss both views and give your own opinion.", "两个观点都要分析，最后必须有自己的立场"]
        ]
      } },
      { type: "note", text: "特殊问法别被绕进去：How true is this statement? 是同不同意题；Do you think the government should support artists? 也是同不同意题。" }
    ]
  },
  {
    title: "论点论据怎么想：金字塔结构",
    en: "Arguments & evidence",
    blocks: [
      { type: "steps", items: [
        "先明确「同意」和「不同意」分别需要论证什么观点。",
        "分别给两边各想 2 个论点和论据。",
        "权衡哪一边的理由更充分——充分的那一边做立场（立论段），不太充分的做让步段。",
        "每一层都是「观点 → 论点 → 论据」：他是好人（观点）→ 乐于助人（论点）→ 举例：扶老奶奶过马路（论据）。"
      ] },
      { type: "list", items: [
        "论据的四种来源：举例子、对比、讲道理、引用数据或常识。",
        "拿「人们买食物只看价格吗」这道题举例：让步段承认「购买确实很大程度取决于收入水平」（低收入人群会挑折扣、去菜市场讨价还价）；立论段反驳「人们已经开始在意生产方式」（偏好有机食品、担心添加剂）；再来一段补充「还有其他因素」（口味、新鲜度）。",
        "论据要具体。写「很多人害怕坐飞机」不如写「飞机失事事件会让一部分人改坐火车」。"
      ] }
    ]
  },
  {
    title: "四个高分句式模板",
    en: "Sentence templates",
    blocks: [
      { type: "examples", items: [
        { en: "Many people have strong opinions about whether studying abroad will bring more advantages (or not).", zh: "开头段背景句：whether 从句把题目概括成「是不是」的问题，避免照抄题目。" },
        { en: "Admittedly, there are two disadvantages to shopping online. The one that attracts the most publicity is that … A further disadvantage is that …", zh: "让步段：先承认对方有理，再列两点。Admittedly 是「不得不承认」。" },
        { en: "However, shopping online has several points in its favor. The main one is that … Another advantage is that …", zh: "立论段：转折后展开自己的立场。" },
        { en: "In conclusion, given that … , I fundamentally agree with the view that …", zh: "结尾段：given that 后面用从句总结主要理由，再重申立场。" }
      ] },
      { type: "list", items: [
        "讨论双方观点题的框架：开头段 → 分析观点一 → 分析观点二 → 自己的立场 → 结尾。如果自己的立场就是观点二，也可以合并成三段。"
      ] }
    ]
  },
  {
    title: "写作必备的语法点",
    en: "Grammar for writing",
    blocks: [
      { type: "steps", title: "冠词 a / an / the / 零冠词", items: [
        "泛指或第一次提到：可数名词单数用 a / an，不可数名词和可数名词复数前不加冠词。",
        "a 还是 an 看发音不看字母：a university（读 /juː/）、a European country、an umbrella。",
        "特指或再次提到用 the：He bought a car. The car is red.",
        "独一无二的事物用 the：the world / the Internet / the sun。",
        "表示某一类人用 the：the public / the police / the government / the media / the rich。"
      ] },
      { type: "steps", title: "定语从句", items: [
        "先看从句是否完整：从句缺主语或宾语，关系词就不能省。A girl who wears a hat… 里的 who 是主语，不能省；This is a present (that) my father gave me 里的 that 是宾语，可以省。",
        "限制性定语从句没有逗号，删掉会改变语意，that / who / which 都能用。",
        "非限制性定语从句有逗号，只是补充说明，不能用 that，还能修饰前面整个句子：It rained heavily yesterday, which caused a car accident.",
        "when / where 放在时间性或地点性名词后，从句本身是完整的。why 只能修饰 reason。"
      ] },
      { type: "steps", title: "宾语从句与主从句嵌套", items: [
        "宾语从句要用陈述语序：I want to know who he is，不是 who is he。",
        "介宾结构 about whether … ：I do not know whether it will rain or not。",
        "拆长句的方法：先找到连词，从连词往后画到哪里出现第二个谓语动词为止，画出来的就是从语，剩下的就是主句。"
      ] },
      { type: "pairs", items: [
        { a: "FANBOYS 并列连词", b: "for / and / nor / but / or / yet / so" },
        { a: "or 连接两个短语", b: "表示「或者」：tea or coffee" },
        { a: "or 连接两个句子", b: "表示「否则」：Hurry up, or we will be late." },
        { a: "yet 作副词", b: "用于否定句和疑问句，表示「还没」：I haven't finished yet." },
        { a: "yet 作连词", b: "表示出乎意料：Too much sunshine can damage skin, yet many people do not use sunscreen." }
      ] }
    ]
  }
];

/* ---------- 口语技巧 ---------- */
IELTS_SECTIONS.speaking = [
  {
    title: "三个 Part 怎么答",
    en: "Three parts",
    blocks: [
      { type: "table", table: {
        head: ["Part", "形式", "时长", "答题要领"],
        rows: [
          ["Part 1", "日常话题问答（家乡、工作、爱好、天气）", "4–5 分钟", "每问 2–3 句：先回答 + 给理由 + 加细节。千万不要只说 Yes / No"],
          ["Part 2", "个人陈述（Cue Card）", "1 分钟准备 + 2 分钟陈述", "用 4W1H 框架，准备时只写关键词，不要写句子"],
          ["Part 3", "深入讨论（抽象问题）", "4–5 分钟", "用「让步 + 转折 + 举例」三段式，给结构化的长回答"]
        ]
      } },
      { type: "note", text: "Part 2 是唯一能「准备」的部分：题库相对固定，把话题按人物 / 地点 / 物品 / 事件四类各准备 2–3 个万能素材，很多题目可以套用同一个故事。" }
    ]
  },
  {
    title: "评分四项，以及各自怎么提",
    en: "Marking criteria",
    blocks: [
      { type: "table", table: {
        head: ["维度", "考官在听什么", "怎么提分"],
        rows: [
          ["流利与连贯", "能不能连续说下去，逻辑是否清楚", "用连接词和填充词撑住节奏，别长时间沉默"],
          ["词汇", "是否用了不常见但准确的说法", "准备话题词块，而不是孤立单词"],
          ["语法", "句式是否有变化，错误是否影响理解", "主动被动交替，适当用从句和虚拟语气"],
          ["发音", "是否清楚易懂，重音语调是否自然", "单词重音和句尾降调比单个音标更重要"]
        ]
      } },
      { type: "list", items: [
        "四项权重一样，所以不要只顾着说难词而放弃流利度。",
        "口音不影响分数——只要你说的清楚。"
      ] }
    ]
  },
  {
    title: "Part 2 的 4W1H 万能框架",
    en: "Part 2 framework",
    blocks: [
      { type: "steps", items: [
        "<b>What</b> —— 先说清楚是什么（一件东西、一个人、一次经历）。",
        "<b>When</b> —— 什么时候发生的，可以顺带交代背景。",
        "<b>Where</b> —— 在哪，加一点具体细节（环境、天气、气氛）。",
        "<b>Who</b> —— 和谁一起，或者这个人的身份。",
        "<b>How</b> —— 你的感受、变化、为什么它重要。这一段最出彩，放最后说。"
      ] },
      { type: "examples", items: [
        { en: "I'd like to talk about a small bookshop I often visit. It's tucked away in a quiet street near my home …", zh: "开场不要用 I'm going to talk about。用 I'd like to talk about 更自然，再加一个具体细节抓住考官注意力。" },
        { en: "What I like most is the atmosphere — it's the kind of place where you can spend hours without noticing the time.", zh: "结尾用 What I like most is… 收束，比 Finally, I like it because… 高级得多。" }
      ] },
      { type: "note", text: "准备的那一分钟，纸上只写五个词（对应 4W1H 各一个）。写句子会让你在陈述时忍不住去读，反而卡壳。" }
    ]
  },
  {
    title: "把普通表达换成高分说法",
    en: "Upgrade your language",
    blocks: [
      { type: "pairs", items: [
        { a: "very good", b: "excellent / impressive / outstanding" },
        { a: "very bad", b: "terrible / awful / disappointing" },
        { a: "very big", b: "enormous / massive" },
        { a: "very tired", b: "exhausted / worn out" },
        { a: "I like it", b: "I'm really into it / I'm quite keen on it" },
        { a: "I think", b: "I'd say / from my point of view / it seems to me" },
        { a: "a lot of", b: "a great deal of / plenty of / a bunch of" },
        { a: "good for me", b: "beneficial / rewarding / worthwhile" },
        { a: "make me happy", b: "cheer me up / lift my mood" },
        { a: "difficult", b: "challenging / demanding / tough" }
      ] }
    ]
  },
  {
    title: "卡壳时说什么",
    en: "Buying time",
    blocks: [
      { type: "pairs", items: [
        { a: "需要想一下", b: "That's a tough one. / Let me think for a second." },
        { a: "换种说法", b: "How should I put it… / To put it another way…" },
        { a: "一时想不起来", b: "Off the top of my head… / It's on the tip of my tongue." },
        { a: "不太确定", b: "I'm not really sure, but I'd guess…" },
        { a: "看情况", b: "It really depends on…" },
        { a: "补充一点", b: "On top of that… / Another thing is…" }
      ] },
      { type: "note", text: "沉默超过三秒就开始扣流利分。宁可说一句填充语，也不要空白。" }
    ]
  },
  {
    title: "常见扣分点",
    en: "Common mistakes",
    blocks: [
      { type: "list", items: [
        "<b>背答案。</b>考官听得出背诵痕迹，尤其是语调平、连接词过于工整的。",
        "<b>只答一句。</b>Part 1 和 Part 3 都需要展开，至少两句。",
        "<b>用中文逻辑。</b>比如把「我觉得吧」直译成 <span class='en'>I feel</span> 开头，其实用 I'd say 更自然。",
        "<b>时态混乱。</b>讲过去的事情要统一用过去时，这是最影响语法分的一项。",
        "<b>发音只求快。</b>说得快但听不清，不如说得慢而清楚。"
      ] }
    ]
  }
];

/* ============================================================
   8. 四六级备考（写作 / 听力 / 阅读 / 翻译）
   结构与雅思一致，复用同一套渲染逻辑
   ============================================================ */
var CET_SKILLS = [

  /* ================= 写作 ================= */
  {
    id: "writing",
    icon: "✍️",
    title: "写作",
    en: "Writing",
    minutes: "30 分钟",
    questions: "106.5 分 · 占 15%",
    brief: "四六级写作是「命题作文」，四级要求 120–180 词，六级 150–200 词。题型以议论文为主，偶尔考图表、书信或名言警句。三段式结构 + 准确的语言，比堆砌难词更容易拿高分。",
    format: {
      head: ["题型", "长什么样", "应对重点"],
      rows: [
        ["议论文（最常见）", "Should college students take part-time jobs?", "明确立场 + 两点理由 + 例子"],
        ["现象解释", "Why do people…? What are the effects?", "先描述现象，再分析原因或影响"],
        ["图表 / 图画", "给你一张图，让你描述并评论", "先客观描述，再发表看法"],
        ["书信 / 通知", "Write a letter to… / A notice about…", "注意格式：称呼、正文、落款"],
        ["名言警句", "给一句格言让你评论", "先解释含义，再举例子印证"]
      ]
    },
    tips: [
      "<b>三段式最稳。</b>第一段引出话题并表态，第二段两条理由各配一个例子，第三段总结重申。评分看重结构清楚，写得花哨但没结构反而掉分。",
      "<b>字数宁多勿少。</b>四级写 150 词左右、六级写 180 词左右比较稳。低于下限会直接扣分。",
      "<b>第一段不要抄题目。</b>把题目换个说法（paraphrase）再引出自己的立场，这是评分里「内容切题」的关键。",
      "<b>别用太口语的表达。</b>a lot of → a great deal of；kids → children；get → obtain；things → factors。",
      "<b>留 3 分钟检查。</b>主谓一致、单复数、时态、拼写——这些小错累积起来比用词简单伤分更多。"
    ],
    vocabTitle: "高分替换词",
    vocab: [
      { en: "important", zh: "→ vital / crucial / essential" },
      { en: "many", zh: "→ numerous / a great many" },
      { en: "think", zh: "→ hold the view that / maintain that" },
      { en: "good", zh: "→ beneficial / rewarding" },
      { en: "bad", zh: "→ harmful / detrimental" },
      { en: "help", zh: "→ contribute to / facilitate" },
      { en: "in my opinion", zh: "→ from my perspective / as far as I am concerned" },
      { en: "but", zh: "→ however / nevertheless / whereas" },
      { en: "so", zh: "→ therefore / consequently / as a result" },
      { en: "I think it is necessary", zh: "→ it is advisable / it is well worth doing" }
    ],
    practice: {
      type: "quiz",
      title: "写作表达练习",
      desc: "四六级写作里，同一个意思有更得体的说法。选出更合适的那一个。",
      items: [
        {
          q: "第一段引出话题并表明立场，哪种写法最好？",
          opts: ["Nowadays, more and more people… I think it is good.", "Recently, the issue of whether college students should take part-time jobs has drawn wide attention. In my view, it is beneficial.", "Part-time jobs is a hot topic."],
          answer: 1,
          why: "选项 2 用 paraphrase 引出话题，再明确表态，符合「内容切题 + 观点清晰」的评分要求。选项 3 有语法错误（jobs is）。"
        },
        {
          q: "把 “A lot of students think part-time jobs are good.” 改成更书面化的表达：",
          opts: ["Many students think it good.", "Numerous students hold the view that part-time jobs are beneficial.", "A lot of students consider part-time jobs are well."],
          answer: 1,
          why: "numerous + hold the view that + beneficial 是典型的书面替换。consider 后面不能直接接 that 从句的这类结构要小心。"
        },
        {
          q: "第二段展开理由，下面哪句衔接最自然？",
          opts: ["First, taking a part-time job helps students gain experience. For example, working in a café teaches them how to communicate with customers.", "First, it is good. Second, it is also good.", "Part-time job is useful and helpful and good."],
          answer: 0,
          why: "论点句 + 举例是主体段的标准写法。另外两项空洞重复，没有展开。"
        },
        {
          q: "结尾段应该怎么写？",
          opts: ["再写两个新理由", "总结前面的论点并重申立场", "把题目抄一遍"],
          answer: 1,
          why: "结尾的作用是收束，不是补充新论据。常用 In conclusion, given that…, I firmly believe that…"
        },
        {
          q: "下面哪句话没有语法错误？",
          opts: ["Taking part-time jobs help students.", "Taking part-time jobs helps students gain experience.", "Take part-time jobs helps students."],
          answer: 1,
          why: "动名词短语作主语视为单数，谓语用 helps。这是四级写作最常见的失分点之一。"
        }
      ]
    }
  },

  /* ================= 听力 ================= */
  {
    id: "listening",
    icon: "🎧",
    title: "听力",
    en: "Listening",
    minutes: "25 分钟",
    questions: "248.5 分 · 占 35%",
    brief: "四六级听力共 25 题，只播一遍，语速约每分钟 130–150 词。四级考短篇新闻 + 长对话 + 听力篇章；六级考长对话 + 听力篇章 + 讲座讲话。分值占了三分之一，是拉开差距的关键。",
    format: {
      head: ["部分", "四级", "六级", "每题分值"],
      rows: [
        ["Section A", "短篇新闻 3 篇（7 题）", "长对话 2 篇（8 题）", "7.1 分"],
        ["Section B", "长对话 2 篇（8 题）", "听力篇章 2 篇（7 题）", "7.1 分"],
        ["Section C", "听力篇章 3 篇（10 题）", "讲座 / 讲话 3 篇（10 题）", "14.2 分"]
      ]
    },
    tips: [
      "<b>Section C 分值最高，最值得投入。</b>每题 14.2 分，是 Section A 的两倍。听力练不好时，优先保 Section C。",
      "<b>利用读题时间「预习」。</b>录音开始前的几十秒非常宝贵：先扫选项，圈出每个选项里不同的关键词——人名、数字、地点、动词。",
      "<b>听到什么选什么（多数情况）。</b>四六级听力不像雅思那样绕，答案句往往和选项高度对应，甚至原词复现。但要注意 <span class='en'>but / however / actually</span> 后面才是最终答案。",
      "<b>同义替换仍然是核心。</b>选项写 <span class='en'>increase</span>，录音说 <span class='en'>go up</span>；选项写 <span class='en'>free</span>，录音说 <span class='en'>at no cost</span>。",
      "<b>不要纠结没听清的那一题。</b>听力只播一遍，卡在一题上会连丢后面三道。没听清就果断放弃，跟上下一题。",
      "<b>新闻开头就是重点。</b>短篇新闻的导语（第一句）通常直接给出事件主旨，对应第一题。"
    ],
    vocabTitle: "高频场景词",
    vocab: [
      { en: "seminar", zh: "研讨会" },
      { en: "assignment", zh: "作业，任务" },
      { en: "scholarship", zh: "奖学金" },
      { en: "dormitory", zh: "宿舍" },
      { en: "lecture", zh: "讲座" },
      { en: "deadline", zh: "截止日期" },
      { en: "interview", zh: "面试；采访" },
      { en: "budget", zh: "预算" },
      { en: "promotion", zh: "促销；晋升" },
      { en: "appointment", zh: "预约" }
    ],
    practice: {
      type: "dictation",
      title: "听写练习",
      desc: "点播放，把整句话写下来。四六级听力里的高频句式，写一遍比听十遍更有用。",
      items: [
        { en: "The lecture has been postponed until next Wednesday.", zh: "讲座推迟到下周三。" },
        { en: "I'd like to book a table for four at seven o'clock.", zh: "我想订一张七点的四人桌。" },
        { en: "You need to hand in your assignment before Friday.", zh: "你需要在周五之前交作业。" },
        { en: "The train leaves from platform three at half past nine.", zh: "火车九点半从三号站台出发。" },
        { en: "She was offered a scholarship to study abroad.", zh: "她获得了出国留学的奖学金。" },
        { en: "The company plans to launch a new product next month.", zh: "公司计划下个月推出一款新产品。" },
        { en: "According to the survey, most students prefer online courses.", zh: "调查显示，大多数学生更喜欢在线课程。" },
        { en: "I'm afraid the flight has been delayed by two hours.", zh: "恐怕航班延误了两个小时。" }
      ]
    }
  },

  /* ================= 阅读 ================= */
  {
    id: "reading",
    icon: "📖",
    title: "阅读",
    en: "Reading",
    minutes: "40 分钟",
    questions: "248.5 分 · 占 35%",
    brief: "阅读同样占 35%，但题型和雅思完全不同：先是 15 选 10 的选词填空，然后是长篇阅读的段落匹配，最后是两篇仔细阅读。分值分布很不均匀——仔细阅读一题 14.2 分，选词填空一题只有 3.55 分。",
    format: {
      head: ["部分", "题型", "题量", "分值"],
      rows: [
        ["Section A", "选词填空（15 选 10）", "10 题", "每题 3.55 分"],
        ["Section B", "长篇阅读 · 段落信息匹配", "10 题", "每题 7.1 分"],
        ["Section C", "仔细阅读（2 篇）", "10 题", "每题 14.2 分"]
      ]
    },
    tips: [
      "<b>先做仔细阅读。</b>一题 14.2 分，是选词填空的 4 倍。时间不够时，宁可放弃选词填空也要保住仔细阅读。",
      "<b>选词填空先标词性。</b>把 15 个备选词按名词 / 动词 / 形容词 / 副词分类。看空格前后就能判断需要什么词性，候选范围立刻从 15 个缩到 3–4 个。",
      "<b>长篇阅读靠「关键词 + 同义替换」。</b>先读 10 个题干圈出定位词，再回原文扫读。题干里的词在原文里多半被换掉了。",
      "<b>仔细阅读先看题干，再看文章。</b>带着问题读，比通读一遍再做题快得多。",
      "<b>干扰项的四种套路：</b>① 偷换概念（主体或对象变了）② 绝对化（原文说 some，选项说 all）③ 张冠李戴（把 A 的特点安到 B 上）④ 无中生有（看着很对，但原文没提）。"
    ],
    vocabTitle: "高频逻辑词",
    vocab: [
      { en: "however", zh: "然而（转折，答案常在这后面）" },
      { en: "therefore", zh: "因此（结论）" },
      { en: "moreover", zh: "此外（递进）" },
      { en: "for instance", zh: "例如（举例）" },
      { en: "in contrast", zh: "与此相反（对比）" },
      { en: "as a result", zh: "结果（因果）" },
      { en: "in other words", zh: "换句话说（解释）" },
      { en: "on the contrary", zh: "恰恰相反" },
      { en: "in addition", zh: "另外" },
      { en: "that is to say", zh: "也就是说" }
    ],
    practice: {
      type: "quiz",
      title: "选词填空：先判词性",
      desc: "四六级选词填空的第一步不是选词，是判断空格需要什么词性。试试看。",
      items: [
        {
          q: "The government has taken measures to ______ the problem. （空格需要一个？）",
          opts: ["名词", "动词原形", "形容词"],
          answer: 1,
          why: "to 后面接动词原形，构成不定式。这里的 to 是「为了…」，不是介词。"
        },
        {
          q: "There has been a ______ increase in online shopping. （空格需要一个？）",
          opts: ["形容词", "副词", "动词"],
          answer: 0,
          why: "空格在冠词 a 和名词 increase 之间，只能是形容词。"
        },
        {
          q: "She explained the plan ______. （空格需要一个？）",
          opts: ["副词", "形容词", "名词"],
          answer: 0,
          why: "句子已经有主语和谓语，空格在句末，修饰动词 explained，所以需要副词。"
        },
        {
          q: "The results were ______ with our prediction.",
          opts: ["consistent", "consistently", "consistency"],
          answer: 0,
          why: "were 后面接形容词作表语，consistent 是形容词。固定搭配 be consistent with。"
        },
        {
          q: "Which one is the correct collocation?",
          opts: ["make a decision", "do a decision", "take a decision on"],
          answer: 0,
          why: "decision 的固定搭配是 make a decision。这类搭配题在选词填空中很常见，平时要成组记忆。"
        }
      ]
    }
  },

  /* ================= 翻译 ================= */
  {
    id: "translation",
    icon: "🔤",
    title: "翻译",
    en: "Translation",
    minutes: "30 分钟",
    questions: "106.5 分 · 占 15%",
    brief: "汉译英段落，四级约 140–160 个汉字，六级约 180–200 个汉字。题材高度集中在中国传统文化、历史地理、社会发展三大类。评分看的是「内容完整 + 语言准确」，不是文采。",
    format: {
      head: ["评分维度", "看什么", "常见扣分"],
      rows: [
        ["内容完整性", "原文信息是否全部译出", "漏译、跳译整句"],
        ["语言准确性", "语法、搭配是否正确", "主谓不一致、时态混乱、中式搭配"],
        ["表达流畅度", "句子是否通顺、连接是否自然", "逐字直译、句子结构混乱"],
        ["词汇使用", "是否用了恰当的词", "生造词、拼写错误"]
      ]
    },
    tips: [
      "<b>三步走：断句 → 找主干 → 补修饰。</b>先用标点把长句切成短句，每句找出主语和谓语，再把定语、状语挂上去。",
      "<b>中文没有主语，英文必须有。</b>「据说明年要建一座新桥」→ <span class='en'>It is said that a new bridge will be built next year.</span> 用 it 或被动语态补出主语。",
      "<b>中文的动词连用要降级。</b>「他去北京参加会议」不能写成 <span class='en'>He went to Beijing attended a meeting</span>，要说 <span class='en'>He went to Beijing to attend a meeting</span>。",
      "<b>长定语要后置。</b>「位于中国东部的这座城市」→ <span class='en'>the city located in eastern China</span>。中文定语在前，英文必须放到名词后面。",
      "<b>遇到不会的词就换个说法。</b>「四合院」不会写，可以说 <span class='en'>a traditional Chinese courtyard house</span>。翻译看重意思到位，不要求用标准译名。",
      "<b>文化类词汇要提前备。</b>四级六级翻译考过春节、茶文化、丝绸之路、高铁、移动支付——这些都有固定的英文说法，背下来直接用。"
    ],
    vocabTitle: "文化类高频表达",
    vocab: [
      { en: "the Spring Festival", zh: "春节" },
      { en: "the Mid-Autumn Festival", zh: "中秋节" },
      { en: "traditional Chinese culture", zh: "中国传统文化" },
      { en: "the Silk Road", zh: "丝绸之路" },
      { en: "high-speed rail", zh: "高铁" },
      { en: "mobile payment", zh: "移动支付" },
      { en: "be located in", zh: "位于" },
      { en: "date back to", zh: "追溯到" },
      { en: "play an important role in", zh: "在…中起重要作用" },
      { en: "with a history of … years", zh: "有着…年的历史" }
    ],
    practice: {
      type: "quiz",
      title: "汉译英练习",
      desc: "四六级翻译最常考的几种句式。选出最准确的译法。",
      items: [
        {
          q: "「这座桥建于 1990 年。」",
          opts: ["This bridge built in 1990.", "This bridge was built in 1990.", "This bridge is built at 1990."],
          answer: 1,
          why: "桥是「被建」的，用被动语态 was built；年份用介词 in。"
        },
        {
          q: "「北京有许多历史古迹。」",
          opts: ["Beijing has many historical sites.", "Beijing there are many historical sites.", "In Beijing has many historical sites."],
          answer: 0,
          why: "选项 2 混用了 has 和 there are 两种结构。选项 0 最简洁，也可以写 There are many historical sites in Beijing."
        },
        {
          q: "「他每天花两个小时学习英语。」",
          opts: ["He spends two hours to study English every day.", "He spends two hours studying English every day.", "He costs two hours to study English."],
          answer: 1,
          why: "spend + 时间 + doing 是固定搭配。cost 的主语必须是物（It costs me two hours），不能是人。"
        },
        {
          q: "「中国的茶文化历史悠久。」",
          opts: ["Chinese tea culture has a long history.", "Chinese tea culture is long history.", "Chinese tea culture has long history."],
          answer: 0,
          why: "have a long history 是固定表达，a 不能漏。也可以写 with a long history。"
        },
        {
          q: "「据说明年将举办一场国际会议。」",
          opts: ["It is said that an international conference will be held next year.", "It says an international conference will hold next year.", "People say an international conference will hold next year."],
          answer: 0,
          why: "会议是「被举办」，用 will be held；It is said that… 是「据说」的标准句式。"
        }
      ]
    }
  }
];

/* ---------- 四六级技巧手册 ---------- */
var CET_SECTIONS = {

  /* ===== 写作 ===== */
  writing: [
    {
      title: "三段式结构模板",
      en: "Three-paragraph structure",
      blocks: [
        { type: "steps", title: "第一段：引出话题 + 表明立场（约 40 词）", items: [
          "用一句话把题目换个说法引出话题（不要抄题）。",
          "再用一句话表明自己的立场。",
          "模板：Recently, the issue of whether … has drawn wide attention. In my view, …"
        ] },
        { type: "steps", title: "第二段：两条理由 + 各配一个例子（约 70 词）", items: [
          "论点句一 + 解释 + 举例。用 First and foremost 或 To begin with 开头。",
          "论点句二 + 解释 + 举例。用 In addition 或 Moreover 开头。",
          "举例要具体。「能锻炼能力」不如「在咖啡店打工要学会应对挑剔的顾客」。"
        ] },
        { type: "steps", title: "第三段：总结 + 重申（约 40 词）", items: [
          "用 In conclusion / To sum up 开头。",
          "概括前两点，再重申立场。不要再提新论据。",
          "模板：In conclusion, although …, I firmly believe that …"
        ] }
      ]
    },
    {
      title: "开头句的三种写法",
      en: "Openings",
      blocks: [
        { type: "examples", items: [
          { en: "Recently, the issue of whether college students should take part-time jobs has drawn wide attention.", zh: "现象类：用 has drawn wide attention 引出话题，比 Nowadays more and more people 高级。" },
          { en: "As is shown in the chart, the number of online shoppers has risen sharply over the past decade.", zh: "图表类：As is shown in the chart 是图表作文的标准开头。" },
          { en: "There is an old saying that where there is a will, there is a way. This proverb tells us that …", zh: "名言类：先复述格言，再解释它的含义。" }
        ] },
        { type: "note", text: "无论哪种题型，开头段都要在最后一句把立场交代清楚。评卷老师找你观点时找不到，内容分就下来了。" }
      ]
    },
    {
      title: "主体段的论证方法",
      en: "Developing arguments",
      blocks: [
        { type: "list", items: [
          "<b>举例论证：</b>For example / For instance / Take … as an example。四六级最好用，因为可以写具体场景，不容易空。",
          "<b>对比论证：</b>By contrast / On the contrary。适合写「有 A 和没 A 的差别」。",
          "<b>因果论证：</b>This is because / As a result / Consequently。适合解释现象类题目。",
          "<b>让步论证：</b>Admittedly, … However, …。先承认对方有理再反驳，显得有思辨，是拿高分的关键句式。"
        ] },
        { type: "examples", items: [
          { en: "Admittedly, part-time jobs may take up some study time. However, the experience they provide is far more valuable than what a textbook can offer.", zh: "让步 + 转折的经典组合，一句话就能体现论证深度。" }
        ] }
      ]
    }
  ],

  /* ===== 听力 ===== */
  listening: [
    {
      title: "题型与分值分布",
      en: "By section",
      blocks: [
        { type: "table", table: {
          head: ["部分", "四级", "六级", "每题分值"],
          rows: [
            ["Section A", "短篇新闻 3 篇（7 题）", "长对话 2 篇（8 题）", "7.1 分"],
            ["Section B", "长对话 2 篇（8 题）", "听力篇章 2 篇（7 题）", "7.1 分"],
            ["Section C", "听力篇章 3 篇（10 题）", "讲座 / 讲话 3 篇（10 题）", "14.2 分"]
          ]
        } },
        { type: "note", text: "Section C 每题 14.2 分，是 Section A/B 的两倍。25 题里有 10 题在 Section C，也就是 142 分——这是听力里最该保的部分。" }
      ]
    },
    {
      title: "听前预读：把选项变成预告片",
      en: "Pre-reading",
      blocks: [
        { type: "steps", items: [
          "利用试音和题目朗读的间隙，快速扫过接下来的 3–4 道题的选项。",
          "圈出每个选项里<b>不同的</b>部分——通常是名词、数字、地点。相同部分不用管。",
          "判断这段录音大概在讲什么场景：校园、职场、新闻还是科普？场景定了，词汇范围就定了。",
          "注意选项之间的关系：如果四个选项都是时间，那问题一定在问 when；都是地点，就问 where。"
        ] },
        { type: "examples", items: [
          { en: "A) At a bank.　B) At a hotel.　C) At a hospital.　D) At a library.", zh: "四个都是地点 → 问题一定问 where → 听的时候专门抓地点词。" },
          { en: "A) He missed the train.　B) He was late for work.　C) He lost his ticket.　D) He forgot the meeting.", zh: "四个都是「他做错了什么」→ 问题问 what happened to the man。" }
        ] }
      ]
    },
    {
      title: "三种题型的应对",
      en: "Question types",
      blocks: [
        { type: "steps", title: "短篇新闻（四级 Section A）", items: [
          "新闻结构是倒金字塔：导语（第一句）给出「谁、在哪、发生了什么」，后面才是细节。",
          "第一题几乎一定对应导语，所以录音一开始就要集中注意力。",
          "新闻里常出现机构名、职务名、数字，听到就先记下。"
        ] },
        { type: "steps", title: "长对话（四级 B / 六级 A）", items: [
          "两人对话，重点通常集中在<b>第二个说话人</b>的回答上——因为第一个人的话只是提问。",
          "注意说话人的语气转变：Well, actually… / To be honest… 后面往往是真实想法。",
          "对话结尾常问「接下来要做什么」，所以最后两句千万别走神。"
        ] },
        { type: "steps", title: "听力篇章 / 讲座（Section C）", items: [
          "开头一句定主题，结尾一句常出主旨题。中间按顺序出细节题。",
          "题目顺序 = 录音顺序，所以听到哪题就跟着走到哪题。",
          "讲座类会出现专业词汇，听不懂不用慌，答案往往落在能听懂的常识句上。"
        ] }
      ]
    },
    {
      title: "信号词与同义替换",
      en: "Signals",
      blocks: [
        { type: "pairs", items: [
          { a: "转折（答案在后面）", b: "but / however / actually / in fact / on the contrary" },
          { a: "因果（答案在后面）", b: "because / so / therefore / as a result / that's why" },
          { a: "强调", b: "the most important thing / above all / especially / I'd like to stress" },
          { a: "建议", b: "you'd better / why not / it might be a good idea to" },
          { a: "举例", b: "for example / such as / take … for instance" }
        ] },
        { type: "pairs", items: [
          { a: "increase", b: "go up / rise / grow" },
          { a: "reduce", b: "cut down / lower / bring down" },
          { a: "free", b: "at no cost / for nothing" },
          { a: "postpone", b: "put off / delay" },
          { a: "difficult", b: "tough / challenging / not easy" },
          { a: "immediately", b: "right away / at once" }
        ] }
      ]
    },
    {
      title: "常见陷阱",
      en: "Traps",
      blocks: [
        { type: "list", items: [
          "<b>原词重现的选项未必是答案。</b>如果选项里的词和录音里一模一样，反而要警惕——可能是为了引诱你选的干扰项，正确答案经常是同义替换的那个。",
          "<b>信息被推翻。</b>先说 A，紧接着说 <span class='en'>Sorry, I mean B</span>，答案永远是 B。",
          "<b>答非所问。</b>选项里的内容录音确实提到了，但和问题问的不是一回事——这是最常见的失分原因。所以一定要先看清题干问什么。",
          "<b>不要恋战。</b>听力只播一遍，卡住一题就放弃，立刻跟上下一题。丢一题 7 分，卡住可能丢 30 分。"
        ] }
      ]
    }
  ],

  /* ===== 阅读 ===== */
  reading: [
    {
      title: "时间分配：先做最值钱的部分",
      en: "Timing",
      blocks: [
        { type: "table", table: {
          head: ["顺序", "题型", "题量", "分值", "建议用时"],
          rows: [
            ["① 先做", "仔细阅读（2 篇）", "10 题", "142 分", "20 分钟"],
            ["② 再做", "长篇阅读 · 段落匹配", "10 题", "71 分", "13 分钟"],
            ["③ 最后", "选词填空（15 选 10）", "10 题", "35.5 分", "7 分钟"]
          ]
        } },
        { type: "list", items: [
          "仔细阅读一题 14.2 分，选词填空一题只有 3.55 分——<b>一题顶四题</b>。所以时间不够时，宁可放弃选词填空。",
          "但不要把选词填空整段跳过：它的答案往往靠词性就能推出来，性价比其实不低，只是别在它上面耗时间。"
        ] }
      ]
    },
    {
      title: "选词填空：先标词性，再选词",
      en: "Banked cloze",
      blocks: [
        { type: "steps", items: [
          "第一步：把 15 个备选词逐个标上词性（n. / v. / adj. / adv.），不确定的先放着。",
          "第二步：读空格所在的句子，判断这个位置需要什么词性——这是最关键的一步。",
          "第三步：在符合词性的那 3–4 个词里，根据语意挑一个。",
          "第四步：全部填完后通读一遍，检查语意和搭配。"
        ] },
        { type: "pairs", items: [
          { a: "冠词 / 形容词后 →", b: "名词（a ______ / the ______）" },
          { a: "主语后、缺谓语 →", b: "动词（注意时态和单复数）" },
          { a: "冠词与名词之间 →", b: "形容词（a ______ increase）" },
          { a: "句末、修饰动词 →", b: "副词（explained it ______）" },
          { a: "be 动词后 →", b: "形容词（were ______）" },
          { a: "to 后 →", b: "动词原形（measures to ______）" }
        ] }
      ]
    },
    {
      title: "长篇阅读：关键词定位法",
      en: "Matching",
      blocks: [
        { type: "steps", items: [
          "先读 10 个题干，每个题干圈出 1–2 个定位词。首选特殊名词：大写字母、数字、带连字符的词、专业术语。",
          "再回原文逐段扫读，找这些定位词或其同义替换。",
          "找到后不要急着确定，读完那句和前后一句，确认语意对得上再选。",
          "一个段落可能被用两次，也可能一次都不用——不要假设一段只对应一题。",
          "扫读时重点看段首和段尾，这两句承载段落主旨的概率最高。"
        ] },
        { type: "note", text: "题干里的词在原文中经常被替换：题目写 <span class='en'>decline</span>，原文可能写 <span class='en'>fall / drop / decrease</span>。所以定位词要选「不容易被替换的」——数字、专有名词最保险。" }
      ]
    },
    {
      title: "仔细阅读：干扰项的四种套路",
      en: "Careful reading",
      blocks: [
        { type: "steps", items: [
          "先看题干（不看选项），圈出关键词，判断题目问的是什么。",
          "回原文定位到答案句，理解它的意思。",
          "自己想一个答案，然后才去比对选项。",
          "选和原文有同义替换的那个，而不是原词照抄的那个。"
        ] },
        { type: "table", table: {
          head: ["干扰项类型", "长什么样", "怎么识破"],
          rows: [
            ["偷换概念", "把原文的主语、对象或时间换掉", "逐项核对主谓宾是否和原文一致"],
            ["绝对化", "原文说 some / often，选项说 all / always", "看到 all / never / must 就提高警惕"],
            ["张冠李戴", "把 A 的特点安到 B 上", "确认选项描述的对象是不是题目问的那个"],
            ["无中生有", "读起来很合理，但原文根本没提", "回原文找依据，找不到就排除"]
          ]
        } }
      ]
    }
  ],

  /* ===== 翻译 ===== */
  translation: [
    {
      title: "三步翻译法",
      en: "Three steps",
      blocks: [
        { type: "steps", items: [
          "<b>断句。</b>先按标点把整段切成若干短句。中文一句话里常常塞了好几个意思，英文塞不进一句。",
          "<b>找主干。</b>每句先确定「谁 + 做什么」——主语和谓语。这一步定下来，句子就不会散。",
          "<b>补修饰。</b>把时间、地点、定语、状语补上。中文的定语在名词前，英文要挪到名词后。"
        ] },
        { type: "examples", items: [
          { en: "原文：位于中国东部的这座城市，有着两千多年的历史。", zh: "断句 → 主干：「城市有着历史」→ 补修饰：the city (located in eastern China) has a history of more than 2,000 years." },
          { en: "Located in eastern China, the city has a history of over 2,000 years.", zh: "把「位于中国东部」处理成过去分词短语放在句首，句子更地道。" }
        ] }
      ]
    },
    {
      title: "四种难句的处理",
      en: "Difficult patterns",
      blocks: [
        { type: "steps", title: "① 无主句", items: [
          "中文常省略主语，英文必须补出来。",
          "补 it：据说 → It is said that…；据说这里要建一座桥 → It is said that a bridge will be built here.",
          "用被动：这里种植水稻 → Rice is grown here.",
          "用 there be：过去有很多人住在这里 → There used to be many people living here."
        ] },
        { type: "steps", title: "② 长定语", items: [
          "中文定语在名词<b>前面</b>，英文要放到名词<b>后面</b>。",
          "用介词短语：位于北京的大学 → a university in Beijing",
          "用分词短语：一个建于明朝的寺庙 → a temple built in the Ming Dynasty",
          "用定语从句：一个很多人参观的地方 → a place that many people visit"
        ] },
        { type: "steps", title: "③ 动词连用", items: [
          "中文可以「他去北京参加会议」，英文一个句子只能有一个谓语。",
          "用不定式表目的：He went to Beijing to attend a meeting.",
          "用 and 并列：He went to Beijing and attended a meeting.",
          "用分词：He went to Beijing, attending an important meeting."
        ] },
        { type: "steps", title: "④ 主动与被动的选择", items: [
          "中文习惯用「人们」「大家」作主语，英文常改成被动。",
          "人们普遍认为 → It is widely believed that…",
          "这座桥建于 1990 年 → The bridge was built in 1990.",
          "但不要说「这座桥是建于1990年的」→ 直译成 The bridge is built in 1990 是错的，要用过去时。"
        ] }
      ]
    },
    {
      title: "文化类高频表达",
      en: "Culture vocabulary",
      blocks: [
        { type: "pairs", items: [
          { a: "春节", b: "the Spring Festival" },
          { a: "中秋节", b: "the Mid-Autumn Festival" },
          { a: "丝绸之路", b: "the Silk Road" },
          { a: "高铁", b: "high-speed rail" },
          { a: "移动支付", b: "mobile payment" },
          { a: "共享单车", b: "shared bikes" },
          { a: "传统手工艺", b: "traditional handicraft" },
          { a: "四合院", b: "a traditional Chinese courtyard house" },
          { a: "有着…年的历史", b: "with a history of … years" },
          { a: "被列为世界文化遗产", b: "be listed as a World Cultural Heritage site" },
          { a: "起到了重要作用", b: "play an important role in" },
          { a: "追溯到…", b: "date back to / trace back to" }
        ] },
        { type: "note", text: "四六级翻译的题材高度集中在中国文化、历史地理、社会发展三类。把上面这 12 条背熟，能覆盖相当一部分常见表达。" }
      ]
    },
    {
      title: "常见错误",
      en: "Common mistakes",
      blocks: [
        { type: "list", items: [
          "<b>逐字直译。</b>「他不喜欢吃苹果」写成 <span class='en'>He not like eat apple</span>。正确是 <span class='en'>He doesn't like eating apples.</span>",
          "<b>漏掉冠词和复数。</b>「他是一个老师」→ <span class='en'>He is a teacher</span>；「许多学生」→ <span class='en'>many students</span>。中文没有这两个概念，最容易漏。",
          "<b>时态混乱。</b>讲历史一律用过去时（was built / used to be），讲现状用现在时（is / has）。一篇文章里时态跳来跳去是明显扣分点。",
          "<b>生造词。</b>不会的词就换个说法，千万别自创拼写。评卷看的是意思能不能传达。",
          "<b>整句漏译。</b>宁可译得简单，也不要空着不写——漏译是逐句扣分的。"
        ] }
      ]
    }
  ]
};
