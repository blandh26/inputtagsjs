# TagInput 插件说明书 (中文)
概述
TagInput 是一个轻量级、无依赖的 JavaScript 插件，用于创建美观实用的标签输入框。用户可以通过回车添加标签，点击关闭按钮删除标签，或使用退格键删除最后一个标签。

## 主要功能
​### 标签管理​：
- 回车添加标签
- 点击标签上的关闭按钮删除标签
- 输入框为空时按退格键删除最后一个标签
​### ​数据同步​：
- 自动将标签值同步到隐藏的 input 元素
- 支持自定义分隔符
​​### 事件系统​：
- tagAdded - 标签添加时触发
- tagRemoved - 标签删除时触发
- tagsChanged - 标签变化时触发
​​### 配置选项​：
- 最大标签数量限制
- 自定义标签分隔符
- 标签计数显示
​​### API 方法
// 添加标签
tagInput.addTag("新标签");

// 删除标签
tagInput.removeTag("要删除的标签");

// 删除最后一个标签
tagInput.removeLastTag();

// 获取标签值
const tags = tagInput.getTags(); // 默认分隔符
const tagsCustom = tagInput.getTags(';'); // 自定义分隔符

// 清空所有标签
tagInput.clear();

// 设置标签数量显示元素
tagInput.setTagCountElement(document.getElementById('tagCount'));

​​### 事件监听
// 标签添加事件
tagInput.container.addEventListener('tagAdded', () => {
    console.log('新标签添加');
});

// 标签移除事件
tagInput.container.addEventListener('tagRemoved', () => {
    console.log('标签移除');
});

// 标签变更事件
tagInput.container.addEventListener('tagsChanged', () => {
    console.log('标签变更');
});
