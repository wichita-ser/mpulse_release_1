export default {

	handleSwitch () {
		const actions = {
			isShowGoalSetting: Switch1.isSwitchedOn, 
			isShowCoreValueSetting: Switch2.isSwitchedOn, 
			isShowSelfEvaluationSetting: Switch3.isSwitchedOn, 
			isShowSupervisorSetting: Switch4.isSwitchedOn, 
		}
		storeValue('isShowColumnSetting', actions)
	}
}