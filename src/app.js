const screens = [
  { id: 1, title: "Splash", group: "Onboarding", image: "./public/screens/screen-01.png" },
  { id: 2, title: "Start", group: "Onboarding", image: "./public/screens/screen-02.png" },
  { id: 3, title: "Start benefit", group: "Onboarding", image: "./public/screens/screen-03.png" },
  { id: 4, title: "Phone verification", group: "Sign up", image: "./public/screens/screen-04.png" },
  { id: 5, title: "Country code select", group: "Sign up", image: "./public/screens/screen-05.png" },
  { id: 6, title: "Code entry", group: "Sign up", image: "./public/screens/screen-06.png" },
  { id: 7, title: "Code complete", group: "Sign up", image: "./public/screens/screen-07.png" },
  { id: 8, title: "Password empty", group: "Sign up", image: "./public/screens/screen-08.png" },
  { id: 9, title: "Password valid", group: "Sign up", image: "./public/screens/screen-09.png" },
  { id: 10, title: "Password error", group: "Sign up", image: "./public/screens/screen-10.png" },
  { id: 11, title: "Profile empty", group: "Sign up", image: "./public/screens/screen-11.png" },
  { id: 12, title: "Profile filled", group: "Sign up", image: "./public/screens/screen-12.png" },
  { id: 13, title: "Birth date picker", group: "Sign up", image: "./public/screens/screen-13.png" },
  { id: 14, title: "Terms", group: "Sign up", image: "./public/screens/screen-14.png" },
  { id: 15, title: "Terms checked", group: "Sign up", image: "./public/screens/screen-15.png" },
  { id: 16, title: "Welcome", group: "Sign up", image: "./public/screens/screen-16.png" },
  { id: 17, title: "Login empty", group: "Login", image: "./public/screens/screen-17.png" },
  { id: 18, title: "Login error", group: "Login", image: "./public/screens/screen-18.png" },
  { id: 19, title: "Login filled", group: "Login", image: "./public/screens/screen-19.png" },
  { id: 20, title: "Find password phone", group: "Find password", image: "./public/screens/screen-20.png" },
  { id: 21, title: "Find password country", group: "Find password", image: "./public/screens/screen-21.png" },
  { id: 22, title: "Find password code", group: "Find password", image: "./public/screens/screen-22.png" },
  { id: 23, title: "Find password verified", group: "Find password", image: "./public/screens/screen-23.png" },
  { id: 24, title: "New password empty", group: "Find password", image: "./public/screens/screen-24.png" },
  { id: 25, title: "New password valid", group: "Find password", image: "./public/screens/screen-25.png" },
  { id: 26, title: "New password error", group: "Find password", image: "./public/screens/screen-26.png" },
  { id: 27, title: "New password complete", group: "Find password", image: "./public/screens/screen-27.png" },
  { id: 28, title: "Home", group: "Main", image: "./public/screens/screen-28.png" },
  { id: 29, title: "Notifications", group: "Notifications", image: "./public/screens/screen-29.png" },
  { id: 30, title: "Mark all read dialog", group: "Notifications", image: "./public/screens/screen-30.png" },
  { id: 31, title: "Mark all read toast", group: "Notifications", image: "./public/screens/screen-31.png" },
  { id: 32, title: "Notifications read", group: "Notifications", image: "./public/screens/screen-32.png" },
  { id: 33, title: "Fine log calendar", group: "Fine log", image: "./public/screens/screen-33.png" },
  { id: 34, title: "Fine log categories", group: "Fine log", image: "./public/screens/screen-34.png" },
  { id: 35, title: "Fine log tabs", group: "Fine log", image: "./public/screens/screen-35.png" },
  { id: 36, title: "Body type analysis", group: "Analysis", image: "./public/screens/screen-36.png" },
  { id: 37, title: "Front image", group: "Analysis", image: "./public/screens/screen-37.png" },
  { id: 38, title: "Front details", group: "Analysis", image: "./public/screens/screen-38.png" },
  { id: 39, title: "Side image", group: "Analysis", image: "./public/screens/screen-39.png" },
  { id: 40, title: "Side details", group: "Analysis", image: "./public/screens/screen-40.png" },
  { id: 41, title: "Body circumference", group: "Circumference", image: "./public/screens/screen-41.png" },
  { id: 42, title: "WHR guide", group: "Circumference", image: "./public/screens/screen-42.png" },
  { id: 43, title: "WHR guide expanded", group: "Circumference", image: "./public/screens/screen-43.png" },
  { id: 44, title: "BMI guide", group: "Circumference", image: "./public/screens/screen-44.png" },
  { id: 45, title: "BMI guide expanded", group: "Circumference", image: "./public/screens/screen-45.png" },
  { id: 46, title: "Left and right tilt", group: "Analysis detail", image: "./public/screens/screen-46.png" },
  { id: 47, title: "Head tilt", group: "Analysis detail", image: "./public/screens/screen-47.png" },
  { id: 48, title: "Shoulder height", group: "Analysis detail", image: "./public/screens/screen-48.png" },
  { id: 49, title: "Pelvic tilt", group: "Analysis detail", image: "./public/screens/screen-49.png" },
  { id: 50, title: "Knee tilt", group: "Analysis detail", image: "./public/screens/screen-50.png" },
  { id: 51, title: "O/X legs", group: "Analysis detail", image: "./public/screens/screen-51.png" },
  { id: 52, title: "Turtle neck", group: "Analysis detail", image: "./public/screens/screen-52.png" },
  { id: 53, title: "Round shoulder", group: "Analysis detail", image: "./public/screens/screen-53.png" },
  { id: 54, title: "Fore-and-aft tilt", group: "Analysis detail", image: "./public/screens/screen-54.png" },
  { id: 55, title: "Circumference results", group: "Circumference", image: "./public/screens/screen-55.png" },
  { id: 56, title: "Waist guide", group: "Circumference detail", image: "./public/screens/screen-56.png" },
  { id: 57, title: "Hip guide", group: "Circumference detail", image: "./public/screens/screen-57.png" },
  { id: 58, title: "Thigh guide", group: "Circumference detail", image: "./public/screens/screen-58.png" },
  { id: 59, title: "Arm length guide", group: "Circumference detail", image: "./public/screens/screen-59.png" },
  { id: 60, title: "Leg length guide", group: "Circumference detail", image: "./public/screens/screen-60.png" },
  { id: 61, title: "Weight record", group: "Weight", image: "./public/screens/screen-61.png" },
  { id: 62, title: "Weight record scrolled", group: "Weight", image: "./public/screens/screen-62.png" },
  { id: 63, title: "Weight empty", group: "Weight", image: "./public/screens/screen-63.png" },
  { id: 64, title: "Weight manual input", group: "Weight", image: "./public/screens/screen-64.png" },
  { id: 65, title: "Weight history", group: "Weight", image: "./public/screens/screen-65.png" },
  { id: 66, title: "Weight results EN", group: "Weight", image: "./public/screens/screen-66.png" },
  { id: 67, title: "Weight results KR", group: "Weight", image: "./public/screens/screen-67.png" },
  { id: 68, title: "Weight update toast", group: "Weight", image: "./public/screens/screen-68.png" },
  { id: 69, title: "Fit news", group: "News", image: "./public/screens/screen-69.png" },
  { id: 70, title: "MY", group: "My", image: "./public/screens/screen-70.png" },
  { id: 71, title: "Scale settings empty", group: "Scale", image: "./public/screens/screen-71.png" },
  { id: 72, title: "Scale list", group: "Scale", image: "./public/screens/screen-72.png" },
  { id: 73, title: "Scale connected", group: "Scale", image: "./public/screens/screen-73.png" },
  { id: 74, title: "Scale info", group: "Scale", image: "./public/screens/screen-74.png" },
  { id: 75, title: "Scale saved toast", group: "Scale", image: "./public/screens/screen-75.png" },
  { id: 76, title: "Scale unregister dialog", group: "Scale", image: "./public/screens/screen-76.png" },
  { id: 77, title: "Scale unregistered toast", group: "Scale", image: "./public/screens/screen-77.png" },
  { id: 78, title: "Register scale", group: "Scale", image: "./public/screens/screen-78.png" },
  { id: 79, title: "Registering scale", group: "Scale", image: "./public/screens/screen-79.png" },
  { id: 80, title: "Scale registered toast", group: "Scale", image: "./public/screens/screen-80.png" },
  { id: 81, title: "Scale limit dialog", group: "Scale", image: "./public/screens/screen-81.png" },
  { id: 82, title: "Notice list", group: "Notice", image: "./public/screens/screen-82.png" },
  { id: 83, title: "Notice detail", group: "Notice", image: "./public/screens/screen-83.png" }
];

const bottomTabs = [
  { label: "홈", target: 28 },
  { label: "파인로그", target: 33 },
  { label: "핏뉴스", target: 69 },
  { label: "MY", target: 70 }
];

const tabGroups = [
  { label: "홈", icon: "home", target: 28, active: (id) => id === 28 },
  { label: "파인로그", icon: "log", target: 33, active: (id) => id >= 33 && id <= 68 },
  { label: "핏뉴스", icon: "news", target: 69, active: (id) => id === 69 },
  { label: "MY", icon: "my", target: 70, active: (id) => id >= 70 && id <= 83 }
];

const flowShortcuts = [
  { label: "가입", target: 2 },
  { label: "로그인", target: 17 },
  { label: "홈", target: 28 },
  { label: "분석", target: 36 },
  { label: "몸무게", target: 61 },
  { label: "체중계", target: 71 },
  { label: "공지", target: 82 }
];

const tap = (x, y, w, h, target, label) => ({ x, y, w, h, target, label });
const pop = (x, y, w, h, overlay, label) => ({ x, y, w, h, overlay, label });
const act = (x, y, w, h, action, label) => ({ x, y, w, h, action, label });
const closeX = () => act(292, 10, 34, 34, "close-overlay", "닫기");
const hotspotMap = {
  1: [tap(0, 0, 375, 812, 2, "Start")],
  2: [tap(28, 582, 319, 52, 3, "Kakao start"), tap(28, 650, 319, 52, 4, "Phone start")],
  3: [tap(28, 582, 319, 52, 4, "Kakao sign up"), tap(28, 650, 319, 52, 4, "Phone sign up")],
  4: [tap(94, 300, 260, 240, 6, "Enter phone"), tap(20, 462, 335, 70, 6, "Verify phone"), tap(20, 330, 74, 56, 5, "Country code")],
  5: [tap(22, 358, 330, 48, 4, "Select country")],
  6: [tap(20, 322, 335, 56, 6, "Resend code"), tap(20, 432, 335, 160, 7, "Enter code")],
  7: [tap(26, 733, 323, 52, 8, "Next")],
  8: [tap(26, 296, 323, 58, 9, "Enter password")],
  9: [tap(26, 414, 323, 58, 11, "Confirm password")],
  10: [tap(26, 296, 323, 58, 9, "Fix password")],
  11: [tap(26, 302, 323, 430, 13, "Fill profile")],
  12: [tap(26, 302, 323, 430, 13, "Fix profile")],
  13: [tap(26, 875, 323, 64, 14, "Next")],
  14: [
    tap(20, 236, 335, 82, 15, "Agree all"),
    pop(42, 318, 306, 58, "terms-detail", "Terms detail"),
    pop(42, 378, 306, 58, "terms-detail", "Privacy detail")
  ],
  15: [tap(26, 733, 323, 52, 16, "Complete sign up")],
  16: [tap(26, 733, 323, 52, 28, "Start app")],
  17: [
    tap(26, 306, 323, 58, 19, "Enter phone"),
    tap(26, 392, 323, 58, 19, "Enter password"),
    tap(102, 517, 170, 42, 2, "Sign up"),
    tap(186, 517, 166, 42, 20, "Find password"),
    tap(26, 733, 323, 52, 19, "Login")
  ],
  18: [tap(26, 312, 323, 58, 19, "Fix login"), tap(102, 517, 170, 42, 2, "Sign up"), tap(186, 517, 166, 42, 20, "Find password")],
  19: [tap(26, 733, 323, 52, 28, "Complete login")],
  20: [tap(20, 330, 74, 56, 21, "Country code"), tap(102, 330, 238, 56, 22, "Enter phone")],
  21: [tap(22, 358, 330, 48, 20, "Select country")],
  22: [tap(44, 489, 287, 58, 23, "Enter code"), tap(26, 733, 323, 52, 23, "Verify")],
  23: [tap(26, 733, 323, 52, 24, "Next")],
  24: [tap(26, 296, 323, 205, 25, "Enter passwords"), tap(26, 733, 323, 52, 25, "Next")],
  25: [tap(26, 733, 323, 52, 27, "Save password")],
  26: [tap(26, 296, 323, 58, 25, "Fix password")],
  27: [tap(26, 733, 323, 52, 17, "Go login")],
  28: [
    tap(312, 50, 44, 44, 29, "Notifications"),
    tap(284, 316, 68, 44, 33, "Fine log more"),
    tap(20, 372, 162, 58, 36, "Body analysis"),
    tap(193, 372, 162, 58, 41, "Circumference"),
    tap(20, 440, 162, 58, 36, "Motion analysis"),
    tap(193, 440, 162, 58, 61, "Weight"),
    tap(284, 526, 68, 44, 69, "Fit news more"),
    tap(20, 580, 249, 150, 69, "Fit news item")
  ],
  29: [pop(266, 91, 88, 40, 30, "Mark all read"), tap(24, 151, 327, 96, 32, "Open notification")],
  30: [act(20, 62, 142, 48, "close-overlay", "Cancel"), pop(174, 62, 142, 48, 31, "Mark read")],
  31: [tap(0, 0, 375, 812, 32, "Dismiss")],
  32: [tap(48, 138, 280, 90, 36, "Open analysis notice")],
  33: [tap(24, 544, 327, 82, 34, "Open log day")],
  34: [tap(24, 378, 327, 84, 36, "Body analysis"), tap(24, 472, 327, 84, 41, "Circumference"), tap(24, 566, 327, 84, 61, "Weight")],
  35: [tap(16, 146, 82, 44, 36, "Body tab"), tap(105, 146, 82, 44, 41, "Circumference tab"), tap(194, 146, 96, 44, 36, "Motion tab"), tap(294, 146, 64, 44, 61, "Weight tab")],
  36: [
    pop(25, 256, 145, 260, 37, "정면 이미지"),
    pop(204, 256, 145, 260, 39, "측면 이미지"),
    pop(24, 528, 327, 52, 46, "좌우 기울기"),
    pop(24, 586, 327, 52, 47, "머리 좌우 기울기"),
    pop(24, 644, 327, 52, 48, "어깨 좌우 높이"),
    pop(24, 702, 327, 52, 49, "골반 좌우 기울기"),
    pop(24, 760, 327, 52, 50, "무릎 기울기"),
    pop(24, 818, 327, 52, 51, "O/X 다리"),
    pop(24, 1058, 327, 52, 52, "거북목"),
    pop(24, 1116, 327, 52, 53, "라운드숄더"),
    pop(24, 1174, 327, 52, 54, "앞위 기울기")
  ],
  37: [closeX()],
  38: [closeX()],
  39: [closeX()],
  40: [closeX()],
  41: [pop(24, 255, 327, 84, 42, "WHR 안내"), pop(24, 348, 327, 84, 44, "BMI 안내"), tap(24, 650, 327, 58, 55, "더보기")],
  42: [closeX()],
  43: [tap(24, 52, 56, 56, 41, "Back")],
  44: [closeX()],
  45: [tap(24, 52, 56, 56, 41, "Back")],
  46: [closeX()],
  47: [closeX()],
  48: [closeX()],
  49: [closeX()],
  50: [closeX()],
  51: [closeX()],
  52: [closeX()],
  53: [closeX()],
  54: [closeX()],
  55: [
    pop(278, 470, 72, 44, "body-type", "체형 유형 더보기"),
    pop(24, 610, 327, 62, 56, "허리 둘레"),
    pop(24, 672, 327, 62, 57, "엉덩이 둘레"),
    pop(24, 734, 327, 62, 58, "허벅지 둘레"),
    pop(24, 796, 327, 62, 59, "팔 길이"),
    pop(24, 858, 327, 62, 60, "다리 길이")
  ],
  56: [closeX()],
  57: [closeX()],
  58: [closeX()],
  59: [closeX()],
  60: [closeX()],
  61: [pop(20, 326, 335, 56, 64, "Update weight"), tap(20, 475, 335, 600, 65, "Weight history")],
  62: [pop(20, 326, 335, 56, 64, "Update weight"), tap(20, 475, 335, 600, 65, "Weight history")],
  63: [pop(20, 326, 335, 56, 64, "Update weight")],
  64: [act(30, 484, 143, 52, "close-overlay", "Cancel"), pop(203, 484, 143, 52, 68, "Save weight")],
  65: [tap(24, 52, 56, 56, 61, "Back"), tap(24, 218, 327, 86, 66, "Open result")],
  66: [tap(24, 52, 56, 56, 65, "Back"), tap(0, 0, 375, 812, 67, "Korean result")],
  67: [tap(24, 52, 56, 56, 65, "Back"), pop(196, 370, 153, 52, 68, "Save weight")],
  68: [tap(0, 0, 375, 812, 61, "Dismiss")],
  69: [tap(28, 126, 319, 150, 69, "News card")],
  70: [tap(24, 126, 327, 62, 82, "Notice"), tap(24, 188, 327, 62, 72, "Scale settings")],
  71: [pop(20, 434, 335, 70, 78, "Register scale")],
  72: [
    pop(296, 162, 38, 42, 76, "Unregister first scale"),
    pop(336, 162, 34, 42, 74, "First scale info"),
    pop(296, 214, 38, 42, 76, "Unregister second scale"),
    pop(336, 214, 34, 42, 74, "Second scale info"),
    pop(296, 266, 38, 42, 76, "Unregister third scale"),
    pop(336, 266, 34, 42, 74, "Third scale info"),
    tap(20, 376, 250, 52, 73, "Connect available scale"),
    pop(20, 428, 250, 52, 78, "Register available scale"),
    pop(20, 480, 250, 52, 81, "Register limit")
  ],
  73: [
    pop(296, 162, 38, 42, 76, "Unregister connected scale"),
    pop(336, 162, 34, 42, 74, "Connected scale info"),
    pop(296, 214, 38, 42, 76, "Unregister scale"),
    pop(336, 214, 34, 42, 74, "Scale info"),
    pop(20, 376, 250, 52, 78, "Register available scale"),
    pop(20, 428, 250, 52, 81, "Register limit")
  ],
  74: [act(20, 168, 142, 48, "close-overlay", "Cancel"), pop(174, 168, 142, 48, 75, "Save")],
  75: [tap(0, 0, 375, 812, 72, "Dismiss")],
  76: [act(20, 62, 142, 48, "close-overlay", "Cancel"), pop(174, 62, 142, 48, 77, "Unregister")],
  77: [tap(0, 0, 375, 812, 72, "Dismiss")],
  78: [act(20, 244, 142, 48, "close-overlay", "Cancel"), pop(174, 244, 142, 48, 79, "Register")],
  79: [pop(0, 0, 260, 132, 80, "Complete")],
  80: [tap(0, 0, 375, 812, 72, "Dismiss")],
  81: [act(210, 82, 100, 36, "close-overlay", "Confirm")],
  82: [tap(24, 140, 327, 78, 83, "Notice detail")],
  83: [tap(24, 52, 56, 56, 82, "Back")]
};

const assetVersion = "14";
const modalAssets = {
  30: { image: "./public/overlays/modal-30.png", width: 335, height: 130 },
  37: { image: "./public/overlays/modal-37.png", width: 335, height: 470 },
  38: { image: "./public/overlays/modal-38.png", width: 335, height: 470 },
  39: { image: "./public/overlays/modal-39.png", width: 335, height: 470 },
  40: { image: "./public/overlays/modal-40.png", width: 335, height: 470 },
  42: { image: "./public/overlays/modal-42.png", width: 335, height: 400 },
  44: { image: "./public/overlays/modal-44.png", width: 335, height: 400 },
  46: { image: "./public/overlays/modal-46.png", width: 335, height: 470 },
  47: { image: "./public/overlays/modal-47.png", width: 335, height: 470 },
  48: { image: "./public/overlays/modal-48.png", width: 335, height: 470 },
  49: { image: "./public/overlays/modal-49.png", width: 335, height: 470 },
  50: { image: "./public/overlays/modal-50.png", width: 335, height: 470 },
  51: { image: "./public/overlays/modal-51.png", width: 335, height: 470 },
  52: { image: "./public/overlays/modal-52.png", width: 335, height: 470 },
  53: { image: "./public/overlays/modal-53.png", width: 335, height: 470 },
  54: { image: "./public/overlays/modal-54.png", width: 335, height: 470 },
  56: { image: "./public/overlays/modal-56.png", width: 335, height: 668 },
  57: { image: "./public/overlays/modal-57.png", width: 335, height: 668 },
  58: { image: "./public/overlays/modal-58.png", width: 335, height: 668 },
  59: { image: "./public/overlays/modal-59.png", width: 335, height: 668 },
  60: { image: "./public/overlays/modal-60.png", width: 335, height: 668 },
  74: { image: "./public/overlays/modal-74.png", width: 335, height: 236 },
  76: { image: "./public/overlays/modal-76.png", width: 335, height: 130 },
  78: { image: "./public/overlays/modal-78.png", width: 335, height: 312 },
  79: { image: "./public/overlays/modal-79.png", width: 260, height: 132 },
  81: { image: "./public/overlays/modal-81.png", width: 335, height: 130 }
};
const modalTitleOverrides = {};
const customOverlays = {
  64: {
    type: "weight-input",
    title: "몸무게 직접 입력하기",
    fields: ["몸무게(kg)", "체지방률(%)", "체지방량(kg)", "근육량(kg)"]
  },
  "terms-detail": {
    type: "terms-detail"
  },
  "exit-signup": {
    type: "exit-signup"
  },
  "body-type": {
    title: "체형 유형",
    subtitle: "역삼각형",
    body: "어깨와 상체 라인이 비교적 발달하고 허리와 하체로 갈수록 폭이 좁아지는 유형입니다. 상체 밸런스를 부드럽게 잡고, 하체 근력과 골반 주변 안정성을 함께 관리하면 전체 균형을 더 자연스럽게 만들 수 있습니다.",
    tags: ["상체 발달", "허리 라인 뚜렷", "하체 보완 추천"]
  }
};
const backTargets = {
  4: 3,
  5: 4,
  6: 4,
  7: 6,
  8: 7,
  9: 8,
  10: 8,
  11: 10,
  12: 11,
  13: 12,
  14: 12,
  15: 14,
  17: 2,
  20: 17,
  21: 20,
  22: 20,
  23: 22,
  24: 23,
  25: 24,
  26: 24,
  27: 25,
  29: 28,
  32: 29,
  33: 28,
  34: 33,
  35: 33,
  36: 35,
  37: 36,
  38: 36,
  39: 36,
  40: 36,
  41: 35,
  42: 41,
  43: 41,
  44: 41,
  45: 41,
  46: 38,
  47: 38,
  48: 38,
  49: 38,
  50: 38,
  51: 38,
  52: 40,
  53: 40,
  54: 40,
  55: 41,
  56: 55,
  57: 55,
  58: 55,
  59: 55,
  60: 55,
  61: 35,
  62: 61,
  63: 35,
  64: 61,
  65: 61,
  66: 65,
  67: 65,
  71: 70,
  72: 70,
  73: 72,
  74: 72,
  78: 71,
  82: 70,
  83: 82
};
const screenMeta = {
  11: { height: 977 },
  12: { height: 992 },
  13: { height: 992 },
  28: { height: 916 },
  31: { width: 335, height: 40, compact: true },
  36: { height: 1349 },
  41: { height: 1130 },
  55: { height: 1082 },
  61: { height: 1391 },
  62: { height: 1391 },
  64: { width: 371, height: 578 },
  65: { height: 1391 },
  66: { width: 371, height: 442 },
  67: { width: 371, height: 442 },
  68: { width: 355, height: 40, compact: true },
  69: { height: 1316 },
  75: { width: 335, height: 40, compact: true },
  77: { width: 335, height: 40, compact: true },
  80: { width: 335, height: 40, compact: true }
};
let current = Number(new URLSearchParams(window.location.search).get("screen")) || 1;
let zoom = 1;
let playing = false;
let playTimer = null;
let query = "";
let overlay = null;

const app = document.querySelector("#app");
const skippedErrorScreens = {
  10: 9,
  12: 13,
  18: 19,
  26: 25
};

const titleOverrides = {
  1: ["스플래시", "온보딩"],
  2: ["시작 화면", "온보딩"],
  3: ["시작 혜택", "온보딩"],
  4: ["휴대폰 인증", "회원가입"],
  5: ["국가번호 선택", "회원가입"],
  6: ["인증번호 입력", "회원가입"],
  7: ["인증 완료", "회원가입"],
  8: ["비밀번호 입력", "회원가입"],
  9: ["비밀번호 1차 입력", "회원가입"],
  10: ["비밀번호 오류", "회원가입"],
  11: ["추가 정보 입력", "회원가입"],
  12: ["추가 정보 오류", "회원가입"],
  13: ["추가 정보 완료", "회원가입"],
  14: ["약관 동의", "회원가입"],
  15: ["약관 동의 완료", "회원가입"],
  16: ["가입 완료", "회원가입"],
  17: ["로그인", "로그인"],
  18: ["로그인 오류", "로그인"],
  19: ["로그인 입력 완료", "로그인"],
  20: ["비밀번호 찾기 인증", "비밀번호 찾기"],
  21: ["국가번호 선택", "비밀번호 찾기"],
  22: ["인증번호 입력", "비밀번호 찾기"],
  23: ["인증 완료", "비밀번호 찾기"],
  24: ["새 비밀번호 입력", "비밀번호 찾기"],
  25: ["새 비밀번호 유효", "비밀번호 찾기"],
  26: ["새 비밀번호 오류", "비밀번호 찾기"],
  27: ["비밀번호 변경 완료", "비밀번호 찾기"],
  28: ["홈", "메인"],
  29: ["알림", "알림"],
  30: ["모두 읽음 확인", "알림"],
  31: ["모두 읽음 토스트", "알림"],
  32: ["읽은 알림", "알림"],
  33: ["파인로그 달력", "파인로그"],
  34: ["파인로그 항목", "파인로그"],
  35: ["파인로그 탭", "파인로그"],
  36: ["체형 분석", "분석"],
  37: ["정면 이미지", "분석"],
  38: ["정면 상세", "분석"],
  39: ["측면 이미지", "분석"],
  40: ["측면 상세", "분석"],
  41: ["신체 둘레", "신체 둘레"],
  42: ["WHR 안내", "신체 둘레"],
  43: ["WHR 상세", "신체 둘레"],
  44: ["BMI 안내", "신체 둘레"],
  45: ["BMI 상세", "신체 둘레"],
  46: ["좌우 기울기", "분석 상세"],
  47: ["머리 기울기", "분석 상세"],
  48: ["어깨 높이 차이", "분석 상세"],
  49: ["골반 기울기", "분석 상세"],
  50: ["무릎 기울기", "분석 상세"],
  51: ["O/X 다리", "분석 상세"],
  52: ["거북목", "분석 상세"],
  53: ["라운드 숄더", "분석 상세"],
  54: ["전후 기울기", "분석 상세"],
  55: ["신체 둘레 결과", "신체 둘레"],
  56: ["허리 둘레", "신체 둘레 상세"],
  57: ["엉덩이 둘레", "신체 둘레 상세"],
  58: ["허벅지 둘레", "신체 둘레 상세"],
  59: ["팔 길이", "신체 둘레 상세"],
  60: ["다리 길이", "신체 둘레 상세"],
  61: ["몸무게 기록", "몸무게"],
  62: ["몸무게 기록 상세", "몸무게"],
  63: ["몸무게 빈 상태", "몸무게"],
  64: ["몸무게 직접 입력", "몸무게"],
  65: ["몸무게 히스토리", "몸무게"],
  66: ["몸무게 측정 결과", "몸무게"],
  67: ["몸무게 측정 결과", "몸무게"],
  68: ["몸무게 저장 토스트", "몸무게"],
  69: ["핏뉴스", "핏뉴스"],
  70: ["MY", "마이"],
  71: ["체중계 설정", "체중계"],
  72: ["체중계 목록", "체중계"],
  73: ["체중계 연결됨", "체중계"],
  74: ["체중계 정보", "체중계"],
  75: ["체중계 저장 토스트", "체중계"],
  76: ["등록 해제 확인", "체중계"],
  77: ["등록 해제 토스트", "체중계"],
  78: ["체중계 등록", "체중계"],
  79: ["체중계 등록 중", "체중계"],
  80: ["체중계 등록 완료", "체중계"],
  81: ["등록 제한 안내", "체중계"],
  82: ["공지사항", "공지"],
  83: ["공지사항 상세", "공지"]
};

function displayTitle(screen) {
  return titleOverrides[screen.id]?.[0] || screen.title;
}

function displayGroup(screen) {
  return titleOverrides[screen.id]?.[1] || screen.group;
}

function clampScreen(id) {
  const requested = Number(id);
  const withoutErrors = skippedErrorScreens[requested] || requested;
  const normalized = withoutErrors === 71 ? 72 : withoutErrors;
  return Math.min(Math.max(normalized, 1), screens.length);
}

function goTo(id) {
  current = clampScreen(id);
  overlay = null;
  const url = new URL(window.location.href);
  url.searchParams.set("screen", String(current));
  window.history.replaceState({}, "", url);
  render();
  preloadAround(current);
}

function showOverlay(id) {
  overlay = id;
  render();
  preloadAround(id);
}

function closeOverlay() {
  overlay = null;
  render();
}

function filteredScreens() {
  const needle = query.trim().toLowerCase();
  if (!needle) return screens;
  return screens.filter((screen) => {
    return `${screen.id} ${displayTitle(screen)} ${displayGroup(screen)}`.toLowerCase().includes(needle);
  });
}

function preloadAround(id) {
  if (!Number.isFinite(Number(id))) return;
  [id - 1, id + 1, id + 2].forEach((screenId) => {
    const screen = screens[screenId - 1];
    if (!screen) return;
    const image = new Image();
    image.src = `${screen.image}?v=${assetVersion}`;
  });
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <span class="mark">F</span>
        <div>
          <h1>파인핏</h1>
          <p>유저앱 프로토타입</p>
        </div>
      </div>
      <div class="shortcut-list">
        ${flowShortcuts.map((item) => `<button type="button" data-screen="${item.target}">${item.label}</button>`).join("")}
      </div>
    </aside>
  `;
}

function hotspotStyle(hotspot, meta) {
  const baseWidth = meta.width || 375;
  const baseHeight = meta.height || 812;
  return [
    `left: ${(hotspot.x / baseWidth) * 100}%`,
    `top: ${(hotspot.y / baseHeight) * 100}%`,
    `width: ${(hotspot.w / baseWidth) * 100}%`,
    `height: ${(hotspot.h / baseHeight) * 100}%`
  ].join("; ");
}

function renderHotspots(screenId, metaOverride) {
  const hotspots = hotspotMap[screenId] || [];
  const meta = metaOverride || screenMeta[screenId] || { width: 375, height: 812 };
  return hotspots
    .map((hotspot) => {
      const targetAttr = hotspot.overlay
        ? `data-overlay="${hotspot.overlay}"`
        : hotspot.action
          ? `data-action="${hotspot.action}"`
        : `data-screen="${hotspot.target}"`;
      return `
        <button
          class="tap-area"
          type="button"
          ${targetAttr}
          style="${hotspotStyle(hotspot, meta)}"
          aria-label="${hotspot.label}"
        ></button>
      `;
    })
    .join("");
}

function renderModalTitle(overlayId) {
  const title = modalTitleOverrides[overlayId];
  if (!title) return "";
  return `<div class="modal-title-cover">${title}</div>`;
}

function renderCustomOverlay(id) {
  const data = customOverlays[id];
  if (!data) return "";
  if (data.type === "terms-detail") {
    return `
      <div class="popup-layer is-dialog" aria-label="파인핏 사용약관">
        <div class="terms-detail-modal">
          <header>
            <h3>파인핏 사용약관</h3>
            <button type="button" data-action="close-overlay" aria-label="닫기">×</button>
          </header>
          <div class="terms-detail-scroll">
            <h4>제1장 총칙</h4>
            <p>이 약관은 주식회사 웰루비가 제공하는 파인핏 서비스의 이용 조건과 절차, 회사와 회원의 권리와 의무를 정합니다.</p>
            <h4>제2조 목적</h4>
            <p>회원은 본 서비스를 이용함에 있어 관련 법령과 본 약관을 준수해야 하며, 회사는 안정적인 서비스 제공을 위해 필요한 조치를 할 수 있습니다.</p>
            <h4>제3조 서비스 이용</h4>
            <p>파인핏은 건강 관리와 체형 분석, 운동 및 기록 관리를 돕는 서비스를 제공합니다. 세부 내용은 서비스 화면과 공지사항을 통해 안내됩니다.</p>
            <h4>제4조 개인정보 보호</h4>
            <p>회사는 개인정보 처리방침에 따라 회원 정보를 안전하게 관리하며, 회원 동의 없이 목적 외로 사용하지 않습니다.</p>
            <h4>제5조 기타</h4>
            <p>본 약관에 정하지 않은 사항은 관계 법령과 일반적인 상관례에 따릅니다.</p>
          </div>
        </div>
        <button class="popup-close-hotspot" type="button" data-action="close-overlay" aria-label="닫기"></button>
      </div>
    `;
  }
  if (data.type === "exit-signup") {
    return `
      <div class="popup-layer is-dialog" aria-label="가입 나가기 확인">
        <div class="exit-signup-modal">
          <h3>이 페이지에서 나가시겠어요?</h3>
          <p>입력한 내용이 저장되지 않을 수 있어요.</p>
          <div>
            <button class="secondary" type="button" data-action="close-overlay">취소</button>
            <button class="primary" type="button" data-screen="17">나가기</button>
          </div>
        </div>
        <button class="popup-close-hotspot" type="button" data-action="close-overlay" aria-label="닫기"></button>
      </div>
    `;
  }
  if (data.type === "weight-input") {
    return `
      <div class="popup-layer is-dialog" aria-label="${data.title}">
        <div class="weight-modal">
          <h3>${data.title}</h3>
          <div class="weight-field-list">
            ${data.fields
              .map(
                (field) => `
                  <label class="weight-field">
                    <span>${field}</span>
                    <input type="text" inputmode="decimal" placeholder="숫자를 입력해 주세요." />
                  </label>
                `
              )
              .join("")}
          </div>
          <div class="weight-modal-actions">
            <button class="secondary" type="button" data-action="close-overlay">취소</button>
            <button class="primary" type="button" data-overlay="68">저장하기</button>
          </div>
        </div>
        <button class="popup-close-hotspot" type="button" data-action="close-overlay" aria-label="닫기"></button>
      </div>
    `;
  }
  return `
    <div class="popup-layer is-dialog" aria-label="${data.title}">
      <div class="custom-modal">
        <button class="custom-modal-close" type="button" data-action="close-overlay" aria-label="닫기">×</button>
        <p>${data.title}</p>
        <h3>${data.subtitle}</h3>
        <div class="custom-modal-figure" aria-hidden="true">
          <span></span>
        </div>
        <p class="custom-modal-body">${data.body}</p>
        <div class="custom-modal-tags">
          ${data.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderOverlay() {
  if (!overlay) return "";
  if (customOverlays[overlay]) return renderCustomOverlay(overlay);
  const screen = screens[overlay - 1];
  const meta = screenMeta[overlay] || { width: 375, height: 812 };
  const modalAsset = modalAssets[overlay];
  const asset = modalAsset || { image: screen.image, width: meta.width || 375, height: meta.height || 812 };
  const compact = meta.compact ? " is-toast" : " is-dialog";
  const hotspotMeta = modalAsset || meta;
  return `
    <div class="popup-layer${compact}" aria-label="${displayTitle(screen)}">
      <div class="popup-content" style="--content-width: ${asset.width}; --content-height: ${asset.height};">
        <img src="${asset.image}?v=${assetVersion}" alt="${displayTitle(screen)}" draggable="false" />
        ${renderModalTitle(overlay)}
        <div class="screen-hotspots">
          ${renderHotspots(overlay, hotspotMeta)}
        </div>
      </div>
      <button class="popup-close-hotspot" type="button" data-action="close-overlay" aria-label="닫기"></button>
    </div>
  `;
}

function shouldShowFixedTabbar(screenId) {
  return screenId >= 28;
}

function activeTabIndex(screenId) {
  return Math.max(0, tabGroups.findIndex((tab) => tab.active(screenId)));
}

function tabIcon(name) {
  const icons = {
    home: `
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <path d="M4.5 13.2 14 4.5l9.5 8.7v10.3a1 1 0 0 1-1 1h-5.2v-7.2h-6.6v7.2H5.5a1 1 0 0 1-1-1V13.2Z" />
      </svg>
    `,
    log: `
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <path d="M5 8.5h10.4M5 8.5v14.2h14.2v-9.8" />
        <path d="m12.8 16.1-.7 3.1 3.1-.7 7.1-7.1-2.4-2.4-7.1 7.1Z" />
        <path d="m18.7 10.2 2.4 2.4" />
      </svg>
    `,
    news: `
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 2.8v3.4M14 21.8v3.4M4.1 14H.7M27.3 14h-3.4M7 7 4.6 4.6M23.4 23.4 21 21M21 7l2.4-2.4M4.6 23.4 7 21" />
        <path d="M9.2 14a4.8 4.8 0 1 1 7.6 3.9c-.8.6-1.2 1.3-1.2 2.2h-3.2c0-.9-.4-1.6-1.2-2.2A4.8 4.8 0 0 1 9.2 14Z" />
      </svg>
    `,
    my: `
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="8" r="5" />
        <path d="M5.2 24.2c.7-5 4.2-7.7 8.8-7.7s8.1 2.7 8.8 7.7H5.2Z" />
      </svg>
    `
  };
  return icons[name] || "";
}

function renderFixedTabbar(screenId) {
  if (!shouldShowFixedTabbar(screenId)) return "";
  return `
    <div class="fixed-tabbar" aria-label="하단 네비게이션">
      ${tabGroups
        .map((tab) => {
          const active = tab.active(screenId) ? " active" : "";
          return `
            <button class="fixed-tab${active}" type="button" data-screen="${tab.target}" aria-label="${tab.label}">
              <span class="fixed-tab-icon">${tabIcon(tab.icon)}</span>
              <span>${tab.label}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderBackHotspot(screenId) {
  if (!backTargets[screenId]) return "";
  if (screenId === 15) return `<button class="back-hotspot" type="button" data-overlay="exit-signup" aria-label="뒤로가기"></button>`;
  return `<button class="back-hotspot" type="button" data-action="app-back" aria-label="뒤로가기"></button>`;
}

function renderScreenContent(screen, meta) {
  return `
    <img src="${screen.image}?v=${assetVersion}" alt="${displayTitle(screen)}" draggable="false" />
    <div class="screen-hotspots" aria-label="App interactions">
      ${renderHotspots(screen.id)}
    </div>
  `;
}

function renderDevice() {
  const screen = screens[current - 1];
  const meta = screenMeta[screen.id] || { width: 375, height: 812 };
  const isScrollable = meta.height > 812 && !meta.compact;
  const isCompact = Boolean(meta.compact);
  const scaleStyle = `--phone-scale: ${zoom}; --active-tab-index: ${activeTabIndex(screen.id)}`;
  return `
    <main class="stage">
      <section class="viewer">
        <button class="nav-hit left" type="button" data-action="prev" aria-label="이전 화면"></button>
        <div class="phone-shell${isScrollable ? " is-scrollable" : ""}${isCompact ? " is-compact" : ""}${shouldShowFixedTabbar(screen.id) ? " has-fixed-tabbar" : ""}" style="${scaleStyle}">
          <div class="screen-viewport">
            <div class="screen-content" style="--content-width: ${meta.width || 375}; --content-height: ${meta.height || 812};">
              ${renderScreenContent(screen, meta)}
            </div>
          </div>
          ${
            shouldShowFixedTabbar(screen.id)
              ? `
                <div class="tab-hotspots" aria-hidden="true">
                  ${bottomTabs.map((tab) => `<button type="button" data-screen="${tab.target}" title="${tab.label}"></button>`).join("")}
                </div>
              `
              : ""
          }
          ${renderBackHotspot(screen.id)}
          ${renderFixedTabbar(screen.id)}
          ${renderOverlay()}
        </div>
        <button class="nav-hit right" type="button" data-action="next" aria-label="다음 화면"></button>
      </section>

    </main>
  `;
}

function render() {
  app.innerHTML = `
    <div class="layout">
      ${renderSidebar()}
      ${renderDevice()}
    </div>
  `;
}

function togglePlay() {
  playing = !playing;
  window.clearInterval(playTimer);
  if (playing) {
    playTimer = window.setInterval(() => {
      if (current >= screens.length) {
        playing = false;
        window.clearInterval(playTimer);
        render();
        return;
      }
      goTo(current + 1);
    }, 1200);
  }
  render();
}

app.addEventListener("click", (event) => {
  const overlayTarget = event.target.closest("[data-overlay]");
  if (overlayTarget) {
    const value = overlayTarget.dataset.overlay;
    showOverlay(Number.isNaN(Number(value)) ? value : Number(value));
    return;
  }

  const screenTarget = event.target.closest("[data-screen]");
  if (screenTarget) {
    goTo(Number(screenTarget.dataset.screen));
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;
  if (action === "first") goTo(1);
  if (action === "last") goTo(screens.length);
  if (action === "prev") goTo(current - 1);
  if (action === "next") goTo(current + 1);
  if (action === "app-back") goTo(backTargets[current] || Math.max(1, current - 1));
  if (action === "close-overlay") closeOverlay();
  if (action === "play") togglePlay();
  if (action === "zoom-out") {
    zoom = Math.max(0.7, Number((zoom - 0.1).toFixed(1)));
    render();
  }
  if (action === "zoom-in") {
    zoom = Math.min(1.3, Number((zoom + 0.1).toFixed(1)));
    render();
  }
});

app.addEventListener("input", (event) => {
  if (event.target.matches('input[type="range"]')) {
    goTo(Number(event.target.value));
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") goTo(current - 1);
  if (event.key === "ArrowRight") goTo(current + 1);
  if (event.key === " ") {
    event.preventDefault();
    togglePlay();
  }
});

goTo(current);
