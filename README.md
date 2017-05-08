# Framework7

> 实例化参数简介

选项名 | 说明
------------ | -------------
material |  水波纹
materialpageloaddelay | 动画延迟,提高效率
materialripple |  启用/禁用特定材料的触摸的涟漪效应
materialrippleelements |  CSS选择器的元素应用在点击触摸的涟漪效应
materialpreloaderhtml |  预加载HTML,loading？
cache |  是否打开 Ajax 缓存
cacheDuration |  Ajax 缓存时间
cacheIgnore |  不希望被缓存的URL，这是一个字符串数组。
cacheIgnoreGetParameters |  缓存是否忽略get参数
fastClicks |  移除移动端点击延迟
activeState |  启用这个设置时，会给当前点击的元素增加一个 'active-state' class。
activeStateElemets |  应该在这些元素上加 activeState
tapHold |  --
tapholddelay |  触发
tapholdpreventclicks | ---

# Navigation / Router(导航/路由)
选项名 | 说明
------------ | -------------
router  |  如果你有自己的路由实现，你可以禁用默认的路由
ajaxlinks |  指定哪些链接需要用ajax加载，默认情况下（当为undefined时）Framework7 会使用ajax加载所有的链接。
dynamicpageurl |  动态加载的页面的URL规则。
uniquehistory |  设置为真，程序会保持视图的导航历史上独一无二，它也将删除重复网页
externallinks |  不应该被 Framework7 管理的链接的CSS选择器。
allowduplicateurls |  您可以启用此参数允许有相同的URL作为目前“查看活动”页面，新页面加载。
animatenavbackicon |  当启用这个功能时，动态导航栏中的 back-link 图标的动画会更接近iOS的风格。
animatepages |  设置为false，如果你想禁用动画之间的过渡页
preloadpreviouspage |  启用/禁用的前页预压当你深入导航。
preprocess |  这个回调函数允许你修改加载路由器（主要是Ajax）内容之前，将它注射到DOM。

# Push State
选项名 | 说明
------------ | -------------
pushstate |  是否开启hash值控制历史记录
pushstateseparator |  hash值的分割符
pushstateroot |  ..
pushstatenoanimation |  历史记录的过度动画
pushstatepreventonload| -


# Swipe back (iOS theme only) 
选项名 | 说明
------------ | -------------
swipebackpage | 	启用/禁用刷从屏幕左边缘回到前一页的能力。
swipebackpagethreshold	 |  “触摸”距离将超过这个值开始。
swipebackpageactivearea	 |  屏幕的触发刷卡反作用无形的左边缘宽度
swipebackpageanimateshadow	 | 启用/禁用刷卡后作用在箱阴影动画。
swipebackpageanimateopacity	 | 启用/禁用不透明度动画在刷卡的反作用。

# Sortable Lists 
选项名 | 说明
------------ | -------------
sortable |  如果你不使用排序列表，您可以禁用它潜在的更好的性能。

# Side Panels
选项名 | 说明
------------ | -------------
swipepanel | 	如果你想使能力打开侧面板，你可以在这里通过刷卡“左”（左面板）或“右”（右面板）。
swipepanelcloseopposite | 	这个参数给出了利用滑动关闭对面板的能力。例如，如果你的swipepanel是“左”，那么你可以关闭“刷卡”面板。
swipepanelonlyclose	此参数允许关闭（不开放）板挥笔
swipepanelactivearea	 | 从屏幕上看不见的边缘触发刷卡面板宽度
swipepanelnofollow |  后备选项的性能对老/慢设备可能更好。如果你启用它，然后侧面板时不碰跟随你的手指，它会自动打开/关闭滑动左/右。
swipepanelthreshold	 | 面板不会移动刷卡如果“触摸”距离将小于这个值。
panelsclosebyoutside |  启用/禁用点击在面板关闭面板的能力（在面板的覆盖）

# Modals (弹窗)
选项名 | 说明
------------ | -------------
modaltitle	 |  默认的标题（警戒，确认，提示）
modalbuttonok	 |  默认文本模式的“确定”按钮
modalbuttoncancel	 |  模态的“取消”按钮默认文本
modalpreloadertitle	 |  用于预加载模态缺省文本
modalclosebyoutside	 | 启用/禁用关闭模态能力（警戒，确认，提示）点击外模态（模态叠加）
actionsclosebyoutside	 | 动作模式
popupclosebyoutside	 |  弹出模态
modaltemplate	 | 完整的HTMLtemplate7格式化的HTML模板的情态动词（如警报，确认和提示）
modalactionstemplate |  模板可能是有用的如果你想添加一些自定义的元素，动作片的布局。看例子动作片模板
modalactionstopopovertemplate | 	template7格式化的HTML模板的动作片，将转换到Popover(弹出)。
modalusernameplaceholder |  在登录用户名输入占位符文本模式
modalpasswordplaceholder |  占位符文本密码输入登录名和密码模式
modalstack |  此功能不允许打开多个模式的同时，并会自动打开下一个模态当你关闭当前。这样的行为类似于浏览器本地警报

# Smart Select 
选项名 | 说明
------------ | -------------
smartselectopenin |  指定默认的方式聪明的选择应该打开。可以'页'，'弹出'或'人'
smartselectbacktemplate	 | 智能选择页面导航栏返回链接的HTML模板
smartselectpopupclosetemplate | 智能选择弹出密切链接的HTML模板
smartselectbacktext	 | 默认返回链接文本智能选择的网页导航栏
smartselectpopupclosetext |  智能选择的弹出式导航栏默认关闭链接文本
smartselectpickerclosetext | 智能选择的选择器工具栏默认关闭链接文本
smartselectsearchbar |  如果你想使所有Smart Selects的搜索栏
smartselectbackonselect |  如果启用智能选择页将自动在用户选择任何选项关闭
smartselectformtheme |  10个默认颜色主题在智能选择页面/弹出表单元素
smartselectnavbartheme |  10个默认颜色主题在智能选择页面/弹出式导航栏

# Navbars / Toolbars（导航栏，工具栏） 
选项名 | 说明
------------ | -------------
hidenavbaronpagescroll	 |  导航栏会自动隐藏页面向下滚动，并成为滚动可见
hidetoolbaronpagescroll	 | 工具栏会自动隐藏页面向下滚动，并成为滚动可见
hidetabbaronpagescroll	 | 标签栏会自动隐藏页面向下滚动，并成为滚动可见。请注意，这仅仅是标签栏的应用程序布局，否则使用hidetoolbaronpagescroll
showbarsonpagescrollend	 | 设置为true来显示隐藏导航栏和工具栏滚动时达到最终的页面
showbarsonpagescrolltop	布 | 酒吧不会成为可见当你滚动页面顶部的时候。他们只会在最顶部的滚动位置可见，在页面的开始
scrolltoponnavbarclick	 | 在导航栏的“中心”的元素将滚动当前活动页面顶部的每个点击

# Images Lazy Load
选项名 | 说明
------------ | -------------
imageslazyloadthreshold	 | 加载图像出现在屏幕上的时候。使用此参数如果你想载入图像前。设置为50将加载图像时，它的50像素才能显示在视口
imageslazyloadsequential |  如果启用，然后懒洋洋的图像将被加载一个当他们出现在视口
imageslazyloadplaceholder | 懒加载图像占位符显示在源图像未加载。默认情况下它是1x1像素的图像

# Notifications(通知)
选项名 | 说明
------------ | -------------
notificationtitle	 | 违约通知title for alliOS主题
notificationsubtitle | 所有通知默认字幕iOS主题
notificationmedia | 默认媒体（图标或图像）的所有通知iOS主题
notificationhold | 默认的保持时间（毫秒）的所有通知
notificationcloseonclick | 如果你想关闭的通知，点击默认
notificationcloseicon | 如果你想显示关闭图标（按钮）通知的默认iOS主题
notificationclosebuttontext | “关闭”按钮默认文本为snackbars材料主题

# template7 
选项名 | 说明
------------ | -------------
template7pages	 | 使template7 Ajax和动态页面的渲染。
template7data	 |  参数存储模板/网页template7渲染数据。
precompiletemplates | 使用此选项可以将所有template7模板自动编译框架。
templates |  template7编译模板对象。

# Page Callbacks 
选项名 | 说明
------------ | -------------
onpagebeforeinit |  回调函数将被执行时，framework7只是插入新页面的DOM。不一样的“pagebeforeinit”页事件
onpageinit |  回调函数将被执行时，framework7初始化所需页面的组件和导航栏。不一样的“pageinit”页事件
onpagebeforeanimation |  回调函数将被执行的时候一切都初始化和页面（和导航栏）准备的动画。不一样的“pagebeforeanimation”页事件
onpageafteranimation |  回调函数将被执行后的页面（和导航栏）动画。不一样的“pageafteranimation”页事件
onpagebeforeremove |  回调函数将被执行之前，页面将被删除从DOM。不一样的“pagebeforeremove”页事件
onpageback |  回调函数将被执行之前，“回”的转变。“onpagebeforeanimation”是这个回调将是对“旧”的页面执行的页面，从中心到右滑差。不一样的“pageback”页事件
onpageafterback	 |  回调函数，将在“背”过渡执行。“onpageafteranimation”是这个回调将是对“旧”的页面执行的页面，从中心到右滑差。不一样的“pageafterback”页事件

# Ajax Callbacks
选项名 | 说明
------------ | -------------
onajaxstart	 |  回调函数会在Ajax请求开始执行。这个函数接受电子数据作为参数。
onajaxcomplete	 |  回调函数将在Ajax请求执行。这个函数接受电子数据作为参数。

# Namespace 
选项名 | 说明
------------ | -------------
viewClass | 你的视图元素的类名称
viewmainclass | 类的名字作为你主要的景观元素
viewsclass	 |  类名称的视图元素
init |  默认情况下framework7将初始化时自动调用新的framework7()。如果你想避免这种行为，您可以禁用它使用此选项，然后手动初始化MyApp。（）当你需要它的时候。
