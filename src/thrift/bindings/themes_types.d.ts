//
// Autogenerated by Thrift Compiler (0.14.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import thrift = require('thrift');
import Thrift = thrift.Thrift;
import Q = thrift.Q;
import Int64 = require('node-int64');


declare enum ThriftDisplayElement {
  kWindowBg = 0,
  kText = 1,
  kDistinctText = 2,
  kSelectedText = 3,
  kSelectedBackground = 4,
  kInactiveSelectionText = 5,
  kInactiveSelectionBackground = 6,
  kValueChangedText = 7,
  kDisabledText = 8,
  kCurrentPc = 9,
  kCurrentPcStatementOnly = 10,
  kAlternativePc = 11,
  kBreakpoint = 12,
  kSignalGreen = 13,
  kSignalYellow = 14,
  kSignalRed = 15,
  kSideMargin = 16,
  kHighlightedBackground = 17,
  kHighlightedText = 18,
  kBtnFace = 19,
  kBtnShadow = 20,
  k3DDkShadow = 21,
  kTabBg = 22,
  kBtnText = 23,
  kBtnHighlight = 24,
  kGrayText = 25,
  kCaptionText = 26,
  kActiveCaptionBackground = 27,
  kInactiveCaptionBackground = 28,
  kActiveCaptionBackgroundGradient = 29,
  kInactiveCaptionBackgroundGradient = 30,
  kInactiveCaptionText = 31,
  kHotLinkNormalText = 32,
  kBarFace = 33,
  kBarShadow = 34,
  kBarHighlight = 35,
  kToolbarGradientDark = 36,
  kToolbarGradientLight = 37,
  kHighlightGradientLight = 38,
  kHighlightGradientDark = 39,
  kPressedToolbarBtnBg = 40,
  kTooltipText = 41,
  kTooltipBg = 42,
  kScrollbarBg = 43,
  kScrollbarFg = 44,
  kScrollbarHighlight = 45,
  kScrollbarDrag = 46,
  kMdiClientBg = 47,
  kWatchFamilyBg = 48,
  kStackFamilyBg = 49,
  kDisasmFamilyBg = 50,
  kMemoryFamilyBg = 51,
  kBreakpointFamilyBg = 52,
  kTraceFamilyBg = 53,
  kProfilerFamilyBg = 54,
  kInterruptFamilyBg = 55,
  kStateFamilyBg = 56,
  kDataLogFamilyBg = 57,
  kPowerLogFamilyBg = 58,
  kEventLogFamilyBg = 59,
  kRegisterFamilyBg = 60,
  kGrid = 61,
  kNumDisplayElements = 62,
}

declare class ColorSchema {
  public R: number;
  public G: number;
  public B: number;

    constructor(args?: { R: number; G: number; B: number; });
  read(input: Object): void;
  write(input: Object): void;
}
