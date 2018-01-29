# bootstrap-breakpoints-vue
Use bootstrap breakpoints as Vue.js directive inside your templates.

Based on: [Bootstrap V4](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)
Download on [NPMJS](https://www.npmjs.com/package/@eli5/bootstrap-breakpoints-vue)

Breakpoints are:
* xs: 0
* sm: 576
* md: 768
* lg: 992
* xl: 1200

## Installation
This Vue plugin can be installed via npm or yarn
### npm 
```
npm install @eli5/bootstrap-breakpoints-vue
```
### yarn
```
yarn add @eli5/bootstrap-breakpoints-vue
```

## Initialization
```javascript
import Vue from 'vue.js'
import breakpoints from '@eli5/bootstrap-breakpoints-vue'
Vue.use(breakpoins);
```

## Usage
### Inside template
#### Down
```html
  <span v-if="$mediaBreakpointDown('xs')"></span>
  <span v-if="$mediaBreakpointDown('sm')"></span>
  <span v-if="$mediaBreakpointDown('md')"></span>
  <span v-if="$mediaBreakpointDown('lg')"></span>
  <span v-if="$mediaBreakpointDown('xl')"></span>
```
#### Up
```html
  <span v-if="$mediaBreakpointUp('xs')"></span>
  <span v-if="$mediaBreakpointUp('sm')"></span>
  <span v-if="$mediaBreakpointUp('md')"></span>
  <span v-if="$mediaBreakpointUp('lg')"></span>
  <span v-if="$mediaBreakpointUp('xl')"></span>
```
#### Only
```html
  <span v-if="$mediaBreakpointOnly('xs')"></span>
  <span v-if="$mediaBreakpointOnly('sm')"></span>
  <span v-if="$mediaBreakpointOnly('md')"></span>
  <span v-if="$mediaBreakpointOnly('lg')"></span>
  <span v-if="$mediaBreakpointOnly('xl')"></span>
```
#### Between
```html
  <span v-if="$mediaBreakpointBetween('xs', 'sm')"></span>
  <span v-if="$mediaBreakpointBetween('sm', 'md')"></span>
  <span v-if="$mediaBreakpointBetween('md', 'lg')"></span>
  <span v-if="$mediaBreakpointBetween('lg', 'xl')"></span>
```

### Inside script
#### Down
```javascript
  this.$mediaBreakpointDown('xs')
  this.$mediaBreakpointDown('sm')
  this.$mediaBreakpointDown('md')
  this.$mediaBreakpointDown('lg')
  this.$mediaBreakpointDown('xl')
```
#### Up
```javascript
  this.$mediaBreakpointUp('xs')
  this.$mediaBreakpointUp('sm')
  this.$mediaBreakpointUp('md')
  this.$mediaBreakpointUp('lg')
  this.$mediaBreakpointUp('xl')
```
#### Only
```javascript
  this.$mediaBreakpointOnly('xs')
  this.$mediaBreakpointOnly('sm')
  this.$mediaBreakpointOnly('md')
  this.$mediaBreakpointOnly('lg')
  this.$mediaBreakpointOnly('xl')
```
#### Between
```javascript
  this.$mediaBreakpointBetween('xs', 'sm')
  this.$mediaBreakpointBetween('sm', 'md')
  this.$mediaBreakpointBetween('md', 'lg')
  this.$mediaBreakpointBetween('lg', 'xl')
```

### Get window width
```javascript
  this.$bootstrap.width
```