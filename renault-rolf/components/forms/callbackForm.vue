<template>
	<el-form
		:inline="true"
		status-icon
		:model="mainForm"
		:rules="rules"
		:ref="name"
	>
		<el-form-item prop="name" v-if="inputName">
			<el-input v-model="mainForm.name" placeholder="Ваше имя"></el-input>
		</el-form-item>
		<el-form-item prop="phone">
			<el-input
				v-model="mainForm.phone"
				placeholder="+7 (___) ___ - __ - __"
				v-mask="'+7 (###) ###-##-##'"
				@focus="focusPhone"
			></el-input>
		</el-form-item>
		<el-form-item>
			<el-button
				:loading="loading"
				:disabled="disabled"
				type="primary"
				@click="formSubmit()"
				>{{ button || "Оставить заявку" }}</el-button
			>
		</el-form-item>
	</el-form>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
	directives: { mask },
	props: ["button", "input-name"],
	data() {
		return {
			name: "mainForm",
			loading: false,
			disabled: false,
			send: false,
			mainForm: {
				phone: "",
				name: ""
			},
			rules: {
				phone: [
					{
						required: true,
						message: "Пожалуйста введите Ваш номер телефона",
						trigger: "blur"
					},
					{
						min: 18,
						message: "Пожалуйста введите Ваш номер телефона",
						trigger: "blur"
					}
				]
			}
		};
	},
	methods: {
		focusPhone(e) {
			if (!e.target.value.length) {
				e.target.value = "+7";
			}
		},
		formSubmit() {
			this.$refs[this.name].validate(valid => {
				if (valid) {
					this.disabled = true;
					this.loading = true;
					this.sendForm(this.mainForm).then(res => {
						console.log(res);
						this.disabled = false;
						this.loading = false;
						this.$refs[this.name].resetFields();
						this.sendMessages();
					});
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		sendMessages() {
			const date = new Date();
			this.$store.getters["info/time_work_from"] <= date.getHours() &&
			this.$store.getters["info/time_work_to"] >= date.getHours()
				? this.messageWork()
				: this.messageNotWork();
		},
		messageWork() {
			this.$message({
				showClose: true,
				dangerouslyUseHTMLString: true,
				message: `<b>Спасибо за Вашу заявку!</b><br>
									Сейчас совершается бесплатный звонок из отдела продаж.<br />
									Для получения информации уточните менеджеру интересующий Вас вопрос.`,
				type: "success"
			});
		},
		messageNotWork() {
			this.$message({
				showClose: true,
				dangerouslyUseHTMLString: true,
				message: `<b>Отдел продаж уже закончил работу.</b><br />
										Вам придёт бесплатный звонок из отдела продаж. Точное время звонка придёт Вам по SMS. Для получения информации, пожалуйста, уточните менеджеру интересующий Вас вопрос.`,
				type: "success"
			});
		}
	}
};
</script>

<style lang="sass">

@include lg-desktop
@include md-desktop
@include sm-tablets
	.el-form
		text-align: center
		.el-button
			margin-top: 15px
@include sm-mobile
	.el-form
		text-align: center
	.el-input__inner
		max-width: 290px
	.el-form--inline .el-form-item
		margin-right: 0
</style>
