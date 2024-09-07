"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8880],{6508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(4848),l=s(8453);const i={},t="release",a={id:"usage/release",title:"release",description:"The release-plz release command releases all the unpublished packages.",source:"@site/docs/usage/release.md",sourceDirName:"usage",slug:"/usage/release",permalink:"/docs/usage/release",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/usage/release.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"release-pr",permalink:"/docs/usage/release-pr"},next:{title:"init",permalink:"/docs/usage/init"}},o={},c=[{value:"Gitlab",id:"gitlab",level:2},{value:"Gitea",id:"gitea",level:2},{value:"Json output",id:"json-output",level:2},{value:"The <code>tag</code> field",id:"the-tag-field",level:3},{value:"The <code>prs</code> field",id:"the-prs-field",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"release",children:"release"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"release-plz release"})," command releases all the unpublished packages."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For example, let's say you have a workspace with two packages: ",(0,r.jsx)(n.code,{children:"pkg-a"}),"\n(version 0.3.1) and ",(0,r.jsx)(n.code,{children:"pkg-b"})," (version 0.2.2).\nThe crates.io registry contains ",(0,r.jsx)(n.code,{children:"pkg-a"})," version 0.3.1, but it doesn't contain\n",(0,r.jsx)(n.code,{children:"pkg-b"})," version 0.2.2 because you didn't publish this version yet.\nIn this case, release-plz would release ",(0,r.jsx)(n.code,{children:"pkg-b"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For every release, release-plz:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Creates a git tag named ",(0,r.jsx)(n.code,{children:"<package_name>-v<version>"})," (e.g. ",(0,r.jsx)(n.code,{children:"tokio-v1.8.1"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Publishes the package to the cargo registry by running ",(0,r.jsx)(n.code,{children:"cargo publish"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Publishes a GitHub/Gitea/GitLab release based on the git tag."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the tag name, ",(0,r.jsx)(n.code,{children:"<package_name>-"})," is omitted if there's only one\npackage to publish (i.e. with ",(0,r.jsx)(n.code,{children:"publish != false"})," in the ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file)."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"release-plz release"})," doesn't edit your ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," files and doesn't\npush new commits. It releases the packages as they are in your repository.\nFor this reason, you typically use the ",(0,r.jsx)(n.code,{children:"release-plz release"})," command in the main branch\nafter you run ",(0,r.jsx)(n.code,{children:"release-plz update"}),"\nor you merge a pull request opened with ",(0,r.jsx)(n.code,{children:"release-plz release-pr"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["If all packages are already published, the ",(0,r.jsx)(n.code,{children:"release-plz release"})," command does nothing."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more, run ",(0,r.jsx)(n.code,{children:"release-plz release --help"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"gitlab",children:"Gitlab"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"release-plz release"})," also supports creating releases for repositories hosted on Gitlab with\nthe ",(0,r.jsx)(n.code,{children:"--backend gitlab"})," option:"]}),"\n",(0,r.jsx)(n.p,{children:"You need to create a token in your Gitlab repo (Settings/Access Tokens) with the following\npermissions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Role: ",(0,r.jsx)(n.code,{children:"Maintainer"})," or higher"]}),"\n",(0,r.jsxs)(n.li,{children:["Scopes:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api"})," (to create a release)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"write_repository"})," (to create tag)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the Gitlab ",(0,r.jsx)(n.a,{href:"https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html",children:"project access tokens"}),"\ndocs."]}),"\n",(0,r.jsxs)(n.p,{children:["Then you can run ",(0,r.jsx)(n.code,{children:"release-plz release"})," with the following arguments:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"release-plz release --backend gitlab --git-token <gitlab_token>"})}),"\n",(0,r.jsx)(n.h2,{id:"gitea",children:"Gitea"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"releases-plz"})," supports creating releases on Gitea with the ",(0,r.jsx)(n.code,{children:"--backend gitea"})," option."]}),"\n",(0,r.jsx)(n.p,{children:"TODO: document how to create a token on Gitea."}),"\n",(0,r.jsxs)(n.p,{children:["Then you can run ",(0,r.jsx)(n.code,{children:"release-plz release"})," in Gitea CI with the following arguments:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"release-plz release --backend gitea --git-token <gitea_token>"})}),"\n",(0,r.jsx)(n.h2,{id:"json-output",children:"Json output"}),"\n",(0,r.jsxs)(n.p,{children:["You can get info about the outcome of this command by appending ",(0,r.jsx)(n.code,{children:"-o json"})," to the command.\nStdout will contain info about the release:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "releases": [\n    {\n      "package_name": "<package_name>",\n      "prs": "<prs>",\n      "tag": "<tag_name>",\n      "version": "<version>"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "releases": [\n    {\n      "package_name": "my_crate",\n      "prs": [\n        {\n          "html_url": "https://github.com/user/proj/pull/1439",\n          "number": 1439\n        }\n      ],\n      "tag": "v0.1.0",\n      "version": "0.1.0"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If release-plz didn't release any packages, the ",(0,r.jsx)(n.code,{children:"releases"})," array will be empty."]}),"\n",(0,r.jsxs)(n.h3,{id:"the-tag-field",children:["The ",(0,r.jsx)(n.code,{children:"tag"})," field"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"tag"})," field is present even if the user disabled the tag creation with the\n",(0,r.jsx)(n.a,{href:"/docs/config#the-git_tag_enable-field",children:(0,r.jsx)(n.code,{children:"git_tag_enable"})})," field.\nThis is because the user might want to use the tag name to create the tag\nby themselves."]}),"\n",(0,r.jsxs)(n.h3,{id:"the-prs-field",children:["The ",(0,r.jsx)(n.code,{children:"prs"})," field"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"prs"})," is an array of PRs present in the changelog body of the release.\nUsually, they are the PRs containing the changes that were released."]}),"\n",(0,r.jsx)(n.p,{children:"Each entry of the array is an object containing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"html_url"}),": The URL of the PR."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": The number of the PR."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(6540);const l={},i=r.createContext(l);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);