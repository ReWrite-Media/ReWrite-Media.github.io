(window.webpackJsonpAzureNotebooks=window.webpackJsonpAzureNotebooks||[]).push([[22],{"./src/shell/components/Toolbar.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"Toolbar",(function(){return k}));var o=n("./node_modules/react/index.js"),s=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/@nteract/core/lib/index.js"),i=n("./src/core/compute/index.ts"),a=n("./src/core/notebook/selectors.ts"),r=n("./src/core/notebook/index.ts"),c=n("./src/oss/panelHub/index.ts"),d=n("./src/common/theme/index.ts"),u=n("./node_modules/office-ui-fabric-react/lib/components/CommandBar/CommandBar.js"),b=n("./src/shell/localization/index.ts"),p=n("./src/common/DefaultLangContext.tsx"),m=n("./src/core/config/index.ts"),C=n("./src/common/components/toolbar.tsx"),h=n("./src/core/extension/selectors.ts"),R=n("./src/oss/variableExplorer/index.ts");class k extends o.PureComponent{constructor(e){super(e),this.getExtensionText=(e,t)=>{const n=t&&e.commandDisabledDisplayMessage?e.commandDisabledDisplayMessage:e.commandDisplayName;return this.localize(n)}}render(){return this.locStrings=Object(b.a)(this.context),o.createElement(d.c,{className:"notebooks-main-toolbar-container nb-commandbar-container"},o.createElement(u.a,{items:this.getToolbarItems(),overflowItems:this.getMainMenuItems(),overflowButtonProps:{ariaLabel:this.locStrings.CommandMoreCommands,className:"main-toolbar-overflowbutton",menuProps:{className:"nb-contextualMenu",items:[]},disabled:!1,text:this.locStrings.CommandMoreCommands},overflowButtonAs:C.a,ariaLabel:this.locStrings.CommandBarHint}))}getToolbarItems(){return[{key:"run-all-cells",text:this.locStrings.CommandRunAllCells,iconProps:{iconName:"FastForward"},split:!0,iconOnly:!0,disabled:this.props.disabled,tooltipHostProps:{className:"nb-tooltip"},style:{padding:"14px"},ariaLabel:this.locStrings.CommandRunAllCellsAria,"data-automation-id":"restartAndRunAllCellsButton",onClick:this.onClickRunAllCells.bind(this),splitButtonAriaLabel:this.locStrings.CommandRunCellMenuAria,subMenuProps:{className:"nb-contextualMenu",items:[{key:"restart-and-run-all",text:this.locStrings.CommandRestartAndRunCells,ariaLabel:this.locStrings.CommandRestartAndRunCells,"data-automation-id":"restartAndRunAllCellsButton",onClick:this.onClickRestartAndRunAll.bind(this),disabled:this.props.disabled},{key:"run-all-above",text:this.locStrings.CommandRunAllCellsAbove,ariaLabel:this.locStrings.CommandRunAllCellsAbove,"data-automation-id":"runAllCellsAboveButton",onClick:this.onClickRunAllCellsAbove.bind(this),disabled:this.props.disabled},{key:"run-all-below",text:this.locStrings.CommandRunAllCellsBelow,ariaLabel:this.locStrings.CommandRunAllCellsBelow,"data-automation-id":"runAllCellsBelowButton",onClick:this.onClickRunAllCellsBelow.bind(this),disabled:this.props.disabled}]}},{key:"restart-kernel",text:this.props.connectedToKernel?this.locStrings.CommandRestartKernel:this.locStrings.CommandDisabledButtonHint,iconProps:{iconName:"Refresh"},iconOnly:!0,tooltipHostProps:{className:"nb-tooltip"},ariaLabel:this.props.connectedToKernel?this.locStrings.CommandRestartKernel:this.locStrings.CommandDisabledButtonHint,"data-automation-id":"restartKernelButton",onClick:this.onClickRestart.bind(this),disabled:this.props.disabled||!this.props.connectedToKernel},{key:"interrupt",text:this.props.connectedToKernel?this.locStrings.CommandInterruptKernel:this.locStrings.CommandDisabledButtonHint,iconProps:{iconName:"Blocked"},iconOnly:!0,tooltipHostProps:{className:"nb-tooltip"},ariaLabel:this.props.connectedToKernel?this.locStrings.CommandInterruptKernel:this.locStrings.CommandDisabledButtonHint,onClick:this.onClickInterrupt.bind(this),"data-automation-id":"interruptButton",disabled:this.props.disabled||!this.props.connectedToKernel},{key:"divider_1",onRender:()=>o.createElement("div",{className:"notebooks-commandbar-divider-container"},o.createElement("div",{className:"notebooks-commandbar-divider"}))},...this.props.tableOfContentsEnabled?[this.getTableofContentsButton()]:[],...this.props.variableExplorerEnabled?[this.getVariablesButton()]:[],{key:"clear-all-outputs",text:this.locStrings.CommandClearAllOutputs,iconProps:{iconName:"RemoveContent"},iconOnly:!0,tooltipHostProps:{className:"nb-tooltip"},ariaLabel:this.locStrings.CommandClearAllOutputs,onClick:this.onClickClearAllOutputs.bind(this),"data-automation-id":"clearAllOutputsButton",disabled:this.props.disabled},...this.getExtensionCommands(this.props.extensionToolbarCommands)]}getMainMenuItems(){const e=[],t={key:"menuFile",text:this.locStrings.MenuFile,"data-automation-id":"menuFile",ariaLabel:this.locStrings.MenuFile,subMenuProps:{items:[{key:"menuFileSave",text:this.locStrings.MenuFileSave,ariaLabel:this.locStrings.MenuFileSave,"data-automation-id":"menuFileSave",onClick:this.onClickSave.bind(this),disabled:this.props.disabled}]}},n={key:"menuEdit",text:this.locStrings.MenuEdit,ariaLabel:this.locStrings.MenuEdit,"data-automation-id":"menuEdit",subMenuProps:{items:[{key:"menuEditUndo",text:this.locStrings.CommandUndo,ariaLabel:this.locStrings.CommandUndo,"data-automation-id":"menuEditUndo",onClick:this.onClickUndo.bind(this),disabled:this.props.disabled||!this.props.focusedCellId},{key:"menuEditRedo",text:this.locStrings.CommandRedo,ariaLabel:this.locStrings.CommandRedo,"data-automation-id":"menuEditRedo",onClick:this.onClickRedo.bind(this),disabled:this.props.disabled||!this.props.focusedCellId},{key:"menuEditCutCell",text:this.locStrings.MenuEditCutCell,ariaLabel:this.locStrings.MenuEditCutCell,"data-automation-id":"menuEditCutCell",onClick:this.onClickCutCell.bind(this),disabled:this.props.disabled},{key:"menuEditCopyCell",text:this.locStrings.MenuEditCopyCell,ariaLabel:this.locStrings.MenuEditCopyCell,"data-automation-id":"menuEditCopyCell",onClick:this.onClickCopyCell.bind(this),disabled:this.props.disabled},{key:"menuEditPasteCellBelow",text:this.locStrings.MenuEditPasteCellBelow,ariaLabel:this.locStrings.MenuEditPasteCellBelow,"data-automation-id":"menuEditPasteCellBelow",onClick:this.onClickPasteCellBelow.bind(this),disabled:this.props.disabled}]}};return void 0!==t.subMenuProps&&(t.subMenuProps.items=t.subMenuProps.items.concat(this.getExtensionCommands(this.props.extensionFileMenuCommands))),void 0!==n.subMenuProps&&(n.subMenuProps.items=n.subMenuProps.items.concat(this.getExtensionCommands(this.props.extensionEditMenuCommands))),e.push(t),e.push(n),e.concat(this.getExtensionSubmenus(this.props.extensionSubmenus))}localize(e){return"string"==typeof e?e:e(this.context)}getExtensionSubmenus(e){const t=[];return void 0!==this.props.extensionCommandGetter&&e.forEach(e=>{t.push({key:e.name,text:this.localize(e.commandDisplayName),ariaLabel:this.localize(e.ariaLabel),"data-automation-id":e.name,subMenuProps:{items:this.getExtensionCommands(e.children)}})}),t}getExtensionCommands(e){const t=[],n=this.props.extensionCommandGetter;return void 0!==n&&e.forEach(e=>{const o=n(e);if(void 0!==o){const e=!!o.isDisabled;t.push({key:o.commandName,text:this.getExtensionText(o,e),ariaLabel:this.localize(o.ariaLabel),iconProps:o.iconName?{iconName:o.iconName}:void 0,onClick:()=>o.handler(),iconOnly:!0,disabled:e})}}),t}onClickInterrupt(){const{contentRef:e,kernelRef:t,interruptKernel:n}=this.props;t&&(n(t,e),this.props.setScreenReaderAnnouncement(this.locStrings.InterruptKernelScreenReaderFeedback))}onClickRestart(){const{contentRef:e,kernelRef:t,restartKernel:n}=this.props;t&&n(e,t)}onClickRestartAndRunAll(){const{contentRef:e,kernelRef:t,restartAndRunCells:n,runAllCells:o}=this.props;t&&(this.props.connectedToKernel?(n(e,t),this.props.setScreenReaderAnnouncement(this.locStrings.RestartAndRunCellsScreenReaderFeedback)):(o(e),this.props.setScreenReaderAnnouncement(this.locStrings.RunAllCellsScreenReaderFeedback)))}onClickRunAllCells(){const{contentRef:e,runAllCells:t}=this.props;t(e),this.props.setScreenReaderAnnouncement(this.locStrings.RunAllCellsScreenReaderFeedback)}onClickRunAllCellsAbove(){const{contentRef:e,runAllCellsAbove:t}=this.props;t(e),this.props.setScreenReaderAnnouncement(this.locStrings.RunAllCellsAboveScreenReaderFeedback)}onClickRunAllCellsBelow(){const{contentRef:e,runAllCellsBelow:t}=this.props;t(e),this.props.setScreenReaderAnnouncement(this.locStrings.RunAllCellsBelowScreenReaderFeedback)}onClickToggleVariablesPanel(){const e=!this.isVariablesPanelVisible(),t=e?this.locStrings.ShowVariablesPanelScreenReaderFeedback:this.locStrings.HideVariablesPanelScreenReaderFeedback;this.props.setVariablesPanelVisibility(e),this.props.setScreenReaderAnnouncement(t)}onClickToggleTableOfContents(){const e=!this.props.tableOfContentsSidePanelVisible,t=e?this.locStrings.TableOfContentsShowScreenReaderFeedback:this.locStrings.TableOfContentsHideScreenReaderFeedback;this.props.setTableOfContentsVisibility(e),this.props.setScreenReaderAnnouncement(t)}onClickClearAllOutputs(){const{contentRef:e,clearAllOutputs:t}=this.props;t(e),this.props.setScreenReaderAnnouncement(this.locStrings.CellClearAllOutputsScreenReaderFeedback)}onClickSave(){const{contentRef:e,saveNotebook:t,formattingOptions:n,formatNotebook:o}=this.props;t(e),(null==n?void 0:n.enableFormatting)&&(null==n?void 0:n.formatOnSave)&&o(e),this.props.setScreenReaderAnnouncement(this.locStrings.FileSaveScreenReaderFeedback)}onClickCopyCell(){const{contentRef:e,copyCell:t}=this.props;t(e),this.props.setScreenReaderAnnouncement(this.locStrings.CopyCellScreenReaderFeedback)}onClickCutCell(){const{contentRef:e,cutCell:t}=this.props;t(e),this.props.setScreenReaderAnnouncement(this.locStrings.CutCellScreenReaderFeedback)}onClickPasteCellBelow(){const{contentRef:e,pasteCellBelow:t,focusedCellId:n}=this.props;t(e,n||""),this.props.setScreenReaderAnnouncement(this.locStrings.PasteCellScreenReaderFeedback)}onClickUndo(){const{focusedCellId:e}=this.props;if(e){const t=document.getElementById("editor-"+e);t&&t.dispatchEvent(new Event("undo"))}this.props.setScreenReaderAnnouncement(this.locStrings.UndoScreenReaderFeedback)}onClickRedo(){const{focusedCellId:e}=this.props;if(e){const t=document.getElementById("editor-"+e);t&&t.dispatchEvent(new Event("redo"))}this.props.setScreenReaderAnnouncement(this.locStrings.RedoScreenReaderFeedback)}isVariablesPanelVisible(){return this.props.isPanelHubVisible&&this.props.activePanelId===c.b.variables}getVariablesButton(){const{disabled:e,connectedToKernel:t,variableExplorerSupported:n}=this.props,o=e||!t||!n,s=this.isVariablesPanelVisible()?this.locStrings.CommandHideVariablesPanel:this.locStrings.CommandShowVariablesPanel;return{key:"toggle-variables-panel",text:s,iconProps:{iconName:"VariableGroup"},iconOnly:!0,tooltipHostProps:{className:"nb-tooltip"},ariaLabel:s,onClick:this.onClickToggleVariablesPanel.bind(this),"data-automation-id":"toggleVariablesPanelButton",disabled:o}}getTableofContentsButton(){const{notebookHasMarkdownHeaders:e,tableOfContentsSidePanelVisible:t}=this.props,n=!e&&!t;let o="";return o=n?this.locStrings.TableOfContentsDisabledMessage:t?this.locStrings.TableOfContentsClose:this.locStrings.TableOfContentsOpen,{key:"toggle-table-of-contents",text:o,iconProps:{iconName:"CustomList"},iconOnly:!0,tooltipHostProps:{className:"nb-tooltip"},ariaLabel:o,onClick:this.onClickToggleTableOfContents.bind(this),"data-automation-id":"toggleTableOfContentsButton",disabled:n}}}k.contextType=p.a,t.default=Object(s.connect)(e=>{const t=a.activeContentRef(e),n=l.selectors.model(e,{contentRef:t}),o=l.selectors.kernelRefByContentRef(e,{contentRef:t});return{contentRef:t,kernelRef:o,connectedToKernel:a.connectedToKernel(e),focusedCellId:"notebook"===(null==n?void 0:n.type)?l.selectors.notebook.cellFocused(n):void 0,disabled:m.d.readOnly(e),formattingOptions:m.d.getFormattingOptions(e),isPanelHubVisible:c.d.isVisible(e),activePanelId:c.d.getActivePanelId(e),extensionCommandGetter:h.NotebookToolbarCommands(e),extensionToolbarCommands:m.d.notebookToolbarMainToolbarCommands(e),extensionFileMenuCommands:m.d.notebookToolbarFileMenu(e),extensionEditMenuCommands:m.d.notebookToolbarEditMenu(e),extensionSubmenus:m.d.notebookToolbarSubmenus(e),variableExplorerEnabled:m.d.mainFrame(e).enableVariableExplorer,variableExplorerSupported:!!o&&R.d.supportsCurrentKernel(e,o),notebookHasMarkdownHeaders:Object(a.getHeaders)(e).size>0,tableOfContentsSidePanelVisible:Object(a.isSidePanelVisible)(e),tableOfContentsEnabled:m.d.enableTableOfContents(e)}},e=>({restartKernel:(t,n)=>{e(r.a.restartKernel({contentRef:t,kernelRef:n,outputHandling:"None"}))},interruptKernel:(t,n)=>{e(r.a.interruptKernel({kernelRef:t,contentRef:n}))},restartAndRunCells:(t,n)=>{e(r.a.restartKernel({contentRef:t,kernelRef:n,outputHandling:"Run All"}))},runAllCells:t=>{e(i.b.executeRunQueue()),e(l.actions.executeAllCells({contentRef:t}))},runAllCellsAbove:t=>{e(i.b.executeRunQueue()),e(r.a.executeAllCellsAbove({contentRef:t}))},runAllCellsBelow:t=>{e(i.b.executeRunQueue()),e(l.actions.executeAllCellsBelow({contentRef:t}))},insertCellBelow:(t,n)=>{e(l.actions.createCellBelow({contentRef:t,cellType:n}))},setVariablesPanelVisibility:t=>{e(c.c.setActivePanel(c.b.variables)),e(c.c.setVisibility(t))},setTableOfContentsVisibility:t=>{e(r.a.setSidePanelVisibleStatus(t))},clearAllOutputs:t=>{e(r.a.clearAllOutputs({contentRef:t}))},saveNotebook:t=>{e(r.a.saveNotebook({contentRef:t}))},cutCell:t=>{e(l.actions.cutCell({contentRef:t}))},copyCell:t=>{e(l.actions.copyCell({contentRef:t}))},pasteCellBelow:(t,n)=>{e(l.actions.pasteCell({contentRef:t})),e(l.actions.focusNextCell({id:n,createCellIfUndefined:!1,contentRef:t}))},setScreenReaderAnnouncement:t=>{e(r.a.setScreenReaderAnnouncement(t))},formatNotebook:t=>{e(r.a.formatNotebook({contentRef:t}))}}))(k)}}]);