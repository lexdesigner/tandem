import Vue from "vue";
Vue.mixin({
	methods: {
		sendForm(data) {
			return new Promise((resolve, reject) => {
				data.utm_type = this.sendCkeeper().utm_type;
				data.utm_source = this.sendCkeeper().utm_source;
				data.entry_point = this.sendCkeeper().myURL;
				data.utm_medium = this.getParams()["utm_medium"];
				data.utm_content = this.getParams()["utm_content"];
				data.utm_campaign = this.getParams()["utm_campaign"];
				data.utm_term = this.getParams()["utm_term"];
				data.user_agent = window.navigator.userAgent;
				data.referrer = document.referrer;
				data.gacid = this.getGAId();
				console.log(data);
				fetch("/send.php", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						try {
							let _tmr = window._tmr || (window._tmr = []);
							_tmr.push({
								id: "3209655",
								type: "reachGoal",
								goal: "arrows",
								value: 1
							});
							this.$store.getters["modals/pushModel"]
								? this.pushDataModel(this.$store.getters["modals/pushModel"])
								: this.pushDataAll();
							ym(67362256, "reachGoal", "send_all_forms");
						} catch (error) {
							console.log(error);
						}
						setTimeout(() => {
							resolve(res);
						}, 3000);
					})
					.catch(error => console.error(error));
			});
		},
		sendCkeeper() {
			var utm_type;
			var utm_source;
			if (this.getParams()["utm_medium"] === "cpc") {
				utm_type = undefined;
			} else {
				if (document.referrer != "") {
					if (
						document.referrer == "https://yandex.ru/" ||
						document.referrer == "https://www.google.com/"
					) {
						utm_type = "organic";
					} else {
						utm_type = "referral";
					}
				} else {
					utm_type = "typein";
				}
			}
			var myURL = document.referrer.replace(/(^\w+:|^)\/\//, "");
			myURL = myURL.substr(0, myURL.lastIndexOf("/"));

			utm_source = this.getParams()["utm_source"];
			if (utm_type === "typein") {
				utm_source = "(direct)";
			} else if (utm_type === "organic") {
				utm_source =
					document.referrer.indexOf("yandex") != -1 ? "yandex" : "google";
			} else if (utm_type === "referral") {
				utm_source = document.referrer;
			}
			return {
				utm_source,
				utm_type,
				myURL
			};
		},
		getParams() {
			if (
				this.$router.history._startLocation &&
				this.$router.history._startLocation.indexOf("?") !== -1
			) {
				return this.$router.history._startLocation
					.split("?")[1]
					.split("&")
					.reduce(function(p, e) {
						var a = e.split("=");
						p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
						return p;
					}, {});
			} else {
				return false;
			}
		},
		getGAId() {
			let match = document.cookie.match("(?:^|;)\\s*_ga=([^;]*)");
			let raw = match ? decodeURIComponent(match[1]) : null;
			if (raw) {
				match = raw.match(/(\d+\.\d+)$/);
			}
			const gacid = match ? match[1] : null;
			return gacid || undefined;
		},
		pushDataAll() {
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				event: "purchase",
				eventAction: "sendForm",
				ecommerce: {
					purchase: {
						actionField: {
							id: Math.floor(Math.random() * 10000)
						},
						products: [
							{
								id: "1",
								name: "Renault"
							}
						]
					}
				}
			});
		},
		pushDataModel({ id, brand = "Renault", model }) {
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				event: "purchase",
				eventAction: "sendForm",
				ecommerce: {
					purchase: {
						actionField: {
							id: Math.floor(Math.random() * 10000)
						},
						products: [
							{
								id: id,
								name: `${brand} ${model}`,
								brand: brand,
								category: model
							}
						]
					}
				}
			});
		}
	}
});
