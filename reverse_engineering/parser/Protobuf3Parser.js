// Generated from grammars/Protobuf3.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require("antlr4/index");
var Protobuf3Visitor = require("./Protobuf3Visitor").Protobuf3Visitor;

var grammarFileName = "Protobuf3.g4";

var serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0003A\u025f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
  "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
  "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
  "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
  "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
  "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
  "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
  "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
  '\u001f\t\u001f\u0004 \t \u0004!\t!\u0004"\t"\u0004#\t#\u0004$\t$\u0004',
  "%\t%\u0004&\t&\u0004'\t'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
  ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
  "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0003\u0002\u0007\u0002",
  "p\n\u0002\f\u0002\u000e\u0002s\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
  "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
  "\u0002}\n\u0002\f\u0002\u000e\u0002\u0080\u000b\u0002\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005",
  "\u0004\u0089\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
  "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u009e\n\u0007\u0005",
  "\u0007\u00a0\n\u0007\u0003\b\u0005\b\u00a3\n\b\u0003\b\u0003\b\u0003",
  "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00ad\n\b\u0003\b",
  "\u0003\b\u0005\b\u00b1\n\b\u0003\t\u0003\t\u0003\t\u0007\t\u00b6\n\t",
  "\f\t\u000e\t\u00b9\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
  "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0006\r",
  "\u00c7\n\r\r\r\u000e\r\u00c8\u0006\r\u00cb\n\r\r\r\u000e\r\u00cc\u0005",
  "\r\u00cf\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0006\r\u00d5\n\r\r\r\u000e",
  "\r\u00d6\u0006\r\u00d9\n\r\r\r\u000e\r\u00da\u0005\r\u00dd\n\r\u0003",
  "\r\u0003\r\u0003\r\u0003\r\u0007\r\u00e3\n\r\f\r\u000e\r\u00e6\u000b",
  "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
  "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00f2\n\u000e",
  "\u0003\u000e\u0003\u000e\u0005\u000e\u00f6\n\u000e\u0003\u000f\u0003",
  "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
  "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
  "\u000f\u0105\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
  "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
  "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
  "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
  "\u011c\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0121",
  "\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
  "\u0007\u0013\u0128\n\u0013\f\u0013\u000e\u0013\u012b\u000b\u0013\u0003",
  "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0131\n\u0014",
  "\u0005\u0014\u0133\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0007",
  "\u0015\u0138\n\u0015\f\u0015\u000e\u0015\u013b\u000b\u0015\u0003\u0016",
  "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0142\n",
  "\u0016\u0003\u0017\u0003\u0017\u0006\u0017\u0146\n\u0017\r\u0017\u000e",
  "\u0017\u0147\u0006\u0017\u014a\n\u0017\r\u0017\u000e\u0017\u014b\u0005",
  "\u0017\u014e\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
  "\u0006\u0017\u0154\n\u0017\r\u0017\u000e\u0017\u0155\u0006\u0017\u0158",
  "\n\u0017\r\u0017\u000e\u0017\u0159\u0005\u0017\u015c\n\u0017\u0003\u0017",
  "\u0003\u0017\u0003\u0018\u0003\u0018\u0007\u0018\u0162\n\u0018\f\u0018",
  "\u000e\u0018\u0165\u000b\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
  "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u016e\n\u0019",
  "\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0173\n\u001a\u0003",
  "\u001a\u0003\u001a\u0005\u001a\u0177\n\u001a\u0003\u001a\u0003\u001a",
  "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u017f\n",
  "\u001b\f\u001b\u000e\u001b\u0182\u000b\u001b\u0003\u001b\u0003\u001b",
  "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
  "\u0006\u001d\u018c\n\u001d\r\u001d\u000e\u001d\u018d\u0006\u001d\u0190",
  "\n\u001d\r\u001d\u000e\u001d\u0191\u0005\u001d\u0194\n\u001d\u0003\u001d",
  "\u0003\u001d\u0003\u001d\u0003\u001d\u0006\u001d\u019a\n\u001d\r\u001d",
  "\u000e\u001d\u019b\u0006\u001d\u019e\n\u001d\r\u001d\u000e\u001d\u019f",
  "\u0005\u001d\u01a2\n\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
  "\u001e\u0007\u001e\u01a8\n\u001e\f\u001e\u000e\u001e\u01ab\u000b\u001e",
  "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
  "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
  "\u0003\u001f\u0005\u001f\u01ba\n\u001f\u0003 \u0003 \u0006 \u01be\n",
  " \r \u000e \u01bf\u0006 \u01c2\n \r \u000e \u01c3\u0005 \u01c6\n \u0003",
  " \u0003 \u0003 \u0003 \u0006 \u01cc\n \r \u000e \u01cd\u0006 \u01d0",
  "\n \r \u000e \u01d1\u0005 \u01d4\n \u0003 \u0003 \u0007 \u01d8\n \f",
  " \u000e \u01db\u000b \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003",
  '!\u0005!\u01e4\n!\u0003"\u0003"\u0003"\u0003"\u0005"\u01ea\n"',
  '\u0003"\u0003"\u0003"\u0003"\u0003"\u0005"\u01f1\n"\u0003"\u0003',
  '"\u0003"\u0003"\u0003"\u0007"\u01f8\n"\f"\u000e"\u01fb\u000b',
  '"\u0003"\u0003"\u0005"\u01ff\n"\u0003#\u0003#\u0005#\u0203\n#\u0003',
  "#\u0003#\u0005#\u0207\n#\u0003#\u0003#\u0003#\u0003#\u0005#\u020d\n",
  "#\u0003$\u0003$\u0003$\u0003$\u0003$\u0007$\u0214\n$\f$\u000e$\u0217",
  "\u000b$\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0005&\u021f\n&\u0003",
  "'\u0003'\u0003'\u0007'\u0224\n'\f'\u000e'\u0227\u000b'\u0003",
  "(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003",
  "-\u0003-\u0003.\u0003.\u0003/\u0005/\u0238\n/\u0003/\u0003/\u0003/\u0007",
  "/\u023d\n/\f/\u000e/\u0240\u000b/\u0003/\u0003/\u00030\u00050\u0245",
  "\n0\u00030\u00030\u00030\u00070\u024a\n0\f0\u000e0\u024d\u000b0\u0003",
  "0\u00030\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u00034\u0003",
  "5\u00035\u00036\u00036\u00037\u00037\u00037\u0002\u00028\u0002\u0004",
  "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
  '"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjl\u0002\n\u0003\u0002@A\u0003',
  "\u0002'*\u0003\u0002\u0005\u0006\u0003\u0002\t\u000b\u0003\u0002\u000f",
  "\u001a\u0003\u000289\u0004\u0002'*::\u0004\u0002\u0003&;;\u0002\u02a1",
  "\u0002q\u0003\u0002\u0002\u0002\u0004\u0081\u0003\u0002\u0002\u0002",
  "\u0006\u0086\u0003\u0002\u0002\u0002\b\u008d\u0003\u0002\u0002\u0002",
  "\n\u0091\u0003\u0002\u0002\u0002\f\u009f\u0003\u0002\u0002\u0002\u000e",
  "\u00a2\u0003\u0002\u0002\u0002\u0010\u00b2\u0003\u0002\u0002\u0002\u0012",
  "\u00ba\u0003\u0002\u0002\u0002\u0014\u00be\u0003\u0002\u0002\u0002\u0016",
  "\u00c0\u0003\u0002\u0002\u0002\u0018\u00ce\u0003\u0002\u0002\u0002\u001a",
  "\u00e9\u0003\u0002\u0002\u0002\u001c\u00f7\u0003\u0002\u0002\u0002\u001e",
  '\u0108\u0003\u0002\u0002\u0002 \u011b\u0003\u0002\u0002\u0002"\u011d',
  "\u0003\u0002\u0002\u0002$\u0124\u0003\u0002\u0002\u0002&\u012c\u0003",
  "\u0002\u0002\u0002(\u0134\u0003\u0002\u0002\u0002*\u0141\u0003\u0002",
  "\u0002\u0002,\u014d\u0003\u0002\u0002\u0002.\u015f\u0003\u0002\u0002",
  "\u00020\u016d\u0003\u0002\u0002\u00022\u016f\u0003\u0002\u0002\u0002",
  "4\u017a\u0003\u0002\u0002\u00026\u0185\u0003\u0002\u0002\u00028\u0193",
  "\u0003\u0002\u0002\u0002:\u01a5\u0003\u0002\u0002\u0002<\u01b9\u0003",
  "\u0002\u0002\u0002>\u01c5\u0003\u0002\u0002\u0002@\u01e3\u0003\u0002",
  "\u0002\u0002B\u01e5\u0003\u0002\u0002\u0002D\u020c\u0003\u0002\u0002",
  "\u0002F\u020e\u0003\u0002\u0002\u0002H\u021a\u0003\u0002\u0002\u0002",
  "J\u021e\u0003\u0002\u0002\u0002L\u0220\u0003\u0002\u0002\u0002N\u0228",
  "\u0003\u0002\u0002\u0002P\u022a\u0003\u0002\u0002\u0002R\u022c\u0003",
  "\u0002\u0002\u0002T\u022e\u0003\u0002\u0002\u0002V\u0230\u0003\u0002",
  "\u0002\u0002X\u0232\u0003\u0002\u0002\u0002Z\u0234\u0003\u0002\u0002",
  "\u0002\\\u0237\u0003\u0002\u0002\u0002^\u0244\u0003\u0002\u0002\u0002",
  "`\u0250\u0003\u0002\u0002\u0002b\u0252\u0003\u0002\u0002\u0002d\u0254",
  "\u0003\u0002\u0002\u0002f\u0256\u0003\u0002\u0002\u0002h\u0258\u0003",
  "\u0002\u0002\u0002j\u025a\u0003\u0002\u0002\u0002l\u025c\u0003\u0002",
  "\u0002\u0002np\t\u0002\u0002\u0002on\u0003\u0002\u0002\u0002ps\u0003",
  "\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002",
  "rt\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002t~\u0005\u0004\u0003",
  "\u0002u}\u0005\u0006\u0004\u0002v}\u0005\b\u0005\u0002w}\u0005\n\u0006",
  "\u0002x}\u0005*\u0016\u0002y}\u0005H%\u0002z}\u0007@\u0002\u0002{}\u0007",
  "A\u0002\u0002|u\u0003\u0002\u0002\u0002|v\u0003\u0002\u0002\u0002|w",
  "\u0003\u0002\u0002\u0002|x\u0003\u0002\u0002\u0002|y\u0003\u0002\u0002",
  "\u0002|z\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002}\u0080\u0003",
  "\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002",
  "\u0002\u007f\u0003\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002",
  "\u0002\u0081\u0082\u0007\u0003\u0002\u0002\u0082\u0083\u0007,\u0002",
  "\u0002\u0083\u0084\t\u0003\u0002\u0002\u0084\u0085\u0007+\u0002\u0002",
  "\u0085\u0005\u0003\u0002\u0002\u0002\u0086\u0088\u0007\u0004\u0002\u0002",
  "\u0087\u0089\t\u0004\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002",
  "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
  "\u008a\u008b\u0005b2\u0002\u008b\u008c\u0007+\u0002\u0002\u008c\u0007",
  "\u0003\u0002\u0002\u0002\u008d\u008e\u0007\u0007\u0002\u0002\u008e\u008f",
  "\u0005L'\u0002\u008f\u0090\u0007+\u0002\u0002\u0090\t\u0003\u0002\u0002",
  "\u0002\u0091\u0092\u0007\b\u0002\u0002\u0092\u0093\u0005\f\u0007\u0002",
  "\u0093\u0094\u0007,\u0002\u0002\u0094\u0095\u0005D#\u0002\u0095\u0096",
  "\u0007+\u0002\u0002\u0096\u000b\u0003\u0002\u0002\u0002\u0097\u00a0",
  "\u0005L'\u0002\u0098\u0099\u0007-\u0002\u0002\u0099\u009a\u0005L'",
  "\u0002\u009a\u009d\u0007.\u0002\u0002\u009b\u009c\u00075\u0002\u0002",
  "\u009c\u009e\u0005L'\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d",
  "\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003\u0002\u0002\u0002\u009f",
  "\u0097\u0003\u0002\u0002\u0002\u009f\u0098\u0003\u0002\u0002\u0002\u00a0",
  "\r\u0003\u0002\u0002\u0002\u00a1\u00a3\t\u0005\u0002\u0002\u00a2\u00a1",
  "\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4",
  "\u0003\u0002\u0002\u0002\u00a4\u00a5\u0005 \u0011\u0002\u00a5\u00a6",
  "\u0005R*\u0002\u00a6\u00a7\u0007,\u0002\u0002\u00a7\u00ac\u0005\u0014",
  "\u000b\u0002\u00a8\u00a9\u0007/\u0002\u0002\u00a9\u00aa\u0005\u0010",
  "\t\u0002\u00aa\u00ab\u00070\u0002\u0002\u00ab\u00ad\u0003\u0002\u0002",
  "\u0002\u00ac\u00a8\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
  "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0007+\u0002",
  "\u0002\u00af\u00b1\u0007A\u0002\u0002\u00b0\u00af\u0003\u0002\u0002",
  "\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u000f\u0003\u0002\u0002",
  "\u0002\u00b2\u00b7\u0005\u0012\n\u0002\u00b3\u00b4\u00076\u0002\u0002",
  "\u00b4\u00b6\u0005\u0012\n\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002",
  "\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002",
  "\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u0011\u0003\u0002\u0002\u0002",
  "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\f\u0007\u0002",
  "\u00bb\u00bc\u0007,\u0002\u0002\u00bc\u00bd\u0005D#\u0002\u00bd\u0013",
  "\u0003\u0002\u0002\u0002\u00be\u00bf\u0005`1\u0002\u00bf\u0015\u0003",
  "\u0002\u0002\u0002\u00c0\u00c1\u0007\f\u0002\u0002\u00c1\u00c2\u0005",
  "&\u0014\u0002\u00c2\u00c3\u0007+\u0002\u0002\u00c3\u0017\u0003\u0002",
  "\u0002\u0002\u00c4\u00cb\u0005h5\u0002\u00c5\u00c7\u0005j6\u0002\u00c6",
  "\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8",
  "\u00c6\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9",
  "\u00cb\u0003\u0002\u0002\u0002\u00ca\u00c4\u0003\u0002\u0002\u0002\u00ca",
  "\u00c6\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc",
  "\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd",
  "\u00cf\u0003\u0002\u0002\u0002\u00ce\u00ca\u0003\u0002\u0002\u0002\u00ce",
  "\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
  "\u00d1\u0007\r\u0002\u0002\u00d1\u00dc\u0005T+\u0002\u00d2\u00d9\u0005",
  "h5\u0002\u00d3\u00d5\u0005j6\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002",
  "\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
  "\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002",
  "\u00d8\u00d2\u0003\u0002\u0002\u0002\u00d8\u00d4\u0003\u0002\u0002\u0002",
  "\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002",
  "\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dd\u0003\u0002\u0002\u0002",
  "\u00dc\u00d8\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002",
  "\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00e4\u00071\u0002\u0002",
  "\u00df\u00e3\u0005\n\u0006\u0002\u00e0\u00e3\u0005\u001a\u000e\u0002",
  "\u00e1\u00e3\u0005H%\u0002\u00e2\u00df\u0003\u0002\u0002\u0002\u00e2",
  "\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3",
  "\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4",
  "\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e7\u0003\u0002\u0002\u0002\u00e6",
  "\u00e4\u0003\u0002\u0002\u0002\u00e7\u00e8\u00072\u0002\u0002\u00e8",
  "\u0019\u0003\u0002\u0002\u0002\u00e9\u00ea\u0005 \u0011\u0002\u00ea",
  "\u00eb\u0005R*\u0002\u00eb\u00ec\u0007,\u0002\u0002\u00ec\u00f1\u0005",
  "\u0014\u000b\u0002\u00ed\u00ee\u0007/\u0002\u0002\u00ee\u00ef\u0005",
  "\u0010\t\u0002\u00ef\u00f0\u00070\u0002\u0002\u00f0\u00f2\u0003\u0002",
  "\u0002\u0002\u00f1\u00ed\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002",
  "\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f5\u0007+",
  "\u0002\u0002\u00f4\u00f6\u0007A\u0002\u0002\u00f5\u00f4\u0003\u0002",
  "\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u001b\u0003\u0002",
  "\u0002\u0002\u00f7\u00f8\u0007\u000e\u0002\u0002\u00f8\u00f9\u00073",
  "\u0002\u0002\u00f9\u00fa\u0005\u001e\u0010\u0002\u00fa\u00fb\u00076",
  "\u0002\u0002\u00fb\u00fc\u0005 \u0011\u0002\u00fc\u00fd\u00074\u0002",
  "\u0002\u00fd\u00fe\u0005V,\u0002\u00fe\u00ff\u0007,\u0002\u0002\u00ff",
  "\u0104\u0005\u0014\u000b\u0002\u0100\u0101\u0007/\u0002\u0002\u0101",
  "\u0102\u0005\u0010\t\u0002\u0102\u0103\u00070\u0002\u0002\u0103\u0105",
  "\u0003\u0002\u0002\u0002\u0104\u0100\u0003\u0002\u0002\u0002\u0104\u0105",
  "\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0107",
  "\u0007+\u0002\u0002\u0107\u001d\u0003\u0002\u0002\u0002\u0108\u0109",
  "\t\u0006\u0002\u0002\u0109\u001f\u0003\u0002\u0002\u0002\u010a\u011c",
  "\u0007\u001b\u0002\u0002\u010b\u011c\u0007\u001c\u0002\u0002\u010c\u011c",
  "\u0007\u000f\u0002\u0002\u010d\u011c\u0007\u0010\u0002\u0002\u010e\u011c",
  "\u0007\u0011\u0002\u0002\u010f\u011c\u0007\u0012\u0002\u0002\u0110\u011c",
  "\u0007\u0013\u0002\u0002\u0111\u011c\u0007\u0014\u0002\u0002\u0112\u011c",
  "\u0007\u0015\u0002\u0002\u0113\u011c\u0007\u0016\u0002\u0002\u0114\u011c",
  "\u0007\u0017\u0002\u0002\u0115\u011c\u0007\u0018\u0002\u0002\u0116\u011c",
  "\u0007\u0019\u0002\u0002\u0117\u011c\u0007\u001a\u0002\u0002\u0118\u011c",
  "\u0007\u001d\u0002\u0002\u0119\u011c\u0005\\/\u0002\u011a\u011c\u0005",
  "^0\u0002\u011b\u010a\u0003\u0002\u0002\u0002\u011b\u010b\u0003\u0002",
  "\u0002\u0002\u011b\u010c\u0003\u0002\u0002\u0002\u011b\u010d\u0003\u0002",
  "\u0002\u0002\u011b\u010e\u0003\u0002\u0002\u0002\u011b\u010f\u0003\u0002",
  "\u0002\u0002\u011b\u0110\u0003\u0002\u0002\u0002\u011b\u0111\u0003\u0002",
  "\u0002\u0002\u011b\u0112\u0003\u0002\u0002\u0002\u011b\u0113\u0003\u0002",
  "\u0002\u0002\u011b\u0114\u0003\u0002\u0002\u0002\u011b\u0115\u0003\u0002",
  "\u0002\u0002\u011b\u0116\u0003\u0002\u0002\u0002\u011b\u0117\u0003\u0002",
  "\u0002\u0002\u011b\u0118\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002",
  "\u0002\u0002\u011b\u011a\u0003\u0002\u0002\u0002\u011c!\u0003\u0002",
  "\u0002\u0002\u011d\u0120\u0007\u001e\u0002\u0002\u011e\u0121\u0005$",
  "\u0013\u0002\u011f\u0121\u0005(\u0015\u0002\u0120\u011e\u0003\u0002",
  "\u0002\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002",
  "\u0002\u0002\u0122\u0123\u0007+\u0002\u0002\u0123#\u0003\u0002\u0002",
  "\u0002\u0124\u0129\u0005&\u0014\u0002\u0125\u0126\u00076\u0002\u0002",
  "\u0126\u0128\u0005&\u0014\u0002\u0127\u0125\u0003\u0002\u0002\u0002",
  "\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002",
  "\u0129\u012a\u0003\u0002\u0002\u0002\u012a%\u0003\u0002\u0002\u0002",
  "\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u0132\u0005`1\u0002\u012d",
  "\u0130\u0007\u001f\u0002\u0002\u012e\u0131\u0005`1\u0002\u012f\u0131",
  "\u0007 \u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u012f",
  "\u0003\u0002\u0002\u0002\u0131\u0133\u0003\u0002\u0002\u0002\u0132\u012d",
  "\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133'",
  "\u0003\u0002\u0002\u0002\u0134\u0139\u0005b2\u0002\u0135\u0136\u0007",
  "6\u0002\u0002\u0136\u0138\u0005b2\u0002\u0137\u0135\u0003\u0002\u0002",
  "\u0002\u0138\u013b\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002",
  "\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a)\u0003\u0002\u0002",
  "\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013c\u0142\u00058\u001d",
  "\u0002\u013d\u0142\u0005,\u0017\u0002\u013e\u0142\u0005> \u0002\u013f",
  "\u0142\u0007@\u0002\u0002\u0140\u0142\u0007A\u0002\u0002\u0141\u013c",
  "\u0003\u0002\u0002\u0002\u0141\u013d\u0003\u0002\u0002\u0002\u0141\u013e",
  "\u0003\u0002\u0002\u0002\u0141\u013f\u0003\u0002\u0002\u0002\u0141\u0140",
  "\u0003\u0002\u0002\u0002\u0142+\u0003\u0002\u0002\u0002\u0143\u014a",
  "\u0005h5\u0002\u0144\u0146\u0005j6\u0002\u0145\u0144\u0003\u0002\u0002",
  "\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0145\u0003\u0002\u0002",
  "\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u014a\u0003\u0002\u0002",
  "\u0002\u0149\u0143\u0003\u0002\u0002\u0002\u0149\u0145\u0003\u0002\u0002",
  "\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002",
  "\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014e\u0003\u0002\u0002",
  "\u0002\u014d\u0149\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002",
  "\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0150\u0007!\u0002",
  "\u0002\u0150\u015b\u0005P)\u0002\u0151\u0158\u0005h5\u0002\u0152\u0154",
  "\u0005j6\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003",
  "\u0002\u0002\u0002\u0155\u0153\u0003\u0002\u0002\u0002\u0155\u0156\u0003",
  "\u0002\u0002\u0002\u0156\u0158\u0003\u0002\u0002\u0002\u0157\u0151\u0003",
  "\u0002\u0002\u0002\u0157\u0153\u0003\u0002\u0002\u0002\u0158\u0159\u0003",
  "\u0002\u0002\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u0159\u015a\u0003",
  "\u0002\u0002\u0002\u015a\u015c\u0003\u0002\u0002\u0002\u015b\u0157\u0003",
  "\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002\u015c\u015d\u0003",
  "\u0002\u0002\u0002\u015d\u015e\u0005.\u0018\u0002\u015e-\u0003\u0002",
  "\u0002\u0002\u015f\u0163\u00071\u0002\u0002\u0160\u0162\u00050\u0019",
  "\u0002\u0161\u0160\u0003\u0002\u0002\u0002\u0162\u0165\u0003\u0002\u0002",
  "\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002",
  "\u0002\u0164\u0166\u0003\u0002\u0002\u0002\u0165\u0163\u0003\u0002\u0002",
  "\u0002\u0166\u0167\u00072\u0002\u0002\u0167/\u0003\u0002\u0002\u0002",
  "\u0168\u016e\u0005\n\u0006\u0002\u0169\u016e\u00052\u001a\u0002\u016a",
  "\u016e\u0005H%\u0002\u016b\u016e\u0007@\u0002\u0002\u016c\u016e\u0007",
  "A\u0002\u0002\u016d\u0168\u0003\u0002\u0002\u0002\u016d\u0169\u0003",
  "\u0002\u0002\u0002\u016d\u016a\u0003\u0002\u0002\u0002\u016d\u016b\u0003",
  "\u0002\u0002\u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016e1\u0003",
  "\u0002\u0002\u0002\u016f\u0170\u0005J&\u0002\u0170\u0172\u0007,\u0002",
  "\u0002\u0171\u0173\u00079\u0002\u0002\u0172\u0171\u0003\u0002\u0002",
  "\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002",
  "\u0002\u0174\u0176\u0005`1\u0002\u0175\u0177\u00054\u001b\u0002\u0176",
  "\u0175\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177",
  "\u0178\u0003\u0002\u0002\u0002\u0178\u0179\u0007+\u0002\u0002\u0179",
  "3\u0003\u0002\u0002\u0002\u017a\u017b\u0007/\u0002\u0002\u017b\u0180",
  "\u00056\u001c\u0002\u017c\u017d\u00076\u0002\u0002\u017d\u017f\u0005",
  "6\u001c\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0182\u0003",
  "\u0002\u0002\u0002\u0180\u017e\u0003\u0002\u0002\u0002\u0180\u0181\u0003",
  "\u0002\u0002\u0002\u0181\u0183\u0003\u0002\u0002\u0002\u0182\u0180\u0003",
  "\u0002\u0002\u0002\u0183\u0184\u00070\u0002\u0002\u01845\u0003\u0002",
  "\u0002\u0002\u0185\u0186\u0005\f\u0007\u0002\u0186\u0187\u0007,\u0002",
  "\u0002\u0187\u0188\u0005D#\u0002\u01887\u0003\u0002\u0002\u0002\u0189",
  "\u0190\u0005h5\u0002\u018a\u018c\u0005j6\u0002\u018b\u018a\u0003\u0002",
  "\u0002\u0002\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018b\u0003\u0002",
  "\u0002\u0002\u018d\u018e\u0003\u0002\u0002\u0002\u018e\u0190\u0003\u0002",
  "\u0002\u0002\u018f\u0189\u0003\u0002\u0002\u0002\u018f\u018b\u0003\u0002",
  "\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191\u018f\u0003\u0002",
  "\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0194\u0003\u0002",
  "\u0002\u0002\u0193\u018f\u0003\u0002\u0002\u0002\u0193\u0194\u0003\u0002",
  '\u0002\u0002\u0194\u0195\u0003\u0002\u0002\u0002\u0195\u0196\u0007"',
  "\u0002\u0002\u0196\u01a1\u0005N(\u0002\u0197\u019e\u0005h5\u0002\u0198",
  "\u019a\u0005j6\u0002\u0199\u0198\u0003\u0002\u0002\u0002\u019a\u019b",
  "\u0003\u0002\u0002\u0002\u019b\u0199\u0003\u0002\u0002\u0002\u019b\u019c",
  "\u0003\u0002\u0002\u0002\u019c\u019e\u0003\u0002\u0002\u0002\u019d\u0197",
  "\u0003\u0002\u0002\u0002\u019d\u0199\u0003\u0002\u0002\u0002\u019e\u019f",
  "\u0003\u0002\u0002\u0002\u019f\u019d\u0003\u0002\u0002\u0002\u019f\u01a0",
  "\u0003\u0002\u0002\u0002\u01a0\u01a2\u0003\u0002\u0002\u0002\u01a1\u019d",
  "\u0003\u0002\u0002\u0002\u01a1\u01a2\u0003\u0002\u0002\u0002\u01a2\u01a3",
  "\u0003\u0002\u0002\u0002\u01a3\u01a4\u0005:\u001e\u0002\u01a49\u0003",
  "\u0002\u0002\u0002\u01a5\u01a9\u00071\u0002\u0002\u01a6\u01a8\u0005",
  "<\u001f\u0002\u01a7\u01a6\u0003\u0002\u0002\u0002\u01a8\u01ab\u0003",
  "\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003",
  "\u0002\u0002\u0002\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003",
  "\u0002\u0002\u0002\u01ac\u01ad\u00072\u0002\u0002\u01ad;\u0003\u0002",
  "\u0002\u0002\u01ae\u01ba\u0005\u000e\b\u0002\u01af\u01ba\u0005,\u0017",
  "\u0002\u01b0\u01ba\u00058\u001d\u0002\u01b1\u01ba\u0005\n\u0006\u0002",
  "\u01b2\u01ba\u0005\u0018\r\u0002\u01b3\u01ba\u0005\u001c\u000f\u0002",
  '\u01b4\u01ba\u0005"\u0012\u0002\u01b5\u01ba\u0005H%\u0002\u01b6\u01ba',
  "\u0005\u0016\f\u0002\u01b7\u01ba\u0007@\u0002\u0002\u01b8\u01ba\u0007",
  "A\u0002\u0002\u01b9\u01ae\u0003\u0002\u0002\u0002\u01b9\u01af\u0003",
  "\u0002\u0002\u0002\u01b9\u01b0\u0003\u0002\u0002\u0002\u01b9\u01b1\u0003",
  "\u0002\u0002\u0002\u01b9\u01b2\u0003\u0002\u0002\u0002\u01b9\u01b3\u0003",
  "\u0002\u0002\u0002\u01b9\u01b4\u0003\u0002\u0002\u0002\u01b9\u01b5\u0003",
  "\u0002\u0002\u0002\u01b9\u01b6\u0003\u0002\u0002\u0002\u01b9\u01b7\u0003",
  "\u0002\u0002\u0002\u01b9\u01b8\u0003\u0002\u0002\u0002\u01ba=\u0003",
  "\u0002\u0002\u0002\u01bb\u01c2\u0005h5\u0002\u01bc\u01be\u0005j6\u0002",
  "\u01bd\u01bc\u0003\u0002\u0002\u0002\u01be\u01bf\u0003\u0002\u0002\u0002",
  "\u01bf\u01bd\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002",
  "\u01c0\u01c2\u0003\u0002\u0002\u0002\u01c1\u01bb\u0003\u0002\u0002\u0002",
  "\u01c1\u01bd\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002\u0002\u0002",
  "\u01c3\u01c1\u0003\u0002\u0002\u0002\u01c3\u01c4\u0003\u0002\u0002\u0002",
  "\u01c4\u01c6\u0003\u0002\u0002\u0002\u01c5\u01c1\u0003\u0002\u0002\u0002",
  "\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6\u01c7\u0003\u0002\u0002\u0002",
  "\u01c7\u01c8\u0007#\u0002\u0002\u01c8\u01d3\u0005X-\u0002\u01c9\u01d0",
  "\u0005h5\u0002\u01ca\u01cc\u0005j6\u0002\u01cb\u01ca\u0003\u0002\u0002",
  "\u0002\u01cc\u01cd\u0003\u0002\u0002\u0002\u01cd\u01cb\u0003\u0002\u0002",
  "\u0002\u01cd\u01ce\u0003\u0002\u0002\u0002\u01ce\u01d0\u0003\u0002\u0002",
  "\u0002\u01cf\u01c9\u0003\u0002\u0002\u0002\u01cf\u01cb\u0003\u0002\u0002",
  "\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002",
  "\u0002\u01d1\u01d2\u0003\u0002\u0002\u0002\u01d2\u01d4\u0003\u0002\u0002",
  "\u0002\u01d3\u01cf\u0003\u0002\u0002\u0002\u01d3\u01d4\u0003\u0002\u0002",
  "\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d5\u01d9\u00071\u0002",
  "\u0002\u01d6\u01d8\u0005@!\u0002\u01d7\u01d6\u0003\u0002\u0002\u0002",
  "\u01d8\u01db\u0003\u0002\u0002\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002",
  "\u01d9\u01da\u0003\u0002\u0002\u0002\u01da\u01dc\u0003\u0002\u0002\u0002",
  "\u01db\u01d9\u0003\u0002\u0002\u0002\u01dc\u01dd\u00072\u0002\u0002",
  "\u01dd?\u0003\u0002\u0002\u0002\u01de\u01e4\u0005\n\u0006\u0002\u01df",
  '\u01e4\u0005B"\u0002\u01e0\u01e4\u0005H%\u0002\u01e1\u01e4\u0007@\u0002',
  "\u0002\u01e2\u01e4\u0007A\u0002\u0002\u01e3\u01de\u0003\u0002\u0002",
  "\u0002\u01e3\u01df\u0003\u0002\u0002\u0002\u01e3\u01e0\u0003\u0002\u0002",
  "\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002\u01e3\u01e2\u0003\u0002\u0002",
  "\u0002\u01e4A\u0003\u0002\u0002\u0002\u01e5\u01e6\u0007$\u0002\u0002",
  "\u01e6\u01e7\u0005Z.\u0002\u01e7\u01e9\u0007-\u0002\u0002\u01e8\u01ea",
  "\u0007%\u0002\u0002\u01e9\u01e8\u0003\u0002\u0002\u0002\u01e9\u01ea",
  "\u0003\u0002\u0002\u0002\u01ea\u01eb\u0003\u0002\u0002\u0002\u01eb\u01ec",
  "\u0005\\/\u0002\u01ec\u01ed\u0007.\u0002\u0002\u01ed\u01ee\u0007&\u0002",
  "\u0002\u01ee\u01f0\u0007-\u0002\u0002\u01ef\u01f1\u0007%\u0002\u0002",
  "\u01f0\u01ef\u0003\u0002\u0002\u0002\u01f0\u01f1\u0003\u0002\u0002\u0002",
  "\u01f1\u01f2\u0003\u0002\u0002\u0002\u01f2\u01f3\u0005\\/\u0002\u01f3",
  "\u01fe\u0007.\u0002\u0002\u01f4\u01f9\u00071\u0002\u0002\u01f5\u01f8",
  "\u0005\n\u0006\u0002\u01f6\u01f8\u0005H%\u0002\u01f7\u01f5\u0003\u0002",
  "\u0002\u0002\u01f7\u01f6\u0003\u0002\u0002\u0002\u01f8\u01fb\u0003\u0002",
  "\u0002\u0002\u01f9\u01f7\u0003\u0002\u0002\u0002\u01f9\u01fa\u0003\u0002",
  "\u0002\u0002\u01fa\u01fc\u0003\u0002\u0002\u0002\u01fb\u01f9\u0003\u0002",
  "\u0002\u0002\u01fc\u01ff\u00072\u0002\u0002\u01fd\u01ff\u0007+\u0002",
  "\u0002\u01fe\u01f4\u0003\u0002\u0002\u0002\u01fe\u01fd\u0003\u0002\u0002",
  "\u0002\u01ffC\u0003\u0002\u0002\u0002\u0200\u020d\u0005L'\u0002\u0201",
  "\u0203\t\u0007\u0002\u0002\u0202\u0201\u0003\u0002\u0002\u0002\u0202",
  "\u0203\u0003\u0002\u0002\u0002\u0203\u0204\u0003\u0002\u0002\u0002\u0204",
  "\u020d\u0005`1\u0002\u0205\u0207\t\u0007\u0002\u0002\u0206\u0205\u0003",
  "\u0002\u0002\u0002\u0206\u0207\u0003\u0002\u0002\u0002\u0207\u0208\u0003",
  "\u0002\u0002\u0002\u0208\u020d\u0005f4\u0002\u0209\u020d\u0005b2\u0002",
  "\u020a\u020d\u0005d3\u0002\u020b\u020d\u0005F$\u0002\u020c\u0200\u0003",
  "\u0002\u0002\u0002\u020c\u0202\u0003\u0002\u0002\u0002\u020c\u0206\u0003",
  "\u0002\u0002\u0002\u020c\u0209\u0003\u0002\u0002\u0002\u020c\u020a\u0003",
  "\u0002\u0002\u0002\u020c\u020b\u0003\u0002\u0002\u0002\u020dE\u0003",
  "\u0002\u0002\u0002\u020e\u0215\u00071\u0002\u0002\u020f\u0210\u0005",
  "J&\u0002\u0210\u0211\u00077\u0002\u0002\u0211\u0212\u0005D#\u0002\u0212",
  "\u0214\u0003\u0002\u0002\u0002\u0213\u020f\u0003\u0002\u0002\u0002\u0214",
  "\u0217\u0003\u0002\u0002\u0002\u0215\u0213\u0003\u0002\u0002\u0002\u0215",
  "\u0216\u0003\u0002\u0002\u0002\u0216\u0218\u0003\u0002\u0002\u0002\u0217",
  "\u0215\u0003\u0002\u0002\u0002\u0218\u0219\u00072\u0002\u0002\u0219",
  "G\u0003\u0002\u0002\u0002\u021a\u021b\u0007+\u0002\u0002\u021bI\u0003",
  "\u0002\u0002\u0002\u021c\u021f\u0007>\u0002\u0002\u021d\u021f\u0005",
  "l7\u0002\u021e\u021c\u0003\u0002\u0002\u0002\u021e\u021d\u0003\u0002",
  "\u0002\u0002\u021fK\u0003\u0002\u0002\u0002\u0220\u0225\u0005J&\u0002",
  "\u0221\u0222\u00075\u0002\u0002\u0222\u0224\u0005J&\u0002\u0223\u0221",
  "\u0003\u0002\u0002\u0002\u0224\u0227\u0003\u0002\u0002\u0002\u0225\u0223",
  "\u0003\u0002\u0002\u0002\u0225\u0226\u0003\u0002\u0002\u0002\u0226M",
  "\u0003\u0002\u0002\u0002\u0227\u0225\u0003\u0002\u0002\u0002\u0228\u0229",
  "\u0005J&\u0002\u0229O\u0003\u0002\u0002\u0002\u022a\u022b\u0005J&\u0002",
  "\u022bQ\u0003\u0002\u0002\u0002\u022c\u022d\u0005J&\u0002\u022dS\u0003",
  "\u0002\u0002\u0002\u022e\u022f\u0005J&\u0002\u022fU\u0003\u0002\u0002",
  "\u0002\u0230\u0231\u0005J&\u0002\u0231W\u0003\u0002\u0002\u0002\u0232",
  "\u0233\u0005J&\u0002\u0233Y\u0003\u0002\u0002\u0002\u0234\u0235\u0005",
  "J&\u0002\u0235[\u0003\u0002\u0002\u0002\u0236\u0238\u00075\u0002\u0002",
  "\u0237\u0236\u0003\u0002\u0002\u0002\u0237\u0238\u0003\u0002\u0002\u0002",
  "\u0238\u023e\u0003\u0002\u0002\u0002\u0239\u023a\u0005J&\u0002\u023a",
  "\u023b\u00075\u0002\u0002\u023b\u023d\u0003\u0002\u0002\u0002\u023c",
  "\u0239\u0003\u0002\u0002\u0002\u023d\u0240\u0003\u0002\u0002\u0002\u023e",
  "\u023c\u0003\u0002\u0002\u0002\u023e\u023f\u0003\u0002\u0002\u0002\u023f",
  "\u0241\u0003\u0002\u0002\u0002\u0240\u023e\u0003\u0002\u0002\u0002\u0241",
  "\u0242\u0005N(\u0002\u0242]\u0003\u0002\u0002\u0002\u0243\u0245\u0007",
  "5\u0002\u0002\u0244\u0243\u0003\u0002\u0002\u0002\u0244\u0245\u0003",
  "\u0002\u0002\u0002\u0245\u024b\u0003\u0002\u0002\u0002\u0246\u0247\u0005",
  "J&\u0002\u0247\u0248\u00075\u0002\u0002\u0248\u024a\u0003\u0002\u0002",
  "\u0002\u0249\u0246\u0003\u0002\u0002\u0002\u024a\u024d\u0003\u0002\u0002",
  "\u0002\u024b\u0249\u0003\u0002\u0002\u0002\u024b\u024c\u0003\u0002\u0002",
  "\u0002\u024c\u024e\u0003\u0002\u0002\u0002\u024d\u024b\u0003\u0002\u0002",
  "\u0002\u024e\u024f\u0005P)\u0002\u024f_\u0003\u0002\u0002\u0002\u0250",
  "\u0251\u0007=\u0002\u0002\u0251a\u0003\u0002\u0002\u0002\u0252\u0253",
  "\t\b\u0002\u0002\u0253c\u0003\u0002\u0002\u0002\u0254\u0255\u0007;\u0002",
  "\u0002\u0255e\u0003\u0002\u0002\u0002\u0256\u0257\u0007<\u0002\u0002",
  "\u0257g\u0003\u0002\u0002\u0002\u0258\u0259\u0007@\u0002\u0002\u0259",
  "i\u0003\u0002\u0002\u0002\u025a\u025b\u0007A\u0002\u0002\u025bk\u0003",
  "\u0002\u0002\u0002\u025c\u025d\t\t\u0002\u0002\u025dm\u0003\u0002\u0002",
  "\u0002Pq|~\u0088\u009d\u009f\u00a2\u00ac\u00b0\u00b7\u00c8\u00ca\u00cc",
  "\u00ce\u00d6\u00d8\u00da\u00dc\u00e2\u00e4\u00f1\u00f5\u0104\u011b\u0120",
  "\u0129\u0130\u0132\u0139\u0141\u0147\u0149\u014b\u014d\u0155\u0157\u0159",
  "\u015b\u0163\u016d\u0172\u0176\u0180\u018d\u018f\u0191\u0193\u019b\u019d",
  "\u019f\u01a1\u01a9\u01b9\u01bf\u01c1\u01c3\u01c5\u01cd\u01cf\u01d1\u01d3",
  "\u01d9\u01e3\u01e9\u01f0\u01f7\u01f9\u01fe\u0202\u0206\u020c\u0215\u021e",
  "\u0225\u0237\u023e\u0244\u024b",
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
  null,
  "'syntax'",
  "'import'",
  "'weak'",
  "'public'",
  "'package'",
  "'option'",
  "'optional'",
  "'required'",
  "'repeated'",
  "'extensions'",
  "'oneof'",
  "'map'",
  "'int32'",
  "'int64'",
  "'uint32'",
  "'uint64'",
  "'sint32'",
  "'sint64'",
  "'fixed32'",
  "'fixed64'",
  "'sfixed32'",
  "'sfixed64'",
  "'bool'",
  "'string'",
  "'double'",
  "'float'",
  "'bytes'",
  "'reserved'",
  "'to'",
  "'max'",
  "'enum'",
  "'message'",
  "'service'",
  "'rpc'",
  "'stream'",
  "'returns'",
  "'\"proto3\"'",
  "''proto3''",
  "'\"proto2\"'",
  "''proto2''",
  "';'",
  "'='",
  "'('",
  "')'",
  "'['",
  "']'",
  "'{'",
  "'}'",
  "'<'",
  "'>'",
  "'.'",
  "','",
  "':'",
  "'+'",
  "'-'",
];

var symbolicNames = [
  null,
  "SYNTAX",
  "IMPORT",
  "WEAK",
  "PUBLIC",
  "PACKAGE",
  "OPTION",
  "OPTIONAL",
  "REQUIRED",
  "REPEATED",
  "EXTENSIONS",
  "ONEOF",
  "MAP",
  "INT32",
  "INT64",
  "UINT32",
  "UINT64",
  "SINT32",
  "SINT64",
  "FIXED32",
  "FIXED64",
  "SFIXED32",
  "SFIXED64",
  "BOOL",
  "STRING",
  "DOUBLE",
  "FLOAT",
  "BYTES",
  "RESERVED",
  "TO",
  "MAX",
  "ENUM",
  "MESSAGE",
  "SERVICE",
  "RPC",
  "STREAM",
  "RETURNS",
  "PROTO3_LIT_SINGLE",
  "PROTO3_LIT_DOBULE",
  "PROTO2_LIT_SINGLE",
  "PROTO2_LIT_DOBULE",
  "SEMI",
  "EQ",
  "LP",
  "RP",
  "LB",
  "RB",
  "LC",
  "RC",
  "LT",
  "GT",
  "DOT",
  "COMMA",
  "COLON",
  "PLUS",
  "MINUS",
  "STR_LIT",
  "BOOL_LIT",
  "FLOAT_LIT",
  "INT_LIT",
  "IDENTIFIER",
  "WS",
  "COMMENT",
  "LINE_COMMENT",
];

var ruleNames = [
  "proto",
  "syntax",
  "importStatement",
  "packageStatement",
  "optionStatement",
  "optionName",
  "field",
  "fieldOptions",
  "fieldOption",
  "fieldNumber",
  "extensions",
  "oneof",
  "oneofField",
  "mapField",
  "keyType",
  "type_",
  "reserved",
  "ranges",
  "range_",
  "reservedFieldNames",
  "topLevelDef",
  "enumDef",
  "enumBody",
  "enumElement",
  "enumField",
  "enumValueOptions",
  "enumValueOption",
  "messageDef",
  "messageBody",
  "messageElement",
  "serviceDef",
  "serviceElement",
  "rpc",
  "constant",
  "blockLit",
  "emptyStatement",
  "ident",
  "fullIdent",
  "messageName",
  "enumName",
  "fieldName",
  "oneofName",
  "mapName",
  "serviceName",
  "rpcName",
  "messageType",
  "enumType",
  "intLit",
  "strLit",
  "boolLit",
  "floatLit",
  "comment",
  "lineComment",
  "keywords",
];

function Protobuf3Parser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(
    this,
    atn,
    decisionsToDFA,
    sharedContextCache,
  );
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

Protobuf3Parser.prototype = Object.create(antlr4.Parser.prototype);
Protobuf3Parser.prototype.constructor = Protobuf3Parser;

Object.defineProperty(Protobuf3Parser.prototype, "atn", {
  get: function () {
    return atn;
  },
});

Protobuf3Parser.EOF = antlr4.Token.EOF;
Protobuf3Parser.SYNTAX = 1;
Protobuf3Parser.IMPORT = 2;
Protobuf3Parser.WEAK = 3;
Protobuf3Parser.PUBLIC = 4;
Protobuf3Parser.PACKAGE = 5;
Protobuf3Parser.OPTION = 6;
Protobuf3Parser.OPTIONAL = 7;
Protobuf3Parser.REQUIRED = 8;
Protobuf3Parser.REPEATED = 9;
Protobuf3Parser.EXTENSIONS = 10;
Protobuf3Parser.ONEOF = 11;
Protobuf3Parser.MAP = 12;
Protobuf3Parser.INT32 = 13;
Protobuf3Parser.INT64 = 14;
Protobuf3Parser.UINT32 = 15;
Protobuf3Parser.UINT64 = 16;
Protobuf3Parser.SINT32 = 17;
Protobuf3Parser.SINT64 = 18;
Protobuf3Parser.FIXED32 = 19;
Protobuf3Parser.FIXED64 = 20;
Protobuf3Parser.SFIXED32 = 21;
Protobuf3Parser.SFIXED64 = 22;
Protobuf3Parser.BOOL = 23;
Protobuf3Parser.STRING = 24;
Protobuf3Parser.DOUBLE = 25;
Protobuf3Parser.FLOAT = 26;
Protobuf3Parser.BYTES = 27;
Protobuf3Parser.RESERVED = 28;
Protobuf3Parser.TO = 29;
Protobuf3Parser.MAX = 30;
Protobuf3Parser.ENUM = 31;
Protobuf3Parser.MESSAGE = 32;
Protobuf3Parser.SERVICE = 33;
Protobuf3Parser.RPC = 34;
Protobuf3Parser.STREAM = 35;
Protobuf3Parser.RETURNS = 36;
Protobuf3Parser.PROTO3_LIT_SINGLE = 37;
Protobuf3Parser.PROTO3_LIT_DOBULE = 38;
Protobuf3Parser.PROTO2_LIT_SINGLE = 39;
Protobuf3Parser.PROTO2_LIT_DOBULE = 40;
Protobuf3Parser.SEMI = 41;
Protobuf3Parser.EQ = 42;
Protobuf3Parser.LP = 43;
Protobuf3Parser.RP = 44;
Protobuf3Parser.LB = 45;
Protobuf3Parser.RB = 46;
Protobuf3Parser.LC = 47;
Protobuf3Parser.RC = 48;
Protobuf3Parser.LT = 49;
Protobuf3Parser.GT = 50;
Protobuf3Parser.DOT = 51;
Protobuf3Parser.COMMA = 52;
Protobuf3Parser.COLON = 53;
Protobuf3Parser.PLUS = 54;
Protobuf3Parser.MINUS = 55;
Protobuf3Parser.STR_LIT = 56;
Protobuf3Parser.BOOL_LIT = 57;
Protobuf3Parser.FLOAT_LIT = 58;
Protobuf3Parser.INT_LIT = 59;
Protobuf3Parser.IDENTIFIER = 60;
Protobuf3Parser.WS = 61;
Protobuf3Parser.COMMENT = 62;
Protobuf3Parser.LINE_COMMENT = 63;

Protobuf3Parser.RULE_proto = 0;
Protobuf3Parser.RULE_syntax = 1;
Protobuf3Parser.RULE_importStatement = 2;
Protobuf3Parser.RULE_packageStatement = 3;
Protobuf3Parser.RULE_optionStatement = 4;
Protobuf3Parser.RULE_optionName = 5;
Protobuf3Parser.RULE_field = 6;
Protobuf3Parser.RULE_fieldOptions = 7;
Protobuf3Parser.RULE_fieldOption = 8;
Protobuf3Parser.RULE_fieldNumber = 9;
Protobuf3Parser.RULE_extensions = 10;
Protobuf3Parser.RULE_oneof = 11;
Protobuf3Parser.RULE_oneofField = 12;
Protobuf3Parser.RULE_mapField = 13;
Protobuf3Parser.RULE_keyType = 14;
Protobuf3Parser.RULE_type_ = 15;
Protobuf3Parser.RULE_reserved = 16;
Protobuf3Parser.RULE_ranges = 17;
Protobuf3Parser.RULE_range_ = 18;
Protobuf3Parser.RULE_reservedFieldNames = 19;
Protobuf3Parser.RULE_topLevelDef = 20;
Protobuf3Parser.RULE_enumDef = 21;
Protobuf3Parser.RULE_enumBody = 22;
Protobuf3Parser.RULE_enumElement = 23;
Protobuf3Parser.RULE_enumField = 24;
Protobuf3Parser.RULE_enumValueOptions = 25;
Protobuf3Parser.RULE_enumValueOption = 26;
Protobuf3Parser.RULE_messageDef = 27;
Protobuf3Parser.RULE_messageBody = 28;
Protobuf3Parser.RULE_messageElement = 29;
Protobuf3Parser.RULE_serviceDef = 30;
Protobuf3Parser.RULE_serviceElement = 31;
Protobuf3Parser.RULE_rpc = 32;
Protobuf3Parser.RULE_constant = 33;
Protobuf3Parser.RULE_blockLit = 34;
Protobuf3Parser.RULE_emptyStatement = 35;
Protobuf3Parser.RULE_ident = 36;
Protobuf3Parser.RULE_fullIdent = 37;
Protobuf3Parser.RULE_messageName = 38;
Protobuf3Parser.RULE_enumName = 39;
Protobuf3Parser.RULE_fieldName = 40;
Protobuf3Parser.RULE_oneofName = 41;
Protobuf3Parser.RULE_mapName = 42;
Protobuf3Parser.RULE_serviceName = 43;
Protobuf3Parser.RULE_rpcName = 44;
Protobuf3Parser.RULE_messageType = 45;
Protobuf3Parser.RULE_enumType = 46;
Protobuf3Parser.RULE_intLit = 47;
Protobuf3Parser.RULE_strLit = 48;
Protobuf3Parser.RULE_boolLit = 49;
Protobuf3Parser.RULE_floatLit = 50;
Protobuf3Parser.RULE_comment = 51;
Protobuf3Parser.RULE_lineComment = 52;
Protobuf3Parser.RULE_keywords = 53;

function ProtoContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_proto;
  return this;
}

ProtoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProtoContext.prototype.constructor = ProtoContext;

ProtoContext.prototype.syntax = function () {
  return this.getTypedRuleContext(SyntaxContext, 0);
};

ProtoContext.prototype.importStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ImportStatementContext);
  } else {
    return this.getTypedRuleContext(ImportStatementContext, i);
  }
};

ProtoContext.prototype.packageStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(PackageStatementContext);
  } else {
    return this.getTypedRuleContext(PackageStatementContext, i);
  }
};

ProtoContext.prototype.optionStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(OptionStatementContext);
  } else {
    return this.getTypedRuleContext(OptionStatementContext, i);
  }
};

ProtoContext.prototype.topLevelDef = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(TopLevelDefContext);
  } else {
    return this.getTypedRuleContext(TopLevelDefContext, i);
  }
};

ProtoContext.prototype.emptyStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(EmptyStatementContext);
  } else {
    return this.getTypedRuleContext(EmptyStatementContext, i);
  }
};

ProtoContext.prototype.COMMENT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.COMMENT);
  } else {
    return this.getToken(Protobuf3Parser.COMMENT, i);
  }
};

ProtoContext.prototype.LINE_COMMENT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.LINE_COMMENT);
  } else {
    return this.getToken(Protobuf3Parser.LINE_COMMENT, i);
  }
};

ProtoContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitProto(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ProtoContext = ProtoContext;

Protobuf3Parser.prototype.proto = function () {
  var localctx = new ProtoContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, Protobuf3Parser.RULE_proto);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 111;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 108;
      _la = this._input.LA(1);
      if (
        !(
          _la === Protobuf3Parser.COMMENT ||
          _la === Protobuf3Parser.LINE_COMMENT
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
      this.state = 113;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 114;
    this.syntax();
    this.state = 124;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << Protobuf3Parser.IMPORT) |
            (1 << Protobuf3Parser.PACKAGE) |
            (1 << Protobuf3Parser.OPTION) |
            (1 << Protobuf3Parser.ENUM))) !==
          0) ||
      (((_la - 32) & ~0x1f) == 0 &&
        ((1 << (_la - 32)) &
          ((1 << (Protobuf3Parser.MESSAGE - 32)) |
            (1 << (Protobuf3Parser.SERVICE - 32)) |
            (1 << (Protobuf3Parser.SEMI - 32)) |
            (1 << (Protobuf3Parser.COMMENT - 32)) |
            (1 << (Protobuf3Parser.LINE_COMMENT - 32)))) !==
          0)
    ) {
      this.state = 122;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      switch (la_) {
        case 1:
          this.state = 115;
          this.importStatement();
          break;

        case 2:
          this.state = 116;
          this.packageStatement();
          break;

        case 3:
          this.state = 117;
          this.optionStatement();
          break;

        case 4:
          this.state = 118;
          this.topLevelDef();
          break;

        case 5:
          this.state = 119;
          this.emptyStatement();
          break;

        case 6:
          this.state = 120;
          this.match(Protobuf3Parser.COMMENT);
          break;

        case 7:
          this.state = 121;
          this.match(Protobuf3Parser.LINE_COMMENT);
          break;
      }
      this.state = 126;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SyntaxContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_syntax;
  this.version = null; // Token
  return this;
}

SyntaxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SyntaxContext.prototype.constructor = SyntaxContext;

SyntaxContext.prototype.SYNTAX = function () {
  return this.getToken(Protobuf3Parser.SYNTAX, 0);
};

SyntaxContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

SyntaxContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

SyntaxContext.prototype.PROTO3_LIT_SINGLE = function () {
  return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
};

SyntaxContext.prototype.PROTO3_LIT_DOBULE = function () {
  return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
};

SyntaxContext.prototype.PROTO2_LIT_SINGLE = function () {
  return this.getToken(Protobuf3Parser.PROTO2_LIT_SINGLE, 0);
};

SyntaxContext.prototype.PROTO2_LIT_DOBULE = function () {
  return this.getToken(Protobuf3Parser.PROTO2_LIT_DOBULE, 0);
};

SyntaxContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitSyntax(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.SyntaxContext = SyntaxContext;

Protobuf3Parser.prototype.syntax = function () {
  var localctx = new SyntaxContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, Protobuf3Parser.RULE_syntax);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 127;
    this.match(Protobuf3Parser.SYNTAX);
    this.state = 128;
    this.match(Protobuf3Parser.EQ);
    this.state = 129;
    localctx.version = this._input.LT(1);
    _la = this._input.LA(1);
    if (
      !(
        ((_la - 37) & ~0x1f) == 0 &&
        ((1 << (_la - 37)) &
          ((1 << (Protobuf3Parser.PROTO3_LIT_SINGLE - 37)) |
            (1 << (Protobuf3Parser.PROTO3_LIT_DOBULE - 37)) |
            (1 << (Protobuf3Parser.PROTO2_LIT_SINGLE - 37)) |
            (1 << (Protobuf3Parser.PROTO2_LIT_DOBULE - 37)))) !==
          0
      )
    ) {
      localctx.version = this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 130;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ImportStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_importStatement;
  this.accessModifier = null; // Token
  return this;
}

ImportStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ImportStatementContext.prototype.constructor = ImportStatementContext;

ImportStatementContext.prototype.IMPORT = function () {
  return this.getToken(Protobuf3Parser.IMPORT, 0);
};

ImportStatementContext.prototype.strLit = function () {
  return this.getTypedRuleContext(StrLitContext, 0);
};

ImportStatementContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

ImportStatementContext.prototype.WEAK = function () {
  return this.getToken(Protobuf3Parser.WEAK, 0);
};

ImportStatementContext.prototype.PUBLIC = function () {
  return this.getToken(Protobuf3Parser.PUBLIC, 0);
};

ImportStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitImportStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ImportStatementContext = ImportStatementContext;

Protobuf3Parser.prototype.importStatement = function () {
  var localctx = new ImportStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, Protobuf3Parser.RULE_importStatement);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 132;
    this.match(Protobuf3Parser.IMPORT);
    this.state = 134;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.WEAK || _la === Protobuf3Parser.PUBLIC) {
      this.state = 133;
      localctx.accessModifier = this._input.LT(1);
      _la = this._input.LA(1);
      if (!(_la === Protobuf3Parser.WEAK || _la === Protobuf3Parser.PUBLIC)) {
        localctx.accessModifier = this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    }

    this.state = 136;
    this.strLit();
    this.state = 137;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function PackageStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_packageStatement;
  return this;
}

PackageStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
PackageStatementContext.prototype.constructor = PackageStatementContext;

PackageStatementContext.prototype.PACKAGE = function () {
  return this.getToken(Protobuf3Parser.PACKAGE, 0);
};

PackageStatementContext.prototype.fullIdent = function () {
  return this.getTypedRuleContext(FullIdentContext, 0);
};

PackageStatementContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

PackageStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitPackageStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.PackageStatementContext = PackageStatementContext;

Protobuf3Parser.prototype.packageStatement = function () {
  var localctx = new PackageStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, Protobuf3Parser.RULE_packageStatement);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 139;
    this.match(Protobuf3Parser.PACKAGE);
    this.state = 140;
    this.fullIdent();
    this.state = 141;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OptionStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_optionStatement;
  return this;
}

OptionStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
OptionStatementContext.prototype.constructor = OptionStatementContext;

OptionStatementContext.prototype.OPTION = function () {
  return this.getToken(Protobuf3Parser.OPTION, 0);
};

OptionStatementContext.prototype.optionName = function () {
  return this.getTypedRuleContext(OptionNameContext, 0);
};

OptionStatementContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

OptionStatementContext.prototype.constant = function () {
  return this.getTypedRuleContext(ConstantContext, 0);
};

OptionStatementContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

OptionStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitOptionStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.OptionStatementContext = OptionStatementContext;

Protobuf3Parser.prototype.optionStatement = function () {
  var localctx = new OptionStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, Protobuf3Parser.RULE_optionStatement);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 143;
    this.match(Protobuf3Parser.OPTION);
    this.state = 144;
    this.optionName();
    this.state = 145;
    this.match(Protobuf3Parser.EQ);
    this.state = 146;
    this.constant();
    this.state = 147;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OptionNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_optionName;
  return this;
}

OptionNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionNameContext.prototype.constructor = OptionNameContext;

OptionNameContext.prototype.fullIdent = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(FullIdentContext);
  } else {
    return this.getTypedRuleContext(FullIdentContext, i);
  }
};

OptionNameContext.prototype.LP = function () {
  return this.getToken(Protobuf3Parser.LP, 0);
};

OptionNameContext.prototype.RP = function () {
  return this.getToken(Protobuf3Parser.RP, 0);
};

OptionNameContext.prototype.DOT = function () {
  return this.getToken(Protobuf3Parser.DOT, 0);
};

OptionNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitOptionName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.OptionNameContext = OptionNameContext;

Protobuf3Parser.prototype.optionName = function () {
  var localctx = new OptionNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 10, Protobuf3Parser.RULE_optionName);
  var _la = 0; // Token type
  try {
    this.state = 157;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case Protobuf3Parser.SYNTAX:
      case Protobuf3Parser.IMPORT:
      case Protobuf3Parser.WEAK:
      case Protobuf3Parser.PUBLIC:
      case Protobuf3Parser.PACKAGE:
      case Protobuf3Parser.OPTION:
      case Protobuf3Parser.OPTIONAL:
      case Protobuf3Parser.REQUIRED:
      case Protobuf3Parser.REPEATED:
      case Protobuf3Parser.EXTENSIONS:
      case Protobuf3Parser.ONEOF:
      case Protobuf3Parser.MAP:
      case Protobuf3Parser.INT32:
      case Protobuf3Parser.INT64:
      case Protobuf3Parser.UINT32:
      case Protobuf3Parser.UINT64:
      case Protobuf3Parser.SINT32:
      case Protobuf3Parser.SINT64:
      case Protobuf3Parser.FIXED32:
      case Protobuf3Parser.FIXED64:
      case Protobuf3Parser.SFIXED32:
      case Protobuf3Parser.SFIXED64:
      case Protobuf3Parser.BOOL:
      case Protobuf3Parser.STRING:
      case Protobuf3Parser.DOUBLE:
      case Protobuf3Parser.FLOAT:
      case Protobuf3Parser.BYTES:
      case Protobuf3Parser.RESERVED:
      case Protobuf3Parser.TO:
      case Protobuf3Parser.MAX:
      case Protobuf3Parser.ENUM:
      case Protobuf3Parser.MESSAGE:
      case Protobuf3Parser.SERVICE:
      case Protobuf3Parser.RPC:
      case Protobuf3Parser.STREAM:
      case Protobuf3Parser.RETURNS:
      case Protobuf3Parser.BOOL_LIT:
      case Protobuf3Parser.IDENTIFIER:
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.fullIdent();
        break;
      case Protobuf3Parser.LP:
        this.enterOuterAlt(localctx, 2);
        this.state = 150;
        this.match(Protobuf3Parser.LP);
        this.state = 151;
        this.fullIdent();
        this.state = 152;
        this.match(Protobuf3Parser.RP);
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Protobuf3Parser.DOT) {
          this.state = 153;
          this.match(Protobuf3Parser.DOT);
          this.state = 154;
          this.fullIdent();
        }

        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FieldContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_field;
  this.repetition = null; // Token
  return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.type_ = function () {
  return this.getTypedRuleContext(Type_Context, 0);
};

FieldContext.prototype.fieldName = function () {
  return this.getTypedRuleContext(FieldNameContext, 0);
};

FieldContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

FieldContext.prototype.fieldNumber = function () {
  return this.getTypedRuleContext(FieldNumberContext, 0);
};

FieldContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

FieldContext.prototype.LB = function () {
  return this.getToken(Protobuf3Parser.LB, 0);
};

FieldContext.prototype.fieldOptions = function () {
  return this.getTypedRuleContext(FieldOptionsContext, 0);
};

FieldContext.prototype.RB = function () {
  return this.getToken(Protobuf3Parser.RB, 0);
};

FieldContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

FieldContext.prototype.REPEATED = function () {
  return this.getToken(Protobuf3Parser.REPEATED, 0);
};

FieldContext.prototype.OPTIONAL = function () {
  return this.getToken(Protobuf3Parser.OPTIONAL, 0);
};

FieldContext.prototype.REQUIRED = function () {
  return this.getToken(Protobuf3Parser.REQUIRED, 0);
};

FieldContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitField(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FieldContext = FieldContext;

Protobuf3Parser.prototype.field = function () {
  var localctx = new FieldContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, Protobuf3Parser.RULE_field);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 160;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 6, this._ctx);
    if (la_ === 1) {
      this.state = 159;
      localctx.repetition = this._input.LT(1);
      _la = this._input.LA(1);
      if (
        !(
          (_la & ~0x1f) == 0 &&
          ((1 << _la) &
            ((1 << Protobuf3Parser.OPTIONAL) |
              (1 << Protobuf3Parser.REQUIRED) |
              (1 << Protobuf3Parser.REPEATED))) !==
            0
        )
      ) {
        localctx.repetition = this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    }
    this.state = 162;
    this.type_();
    this.state = 163;
    this.fieldName();
    this.state = 164;
    this.match(Protobuf3Parser.EQ);
    this.state = 165;
    this.fieldNumber();
    this.state = 170;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.LB) {
      this.state = 166;
      this.match(Protobuf3Parser.LB);
      this.state = 167;
      this.fieldOptions();
      this.state = 168;
      this.match(Protobuf3Parser.RB);
    }

    this.state = 172;
    this.match(Protobuf3Parser.SEMI);
    this.state = 174;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
    if (la_ === 1) {
      this.state = 173;
      this.match(Protobuf3Parser.LINE_COMMENT);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FieldOptionsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_fieldOptions;
  return this;
}

FieldOptionsContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
FieldOptionsContext.prototype.constructor = FieldOptionsContext;

FieldOptionsContext.prototype.fieldOption = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(FieldOptionContext);
  } else {
    return this.getTypedRuleContext(FieldOptionContext, i);
  }
};

FieldOptionsContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.COMMA);
  } else {
    return this.getToken(Protobuf3Parser.COMMA, i);
  }
};

FieldOptionsContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitFieldOptions(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FieldOptionsContext = FieldOptionsContext;

Protobuf3Parser.prototype.fieldOptions = function () {
  var localctx = new FieldOptionsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, Protobuf3Parser.RULE_fieldOptions);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 176;
    this.fieldOption();
    this.state = 181;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === Protobuf3Parser.COMMA) {
      this.state = 177;
      this.match(Protobuf3Parser.COMMA);
      this.state = 178;
      this.fieldOption();
      this.state = 183;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FieldOptionContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_fieldOption;
  return this;
}

FieldOptionContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
FieldOptionContext.prototype.constructor = FieldOptionContext;

FieldOptionContext.prototype.optionName = function () {
  return this.getTypedRuleContext(OptionNameContext, 0);
};

FieldOptionContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

FieldOptionContext.prototype.constant = function () {
  return this.getTypedRuleContext(ConstantContext, 0);
};

FieldOptionContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitFieldOption(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FieldOptionContext = FieldOptionContext;

Protobuf3Parser.prototype.fieldOption = function () {
  var localctx = new FieldOptionContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, Protobuf3Parser.RULE_fieldOption);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 184;
    this.optionName();
    this.state = 185;
    this.match(Protobuf3Parser.EQ);
    this.state = 186;
    this.constant();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FieldNumberContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_fieldNumber;
  return this;
}

FieldNumberContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
FieldNumberContext.prototype.constructor = FieldNumberContext;

FieldNumberContext.prototype.intLit = function () {
  return this.getTypedRuleContext(IntLitContext, 0);
};

FieldNumberContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitFieldNumber(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FieldNumberContext = FieldNumberContext;

Protobuf3Parser.prototype.fieldNumber = function () {
  var localctx = new FieldNumberContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, Protobuf3Parser.RULE_fieldNumber);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 188;
    this.intLit();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ExtensionsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_extensions;
  return this;
}

ExtensionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensionsContext.prototype.constructor = ExtensionsContext;

ExtensionsContext.prototype.EXTENSIONS = function () {
  return this.getToken(Protobuf3Parser.EXTENSIONS, 0);
};

ExtensionsContext.prototype.range_ = function () {
  return this.getTypedRuleContext(Range_Context, 0);
};

ExtensionsContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

ExtensionsContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitExtensions(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ExtensionsContext = ExtensionsContext;

Protobuf3Parser.prototype.extensions = function () {
  var localctx = new ExtensionsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, Protobuf3Parser.RULE_extensions);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 190;
    this.match(Protobuf3Parser.EXTENSIONS);
    this.state = 191;
    this.range_();
    this.state = 192;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OneofContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_oneof;
  return this;
}

OneofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneofContext.prototype.constructor = OneofContext;

OneofContext.prototype.ONEOF = function () {
  return this.getToken(Protobuf3Parser.ONEOF, 0);
};

OneofContext.prototype.oneofName = function () {
  return this.getTypedRuleContext(OneofNameContext, 0);
};

OneofContext.prototype.LC = function () {
  return this.getToken(Protobuf3Parser.LC, 0);
};

OneofContext.prototype.RC = function () {
  return this.getToken(Protobuf3Parser.RC, 0);
};

OneofContext.prototype.optionStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(OptionStatementContext);
  } else {
    return this.getTypedRuleContext(OptionStatementContext, i);
  }
};

OneofContext.prototype.oneofField = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(OneofFieldContext);
  } else {
    return this.getTypedRuleContext(OneofFieldContext, i);
  }
};

OneofContext.prototype.emptyStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(EmptyStatementContext);
  } else {
    return this.getTypedRuleContext(EmptyStatementContext, i);
  }
};

OneofContext.prototype.comment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CommentContext);
  } else {
    return this.getTypedRuleContext(CommentContext, i);
  }
};

OneofContext.prototype.lineComment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(LineCommentContext);
  } else {
    return this.getTypedRuleContext(LineCommentContext, i);
  }
};

OneofContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitOneof(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.OneofContext = OneofContext;

Protobuf3Parser.prototype.oneof = function () {
  var localctx = new OneofContext(this, this._ctx, this.state);
  this.enterRule(localctx, 22, Protobuf3Parser.RULE_oneof);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 204;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 200;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 200;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 194;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 196;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 195;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 198;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 206;
    this.match(Protobuf3Parser.ONEOF);
    this.state = 207;
    this.oneofName();
    this.state = 218;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 214;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 214;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 208;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 210;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 209;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 212;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 220;
    this.match(Protobuf3Parser.LC);
    this.state = 226;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << Protobuf3Parser.SYNTAX) |
            (1 << Protobuf3Parser.IMPORT) |
            (1 << Protobuf3Parser.WEAK) |
            (1 << Protobuf3Parser.PUBLIC) |
            (1 << Protobuf3Parser.PACKAGE) |
            (1 << Protobuf3Parser.OPTION) |
            (1 << Protobuf3Parser.OPTIONAL) |
            (1 << Protobuf3Parser.REQUIRED) |
            (1 << Protobuf3Parser.REPEATED) |
            (1 << Protobuf3Parser.EXTENSIONS) |
            (1 << Protobuf3Parser.ONEOF) |
            (1 << Protobuf3Parser.MAP) |
            (1 << Protobuf3Parser.INT32) |
            (1 << Protobuf3Parser.INT64) |
            (1 << Protobuf3Parser.UINT32) |
            (1 << Protobuf3Parser.UINT64) |
            (1 << Protobuf3Parser.SINT32) |
            (1 << Protobuf3Parser.SINT64) |
            (1 << Protobuf3Parser.FIXED32) |
            (1 << Protobuf3Parser.FIXED64) |
            (1 << Protobuf3Parser.SFIXED32) |
            (1 << Protobuf3Parser.SFIXED64) |
            (1 << Protobuf3Parser.BOOL) |
            (1 << Protobuf3Parser.STRING) |
            (1 << Protobuf3Parser.DOUBLE) |
            (1 << Protobuf3Parser.FLOAT) |
            (1 << Protobuf3Parser.BYTES) |
            (1 << Protobuf3Parser.RESERVED) |
            (1 << Protobuf3Parser.TO) |
            (1 << Protobuf3Parser.MAX) |
            (1 << Protobuf3Parser.ENUM))) !==
          0) ||
      (((_la - 32) & ~0x1f) == 0 &&
        ((1 << (_la - 32)) &
          ((1 << (Protobuf3Parser.MESSAGE - 32)) |
            (1 << (Protobuf3Parser.SERVICE - 32)) |
            (1 << (Protobuf3Parser.RPC - 32)) |
            (1 << (Protobuf3Parser.STREAM - 32)) |
            (1 << (Protobuf3Parser.RETURNS - 32)) |
            (1 << (Protobuf3Parser.SEMI - 32)) |
            (1 << (Protobuf3Parser.DOT - 32)) |
            (1 << (Protobuf3Parser.BOOL_LIT - 32)) |
            (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !==
          0)
    ) {
      this.state = 224;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 18, this._ctx);
      switch (la_) {
        case 1:
          this.state = 221;
          this.optionStatement();
          break;

        case 2:
          this.state = 222;
          this.oneofField();
          break;

        case 3:
          this.state = 223;
          this.emptyStatement();
          break;
      }
      this.state = 228;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 229;
    this.match(Protobuf3Parser.RC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OneofFieldContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_oneofField;
  return this;
}

OneofFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneofFieldContext.prototype.constructor = OneofFieldContext;

OneofFieldContext.prototype.type_ = function () {
  return this.getTypedRuleContext(Type_Context, 0);
};

OneofFieldContext.prototype.fieldName = function () {
  return this.getTypedRuleContext(FieldNameContext, 0);
};

OneofFieldContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

OneofFieldContext.prototype.fieldNumber = function () {
  return this.getTypedRuleContext(FieldNumberContext, 0);
};

OneofFieldContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

OneofFieldContext.prototype.LB = function () {
  return this.getToken(Protobuf3Parser.LB, 0);
};

OneofFieldContext.prototype.fieldOptions = function () {
  return this.getTypedRuleContext(FieldOptionsContext, 0);
};

OneofFieldContext.prototype.RB = function () {
  return this.getToken(Protobuf3Parser.RB, 0);
};

OneofFieldContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

OneofFieldContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitOneofField(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.OneofFieldContext = OneofFieldContext;

Protobuf3Parser.prototype.oneofField = function () {
  var localctx = new OneofFieldContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, Protobuf3Parser.RULE_oneofField);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 231;
    this.type_();
    this.state = 232;
    this.fieldName();
    this.state = 233;
    this.match(Protobuf3Parser.EQ);
    this.state = 234;
    this.fieldNumber();
    this.state = 239;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.LB) {
      this.state = 235;
      this.match(Protobuf3Parser.LB);
      this.state = 236;
      this.fieldOptions();
      this.state = 237;
      this.match(Protobuf3Parser.RB);
    }

    this.state = 241;
    this.match(Protobuf3Parser.SEMI);
    this.state = 243;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.LINE_COMMENT) {
      this.state = 242;
      this.match(Protobuf3Parser.LINE_COMMENT);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MapFieldContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_mapField;
  return this;
}

MapFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapFieldContext.prototype.constructor = MapFieldContext;

MapFieldContext.prototype.MAP = function () {
  return this.getToken(Protobuf3Parser.MAP, 0);
};

MapFieldContext.prototype.LT = function () {
  return this.getToken(Protobuf3Parser.LT, 0);
};

MapFieldContext.prototype.keyType = function () {
  return this.getTypedRuleContext(KeyTypeContext, 0);
};

MapFieldContext.prototype.COMMA = function () {
  return this.getToken(Protobuf3Parser.COMMA, 0);
};

MapFieldContext.prototype.type_ = function () {
  return this.getTypedRuleContext(Type_Context, 0);
};

MapFieldContext.prototype.GT = function () {
  return this.getToken(Protobuf3Parser.GT, 0);
};

MapFieldContext.prototype.mapName = function () {
  return this.getTypedRuleContext(MapNameContext, 0);
};

MapFieldContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

MapFieldContext.prototype.fieldNumber = function () {
  return this.getTypedRuleContext(FieldNumberContext, 0);
};

MapFieldContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

MapFieldContext.prototype.LB = function () {
  return this.getToken(Protobuf3Parser.LB, 0);
};

MapFieldContext.prototype.fieldOptions = function () {
  return this.getTypedRuleContext(FieldOptionsContext, 0);
};

MapFieldContext.prototype.RB = function () {
  return this.getToken(Protobuf3Parser.RB, 0);
};

MapFieldContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMapField(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MapFieldContext = MapFieldContext;

Protobuf3Parser.prototype.mapField = function () {
  var localctx = new MapFieldContext(this, this._ctx, this.state);
  this.enterRule(localctx, 26, Protobuf3Parser.RULE_mapField);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 245;
    this.match(Protobuf3Parser.MAP);
    this.state = 246;
    this.match(Protobuf3Parser.LT);
    this.state = 247;
    this.keyType();
    this.state = 248;
    this.match(Protobuf3Parser.COMMA);
    this.state = 249;
    this.type_();
    this.state = 250;
    this.match(Protobuf3Parser.GT);
    this.state = 251;
    this.mapName();
    this.state = 252;
    this.match(Protobuf3Parser.EQ);
    this.state = 253;
    this.fieldNumber();
    this.state = 258;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.LB) {
      this.state = 254;
      this.match(Protobuf3Parser.LB);
      this.state = 255;
      this.fieldOptions();
      this.state = 256;
      this.match(Protobuf3Parser.RB);
    }

    this.state = 260;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function KeyTypeContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_keyType;
  return this;
}

KeyTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyTypeContext.prototype.constructor = KeyTypeContext;

KeyTypeContext.prototype.INT32 = function () {
  return this.getToken(Protobuf3Parser.INT32, 0);
};

KeyTypeContext.prototype.INT64 = function () {
  return this.getToken(Protobuf3Parser.INT64, 0);
};

KeyTypeContext.prototype.UINT32 = function () {
  return this.getToken(Protobuf3Parser.UINT32, 0);
};

KeyTypeContext.prototype.UINT64 = function () {
  return this.getToken(Protobuf3Parser.UINT64, 0);
};

KeyTypeContext.prototype.SINT32 = function () {
  return this.getToken(Protobuf3Parser.SINT32, 0);
};

KeyTypeContext.prototype.SINT64 = function () {
  return this.getToken(Protobuf3Parser.SINT64, 0);
};

KeyTypeContext.prototype.FIXED32 = function () {
  return this.getToken(Protobuf3Parser.FIXED32, 0);
};

KeyTypeContext.prototype.FIXED64 = function () {
  return this.getToken(Protobuf3Parser.FIXED64, 0);
};

KeyTypeContext.prototype.SFIXED32 = function () {
  return this.getToken(Protobuf3Parser.SFIXED32, 0);
};

KeyTypeContext.prototype.SFIXED64 = function () {
  return this.getToken(Protobuf3Parser.SFIXED64, 0);
};

KeyTypeContext.prototype.BOOL = function () {
  return this.getToken(Protobuf3Parser.BOOL, 0);
};

KeyTypeContext.prototype.STRING = function () {
  return this.getToken(Protobuf3Parser.STRING, 0);
};

KeyTypeContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitKeyType(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.KeyTypeContext = KeyTypeContext;

Protobuf3Parser.prototype.keyType = function () {
  var localctx = new KeyTypeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 28, Protobuf3Parser.RULE_keyType);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 262;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << Protobuf3Parser.INT32) |
            (1 << Protobuf3Parser.INT64) |
            (1 << Protobuf3Parser.UINT32) |
            (1 << Protobuf3Parser.UINT64) |
            (1 << Protobuf3Parser.SINT32) |
            (1 << Protobuf3Parser.SINT64) |
            (1 << Protobuf3Parser.FIXED32) |
            (1 << Protobuf3Parser.FIXED64) |
            (1 << Protobuf3Parser.SFIXED32) |
            (1 << Protobuf3Parser.SFIXED64) |
            (1 << Protobuf3Parser.BOOL) |
            (1 << Protobuf3Parser.STRING))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Type_Context(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_type_;
  return this;
}

Type_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_Context.prototype.constructor = Type_Context;

Type_Context.prototype.DOUBLE = function () {
  return this.getToken(Protobuf3Parser.DOUBLE, 0);
};

Type_Context.prototype.FLOAT = function () {
  return this.getToken(Protobuf3Parser.FLOAT, 0);
};

Type_Context.prototype.INT32 = function () {
  return this.getToken(Protobuf3Parser.INT32, 0);
};

Type_Context.prototype.INT64 = function () {
  return this.getToken(Protobuf3Parser.INT64, 0);
};

Type_Context.prototype.UINT32 = function () {
  return this.getToken(Protobuf3Parser.UINT32, 0);
};

Type_Context.prototype.UINT64 = function () {
  return this.getToken(Protobuf3Parser.UINT64, 0);
};

Type_Context.prototype.SINT32 = function () {
  return this.getToken(Protobuf3Parser.SINT32, 0);
};

Type_Context.prototype.SINT64 = function () {
  return this.getToken(Protobuf3Parser.SINT64, 0);
};

Type_Context.prototype.FIXED32 = function () {
  return this.getToken(Protobuf3Parser.FIXED32, 0);
};

Type_Context.prototype.FIXED64 = function () {
  return this.getToken(Protobuf3Parser.FIXED64, 0);
};

Type_Context.prototype.SFIXED32 = function () {
  return this.getToken(Protobuf3Parser.SFIXED32, 0);
};

Type_Context.prototype.SFIXED64 = function () {
  return this.getToken(Protobuf3Parser.SFIXED64, 0);
};

Type_Context.prototype.BOOL = function () {
  return this.getToken(Protobuf3Parser.BOOL, 0);
};

Type_Context.prototype.STRING = function () {
  return this.getToken(Protobuf3Parser.STRING, 0);
};

Type_Context.prototype.BYTES = function () {
  return this.getToken(Protobuf3Parser.BYTES, 0);
};

Type_Context.prototype.messageType = function () {
  return this.getTypedRuleContext(MessageTypeContext, 0);
};

Type_Context.prototype.enumType = function () {
  return this.getTypedRuleContext(EnumTypeContext, 0);
};

Type_Context.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitType_(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.Type_Context = Type_Context;

Protobuf3Parser.prototype.type_ = function () {
  var localctx = new Type_Context(this, this._ctx, this.state);
  this.enterRule(localctx, 30, Protobuf3Parser.RULE_type_);
  try {
    this.state = 281;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(Protobuf3Parser.DOUBLE);
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 265;
        this.match(Protobuf3Parser.FLOAT);
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 266;
        this.match(Protobuf3Parser.INT32);
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 267;
        this.match(Protobuf3Parser.INT64);
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 268;
        this.match(Protobuf3Parser.UINT32);
        break;

      case 6:
        this.enterOuterAlt(localctx, 6);
        this.state = 269;
        this.match(Protobuf3Parser.UINT64);
        break;

      case 7:
        this.enterOuterAlt(localctx, 7);
        this.state = 270;
        this.match(Protobuf3Parser.SINT32);
        break;

      case 8:
        this.enterOuterAlt(localctx, 8);
        this.state = 271;
        this.match(Protobuf3Parser.SINT64);
        break;

      case 9:
        this.enterOuterAlt(localctx, 9);
        this.state = 272;
        this.match(Protobuf3Parser.FIXED32);
        break;

      case 10:
        this.enterOuterAlt(localctx, 10);
        this.state = 273;
        this.match(Protobuf3Parser.FIXED64);
        break;

      case 11:
        this.enterOuterAlt(localctx, 11);
        this.state = 274;
        this.match(Protobuf3Parser.SFIXED32);
        break;

      case 12:
        this.enterOuterAlt(localctx, 12);
        this.state = 275;
        this.match(Protobuf3Parser.SFIXED64);
        break;

      case 13:
        this.enterOuterAlt(localctx, 13);
        this.state = 276;
        this.match(Protobuf3Parser.BOOL);
        break;

      case 14:
        this.enterOuterAlt(localctx, 14);
        this.state = 277;
        this.match(Protobuf3Parser.STRING);
        break;

      case 15:
        this.enterOuterAlt(localctx, 15);
        this.state = 278;
        this.match(Protobuf3Parser.BYTES);
        break;

      case 16:
        this.enterOuterAlt(localctx, 16);
        this.state = 279;
        this.messageType();
        break;

      case 17:
        this.enterOuterAlt(localctx, 17);
        this.state = 280;
        this.enumType();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ReservedContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_reserved;
  return this;
}

ReservedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedContext.prototype.constructor = ReservedContext;

ReservedContext.prototype.RESERVED = function () {
  return this.getToken(Protobuf3Parser.RESERVED, 0);
};

ReservedContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

ReservedContext.prototype.ranges = function () {
  return this.getTypedRuleContext(RangesContext, 0);
};

ReservedContext.prototype.reservedFieldNames = function () {
  return this.getTypedRuleContext(ReservedFieldNamesContext, 0);
};

ReservedContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitReserved(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ReservedContext = ReservedContext;

Protobuf3Parser.prototype.reserved = function () {
  var localctx = new ReservedContext(this, this._ctx, this.state);
  this.enterRule(localctx, 32, Protobuf3Parser.RULE_reserved);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 283;
    this.match(Protobuf3Parser.RESERVED);
    this.state = 286;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case Protobuf3Parser.INT_LIT:
        this.state = 284;
        this.ranges();
        break;
      case Protobuf3Parser.PROTO3_LIT_SINGLE:
      case Protobuf3Parser.PROTO3_LIT_DOBULE:
      case Protobuf3Parser.PROTO2_LIT_SINGLE:
      case Protobuf3Parser.PROTO2_LIT_DOBULE:
      case Protobuf3Parser.STR_LIT:
        this.state = 285;
        this.reservedFieldNames();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
    this.state = 288;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function RangesContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_ranges;
  return this;
}

RangesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangesContext.prototype.constructor = RangesContext;

RangesContext.prototype.range_ = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Range_Context);
  } else {
    return this.getTypedRuleContext(Range_Context, i);
  }
};

RangesContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.COMMA);
  } else {
    return this.getToken(Protobuf3Parser.COMMA, i);
  }
};

RangesContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitRanges(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.RangesContext = RangesContext;

Protobuf3Parser.prototype.ranges = function () {
  var localctx = new RangesContext(this, this._ctx, this.state);
  this.enterRule(localctx, 34, Protobuf3Parser.RULE_ranges);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 290;
    this.range_();
    this.state = 295;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === Protobuf3Parser.COMMA) {
      this.state = 291;
      this.match(Protobuf3Parser.COMMA);
      this.state = 292;
      this.range_();
      this.state = 297;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Range_Context(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_range_;
  return this;
}

Range_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_Context.prototype.constructor = Range_Context;

Range_Context.prototype.intLit = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(IntLitContext);
  } else {
    return this.getTypedRuleContext(IntLitContext, i);
  }
};

Range_Context.prototype.TO = function () {
  return this.getToken(Protobuf3Parser.TO, 0);
};

Range_Context.prototype.MAX = function () {
  return this.getToken(Protobuf3Parser.MAX, 0);
};

Range_Context.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitRange_(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.Range_Context = Range_Context;

Protobuf3Parser.prototype.range_ = function () {
  var localctx = new Range_Context(this, this._ctx, this.state);
  this.enterRule(localctx, 36, Protobuf3Parser.RULE_range_);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 298;
    this.intLit();
    this.state = 304;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.TO) {
      this.state = 299;
      this.match(Protobuf3Parser.TO);
      this.state = 302;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Protobuf3Parser.INT_LIT:
          this.state = 300;
          this.intLit();
          break;
        case Protobuf3Parser.MAX:
          this.state = 301;
          this.match(Protobuf3Parser.MAX);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ReservedFieldNamesContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_reservedFieldNames;
  return this;
}

ReservedFieldNamesContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ReservedFieldNamesContext.prototype.constructor = ReservedFieldNamesContext;

ReservedFieldNamesContext.prototype.strLit = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(StrLitContext);
  } else {
    return this.getTypedRuleContext(StrLitContext, i);
  }
};

ReservedFieldNamesContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.COMMA);
  } else {
    return this.getToken(Protobuf3Parser.COMMA, i);
  }
};

ReservedFieldNamesContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitReservedFieldNames(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ReservedFieldNamesContext = ReservedFieldNamesContext;

Protobuf3Parser.prototype.reservedFieldNames = function () {
  var localctx = new ReservedFieldNamesContext(this, this._ctx, this.state);
  this.enterRule(localctx, 38, Protobuf3Parser.RULE_reservedFieldNames);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 306;
    this.strLit();
    this.state = 311;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === Protobuf3Parser.COMMA) {
      this.state = 307;
      this.match(Protobuf3Parser.COMMA);
      this.state = 308;
      this.strLit();
      this.state = 313;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function TopLevelDefContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_topLevelDef;
  return this;
}

TopLevelDefContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
TopLevelDefContext.prototype.constructor = TopLevelDefContext;

TopLevelDefContext.prototype.messageDef = function () {
  return this.getTypedRuleContext(MessageDefContext, 0);
};

TopLevelDefContext.prototype.enumDef = function () {
  return this.getTypedRuleContext(EnumDefContext, 0);
};

TopLevelDefContext.prototype.serviceDef = function () {
  return this.getTypedRuleContext(ServiceDefContext, 0);
};

TopLevelDefContext.prototype.COMMENT = function () {
  return this.getToken(Protobuf3Parser.COMMENT, 0);
};

TopLevelDefContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

TopLevelDefContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitTopLevelDef(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.TopLevelDefContext = TopLevelDefContext;

Protobuf3Parser.prototype.topLevelDef = function () {
  var localctx = new TopLevelDefContext(this, this._ctx, this.state);
  this.enterRule(localctx, 40, Protobuf3Parser.RULE_topLevelDef);
  try {
    this.state = 319;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 29, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.messageDef();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 315;
        this.enumDef();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 316;
        this.serviceDef();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 317;
        this.match(Protobuf3Parser.COMMENT);
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 318;
        this.match(Protobuf3Parser.LINE_COMMENT);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumDefContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumDef;
  return this;
}

EnumDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumDefContext.prototype.constructor = EnumDefContext;

EnumDefContext.prototype.ENUM = function () {
  return this.getToken(Protobuf3Parser.ENUM, 0);
};

EnumDefContext.prototype.enumName = function () {
  return this.getTypedRuleContext(EnumNameContext, 0);
};

EnumDefContext.prototype.enumBody = function () {
  return this.getTypedRuleContext(EnumBodyContext, 0);
};

EnumDefContext.prototype.comment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CommentContext);
  } else {
    return this.getTypedRuleContext(CommentContext, i);
  }
};

EnumDefContext.prototype.lineComment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(LineCommentContext);
  } else {
    return this.getTypedRuleContext(LineCommentContext, i);
  }
};

EnumDefContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumDef(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumDefContext = EnumDefContext;

Protobuf3Parser.prototype.enumDef = function () {
  var localctx = new EnumDefContext(this, this._ctx, this.state);
  this.enterRule(localctx, 42, Protobuf3Parser.RULE_enumDef);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 331;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 327;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 327;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 321;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 323;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 322;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 325;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 329;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 333;
    this.match(Protobuf3Parser.ENUM);
    this.state = 334;
    this.enumName();
    this.state = 345;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 341;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 341;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 335;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 337;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 336;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 339;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 347;
    this.enumBody();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumBodyContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumBody;
  return this;
}

EnumBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumBodyContext.prototype.constructor = EnumBodyContext;

EnumBodyContext.prototype.LC = function () {
  return this.getToken(Protobuf3Parser.LC, 0);
};

EnumBodyContext.prototype.RC = function () {
  return this.getToken(Protobuf3Parser.RC, 0);
};

EnumBodyContext.prototype.enumElement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(EnumElementContext);
  } else {
    return this.getTypedRuleContext(EnumElementContext, i);
  }
};

EnumBodyContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumBody(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumBodyContext = EnumBodyContext;

Protobuf3Parser.prototype.enumBody = function () {
  var localctx = new EnumBodyContext(this, this._ctx, this.state);
  this.enterRule(localctx, 44, Protobuf3Parser.RULE_enumBody);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 349;
    this.match(Protobuf3Parser.LC);
    this.state = 353;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << Protobuf3Parser.SYNTAX) |
            (1 << Protobuf3Parser.IMPORT) |
            (1 << Protobuf3Parser.WEAK) |
            (1 << Protobuf3Parser.PUBLIC) |
            (1 << Protobuf3Parser.PACKAGE) |
            (1 << Protobuf3Parser.OPTION) |
            (1 << Protobuf3Parser.OPTIONAL) |
            (1 << Protobuf3Parser.REQUIRED) |
            (1 << Protobuf3Parser.REPEATED) |
            (1 << Protobuf3Parser.EXTENSIONS) |
            (1 << Protobuf3Parser.ONEOF) |
            (1 << Protobuf3Parser.MAP) |
            (1 << Protobuf3Parser.INT32) |
            (1 << Protobuf3Parser.INT64) |
            (1 << Protobuf3Parser.UINT32) |
            (1 << Protobuf3Parser.UINT64) |
            (1 << Protobuf3Parser.SINT32) |
            (1 << Protobuf3Parser.SINT64) |
            (1 << Protobuf3Parser.FIXED32) |
            (1 << Protobuf3Parser.FIXED64) |
            (1 << Protobuf3Parser.SFIXED32) |
            (1 << Protobuf3Parser.SFIXED64) |
            (1 << Protobuf3Parser.BOOL) |
            (1 << Protobuf3Parser.STRING) |
            (1 << Protobuf3Parser.DOUBLE) |
            (1 << Protobuf3Parser.FLOAT) |
            (1 << Protobuf3Parser.BYTES) |
            (1 << Protobuf3Parser.RESERVED) |
            (1 << Protobuf3Parser.TO) |
            (1 << Protobuf3Parser.MAX) |
            (1 << Protobuf3Parser.ENUM))) !==
          0) ||
      (((_la - 32) & ~0x1f) == 0 &&
        ((1 << (_la - 32)) &
          ((1 << (Protobuf3Parser.MESSAGE - 32)) |
            (1 << (Protobuf3Parser.SERVICE - 32)) |
            (1 << (Protobuf3Parser.RPC - 32)) |
            (1 << (Protobuf3Parser.STREAM - 32)) |
            (1 << (Protobuf3Parser.RETURNS - 32)) |
            (1 << (Protobuf3Parser.SEMI - 32)) |
            (1 << (Protobuf3Parser.BOOL_LIT - 32)) |
            (1 << (Protobuf3Parser.IDENTIFIER - 32)) |
            (1 << (Protobuf3Parser.COMMENT - 32)) |
            (1 << (Protobuf3Parser.LINE_COMMENT - 32)))) !==
          0)
    ) {
      this.state = 350;
      this.enumElement();
      this.state = 355;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 356;
    this.match(Protobuf3Parser.RC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumElementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumElement;
  return this;
}

EnumElementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
EnumElementContext.prototype.constructor = EnumElementContext;

EnumElementContext.prototype.optionStatement = function () {
  return this.getTypedRuleContext(OptionStatementContext, 0);
};

EnumElementContext.prototype.enumField = function () {
  return this.getTypedRuleContext(EnumFieldContext, 0);
};

EnumElementContext.prototype.emptyStatement = function () {
  return this.getTypedRuleContext(EmptyStatementContext, 0);
};

EnumElementContext.prototype.COMMENT = function () {
  return this.getToken(Protobuf3Parser.COMMENT, 0);
};

EnumElementContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

EnumElementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumElement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumElementContext = EnumElementContext;

Protobuf3Parser.prototype.enumElement = function () {
  var localctx = new EnumElementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 46, Protobuf3Parser.RULE_enumElement);
  try {
    this.state = 363;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.optionStatement();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 359;
        this.enumField();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 360;
        this.emptyStatement();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 361;
        this.match(Protobuf3Parser.COMMENT);
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 362;
        this.match(Protobuf3Parser.LINE_COMMENT);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumFieldContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumField;
  return this;
}

EnumFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumFieldContext.prototype.constructor = EnumFieldContext;

EnumFieldContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

EnumFieldContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

EnumFieldContext.prototype.intLit = function () {
  return this.getTypedRuleContext(IntLitContext, 0);
};

EnumFieldContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

EnumFieldContext.prototype.MINUS = function () {
  return this.getToken(Protobuf3Parser.MINUS, 0);
};

EnumFieldContext.prototype.enumValueOptions = function () {
  return this.getTypedRuleContext(EnumValueOptionsContext, 0);
};

EnumFieldContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumField(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumFieldContext = EnumFieldContext;

Protobuf3Parser.prototype.enumField = function () {
  var localctx = new EnumFieldContext(this, this._ctx, this.state);
  this.enterRule(localctx, 48, Protobuf3Parser.RULE_enumField);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 365;
    this.ident();
    this.state = 366;
    this.match(Protobuf3Parser.EQ);
    this.state = 368;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.MINUS) {
      this.state = 367;
      this.match(Protobuf3Parser.MINUS);
    }

    this.state = 370;
    this.intLit();
    this.state = 372;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.LB) {
      this.state = 371;
      this.enumValueOptions();
    }

    this.state = 374;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumValueOptionsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumValueOptions;
  return this;
}

EnumValueOptionsContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
EnumValueOptionsContext.prototype.constructor = EnumValueOptionsContext;

EnumValueOptionsContext.prototype.LB = function () {
  return this.getToken(Protobuf3Parser.LB, 0);
};

EnumValueOptionsContext.prototype.enumValueOption = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(EnumValueOptionContext);
  } else {
    return this.getTypedRuleContext(EnumValueOptionContext, i);
  }
};

EnumValueOptionsContext.prototype.RB = function () {
  return this.getToken(Protobuf3Parser.RB, 0);
};

EnumValueOptionsContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.COMMA);
  } else {
    return this.getToken(Protobuf3Parser.COMMA, i);
  }
};

EnumValueOptionsContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumValueOptions(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumValueOptionsContext = EnumValueOptionsContext;

Protobuf3Parser.prototype.enumValueOptions = function () {
  var localctx = new EnumValueOptionsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 50, Protobuf3Parser.RULE_enumValueOptions);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 376;
    this.match(Protobuf3Parser.LB);
    this.state = 377;
    this.enumValueOption();
    this.state = 382;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === Protobuf3Parser.COMMA) {
      this.state = 378;
      this.match(Protobuf3Parser.COMMA);
      this.state = 379;
      this.enumValueOption();
      this.state = 384;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 385;
    this.match(Protobuf3Parser.RB);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumValueOptionContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumValueOption;
  return this;
}

EnumValueOptionContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
EnumValueOptionContext.prototype.constructor = EnumValueOptionContext;

EnumValueOptionContext.prototype.optionName = function () {
  return this.getTypedRuleContext(OptionNameContext, 0);
};

EnumValueOptionContext.prototype.EQ = function () {
  return this.getToken(Protobuf3Parser.EQ, 0);
};

EnumValueOptionContext.prototype.constant = function () {
  return this.getTypedRuleContext(ConstantContext, 0);
};

EnumValueOptionContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumValueOption(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumValueOptionContext = EnumValueOptionContext;

Protobuf3Parser.prototype.enumValueOption = function () {
  var localctx = new EnumValueOptionContext(this, this._ctx, this.state);
  this.enterRule(localctx, 52, Protobuf3Parser.RULE_enumValueOption);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 387;
    this.optionName();
    this.state = 388;
    this.match(Protobuf3Parser.EQ);
    this.state = 389;
    this.constant();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MessageDefContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_messageDef;
  return this;
}

MessageDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageDefContext.prototype.constructor = MessageDefContext;

MessageDefContext.prototype.MESSAGE = function () {
  return this.getToken(Protobuf3Parser.MESSAGE, 0);
};

MessageDefContext.prototype.messageName = function () {
  return this.getTypedRuleContext(MessageNameContext, 0);
};

MessageDefContext.prototype.messageBody = function () {
  return this.getTypedRuleContext(MessageBodyContext, 0);
};

MessageDefContext.prototype.comment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CommentContext);
  } else {
    return this.getTypedRuleContext(CommentContext, i);
  }
};

MessageDefContext.prototype.lineComment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(LineCommentContext);
  } else {
    return this.getTypedRuleContext(LineCommentContext, i);
  }
};

MessageDefContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMessageDef(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MessageDefContext = MessageDefContext;

Protobuf3Parser.prototype.messageDef = function () {
  var localctx = new MessageDefContext(this, this._ctx, this.state);
  this.enterRule(localctx, 54, Protobuf3Parser.RULE_messageDef);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 401;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 397;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 397;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 391;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 393;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 392;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 395;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 403;
    this.match(Protobuf3Parser.MESSAGE);
    this.state = 404;
    this.messageName();
    this.state = 415;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 411;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 411;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 405;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 407;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 406;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 409;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 413;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 417;
    this.messageBody();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MessageBodyContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_messageBody;
  return this;
}

MessageBodyContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
MessageBodyContext.prototype.constructor = MessageBodyContext;

MessageBodyContext.prototype.LC = function () {
  return this.getToken(Protobuf3Parser.LC, 0);
};

MessageBodyContext.prototype.RC = function () {
  return this.getToken(Protobuf3Parser.RC, 0);
};

MessageBodyContext.prototype.messageElement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(MessageElementContext);
  } else {
    return this.getTypedRuleContext(MessageElementContext, i);
  }
};

MessageBodyContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMessageBody(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MessageBodyContext = MessageBodyContext;

Protobuf3Parser.prototype.messageBody = function () {
  var localctx = new MessageBodyContext(this, this._ctx, this.state);
  this.enterRule(localctx, 56, Protobuf3Parser.RULE_messageBody);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 419;
    this.match(Protobuf3Parser.LC);
    this.state = 423;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << Protobuf3Parser.SYNTAX) |
            (1 << Protobuf3Parser.IMPORT) |
            (1 << Protobuf3Parser.WEAK) |
            (1 << Protobuf3Parser.PUBLIC) |
            (1 << Protobuf3Parser.PACKAGE) |
            (1 << Protobuf3Parser.OPTION) |
            (1 << Protobuf3Parser.OPTIONAL) |
            (1 << Protobuf3Parser.REQUIRED) |
            (1 << Protobuf3Parser.REPEATED) |
            (1 << Protobuf3Parser.EXTENSIONS) |
            (1 << Protobuf3Parser.ONEOF) |
            (1 << Protobuf3Parser.MAP) |
            (1 << Protobuf3Parser.INT32) |
            (1 << Protobuf3Parser.INT64) |
            (1 << Protobuf3Parser.UINT32) |
            (1 << Protobuf3Parser.UINT64) |
            (1 << Protobuf3Parser.SINT32) |
            (1 << Protobuf3Parser.SINT64) |
            (1 << Protobuf3Parser.FIXED32) |
            (1 << Protobuf3Parser.FIXED64) |
            (1 << Protobuf3Parser.SFIXED32) |
            (1 << Protobuf3Parser.SFIXED64) |
            (1 << Protobuf3Parser.BOOL) |
            (1 << Protobuf3Parser.STRING) |
            (1 << Protobuf3Parser.DOUBLE) |
            (1 << Protobuf3Parser.FLOAT) |
            (1 << Protobuf3Parser.BYTES) |
            (1 << Protobuf3Parser.RESERVED) |
            (1 << Protobuf3Parser.TO) |
            (1 << Protobuf3Parser.MAX) |
            (1 << Protobuf3Parser.ENUM))) !==
          0) ||
      (((_la - 32) & ~0x1f) == 0 &&
        ((1 << (_la - 32)) &
          ((1 << (Protobuf3Parser.MESSAGE - 32)) |
            (1 << (Protobuf3Parser.SERVICE - 32)) |
            (1 << (Protobuf3Parser.RPC - 32)) |
            (1 << (Protobuf3Parser.STREAM - 32)) |
            (1 << (Protobuf3Parser.RETURNS - 32)) |
            (1 << (Protobuf3Parser.SEMI - 32)) |
            (1 << (Protobuf3Parser.DOT - 32)) |
            (1 << (Protobuf3Parser.BOOL_LIT - 32)) |
            (1 << (Protobuf3Parser.IDENTIFIER - 32)) |
            (1 << (Protobuf3Parser.COMMENT - 32)) |
            (1 << (Protobuf3Parser.LINE_COMMENT - 32)))) !==
          0)
    ) {
      this.state = 420;
      this.messageElement();
      this.state = 425;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 426;
    this.match(Protobuf3Parser.RC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MessageElementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_messageElement;
  return this;
}

MessageElementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
MessageElementContext.prototype.constructor = MessageElementContext;

MessageElementContext.prototype.field = function () {
  return this.getTypedRuleContext(FieldContext, 0);
};

MessageElementContext.prototype.enumDef = function () {
  return this.getTypedRuleContext(EnumDefContext, 0);
};

MessageElementContext.prototype.messageDef = function () {
  return this.getTypedRuleContext(MessageDefContext, 0);
};

MessageElementContext.prototype.optionStatement = function () {
  return this.getTypedRuleContext(OptionStatementContext, 0);
};

MessageElementContext.prototype.oneof = function () {
  return this.getTypedRuleContext(OneofContext, 0);
};

MessageElementContext.prototype.mapField = function () {
  return this.getTypedRuleContext(MapFieldContext, 0);
};

MessageElementContext.prototype.reserved = function () {
  return this.getTypedRuleContext(ReservedContext, 0);
};

MessageElementContext.prototype.emptyStatement = function () {
  return this.getTypedRuleContext(EmptyStatementContext, 0);
};

MessageElementContext.prototype.extensions = function () {
  return this.getTypedRuleContext(ExtensionsContext, 0);
};

MessageElementContext.prototype.COMMENT = function () {
  return this.getToken(Protobuf3Parser.COMMENT, 0);
};

MessageElementContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

MessageElementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMessageElement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MessageElementContext = MessageElementContext;

Protobuf3Parser.prototype.messageElement = function () {
  var localctx = new MessageElementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 58, Protobuf3Parser.RULE_messageElement);
  try {
    this.state = 439;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 52, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.field();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 429;
        this.enumDef();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 430;
        this.messageDef();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 431;
        this.optionStatement();
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 432;
        this.oneof();
        break;

      case 6:
        this.enterOuterAlt(localctx, 6);
        this.state = 433;
        this.mapField();
        break;

      case 7:
        this.enterOuterAlt(localctx, 7);
        this.state = 434;
        this.reserved();
        break;

      case 8:
        this.enterOuterAlt(localctx, 8);
        this.state = 435;
        this.emptyStatement();
        break;

      case 9:
        this.enterOuterAlt(localctx, 9);
        this.state = 436;
        this.extensions();
        break;

      case 10:
        this.enterOuterAlt(localctx, 10);
        this.state = 437;
        this.match(Protobuf3Parser.COMMENT);
        break;

      case 11:
        this.enterOuterAlt(localctx, 11);
        this.state = 438;
        this.match(Protobuf3Parser.LINE_COMMENT);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ServiceDefContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_serviceDef;
  return this;
}

ServiceDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceDefContext.prototype.constructor = ServiceDefContext;

ServiceDefContext.prototype.SERVICE = function () {
  return this.getToken(Protobuf3Parser.SERVICE, 0);
};

ServiceDefContext.prototype.serviceName = function () {
  return this.getTypedRuleContext(ServiceNameContext, 0);
};

ServiceDefContext.prototype.LC = function () {
  return this.getToken(Protobuf3Parser.LC, 0);
};

ServiceDefContext.prototype.RC = function () {
  return this.getToken(Protobuf3Parser.RC, 0);
};

ServiceDefContext.prototype.serviceElement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ServiceElementContext);
  } else {
    return this.getTypedRuleContext(ServiceElementContext, i);
  }
};

ServiceDefContext.prototype.comment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CommentContext);
  } else {
    return this.getTypedRuleContext(CommentContext, i);
  }
};

ServiceDefContext.prototype.lineComment = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(LineCommentContext);
  } else {
    return this.getTypedRuleContext(LineCommentContext, i);
  }
};

ServiceDefContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitServiceDef(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ServiceDefContext = ServiceDefContext;

Protobuf3Parser.prototype.serviceDef = function () {
  var localctx = new ServiceDefContext(this, this._ctx, this.state);
  this.enterRule(localctx, 60, Protobuf3Parser.RULE_serviceDef);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 451;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 447;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 447;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 441;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 443;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 442;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 445;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 449;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 453;
    this.match(Protobuf3Parser.SERVICE);
    this.state = 454;
    this.serviceName();
    this.state = 465;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      _la === Protobuf3Parser.COMMENT ||
      _la === Protobuf3Parser.LINE_COMMENT
    ) {
      this.state = 461;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 461;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Protobuf3Parser.COMMENT:
            this.state = 455;
            this.comment();
            break;
          case Protobuf3Parser.LINE_COMMENT:
            this.state = 457;
            this._errHandler.sync(this);
            var _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  this.state = 456;
                  this.lineComment();
                  break;
                default:
                  throw new antlr4.error.NoViableAltException(this);
              }
              this.state = 459;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 463;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        _la === Protobuf3Parser.COMMENT ||
        _la === Protobuf3Parser.LINE_COMMENT
      );
    }

    this.state = 467;
    this.match(Protobuf3Parser.LC);
    this.state = 471;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      _la === Protobuf3Parser.OPTION ||
      (((_la - 34) & ~0x1f) == 0 &&
        ((1 << (_la - 34)) &
          ((1 << (Protobuf3Parser.RPC - 34)) |
            (1 << (Protobuf3Parser.SEMI - 34)) |
            (1 << (Protobuf3Parser.COMMENT - 34)) |
            (1 << (Protobuf3Parser.LINE_COMMENT - 34)))) !==
          0)
    ) {
      this.state = 468;
      this.serviceElement();
      this.state = 473;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 474;
    this.match(Protobuf3Parser.RC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ServiceElementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_serviceElement;
  return this;
}

ServiceElementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ServiceElementContext.prototype.constructor = ServiceElementContext;

ServiceElementContext.prototype.optionStatement = function () {
  return this.getTypedRuleContext(OptionStatementContext, 0);
};

ServiceElementContext.prototype.rpc = function () {
  return this.getTypedRuleContext(RpcContext, 0);
};

ServiceElementContext.prototype.emptyStatement = function () {
  return this.getTypedRuleContext(EmptyStatementContext, 0);
};

ServiceElementContext.prototype.COMMENT = function () {
  return this.getToken(Protobuf3Parser.COMMENT, 0);
};

ServiceElementContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

ServiceElementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitServiceElement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ServiceElementContext = ServiceElementContext;

Protobuf3Parser.prototype.serviceElement = function () {
  var localctx = new ServiceElementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 62, Protobuf3Parser.RULE_serviceElement);
  try {
    this.state = 481;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case Protobuf3Parser.OPTION:
        this.enterOuterAlt(localctx, 1);
        this.state = 476;
        this.optionStatement();
        break;
      case Protobuf3Parser.RPC:
        this.enterOuterAlt(localctx, 2);
        this.state = 477;
        this.rpc();
        break;
      case Protobuf3Parser.SEMI:
        this.enterOuterAlt(localctx, 3);
        this.state = 478;
        this.emptyStatement();
        break;
      case Protobuf3Parser.COMMENT:
        this.enterOuterAlt(localctx, 4);
        this.state = 479;
        this.match(Protobuf3Parser.COMMENT);
        break;
      case Protobuf3Parser.LINE_COMMENT:
        this.enterOuterAlt(localctx, 5);
        this.state = 480;
        this.match(Protobuf3Parser.LINE_COMMENT);
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function RpcContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_rpc;
  return this;
}

RpcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RpcContext.prototype.constructor = RpcContext;

RpcContext.prototype.RPC = function () {
  return this.getToken(Protobuf3Parser.RPC, 0);
};

RpcContext.prototype.rpcName = function () {
  return this.getTypedRuleContext(RpcNameContext, 0);
};

RpcContext.prototype.LP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.LP);
  } else {
    return this.getToken(Protobuf3Parser.LP, i);
  }
};

RpcContext.prototype.messageType = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(MessageTypeContext);
  } else {
    return this.getTypedRuleContext(MessageTypeContext, i);
  }
};

RpcContext.prototype.RP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.RP);
  } else {
    return this.getToken(Protobuf3Parser.RP, i);
  }
};

RpcContext.prototype.RETURNS = function () {
  return this.getToken(Protobuf3Parser.RETURNS, 0);
};

RpcContext.prototype.LC = function () {
  return this.getToken(Protobuf3Parser.LC, 0);
};

RpcContext.prototype.RC = function () {
  return this.getToken(Protobuf3Parser.RC, 0);
};

RpcContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

RpcContext.prototype.STREAM = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.STREAM);
  } else {
    return this.getToken(Protobuf3Parser.STREAM, i);
  }
};

RpcContext.prototype.optionStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(OptionStatementContext);
  } else {
    return this.getTypedRuleContext(OptionStatementContext, i);
  }
};

RpcContext.prototype.emptyStatement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(EmptyStatementContext);
  } else {
    return this.getTypedRuleContext(EmptyStatementContext, i);
  }
};

RpcContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitRpc(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.RpcContext = RpcContext;

Protobuf3Parser.prototype.rpc = function () {
  var localctx = new RpcContext(this, this._ctx, this.state);
  this.enterRule(localctx, 64, Protobuf3Parser.RULE_rpc);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 483;
    this.match(Protobuf3Parser.RPC);
    this.state = 484;
    this.rpcName();
    this.state = 485;
    this.match(Protobuf3Parser.LP);
    this.state = 487;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 63, this._ctx);
    if (la_ === 1) {
      this.state = 486;
      this.match(Protobuf3Parser.STREAM);
    }
    this.state = 489;
    this.messageType();
    this.state = 490;
    this.match(Protobuf3Parser.RP);
    this.state = 491;
    this.match(Protobuf3Parser.RETURNS);
    this.state = 492;
    this.match(Protobuf3Parser.LP);
    this.state = 494;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 64, this._ctx);
    if (la_ === 1) {
      this.state = 493;
      this.match(Protobuf3Parser.STREAM);
    }
    this.state = 496;
    this.messageType();
    this.state = 497;
    this.match(Protobuf3Parser.RP);
    this.state = 508;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case Protobuf3Parser.LC:
        this.state = 498;
        this.match(Protobuf3Parser.LC);
        this.state = 503;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.SEMI) {
          this.state = 501;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case Protobuf3Parser.OPTION:
              this.state = 499;
              this.optionStatement();
              break;
            case Protobuf3Parser.SEMI:
              this.state = 500;
              this.emptyStatement();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 505;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 506;
        this.match(Protobuf3Parser.RC);
        break;
      case Protobuf3Parser.SEMI:
        this.state = 507;
        this.match(Protobuf3Parser.SEMI);
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ConstantContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_constant;
  return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.fullIdent = function () {
  return this.getTypedRuleContext(FullIdentContext, 0);
};

ConstantContext.prototype.intLit = function () {
  return this.getTypedRuleContext(IntLitContext, 0);
};

ConstantContext.prototype.MINUS = function () {
  return this.getToken(Protobuf3Parser.MINUS, 0);
};

ConstantContext.prototype.PLUS = function () {
  return this.getToken(Protobuf3Parser.PLUS, 0);
};

ConstantContext.prototype.floatLit = function () {
  return this.getTypedRuleContext(FloatLitContext, 0);
};

ConstantContext.prototype.strLit = function () {
  return this.getTypedRuleContext(StrLitContext, 0);
};

ConstantContext.prototype.boolLit = function () {
  return this.getTypedRuleContext(BoolLitContext, 0);
};

ConstantContext.prototype.blockLit = function () {
  return this.getTypedRuleContext(BlockLitContext, 0);
};

ConstantContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitConstant(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ConstantContext = ConstantContext;

Protobuf3Parser.prototype.constant = function () {
  var localctx = new ConstantContext(this, this._ctx, this.state);
  this.enterRule(localctx, 66, Protobuf3Parser.RULE_constant);
  var _la = 0; // Token type
  try {
    this.state = 522;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 70, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 510;
        this.fullIdent();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 512;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS) {
          this.state = 511;
          _la = this._input.LA(1);
          if (
            !(_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS)
          ) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
        }

        this.state = 514;
        this.intLit();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 516;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS) {
          this.state = 515;
          _la = this._input.LA(1);
          if (
            !(_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS)
          ) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
        }

        this.state = 518;
        this.floatLit();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 519;
        this.strLit();
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 520;
        this.boolLit();
        break;

      case 6:
        this.enterOuterAlt(localctx, 6);
        this.state = 521;
        this.blockLit();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BlockLitContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_blockLit;
  return this;
}

BlockLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockLitContext.prototype.constructor = BlockLitContext;

BlockLitContext.prototype.LC = function () {
  return this.getToken(Protobuf3Parser.LC, 0);
};

BlockLitContext.prototype.RC = function () {
  return this.getToken(Protobuf3Parser.RC, 0);
};

BlockLitContext.prototype.ident = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(IdentContext);
  } else {
    return this.getTypedRuleContext(IdentContext, i);
  }
};

BlockLitContext.prototype.COLON = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.COLON);
  } else {
    return this.getToken(Protobuf3Parser.COLON, i);
  }
};

BlockLitContext.prototype.constant = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ConstantContext);
  } else {
    return this.getTypedRuleContext(ConstantContext, i);
  }
};

BlockLitContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitBlockLit(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.BlockLitContext = BlockLitContext;

Protobuf3Parser.prototype.blockLit = function () {
  var localctx = new BlockLitContext(this, this._ctx, this.state);
  this.enterRule(localctx, 68, Protobuf3Parser.RULE_blockLit);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 524;
    this.match(Protobuf3Parser.LC);
    this.state = 531;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << Protobuf3Parser.SYNTAX) |
            (1 << Protobuf3Parser.IMPORT) |
            (1 << Protobuf3Parser.WEAK) |
            (1 << Protobuf3Parser.PUBLIC) |
            (1 << Protobuf3Parser.PACKAGE) |
            (1 << Protobuf3Parser.OPTION) |
            (1 << Protobuf3Parser.OPTIONAL) |
            (1 << Protobuf3Parser.REQUIRED) |
            (1 << Protobuf3Parser.REPEATED) |
            (1 << Protobuf3Parser.EXTENSIONS) |
            (1 << Protobuf3Parser.ONEOF) |
            (1 << Protobuf3Parser.MAP) |
            (1 << Protobuf3Parser.INT32) |
            (1 << Protobuf3Parser.INT64) |
            (1 << Protobuf3Parser.UINT32) |
            (1 << Protobuf3Parser.UINT64) |
            (1 << Protobuf3Parser.SINT32) |
            (1 << Protobuf3Parser.SINT64) |
            (1 << Protobuf3Parser.FIXED32) |
            (1 << Protobuf3Parser.FIXED64) |
            (1 << Protobuf3Parser.SFIXED32) |
            (1 << Protobuf3Parser.SFIXED64) |
            (1 << Protobuf3Parser.BOOL) |
            (1 << Protobuf3Parser.STRING) |
            (1 << Protobuf3Parser.DOUBLE) |
            (1 << Protobuf3Parser.FLOAT) |
            (1 << Protobuf3Parser.BYTES) |
            (1 << Protobuf3Parser.RESERVED) |
            (1 << Protobuf3Parser.TO) |
            (1 << Protobuf3Parser.MAX) |
            (1 << Protobuf3Parser.ENUM))) !==
          0) ||
      (((_la - 32) & ~0x1f) == 0 &&
        ((1 << (_la - 32)) &
          ((1 << (Protobuf3Parser.MESSAGE - 32)) |
            (1 << (Protobuf3Parser.SERVICE - 32)) |
            (1 << (Protobuf3Parser.RPC - 32)) |
            (1 << (Protobuf3Parser.STREAM - 32)) |
            (1 << (Protobuf3Parser.RETURNS - 32)) |
            (1 << (Protobuf3Parser.BOOL_LIT - 32)) |
            (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !==
          0)
    ) {
      this.state = 525;
      this.ident();
      this.state = 526;
      this.match(Protobuf3Parser.COLON);
      this.state = 527;
      this.constant();
      this.state = 533;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 534;
    this.match(Protobuf3Parser.RC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EmptyStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_emptyStatement;
  return this;
}

EmptyStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SEMI = function () {
  return this.getToken(Protobuf3Parser.SEMI, 0);
};

EmptyStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEmptyStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EmptyStatementContext = EmptyStatementContext;

Protobuf3Parser.prototype.emptyStatement = function () {
  var localctx = new EmptyStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 70, Protobuf3Parser.RULE_emptyStatement);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 536;
    this.match(Protobuf3Parser.SEMI);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function IdentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_ident;
  return this;
}

IdentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentContext.prototype.constructor = IdentContext;

IdentContext.prototype.IDENTIFIER = function () {
  return this.getToken(Protobuf3Parser.IDENTIFIER, 0);
};

IdentContext.prototype.keywords = function () {
  return this.getTypedRuleContext(KeywordsContext, 0);
};

IdentContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitIdent(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.IdentContext = IdentContext;

Protobuf3Parser.prototype.ident = function () {
  var localctx = new IdentContext(this, this._ctx, this.state);
  this.enterRule(localctx, 72, Protobuf3Parser.RULE_ident);
  try {
    this.state = 540;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case Protobuf3Parser.IDENTIFIER:
        this.enterOuterAlt(localctx, 1);
        this.state = 538;
        this.match(Protobuf3Parser.IDENTIFIER);
        break;
      case Protobuf3Parser.SYNTAX:
      case Protobuf3Parser.IMPORT:
      case Protobuf3Parser.WEAK:
      case Protobuf3Parser.PUBLIC:
      case Protobuf3Parser.PACKAGE:
      case Protobuf3Parser.OPTION:
      case Protobuf3Parser.OPTIONAL:
      case Protobuf3Parser.REQUIRED:
      case Protobuf3Parser.REPEATED:
      case Protobuf3Parser.EXTENSIONS:
      case Protobuf3Parser.ONEOF:
      case Protobuf3Parser.MAP:
      case Protobuf3Parser.INT32:
      case Protobuf3Parser.INT64:
      case Protobuf3Parser.UINT32:
      case Protobuf3Parser.UINT64:
      case Protobuf3Parser.SINT32:
      case Protobuf3Parser.SINT64:
      case Protobuf3Parser.FIXED32:
      case Protobuf3Parser.FIXED64:
      case Protobuf3Parser.SFIXED32:
      case Protobuf3Parser.SFIXED64:
      case Protobuf3Parser.BOOL:
      case Protobuf3Parser.STRING:
      case Protobuf3Parser.DOUBLE:
      case Protobuf3Parser.FLOAT:
      case Protobuf3Parser.BYTES:
      case Protobuf3Parser.RESERVED:
      case Protobuf3Parser.TO:
      case Protobuf3Parser.MAX:
      case Protobuf3Parser.ENUM:
      case Protobuf3Parser.MESSAGE:
      case Protobuf3Parser.SERVICE:
      case Protobuf3Parser.RPC:
      case Protobuf3Parser.STREAM:
      case Protobuf3Parser.RETURNS:
      case Protobuf3Parser.BOOL_LIT:
        this.enterOuterAlt(localctx, 2);
        this.state = 539;
        this.keywords();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FullIdentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_fullIdent;
  return this;
}

FullIdentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullIdentContext.prototype.constructor = FullIdentContext;

FullIdentContext.prototype.ident = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(IdentContext);
  } else {
    return this.getTypedRuleContext(IdentContext, i);
  }
};

FullIdentContext.prototype.DOT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.DOT);
  } else {
    return this.getToken(Protobuf3Parser.DOT, i);
  }
};

FullIdentContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitFullIdent(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FullIdentContext = FullIdentContext;

Protobuf3Parser.prototype.fullIdent = function () {
  var localctx = new FullIdentContext(this, this._ctx, this.state);
  this.enterRule(localctx, 74, Protobuf3Parser.RULE_fullIdent);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 542;
    this.ident();
    this.state = 547;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === Protobuf3Parser.DOT) {
      this.state = 543;
      this.match(Protobuf3Parser.DOT);
      this.state = 544;
      this.ident();
      this.state = 549;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MessageNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_messageName;
  return this;
}

MessageNameContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
MessageNameContext.prototype.constructor = MessageNameContext;

MessageNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

MessageNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMessageName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MessageNameContext = MessageNameContext;

Protobuf3Parser.prototype.messageName = function () {
  var localctx = new MessageNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 76, Protobuf3Parser.RULE_messageName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 550;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumName;
  return this;
}

EnumNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumNameContext.prototype.constructor = EnumNameContext;

EnumNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

EnumNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumNameContext = EnumNameContext;

Protobuf3Parser.prototype.enumName = function () {
  var localctx = new EnumNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 78, Protobuf3Parser.RULE_enumName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 552;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FieldNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_fieldName;
  return this;
}

FieldNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldNameContext.prototype.constructor = FieldNameContext;

FieldNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

FieldNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitFieldName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FieldNameContext = FieldNameContext;

Protobuf3Parser.prototype.fieldName = function () {
  var localctx = new FieldNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 80, Protobuf3Parser.RULE_fieldName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 554;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OneofNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_oneofName;
  return this;
}

OneofNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneofNameContext.prototype.constructor = OneofNameContext;

OneofNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

OneofNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitOneofName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.OneofNameContext = OneofNameContext;

Protobuf3Parser.prototype.oneofName = function () {
  var localctx = new OneofNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 82, Protobuf3Parser.RULE_oneofName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 556;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MapNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_mapName;
  return this;
}

MapNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapNameContext.prototype.constructor = MapNameContext;

MapNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

MapNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMapName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MapNameContext = MapNameContext;

Protobuf3Parser.prototype.mapName = function () {
  var localctx = new MapNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 84, Protobuf3Parser.RULE_mapName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 558;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ServiceNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_serviceName;
  return this;
}

ServiceNameContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ServiceNameContext.prototype.constructor = ServiceNameContext;

ServiceNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

ServiceNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitServiceName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.ServiceNameContext = ServiceNameContext;

Protobuf3Parser.prototype.serviceName = function () {
  var localctx = new ServiceNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 86, Protobuf3Parser.RULE_serviceName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 560;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function RpcNameContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_rpcName;
  return this;
}

RpcNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RpcNameContext.prototype.constructor = RpcNameContext;

RpcNameContext.prototype.ident = function () {
  return this.getTypedRuleContext(IdentContext, 0);
};

RpcNameContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitRpcName(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.RpcNameContext = RpcNameContext;

Protobuf3Parser.prototype.rpcName = function () {
  var localctx = new RpcNameContext(this, this._ctx, this.state);
  this.enterRule(localctx, 88, Protobuf3Parser.RULE_rpcName);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 562;
    this.ident();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MessageTypeContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_messageType;
  return this;
}

MessageTypeContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
MessageTypeContext.prototype.constructor = MessageTypeContext;

MessageTypeContext.prototype.messageName = function () {
  return this.getTypedRuleContext(MessageNameContext, 0);
};

MessageTypeContext.prototype.DOT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.DOT);
  } else {
    return this.getToken(Protobuf3Parser.DOT, i);
  }
};

MessageTypeContext.prototype.ident = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(IdentContext);
  } else {
    return this.getTypedRuleContext(IdentContext, i);
  }
};

MessageTypeContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitMessageType(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.MessageTypeContext = MessageTypeContext;

Protobuf3Parser.prototype.messageType = function () {
  var localctx = new MessageTypeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 90, Protobuf3Parser.RULE_messageType);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 565;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.DOT) {
      this.state = 564;
      this.match(Protobuf3Parser.DOT);
    }

    this.state = 572;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 75, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 567;
        this.ident();
        this.state = 568;
        this.match(Protobuf3Parser.DOT);
      }
      this.state = 574;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 75, this._ctx);
    }

    this.state = 575;
    this.messageName();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EnumTypeContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_enumType;
  return this;
}

EnumTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumTypeContext.prototype.constructor = EnumTypeContext;

EnumTypeContext.prototype.enumName = function () {
  return this.getTypedRuleContext(EnumNameContext, 0);
};

EnumTypeContext.prototype.DOT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(Protobuf3Parser.DOT);
  } else {
    return this.getToken(Protobuf3Parser.DOT, i);
  }
};

EnumTypeContext.prototype.ident = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(IdentContext);
  } else {
    return this.getTypedRuleContext(IdentContext, i);
  }
};

EnumTypeContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitEnumType(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.EnumTypeContext = EnumTypeContext;

Protobuf3Parser.prototype.enumType = function () {
  var localctx = new EnumTypeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 92, Protobuf3Parser.RULE_enumType);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 578;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === Protobuf3Parser.DOT) {
      this.state = 577;
      this.match(Protobuf3Parser.DOT);
    }

    this.state = 585;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 580;
        this.ident();
        this.state = 581;
        this.match(Protobuf3Parser.DOT);
      }
      this.state = 587;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
    }

    this.state = 588;
    this.enumName();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function IntLitContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_intLit;
  return this;
}

IntLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntLitContext.prototype.constructor = IntLitContext;

IntLitContext.prototype.INT_LIT = function () {
  return this.getToken(Protobuf3Parser.INT_LIT, 0);
};

IntLitContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitIntLit(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.IntLitContext = IntLitContext;

Protobuf3Parser.prototype.intLit = function () {
  var localctx = new IntLitContext(this, this._ctx, this.state);
  this.enterRule(localctx, 94, Protobuf3Parser.RULE_intLit);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 590;
    this.match(Protobuf3Parser.INT_LIT);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function StrLitContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_strLit;
  return this;
}

StrLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrLitContext.prototype.constructor = StrLitContext;

StrLitContext.prototype.STR_LIT = function () {
  return this.getToken(Protobuf3Parser.STR_LIT, 0);
};

StrLitContext.prototype.PROTO3_LIT_SINGLE = function () {
  return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
};

StrLitContext.prototype.PROTO3_LIT_DOBULE = function () {
  return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
};

StrLitContext.prototype.PROTO2_LIT_SINGLE = function () {
  return this.getToken(Protobuf3Parser.PROTO2_LIT_SINGLE, 0);
};

StrLitContext.prototype.PROTO2_LIT_DOBULE = function () {
  return this.getToken(Protobuf3Parser.PROTO2_LIT_DOBULE, 0);
};

StrLitContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitStrLit(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.StrLitContext = StrLitContext;

Protobuf3Parser.prototype.strLit = function () {
  var localctx = new StrLitContext(this, this._ctx, this.state);
  this.enterRule(localctx, 96, Protobuf3Parser.RULE_strLit);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 592;
    _la = this._input.LA(1);
    if (
      !(
        ((_la - 37) & ~0x1f) == 0 &&
        ((1 << (_la - 37)) &
          ((1 << (Protobuf3Parser.PROTO3_LIT_SINGLE - 37)) |
            (1 << (Protobuf3Parser.PROTO3_LIT_DOBULE - 37)) |
            (1 << (Protobuf3Parser.PROTO2_LIT_SINGLE - 37)) |
            (1 << (Protobuf3Parser.PROTO2_LIT_DOBULE - 37)) |
            (1 << (Protobuf3Parser.STR_LIT - 37)))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BoolLitContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_boolLit;
  return this;
}

BoolLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolLitContext.prototype.constructor = BoolLitContext;

BoolLitContext.prototype.BOOL_LIT = function () {
  return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
};

BoolLitContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitBoolLit(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.BoolLitContext = BoolLitContext;

Protobuf3Parser.prototype.boolLit = function () {
  var localctx = new BoolLitContext(this, this._ctx, this.state);
  this.enterRule(localctx, 98, Protobuf3Parser.RULE_boolLit);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 594;
    this.match(Protobuf3Parser.BOOL_LIT);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FloatLitContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_floatLit;
  return this;
}

FloatLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FloatLitContext.prototype.constructor = FloatLitContext;

FloatLitContext.prototype.FLOAT_LIT = function () {
  return this.getToken(Protobuf3Parser.FLOAT_LIT, 0);
};

FloatLitContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitFloatLit(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.FloatLitContext = FloatLitContext;

Protobuf3Parser.prototype.floatLit = function () {
  var localctx = new FloatLitContext(this, this._ctx, this.state);
  this.enterRule(localctx, 100, Protobuf3Parser.RULE_floatLit);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 596;
    this.match(Protobuf3Parser.FLOAT_LIT);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function CommentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_comment;
  return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT = function () {
  return this.getToken(Protobuf3Parser.COMMENT, 0);
};

CommentContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitComment(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.CommentContext = CommentContext;

Protobuf3Parser.prototype.comment = function () {
  var localctx = new CommentContext(this, this._ctx, this.state);
  this.enterRule(localctx, 102, Protobuf3Parser.RULE_comment);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 598;
    this.match(Protobuf3Parser.COMMENT);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function LineCommentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_lineComment;
  return this;
}

LineCommentContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
LineCommentContext.prototype.constructor = LineCommentContext;

LineCommentContext.prototype.LINE_COMMENT = function () {
  return this.getToken(Protobuf3Parser.LINE_COMMENT, 0);
};

LineCommentContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitLineComment(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.LineCommentContext = LineCommentContext;

Protobuf3Parser.prototype.lineComment = function () {
  var localctx = new LineCommentContext(this, this._ctx, this.state);
  this.enterRule(localctx, 104, Protobuf3Parser.RULE_lineComment);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 600;
    this.match(Protobuf3Parser.LINE_COMMENT);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function KeywordsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = Protobuf3Parser.RULE_keywords;
  return this;
}

KeywordsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordsContext.prototype.constructor = KeywordsContext;

KeywordsContext.prototype.SYNTAX = function () {
  return this.getToken(Protobuf3Parser.SYNTAX, 0);
};

KeywordsContext.prototype.IMPORT = function () {
  return this.getToken(Protobuf3Parser.IMPORT, 0);
};

KeywordsContext.prototype.WEAK = function () {
  return this.getToken(Protobuf3Parser.WEAK, 0);
};

KeywordsContext.prototype.PUBLIC = function () {
  return this.getToken(Protobuf3Parser.PUBLIC, 0);
};

KeywordsContext.prototype.PACKAGE = function () {
  return this.getToken(Protobuf3Parser.PACKAGE, 0);
};

KeywordsContext.prototype.OPTION = function () {
  return this.getToken(Protobuf3Parser.OPTION, 0);
};

KeywordsContext.prototype.OPTIONAL = function () {
  return this.getToken(Protobuf3Parser.OPTIONAL, 0);
};

KeywordsContext.prototype.REQUIRED = function () {
  return this.getToken(Protobuf3Parser.REQUIRED, 0);
};

KeywordsContext.prototype.REPEATED = function () {
  return this.getToken(Protobuf3Parser.REPEATED, 0);
};

KeywordsContext.prototype.EXTENSIONS = function () {
  return this.getToken(Protobuf3Parser.EXTENSIONS, 0);
};

KeywordsContext.prototype.ONEOF = function () {
  return this.getToken(Protobuf3Parser.ONEOF, 0);
};

KeywordsContext.prototype.MAP = function () {
  return this.getToken(Protobuf3Parser.MAP, 0);
};

KeywordsContext.prototype.INT32 = function () {
  return this.getToken(Protobuf3Parser.INT32, 0);
};

KeywordsContext.prototype.INT64 = function () {
  return this.getToken(Protobuf3Parser.INT64, 0);
};

KeywordsContext.prototype.UINT32 = function () {
  return this.getToken(Protobuf3Parser.UINT32, 0);
};

KeywordsContext.prototype.UINT64 = function () {
  return this.getToken(Protobuf3Parser.UINT64, 0);
};

KeywordsContext.prototype.SINT32 = function () {
  return this.getToken(Protobuf3Parser.SINT32, 0);
};

KeywordsContext.prototype.SINT64 = function () {
  return this.getToken(Protobuf3Parser.SINT64, 0);
};

KeywordsContext.prototype.FIXED32 = function () {
  return this.getToken(Protobuf3Parser.FIXED32, 0);
};

KeywordsContext.prototype.FIXED64 = function () {
  return this.getToken(Protobuf3Parser.FIXED64, 0);
};

KeywordsContext.prototype.SFIXED32 = function () {
  return this.getToken(Protobuf3Parser.SFIXED32, 0);
};

KeywordsContext.prototype.SFIXED64 = function () {
  return this.getToken(Protobuf3Parser.SFIXED64, 0);
};

KeywordsContext.prototype.BOOL = function () {
  return this.getToken(Protobuf3Parser.BOOL, 0);
};

KeywordsContext.prototype.STRING = function () {
  return this.getToken(Protobuf3Parser.STRING, 0);
};

KeywordsContext.prototype.DOUBLE = function () {
  return this.getToken(Protobuf3Parser.DOUBLE, 0);
};

KeywordsContext.prototype.FLOAT = function () {
  return this.getToken(Protobuf3Parser.FLOAT, 0);
};

KeywordsContext.prototype.BYTES = function () {
  return this.getToken(Protobuf3Parser.BYTES, 0);
};

KeywordsContext.prototype.RESERVED = function () {
  return this.getToken(Protobuf3Parser.RESERVED, 0);
};

KeywordsContext.prototype.TO = function () {
  return this.getToken(Protobuf3Parser.TO, 0);
};

KeywordsContext.prototype.MAX = function () {
  return this.getToken(Protobuf3Parser.MAX, 0);
};

KeywordsContext.prototype.ENUM = function () {
  return this.getToken(Protobuf3Parser.ENUM, 0);
};

KeywordsContext.prototype.MESSAGE = function () {
  return this.getToken(Protobuf3Parser.MESSAGE, 0);
};

KeywordsContext.prototype.SERVICE = function () {
  return this.getToken(Protobuf3Parser.SERVICE, 0);
};

KeywordsContext.prototype.RPC = function () {
  return this.getToken(Protobuf3Parser.RPC, 0);
};

KeywordsContext.prototype.STREAM = function () {
  return this.getToken(Protobuf3Parser.STREAM, 0);
};

KeywordsContext.prototype.RETURNS = function () {
  return this.getToken(Protobuf3Parser.RETURNS, 0);
};

KeywordsContext.prototype.BOOL_LIT = function () {
  return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
};

KeywordsContext.prototype.accept = function (visitor) {
  if (visitor instanceof Protobuf3Visitor) {
    return visitor.visitKeywords(this);
  } else {
    return visitor.visitChildren(this);
  }
};

Protobuf3Parser.KeywordsContext = KeywordsContext;

Protobuf3Parser.prototype.keywords = function () {
  var localctx = new KeywordsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 106, Protobuf3Parser.RULE_keywords);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 602;
    _la = this._input.LA(1);
    if (
      !(
        ((_la & ~0x1f) == 0 &&
          ((1 << _la) &
            ((1 << Protobuf3Parser.SYNTAX) |
              (1 << Protobuf3Parser.IMPORT) |
              (1 << Protobuf3Parser.WEAK) |
              (1 << Protobuf3Parser.PUBLIC) |
              (1 << Protobuf3Parser.PACKAGE) |
              (1 << Protobuf3Parser.OPTION) |
              (1 << Protobuf3Parser.OPTIONAL) |
              (1 << Protobuf3Parser.REQUIRED) |
              (1 << Protobuf3Parser.REPEATED) |
              (1 << Protobuf3Parser.EXTENSIONS) |
              (1 << Protobuf3Parser.ONEOF) |
              (1 << Protobuf3Parser.MAP) |
              (1 << Protobuf3Parser.INT32) |
              (1 << Protobuf3Parser.INT64) |
              (1 << Protobuf3Parser.UINT32) |
              (1 << Protobuf3Parser.UINT64) |
              (1 << Protobuf3Parser.SINT32) |
              (1 << Protobuf3Parser.SINT64) |
              (1 << Protobuf3Parser.FIXED32) |
              (1 << Protobuf3Parser.FIXED64) |
              (1 << Protobuf3Parser.SFIXED32) |
              (1 << Protobuf3Parser.SFIXED64) |
              (1 << Protobuf3Parser.BOOL) |
              (1 << Protobuf3Parser.STRING) |
              (1 << Protobuf3Parser.DOUBLE) |
              (1 << Protobuf3Parser.FLOAT) |
              (1 << Protobuf3Parser.BYTES) |
              (1 << Protobuf3Parser.RESERVED) |
              (1 << Protobuf3Parser.TO) |
              (1 << Protobuf3Parser.MAX) |
              (1 << Protobuf3Parser.ENUM))) !==
            0) ||
        (((_la - 32) & ~0x1f) == 0 &&
          ((1 << (_la - 32)) &
            ((1 << (Protobuf3Parser.MESSAGE - 32)) |
              (1 << (Protobuf3Parser.SERVICE - 32)) |
              (1 << (Protobuf3Parser.RPC - 32)) |
              (1 << (Protobuf3Parser.STREAM - 32)) |
              (1 << (Protobuf3Parser.RETURNS - 32)) |
              (1 << (Protobuf3Parser.BOOL_LIT - 32)))) !==
            0)
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

exports.Protobuf3Parser = Protobuf3Parser;
