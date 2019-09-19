# Angular Workspace

在Angular CLI的V6版本中，首次出现了[Workspace](https://angular.io/guide/workspace-config)的概念，通过angular-cli构建anngular项目的不再是一个单纯的application。随着angular-cli.json被angular。json取代，angular开始支持多项目的workspace，除了主项目目录下的app外，用户可根据自己的需要去丰富自己的workspace，每个project都可以根据需要进行配置，例如用户可创建内部的component-library，以及可单独运行的sub-project等。

# init project 

此文基于 [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7 进行项目的搭建。
首先，初始化workspace：
```
ng new reina-workspace
```
项目初始化完成后，找到根目录下的angular.json文件，其中最外层是对整个workspace的配置信息，另外包含一个projects对象，其主要结构如下：
```
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "reina-workspace": {
      ......
    },
    "reina-workspace-e2e": {
      ......
    }
  },
  "defaultProject": "reina-workspace"
}
```
* **$schema**: 对该workspace下的ng生成命令进行个性化配置。
* **version**: 版本信息。
* **newProjectRoot**: 新建application或library的目录，默认指向的是src/projects目录。
* **defaultProject**: 默认项目，通过ng new创建的application会被默认设置为默认项目，可将其更改为projects中的其他application。

在projects目录下，默认会生成两个project，一个对应defaultProject，另一个是对应的e2e测试项目，可根据需要对每个project进行配置，其主要有以下参数：
```
"reina-workspace": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": { ...... },
        "serve": { ...... },
        "extract-i18n": { ...... },
        "test": { ...... },
        "lint": { ...... }
      }
    },
```
* **root**: 指定项目的根目录
* **sourceRoot**: 项目源文件的位置
* **projectType**: 项目的类型，application or library
* **prefix**: component或diractive的默认前缀，默认为app，可自定义
* **schematics**: 可对单独对内部项目的ng生成命令进行个性化配置
* **architect**: 对各个单独配置project的自动化命令，如build,serve,lint,test等。

项目初始化完成后，在package.json文件中，会默认生成如下的script对象，可通过ng serve启动默认项目，同样可以运行ng serve/ng build等命令，其都会对应到上述project的architect配置中。
```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```

## ng generate application

了解完项目的基本结构之后，尝试创建projects目录下的第一个application，控制台中运行以下命令：
```
ng generate application first-app
```
执行完成后，在projects目录下成功生成了两个project，分别为‘first-app’和‘first-app-e2e’,此时查看angular.json文件，发现在projects中自动添加了两个project:
```
 "projects": {
    "reina-workspace": { ...... },
    "reina-workspace-e2e": { ...... },
    "first-app": { ...... },
    "first-app-e2e": { ...... }
  }
```
可以通过ng serve first-app来启动该项目，也可通过ng build first-app命令对项目进行build,当然，也可以在package.json的script中添加相应的配置，如添加以下代码，通过npm run start-first-app命令启动first-app.
```
"start-first-app": "ng serve first-app"
```

## ng generate library

同样，我们可以通过ng generate library命令，构建内部的library，在控制台中运行以下命令:
```
ng generate library first-library
```
执行完成后，在projects目录下又生成了一个名为first-library的project，library不会生成测试文件，此时查看angular.json文件，发现在projects中自动添加了一个project:
```
 "projects": {
    "reina-workspace": { ...... },
    "reina-workspace-e2e": { ...... },
    "first-app": { ...... },
    "first-app-e2e": { ...... },
    "first-library": { ...... }
  }
```
同样，我们可以通过ng build first-library命令进行build, build完成后，则可以将其引入到application中使用。在first-app/src/app/app.module.ts中引入FirstLibraryModule(import { FirstLibraryModule } from 'first-·library'),通过这种方式，就可以first-app项目中正常使用first-library库了。
注意，library需先经过build后使用，可以通过在package.json中配置npm的&操作符配置多命令的快捷启动方式。如：
```
"launch":'ng build first-library && ng serve first-app' 
```
