// 标签输入框插件类
class TagInput {
    constructor(container, options = {}) {
        // 配置参数
        this.container = container;
        this.input = container.querySelector('.tag-input-input');
        this.hiddenInput = options.hiddenInput || null;
        this.maxTags = options.maxTags || 10;
        this.delimiter = options.delimiter || ',';

        // 状态管理
        this.tags = [];
        this.tagCountElement = options.tagCountElement || null;

        // 初始化标签容器
        this.container.classList.add('tag-input');
        if (!this.hiddenInput) {
            this.hiddenInput = document.createElement('input');
            this.hiddenInput.type = 'text';
            this.hiddenInput.className = 'hidden-input';
            container.appendChild(this.hiddenInput);
        }

        // 初始化事件
        this.initEvents();

        // 注册自定义事件
        this.tagAddedEvent = new Event('tagAdded');
        this.tagRemovedEvent = new Event('tagRemoved');
        this.tagsChangedEvent = new Event('tagsChanged');
    }

    // 初始化事件监听
    initEvents() {
        // 容器点击聚焦输入框
        this.container.addEventListener('click', () => {
            this.input.focus();
            this.container.classList.add('focus');
        });

        // 输入框失焦
        this.input.addEventListener('blur', () => {
            this.container.classList.remove('focus');
        });

        // 按键事件
        this.input.addEventListener('keydown', (e) => {
            // 回车键添加标签
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addTag(this.input.value.trim());
            }

            // 退格键删除标签
            if (e.key === 'Backspace' && this.input.value === '') {
                this.removeLastTag();
            }
        });
    }

    // 添加标签
    addTag(tagText) {
        // 验证标签
        if (!tagText) return false;

        // 检查重复标签
        if (this.tags.includes(tagText)) {
            return false;
        }

        // 检查标签数量限制
        if (this.tags.length >= this.maxTags) {
            return false;
        }

        // 创建标签元素
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.innerHTML = `
                    ${tagText}
                    <div class="close-btn"></div>
                `;

        // 添加关闭事件
        const closeBtn = tagElement.querySelector('.close-btn');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeTag(tagText);
        });

        // 插入到输入框前
        this.container.insertBefore(tagElement, this.input);

        // 添加到标签数组
        this.tags.push(tagText);

        // 清空输入框
        this.input.value = '';

        // 更新计数和隐藏input值
        this.updateTagCount();
        this.updateValue();

        // 触发自定义事件
        this.container.dispatchEvent(this.tagAddedEvent);
        this.container.dispatchEvent(this.tagsChangedEvent);

        return true;
    }

    // 删除指定标签
    removeTag(tagText) {
        const index = this.tags.indexOf(tagText);
        if (index === -1) return false;

        // 从数组中移除
        this.tags.splice(index, 1);

        // 从DOM中移除
        const tagElements = this.container.querySelectorAll('.tag');
        if (tagElements[index]) {
            tagElements[index].remove();
        }

        // 更新计数和值
        this.updateTagCount();
        this.updateValue();

        // 触发自定义事件
        this.container.dispatchEvent(this.tagRemovedEvent);
        this.container.dispatchEvent(this.tagsChangedEvent);

        return true;
    }

    // 删除最后一个标签
    removeLastTag() {
        if (this.tags.length === 0) return false;

        const lastTag = this.tags[this.tags.length - 1];
        return this.removeTag(lastTag);
    }

    // 更新标签计数显示
    updateTagCount() {
        if (this.tagCountElement) {
            this.tagCountElement.textContent = this.tags.length;
        }
    }

    // 更新隐藏input的值
    updateValue() {
        if (this.hiddenInput) {
            this.hiddenInput.value = this.tags.join(this.delimiter);
        }
    }

    // 获取当前标签值
    getTags(delimiter = this.delimiter) {
        return this.tags.join(delimiter);
    }

    // 设置标签计数元素
    setTagCountElement(element) {
        this.tagCountElement = element;
        this.updateTagCount();
    }

    // 清空所有标签
    clear() {
        while (this.tags.length > 0) {
            this.removeLastTag();
        }
    }

    // 初始化已有标签
    initTags(initialTags, delimiter = this.delimiter) {
        if (initialTags) {
            const tags = initialTags.split(delimiter);
            tags.forEach(tag => {
                if (tag) this.addTag(tag);
            });
        }
    }
}