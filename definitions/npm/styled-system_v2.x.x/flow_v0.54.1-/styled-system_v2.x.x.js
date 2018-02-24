declare module 'styled-system' {
  declare type ResponsiveStyleProp<T> = T | Array<T>;
  declare type StylesMapperFn<P> = (p: P) => { [key: string]: mixed };

  declare type WidthProps = {
    width?: ResponsiveStyleProp<string | number>
  };
  declare export var width: StylesMapperFn<WidthProps>;

  declare type FontSizeProps = {
    fontSize?: ResponsiveStyleProp<string | number>
  };
  declare export var fontSize: StylesMapperFn<FontSizeProps>;

  declare type TextColorProps = {
    color?: ResponsiveStyleProp<string>
  };
  declare export var textColor: StylesMapperFn<TextColorProps>;

  declare type BgColorProps = {
    bg?: ResponsiveStyleProp<string>
  };
  declare export var bgColor: StylesMapperFn<BgColorProps>;

  declare export var color: StylesMapperFn<{
    ...TextColorProps,
    ...BgColorProps
  }>;

  declare type FontFamilyProps = {
    fontFamily?: string
  };
  declare export var fontFamily: StylesMapperFn<FontFamilyProps>;

  declare type TextAlignProps = {
    textAlign?: ResponsiveStyleProp<string>
  };
  declare export var textAlign: StylesMapperFn<TextAlignProps>;

  declare type LineHeightProps = {
    lineHeight?: string
  };
  declare export var lineHeight: StylesMapperFn<LineHeightProps>;

  declare type FontWeightProps = {
    fontWeight?: string
  };
  declare export var fontWeight: StylesMapperFn<FontWeightProps>;

  declare type LetterSpacingProps = {
    letterSpacing?: string | number
  };
  declare export var letterSpacing: StylesMapperFn<LetterSpacingProps>;

  declare type DisplayProps = {
    display?: ResponsiveStyleProp<string>
  };
  declare export var display: StylesMapperFn<DisplayProps>;

  declare type MaxWidthProps = {
    maxWidth?: ResponsiveStyleProp<string | number>
  };
  declare export var maxWidth: StylesMapperFn<MaxWidthProps>;

  declare type MinWidthProps = {
    minWidth?: ResponsiveStyleProp<string | number>
  };
  declare export var minWidth: StylesMapperFn<MinWidthProps>;

  declare type HeightProps = {
    height?: ResponsiveStyleProp<string | number>
  };
  declare export var height: StylesMapperFn<HeightProps>;

  declare type MaxHeightProps = {
    maxHeight?: ResponsiveStyleProp<string | number>
  };
  declare export var maxHeight: StylesMapperFn<MaxHeightProps>;

  declare type MinHeightProps = {
    minHeight?: ResponsiveStyleProp<string | number>
  };
  declare export var minHeight: StylesMapperFn<MinHeightProps>;

  declare type SizeWidthProps = {
    size?: ResponsiveStyleProp<string | number>
  };
  declare export var sizeWidth: StylesMapperFn<SizeWidthProps>;

  declare type SizeHeightProps = {
    size?: ResponsiveStyleProp<string | number>
  };
  declare export var sizeHeight: StylesMapperFn<SizeHeightProps>;

  declare export var size: StylesMapperFn<{
    ...SizeWidthProps,
    ...SizeHeightProps
  }>;

  declare type RatioPaddingProps = {
    ratio?: number
  };
  declare export var ratioPadding: StylesMapperFn<RatioPaddingProps>;

  declare export var ratio: StylesMapperFn<{
    height: 0,
    ...RatioPaddingProps
  }>;

  declare type AlignItemsProps = {
    alignItems?: ResponsiveStyleProp<string>
  };
  declare export var alignItems: StylesMapperFn<AlignItemsProps>;

  declare type AlignContentProps = {
    alignContent?: ResponsiveStyleProp<string>
  };
  declare export var alignContent: StylesMapperFn<AlignContentProps>;

  declare type JustifyContentProps = {
    justifyContent?: ResponsiveStyleProp<string>
  };
  declare export var justifyContent: StylesMapperFn<JustifyContentProps>;

  declare type FlexWrapProps = {
    flexWrap?: ResponsiveStyleProp<string>
  };
  declare export var flexWrap: StylesMapperFn<FlexWrapProps>;

  declare type FlexDirectionProps = {
    flexDirection?: ResponsiveStyleProp<string>
  };
  declare export var flexDirection: StylesMapperFn<FlexDirectionProps>;

  declare type FlexProps = {
    flex?: ResponsiveStyleProp<string>
  };
  declare export var flex: StylesMapperFn<FlexProps>;

  declare type AlignSelfProps = {
    alignSelf?: ResponsiveStyleProp<string>
  };
  declare export var alignSelf: StylesMapperFn<AlignSelfProps>;

  declare type OrderProps = {
    order?: ResponsiveStyleProp<string>
  };
  declare export var order: StylesMapperFn<OrderProps>;

  declare type BorderProps = {
    border?: ResponsiveStyleProp<string | number>
  };
  declare export var border: StylesMapperFn<BorderProps>;

  declare type BorderTopProps = {
    borderTop?: ResponsiveStyleProp<string | number>
  };
  declare export var borderTop: StylesMapperFn<BorderTopProps>;

  declare type BorderRightProps = {
    borderRight?: ResponsiveStyleProp<string | number>
  };
  declare export var borderRight: StylesMapperFn<BorderRightProps>;

  declare type BorderBottomProps = {
    borderBottom?: ResponsiveStyleProp<string | number>
  };
  declare export var borderBottom: StylesMapperFn<BorderBottomProps>;

  declare type BorderLeftProps = {
    borderLeft?: ResponsiveStyleProp<string | number>
  };
  declare export var borderLeft: StylesMapperFn<BorderLeftProps>;

  declare export var borders: StylesMapperFn<{
    ...BorderProps,
    ...BorderTopProps,
    ...BorderRightProps,
    ...BorderBottomProps,
    ...BorderLeftProps
  }>;

  declare type BorderColorProps = {
    borderColor?: string
  };
  declare export var borderColor: StylesMapperFn<BorderColorProps>;

  declare type BorderRadiusProps = {
    borderRadius?: string | number
  };
  declare export var borderRadius: StylesMapperFn<BorderRadiusProps>;

  declare type BoxShadowProps = {
    boxShadow?: string
  };
  declare export var boxShadow: StylesMapperFn<BoxShadowProps>;

  declare type BackgroundProps = {
    background?: string
  };
  declare export var background: StylesMapperFn<BackgroundProps>;

  declare type BackgroundImageProps = {
    backgroundImage?: string
  };
  declare export var backgroundImage: StylesMapperFn<BackgroundImageProps>;

  declare type BackgroundSizeProps = {
    backgroundSize?: string
  };
  declare export var backgroundSize: StylesMapperFn<BackgroundSizeProps>;

  declare type BackgroundPositionProps = {
    backgroundPosition?: string
  };
  declare export var backgroundPosition: StylesMapperFn<BackgroundPositionProps>;

  declare type PositionProps = {
    position?: ResponsiveStyleProp<string>
  };
  declare export var position: StylesMapperFn<PositionProps>;

  declare type ZIndexProps = {
    zIndex?: string
  };
  declare export var zIndex: StylesMapperFn<ZIndexProps>;

  declare type TopProps = {
    top?: ResponsiveStyleProp<string | number>
  };
  declare export var top: StylesMapperFn<TopProps>;

  declare type RightProps = {
    right?: ResponsiveStyleProp<string | number>
  };
  declare export var right: StylesMapperFn<RightProps>;

  declare type BottomProps = {
    bottom?: ResponsiveStyleProp<string | number>
  };
  declare export var bottom: StylesMapperFn<BottomProps>;

  declare type LeftProps = {
    left?: ResponsiveStyleProp<string | number>
  };
  declare export var left: StylesMapperFn<LeftProps>;

  declare type HoverProps = {
    hover?: string
  };
  declare export var hover: StylesMapperFn<HoverProps>;

  declare type FocusProps = {
    focus?: string
  };
  declare export var focus: StylesMapperFn<FocusProps>;

  declare type ActiveProps = {
    active?: string
  };
  declare export var active: StylesMapperFn<ActiveProps>;

  declare type DisabledProps = {
    disabledStyle?: string
  };
  declare export var disabled: StylesMapperFn<DisabledProps>;

  declare type TextStyleProps = {
    textStyle?: string
  };
  declare export var textStyle: StylesMapperFn<TextStyleProps>;

  declare type ColorStyleProps = {
    colors?: string
  };
  declare export var colorStyle: StylesMapperFn<ColorStyleProps>;

  declare type ButtonStyleProps = {
    buttonStyle?: string
  };
  declare export var buttonStyle: StylesMapperFn<ButtonStyleProps>;

  declare type BorderWidthProps = {
    borderWidth?: string
  };
  declare export var borderWidth: StylesMapperFn<BorderWidthProps>;

  declare type SpaceProps = {
    m?: ResponsiveStyleProp<string | number>,
    mt?: ResponsiveStyleProp<string | number>,
    mr?: ResponsiveStyleProp<string | number>,
    mb?: ResponsiveStyleProp<string | number>,
    ml?: ResponsiveStyleProp<string | number>,
    mx?: ResponsiveStyleProp<string | number>,
    my?: ResponsiveStyleProp<string | number>,
    p?: ResponsiveStyleProp<string | number>,
    pt?: ResponsiveStyleProp<string | number>,
    pr?: ResponsiveStyleProp<string | number>,
    pb?: ResponsiveStyleProp<string | number>,
    pl?: ResponsiveStyleProp<string | number>,
    px?: ResponsiveStyleProp<string | number>,
    py?: ResponsiveStyleProp<string | number>,
  };
  declare export var space: StylesMapperFn<SpaceProps>;

  declare function themeGet(path: string, fallback: mixed): mixed;
  declare function style<P>(opts: {
    prop: string,
    alias?: string,
    cssProperty: string,
    key?: string,
    numberToPx?: boolean,
    getter?: (v: mixed) => mixed
  }): StylesMapperFn<P>;

  declare function responsiveStyle<P>(opts: {
    prop: string,
    alias?: string,
    cssProperty: string,
    key?: string,
    numberToPx?: boolean,
    getter?: (v: mixed) => mixed
  }): StylesMapperFn<P>;

  declare function pseudoStyle<P>(opts: {
    prop: string,
    pseudoClass: string,
    keys?: {
      [key: string]: string
    }
  }): StylesMapperFn<P>;

  declare function complexStyle<P>(opts: {
    prop: string,
    key: string
  }): StylesMapperFn<P>;

}
