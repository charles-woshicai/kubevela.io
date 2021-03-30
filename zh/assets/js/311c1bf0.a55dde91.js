(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),r=(t(0),t(201)),o={title:"How-to"},l={unversionedId:"kube/component",id:"kube/component",isDocsHomePage:!1,title:"How-to",description:"In this section, it will introduce how to use raw K8s Object to declare app components via ComponentDefinition.",source:"@site/docs/kube/component.md",slug:"/kube/component",permalink:"/zh/docs/kube/component",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/kube/component.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1617065268,formattedLastUpdatedAt:"3/30/2021",sidebar:"docs",previous:{title:"Known Limitations",permalink:"/zh/docs/helm/known-issues"},next:{title:"Attach Traits",permalink:"/zh/docs/kube/trait"}},p=[{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[]}],c={toc:p};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section, it will introduce how to use raw K8s Object to declare app components via ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned ",Object(r.b)("a",{parentName:"p",href:"../platform-engineers/definition-and-templates"},"the definition and template concepts"),".")),Object(r.b)("h2",{id:"declare-componentdefinition"},"Declare ",Object(r.b)("inlineCode",{parentName:"h2"},"ComponentDefinition")),Object(r.b)("p",null,"Here is a raw template based ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," example which provides a abstraction for worker workload type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: kube-worker\n  namespace: default\nspec:\n  workload: \n    definition: \n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    kube: \n      template:\n        apiVersion: apps/v1\n        kind: Deployment\n        spec:\n          selector:\n            matchLabels:\n              app: nginx\n          template:\n            metadata:\n              labels:\n                app: nginx\n            spec:\n              containers:\n              - name: nginx\n                ports:\n                - containerPort: 80 \n      parameters: \n      - name: image\n        required: true\n        type: string\n        fieldPaths: \n        - "spec.template.spec.containers[0].image"\n')),Object(r.b)("p",null,"In detail, the ",Object(r.b)("inlineCode",{parentName:"p"},".spec.schematic.kube")," contains template of a workload resource and\nconfigurable parameters."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".spec.schematic.kube.template")," is the raw template in YAML format."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".spec.schematic.kube.parameters")," contains a set of configurable parameters. The ",Object(r.b)("inlineCode",{parentName:"li"},"name"),", ",Object(r.b)("inlineCode",{parentName:"li"},"type"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"fieldPaths")," are required fields, ",Object(r.b)("inlineCode",{parentName:"li"},"description")," and ",Object(r.b)("inlineCode",{parentName:"li"},"required")," are optional fields.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The parameter ",Object(r.b)("inlineCode",{parentName:"li"},"name")," must be unique in a ",Object(r.b)("inlineCode",{parentName:"li"},"ComponentDefinition"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," indicates the data type of value set to the field. This is a required field which will help KubeVela to generate a OpenAPI JSON schema for the parameters automatically. In raw template, only basic data types are allowed, including ",Object(r.b)("inlineCode",{parentName:"li"},"string"),", ",Object(r.b)("inlineCode",{parentName:"li"},"number"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),", while ",Object(r.b)("inlineCode",{parentName:"li"},"array")," and ",Object(r.b)("inlineCode",{parentName:"li"},"object")," are not."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fieldPaths")," in the parameter specifies an array of fields within the template that will be overwritten by the value of this parameter. Fields are specified as JSON field paths without a leading dot, for example\n",Object(r.b)("inlineCode",{parentName:"li"},"spec.replicas"),", ",Object(r.b)("inlineCode",{parentName:"li"},"spec.containers[0].image"),".")))),Object(r.b)("h2",{id:"declare-an-application"},"Declare an ",Object(r.b)("inlineCode",{parentName:"h2"},"Application")),Object(r.b)("p",null,"Here is an example ",Object(r.b)("inlineCode",{parentName:"p"},"Application"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n")),Object(r.b)("p",null,"Since parameters only support basic data type, values in ",Object(r.b)("inlineCode",{parentName:"p"},"properties")," should be simple key-value, ",Object(r.b)("inlineCode",{parentName:"p"},"<parameterName>: <parameterValue>"),"."),Object(r.b)("p",null,"Deploy the ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," and verify the running workload instance."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\nNAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nmycomp                   1/1     1            1           66m\n")),Object(r.b)("p",null,"And check the parameter works."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n\"nginx:1.14.0\"\n")))}b.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=b(t),d=a,u=m["".concat(o,".").concat(d)]||m[d]||s[d]||r;return t?i.a.createElement(u,l(l({ref:n},c),{},{components:t})):i.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);