module.exports = Object.assign({}, {
  childNodes: [], // 孩子节点
  wxCompName: '', // 替代的内置组件标签名
}, {
  // wx-component
  class: '',
  style: '',
  content: '',
}, {
  // input
  value: undefined,
  type: '',
  mpType: '',
  maxlength: '',
  placeholder: '',
  placeholderClass: '',
  cursorSpacing: 0,
  focus: false,
  disabled: false,
}, {
  // video
  src: '',
  autoplay: false,
  loop: false,
  muted: false,
  controls: true,
  poster: '',
}, {
  // button
  openType: undefined,
  disabled: false,
}, {
  // picker
  mode: 'selector',
  range: undefined,
  rangeKey: '',
  start: '',
  end: '',
  fields: 'day',
  customItem: '',
  value: undefined,
  disabled: false,
}, {
  // iframe
  content: '',
}, {
  // img
  src: '',
})