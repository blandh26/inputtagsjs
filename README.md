# TagInput 플러그인 설명서 (한국어)
## 개요
TagInput은 가볍고 의존성이 없는 JavaScript 플러그인으로, 사용자가 엔터 키를 눌러 태그를 추가하고, 닫기 버튼을 클릭하여 태그를 삭제하거나 백스페이스 키로 마지막 태그를 삭제할 수 있는 아름답고 실용적인 태그 입력 상자를 생성합니다.

## 주요 기능
​## 태그 관리:
- 엔터 키로 태그 추가
- 태그의 닫기 버튼 클릭으로 태그 삭제
- 입력 상자가 비어 있을 때 백스페이스 키로 마지막 태그 삭제

## 데이터 동기화:
- 태그 값을 숨겨진 input 요소에 자동 동기화
- 사용자 정의 구분자 지원
## 이벤트 시스템:
- tagAdded - 태그 추가 시 트리거
- tagRemoved - 태그 삭제 시 트리거
- tagsChanged - 태그 변경 시 트리거
## 구성 옵션:
- 최대 태그 수 제한
- 사용자 정의 태그 구분자
- 태그 카운터 표시
## API 메소드
// 태그 추가
tagInput.addTag("새 태그");

// 태그 삭제
tagInput.removeTag("삭제할 태그");

// 마지막 태그 삭제
tagInput.removeLastTag();

// 태그 값 가져오기
const tags = tagInput.getTags(); // 기본 구분자
const tagsCustom = tagInput.getTags(';'); // 사용자 정의 구분자

// 모든 태그 지우기
tagInput.clear();

// 태그 카운터 요소 설정
tagInput.setTagCountElement(document.getElementById('tagCount'));

## 이벤트 리스닝
// 태그 추가 이벤트
tagInput.container.addEventListener('tagAdded', () => {
    console.log('새 태그 추가됨');
});

// 태그 삭제 이벤트
tagInput.container.addEventListener('tagRemoved', () => {
    console.log('태그 삭제됨');
});

// 태그 변경 이벤트
tagInput.container.addEventListener('tagsChanged', () => {
    console.log('태그 변경됨');
});
![](https://github.com/blandh26/inputtagsjs/blob/main/1.png)
--------------------------------------------------------------------

# TagInput 插件说明书 (中文)
概述
TagInput 是一个轻量级、无依赖的 JavaScript 插件，用于创建美观实用的标签输入框。用户可以通过回车添加标签，点击关闭按钮删除标签，或使用退格键删除最后一个标签。

## 主要功能
​## 标签管理​：
- 回车添加标签
- 点击标签上的关闭按钮删除标签
- 输入框为空时按退格键删除最后一个标签
## 数据同步​：
- 自动将标签值同步到隐藏的 input 元素
- 支持自定义分隔符
## 事件系统​：
- tagAdded - 标签添加时触发
- tagRemoved - 标签删除时触发
- tagsChanged - 标签变化时触发
## 配置选项​：
- 最大标签数量限制
- 自定义标签分隔符
- 标签计数显示
## API 方法
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

## 事件监听
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
