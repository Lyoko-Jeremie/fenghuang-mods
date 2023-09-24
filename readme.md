# fenghuangTF mods

---

`boot.json` 文件说明

```json lines
{
  "name": "fenghuangTF",
  "version": "0.3",
  "styleFileList": [
  ],
  "scriptFileList_earlyload": [
  ],
  "scriptFileList_inject_early": [
  ],
  "scriptFileList_preload": [
  ],
  "scriptFileList": [
    // 一些补丁，在这些文件中给游戏的内存中追加一些数据
    // 因为需要在游戏js脚本运行后，SC2执行游戏前，执行这些补丁，所以需要插入到SC2Data中和游戏JS脚本一起执行
    "patch-setup_feats.js",
    "patch-canvasmodel-main.js",
    "patch-ingame.js-combatActionColours.js"
  ],
  "tweeFileList": [
    // 追加的 twee 文件
    "game/overworld-forest/loc-forest/mod_change/parasol-tree.twee"
  ],
  "imgFileList": [
    // 追加的图片文件
    "img/transformations/fenghuang/crest/default.png",
    "img/transformations/fenghuang/crestover/default.png",
    "img/transformations/fenghuang/eyes/default.png",
    "img/transformations/fenghuang/leftover/default.png",
    "img/transformations/fenghuang/leftwing/default.png",
    "img/transformations/fenghuang/pendant/default.png",
    "img/transformations/fenghuang/rightover/default.png",
    "img/transformations/fenghuang/rightwing/default.png",
    "img/transformations/fenghuang/tail/default.png",
    "img/transformations/fenghuang/tattoo/default.png"
  ],
  "additionFile": [
    // readme 文件
    "readme.md",
    // 在下面 addonPlugin.params 中使用到了的文件
    "game/base-clothing/addon-replace/canvasmodel-img-Widgets Canvas Model Main.txt",
    "game/base-clothing/addon-replace/images-Widgets Img.txt",
    "game/base-combat/addon-replace/effects-Widgets Effects Man.txt",
    "game/base-debug/addon-replace/Clothes Testing-characterViewer.txt",
    "game/base-debug/addon-replace/clothesTestingImageGenerate-characterViewerModel.txt",
    "game/base-debug/addon-replace/clothesTestingImageGenerate-clothesTestingTransformationsControls.txt",
    "game/base-system/addon-replace/overlays-Characteristics.txt",
    "game/base-system/addon-replace/overlays-cheats.txt",
    "game/base-system/addon-replace/overlays-traits.txt",
    "game/base-system/addon-replace/Transformation Widgets-specialTransform.txt",
    "game/base-system/addon-replace/Transformation Widgets-transformationParts.txt",
    "game/base-system/addon-replace/Transformation Widgets-widget-fenghuangTransform.txt",
    "game/base-system/addon-replace/Widgets Mirror-transformations-list.txt"
  ],
  "addonPlugin": [
    {
      // 使用 TweeReplacer 的 TweeReplacerAddon 插件来替换 twee 文件中的内容
      "modName": "TweeReplacer",
      "addonName": "TweeReplacerAddon",
      "modVersion": "1.0.0",
      "params": [
        // 告诉 TweeReplacerAddon 插件的参数，哪些地方需要替换，有以下四种模式
        {   // 模式1：用字符串replace替换字符串findString
          "passage": "<PassageName>",
          "findString": "",
          "replace": ""
        },
        {   // 模式2：用文件replaceFile的内容替换字符串findString
          "passage": "<PassageName>",
          "findString": "",
          "replaceFile": ""
        },
        {   // 模式3：用字符串replace替换正则表达式findRegex匹配到的内容
          "passage": "<PassageName>",
          "findRegex": "",
          "replace": ""
        },
        {   // 模式4：用文件replaceFile的内容替换正则表达式findRegex匹配到的内容
          "passage": "<PassageName>",
          "findRegex": "",
          "replaceFile": ""
        },
      ]
    }
  ],
  "dependenceInfo": [
    // 声明依赖的 mod
    {   // 追加和替换图片需要用到的 mod
      "modName": "ModLoader DoL ImageLoaderHook",
      "version": "1.0.0"
    },
    {   // twee 替换需要用到的 mod
      "modName": "TweeReplacer",
      "version": "1.0.0"
    }
  ]
}

```


