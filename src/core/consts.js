{
  const SUPPORTED_EVENTS = [
    // clipboard events
    'onCopy',
    'onCut',
    'onPaste',
    // composition events
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    // keyboard events
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    // focus events
    'onFocus',
    'onBlur',
    // form events
    'onChange',
    'onInput',
    'onSubmit',
    // mouse events
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    // selection events
    'onSelect',
    // touch events
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    // UI events
    'onScroll',
    // wheel events
    'onWheel',
    // media events
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    // image events
    'onLoad',
    'onError',
    // animation events
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    // transition events
    'onTransitionEnd',
  ];

  const SUPPORTED_ATTRIBUTES = [
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'challenge',
    'charSet',
    'checked',
    'cite',
    'classID',
    'class',
    'colSpan',
    'cols',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'disabled',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'label',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'nonce',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'profile',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'reversed',
    'role',
    'rowSpan',
    'rows',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'target',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap ',
  ];

  const SUPPORTED_STYLES = [
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'backgroundAttachment',
    'backgroundBlendMode',
    'backgroundClip',
    'backgroundColor',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderCollapse',
    'borderImageOutset',
    'borderImageRepeat',
    'borderImageSlice',
    'borderImageSource',
    'borderImageWidth',
    'borderLeftColor',
    'borderLeftStyle',
    'borderLeftWidth',
    'borderRightColor',
    'borderRightStyle',
    'borderRightWidth',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopStyle',
    'borderTopWidth',
    'bottom',
    'boxShadow',
    'boxSizing',
    'breakAfter',
    'breakBefore',
    'breakInside',
    'captionSide',
    'clear',
    'clip',
    'color',
    'content',
    'cursor',
    'direction',
    'display',
    'emptyCells',
    'float',
    'fontFamily',
    'fontKerning',
    'fontSize',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontVariantLigatures',
    'fontVariantCaps',
    'fontVariantNumeric',
    'fontWeight',
    'height',
    'imageRendering',
    'isolation',
    'justifyItems',
    'justifySelf',
    'left',
    'letterSpacing',
    'lineHeight',
    'listStyleImage',
    'listStylePosition',
    'listStyleType',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'mixBlendMode',
    'objectFit',
    'objectPosition',
    'offsetDistance',
    'offsetPath',
    'offsetRotate',
    'offsetRotation',
    'opacity',
    'orphans',
    'outlineColor',
    'outlineOffset',
    'outlineStyle',
    'outlineWidth',
    'overflowAnchor',
    'overflowWrap',
    'overflowX',
    'overflowY',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'pointerEvents',
    'position',
    'resize',
    'right',
    'speak',
    'tableLayout',
    'tabSize',
    'textAlign',
    'textAlignLast',
    'textDecoration',
    'textDecorationLine',
    'textDecorationStyle',
    'textDecorationColor',
    'textDecorationSkip',
    'textUnderlinePosition',
    'textIndent',
    'textRendering',
    'textShadow',
    'textSizeAdjust',
    'textOverflow',
    'textTransform',
    'top',
    'touchAction',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'unicodeBidi',
    'verticalAlign',
    'visibility',
    'whiteSpace',
    'widows',
    'width',
    'willChange',
    'wordBreak',
    'wordSpacing',
    'wordWrap',
    'zIndex',
    'zoom',
    'WebkitAppearance',
    'backfaceVisibility',
    'WebkitBackgroundClip',
    'WebkitBackgroundOrigin',
    'WebkitBorderHorizontalSpacing',
    'WebkitBorderImage',
    'WebkitBorderVerticalSpacing',
    'WebkitBoxAlign',
    'WebkitBoxDecorationBreak',
    'WebkitBoxDirection',
    'WebkitBoxFlex',
    'WebkitBoxFlexGroup',
    'WebkitBoxLines',
    'WebkitBoxOrdinalGroup',
    'WebkitBoxOrient',
    'WebkitBoxPack',
    'WebkitBoxReflect',
    'columnCount',
    'columnGap',
    'columnRuleColor',
    'columnRuleStyle',
    'columnRuleWidth',
    'columnSpan',
    'columnWidth',
    'alignContent',
    'alignItems',
    'alignSelf',
    'flexBasis',
    'flexGrow',
    'flexShrink',
    'flexDirection',
    'flexWrap',
    'justifyContent',
    'WebkitFontSmoothing',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridColumnEnd',
    'gridColumnStart',
    'gridTemplateAreas',
    'gridTemplateColumns',
    'gridTemplateRows',
    'gridRowEnd',
    'gridRowStart',
    'gridColumnGap',
    'gridRowGap',
    'WebkitHighlight',
    'hyphens',
    'WebkitHyphenateCharacter',
    'WebkitLineBreak',
    'WebkitLineClamp',
    'WebkitLocale',
    'WebkitMarginBeforeCollapse',
    'WebkitMarginAfterCollapse',
    'WebkitMaskBoxImage',
    'WebkitMaskBoxImageOutset',
    'WebkitMaskBoxImageRepeat',
    'WebkitMaskBoxImageSlice',
    'WebkitMaskBoxImageSource',
    'WebkitMaskBoxImageWidth',
    'WebkitMaskClip',
    'WebkitMaskComposite',
    'WebkitMaskImage',
    'WebkitMaskOrigin',
    'WebkitMaskPosition',
    'WebkitMaskRepeat',
    'WebkitMaskSize',
    'order',
    'perspective',
    'perspectiveOrigin',
    'WebkitPrintColorAdjust',
    'WebkitRtlOrdering',
    'shapeOutside',
    'shapeImageThreshold',
    'shapeMargin',
    'WebkitTapHighlightColor',
    'WebkitTextCombine',
    'WebkitTextDecorationsInEffect',
    'WebkitTextEmphasisColor',
    'WebkitTextEmphasisPosition',
    'WebkitTextEmphasisStyle',
    'WebkitTextFillColor',
    'WebkitTextOrientation',
    'WebkitTextSecurity',
    'WebkitTextStrokeColor',
    'WebkitTextStrokeWidth',
    'transform',
    'transformOrigin',
    'transformStyle',
    'WebkitUserDrag',
    'WebkitUserModify',
    'userSelect',
    'WebkitWritingMode',
    'WebkitAppRegion',
    'bufferedRendering',
    'clipPath',
    'clipRule',
    'mask',
    'filter',
    'floodColor',
    'floodOpacity',
    'lightingColor',
    'stopColor',
    'stopOpacity',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorRendering',
    'fill',
    'fillOpacity',
    'fillRule',
    'markerEnd',
    'markerMid',
    'markerStart',
    'maskType',
    'shapeRendering',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'alignmentBaseline',
    'baselineShift',
    'dominantBaseline',
    'textAnchor',
    'writingMode',
    'vectorEffect',
    'paintOrder',
    'd',
    'cx',
    'cy',
    'x',
    'y',
    'r',
    'rx',
    'ry',
    'caretColor'
  ];

  module.exports = {
    SUPPORTED_ATTRIBUTES,
    SUPPORTED_EVENTS,
    SUPPORTED_STYLES
  };
}