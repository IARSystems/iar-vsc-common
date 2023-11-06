//
// Autogenerated by Thrift Compiler (0.14.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
ttypes.ThriftDisplayElement = {
  '0' : 'kWindowBg',
  'kWindowBg' : 0,
  '1' : 'kText',
  'kText' : 1,
  '2' : 'kDistinctText',
  'kDistinctText' : 2,
  '3' : 'kSelectedText',
  'kSelectedText' : 3,
  '4' : 'kSelectedBackground',
  'kSelectedBackground' : 4,
  '5' : 'kInactiveSelectionText',
  'kInactiveSelectionText' : 5,
  '6' : 'kInactiveSelectionBackground',
  'kInactiveSelectionBackground' : 6,
  '7' : 'kValueChangedText',
  'kValueChangedText' : 7,
  '8' : 'kDisabledText',
  'kDisabledText' : 8,
  '9' : 'kCurrentPc',
  'kCurrentPc' : 9,
  '10' : 'kCurrentPcStatementOnly',
  'kCurrentPcStatementOnly' : 10,
  '11' : 'kAlternativePc',
  'kAlternativePc' : 11,
  '12' : 'kBreakpoint',
  'kBreakpoint' : 12,
  '13' : 'kSignalGreen',
  'kSignalGreen' : 13,
  '14' : 'kSignalYellow',
  'kSignalYellow' : 14,
  '15' : 'kSignalRed',
  'kSignalRed' : 15,
  '16' : 'kSideMargin',
  'kSideMargin' : 16,
  '17' : 'kHighlightedBackground',
  'kHighlightedBackground' : 17,
  '18' : 'kHighlightedText',
  'kHighlightedText' : 18,
  '19' : 'kBtnFace',
  'kBtnFace' : 19,
  '20' : 'kBtnShadow',
  'kBtnShadow' : 20,
  '21' : 'k3DDkShadow',
  'k3DDkShadow' : 21,
  '22' : 'kTabBg',
  'kTabBg' : 22,
  '23' : 'kBtnText',
  'kBtnText' : 23,
  '24' : 'kBtnHighlight',
  'kBtnHighlight' : 24,
  '25' : 'kGrayText',
  'kGrayText' : 25,
  '26' : 'kCaptionText',
  'kCaptionText' : 26,
  '27' : 'kActiveCaptionBackground',
  'kActiveCaptionBackground' : 27,
  '28' : 'kInactiveCaptionBackground',
  'kInactiveCaptionBackground' : 28,
  '29' : 'kActiveCaptionBackgroundGradient',
  'kActiveCaptionBackgroundGradient' : 29,
  '30' : 'kInactiveCaptionBackgroundGradient',
  'kInactiveCaptionBackgroundGradient' : 30,
  '31' : 'kInactiveCaptionText',
  'kInactiveCaptionText' : 31,
  '32' : 'kHotLinkNormalText',
  'kHotLinkNormalText' : 32,
  '33' : 'kBarFace',
  'kBarFace' : 33,
  '34' : 'kBarShadow',
  'kBarShadow' : 34,
  '35' : 'kBarHighlight',
  'kBarHighlight' : 35,
  '36' : 'kToolbarGradientDark',
  'kToolbarGradientDark' : 36,
  '37' : 'kToolbarGradientLight',
  'kToolbarGradientLight' : 37,
  '38' : 'kHighlightGradientLight',
  'kHighlightGradientLight' : 38,
  '39' : 'kHighlightGradientDark',
  'kHighlightGradientDark' : 39,
  '40' : 'kPressedToolbarBtnBg',
  'kPressedToolbarBtnBg' : 40,
  '41' : 'kTooltipText',
  'kTooltipText' : 41,
  '42' : 'kTooltipBg',
  'kTooltipBg' : 42,
  '43' : 'kScrollbarBg',
  'kScrollbarBg' : 43,
  '44' : 'kScrollbarFg',
  'kScrollbarFg' : 44,
  '45' : 'kScrollbarHighlight',
  'kScrollbarHighlight' : 45,
  '46' : 'kScrollbarDrag',
  'kScrollbarDrag' : 46,
  '47' : 'kMdiClientBg',
  'kMdiClientBg' : 47,
  '48' : 'kWatchFamilyBg',
  'kWatchFamilyBg' : 48,
  '49' : 'kStackFamilyBg',
  'kStackFamilyBg' : 49,
  '50' : 'kDisasmFamilyBg',
  'kDisasmFamilyBg' : 50,
  '51' : 'kMemoryFamilyBg',
  'kMemoryFamilyBg' : 51,
  '52' : 'kBreakpointFamilyBg',
  'kBreakpointFamilyBg' : 52,
  '53' : 'kTraceFamilyBg',
  'kTraceFamilyBg' : 53,
  '54' : 'kProfilerFamilyBg',
  'kProfilerFamilyBg' : 54,
  '55' : 'kInterruptFamilyBg',
  'kInterruptFamilyBg' : 55,
  '56' : 'kStateFamilyBg',
  'kStateFamilyBg' : 56,
  '57' : 'kDataLogFamilyBg',
  'kDataLogFamilyBg' : 57,
  '58' : 'kPowerLogFamilyBg',
  'kPowerLogFamilyBg' : 58,
  '59' : 'kEventLogFamilyBg',
  'kEventLogFamilyBg' : 59,
  '60' : 'kRegisterFamilyBg',
  'kRegisterFamilyBg' : 60,
  '61' : 'kGrid',
  'kGrid' : 61,
  '62' : 'kNumDisplayElements',
  'kNumDisplayElements' : 62
};
var ColorSchema = module.exports.ColorSchema = function(args) {
  this.R = null;
  this.G = null;
  this.B = null;
  if (args) {
    if (args.R !== undefined && args.R !== null) {
      this.R = args.R;
    }
    if (args.G !== undefined && args.G !== null) {
      this.G = args.G;
    }
    if (args.B !== undefined && args.B !== null) {
      this.B = args.B;
    }
  }
};
ColorSchema.prototype = {};
ColorSchema.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.R = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.G = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.B = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ColorSchema.prototype.write = function(output) {
  output.writeStructBegin('ColorSchema');
  if (this.R !== null && this.R !== undefined) {
    output.writeFieldBegin('R', Thrift.Type.I32, 1);
    output.writeI32(this.R);
    output.writeFieldEnd();
  }
  if (this.G !== null && this.G !== undefined) {
    output.writeFieldBegin('G', Thrift.Type.I32, 2);
    output.writeI32(this.G);
    output.writeFieldEnd();
  }
  if (this.B !== null && this.B !== undefined) {
    output.writeFieldBegin('B', Thrift.Type.I32, 3);
    output.writeI32(this.B);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

