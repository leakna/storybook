"use strict";(self.webpackChunk_11_next=self.webpackChunk_11_next||[]).push([[620],{"./src/app/component/atom/dynamicButton/dynamicButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dynamicButton_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function cov_5y5tyxmv6(){var path="D:\\sabaicode\\code\\exercise\\11.next\\src\\app\\component\\atom\\dynamicButton\\dynamicButton.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"39b81435b7a0a586fceb9e02c7402a22894d93a9"===coverage[path].hash||(coverage[path]={path:"D:\\sabaicode\\code\\exercise\\11.next\\src\\app\\component\\atom\\dynamicButton\\dynamicButton.tsx",statementMap:{0:{start:{line:2,column:22},end:{line:20,column:1}},1:{start:{line:3,column:23},end:{line:9,column:5}},2:{start:{line:10,column:20},end:{line:14,column:5}},3:{start:{line:15,column:4},end:{line:19,column:7}},4:{start:{line:22,column:0},end:{line:106,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:22},end:{line:2,column:23}},loc:{start:{line:2,column:94},end:{line:20,column:1}},line:2}},branchMap:{0:{loc:{start:{line:2,column:25},end:{line:2,column:42}},type:"default-arg",locations:[{start:{line:2,column:33},end:{line:2,column:42}}],line:2},1:{loc:{start:{line:2,column:44},end:{line:2,column:63}},type:"default-arg",locations:[{start:{line:2,column:54},end:{line:2,column:63}}],line:2},2:{loc:{start:{line:2,column:65},end:{line:2,column:79}},type:"default-arg",locations:[{start:{line:2,column:72},end:{line:2,column:79}}],line:2}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0},b:{0:[0],1:[0],2:[0]},inputSourceMap:{version:3,sources:["D:/sabaicode/code/exercise/11.next/src/app/component/atom/dynamicButton/dynamicButton.tsx"],sourcesContent:["const DynamicButton = ({\r\n  title = \"default\",\r\n  variant = \"primary\",\r\n  size = \"small\",\r\n  ...props\r\n}: {\r\n  title?: string;\r\n  variant?: 'primary'|'secondary'|'danger'|'warning'|'success';\r\n  size?: 'small'|'medidum'|'large';\r\n  props:HTMLButtonElement\r\n  \r\n}) => {\r\n  const variantObj: any = {\r\n    primary: \"bg-blue-500\",\r\n    secondary: \"bg-gray-500\",\r\n    danger: \"bg-red-500\",\r\n    warning: \"bg-yellow-500\",\r\n    success: \"bg-green-500\",\r\n    \r\n  };\r\n  const sizeObj:any={\r\n    small: 'text-sm py-1 px-2',\r\n    medium: 'text-md py-2 px-4',\r\n    large: 'text-lg py-3 px-6',\r\n  }\r\n  return <button className={`${variantObj[variant]} ${sizeObj[size]}`} {...props}>{title}</button>;\r\n};\r\n\r\nexport default DynamicButton;\r\n"],names:["DynamicButton","title","variant","size","props","variantObj","primary","secondary","danger","warning","success","sizeObj","small","medium","large","button","className"],mappings:";AAAA,MAAMA,gBAAgB,CAAC,EACrBC,QAAQ,SAAS,EACjBC,UAAU,SAAS,EACnBC,OAAO,OAAO,EACd,GAAGC,OAOJ;IACC,MAAMC,aAAkB;QACtBC,SAAS;QACTC,WAAW;QACXC,QAAQ;QACRC,SAAS;QACTC,SAAS;IAEX;IACA,MAAMC,UAAY;QAChBC,OAAO;QACPC,QAAQ;QACRC,OAAO;IACT;IACA,qBAAO,KAACC;QAAOC,WAAW,CAAC,EAAEX,UAAU,CAACH,QAAQ,CAAC,CAAC,EAAES,OAAO,CAACR,KAAK,CAAC,CAAC;QAAG,GAAGC,KAAK;kBAAGH;;AACnF;AAEA,eAAeD,cAAc"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"39b81435b7a0a586fceb9e02c7402a22894d93a9"});var actualCoverage=coverage[path];return cov_5y5tyxmv6=function(){return actualCoverage},actualCoverage}cov_5y5tyxmv6(),cov_5y5tyxmv6().s[0]++;const DynamicButton=({title=(cov_5y5tyxmv6().b[0][0]++,"default"),variant=(cov_5y5tyxmv6().b[1][0]++,"primary"),size=(cov_5y5tyxmv6().b[2][0]++,"small"),...props})=>{cov_5y5tyxmv6().f[0]++;const variantObj=(cov_5y5tyxmv6().s[1]++,{primary:"bg-blue-500",secondary:"bg-gray-500",danger:"bg-red-500",warning:"bg-yellow-500",success:"bg-green-500"}),sizeObj=(cov_5y5tyxmv6().s[2]++,{small:"text-sm py-1 px-2",medium:"text-md py-2 px-4",large:"text-lg py-3 px-6"});return cov_5y5tyxmv6().s[3]++,(0,jsx_runtime.jsx)("button",{className:`${variantObj[variant]} ${sizeObj[size]}`,...props,children:title})},dynamicButton=DynamicButton;cov_5y5tyxmv6().s[4]++,DynamicButton.__docgenInfo={description:"",methods:[],displayName:"DynamicButton",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary'|'secondary'|'danger'|'warning'|'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small'|'medidum'|'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medidum'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:'"small"',computed:!1}},props:{required:!0,tsType:{name:"HTMLButtonElement"},description:""}}};const dynamicButton_stories={title:"exercise/dynamicbutton",component:dynamicButton},Primary={args:{title:"gay",size:"large",variant:"primary"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "gay",\n    size: "large",\n    variant: \'primary\'\n  }\n}',...Primary.parameters?.docs?.source}}}}}]);