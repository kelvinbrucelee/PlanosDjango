jQuery(function(l) { l(document).on("click", ".calculator .period_plan", function() { l(".calculator .period_plan").removeClass("active"), l(this).addClass("active"), l(".plans-calc-period").val(l(this).attr("data-period")), plans.calculator() }), l('.calculator input[type="number"]').on("keyup, keypress", function(a) { "0" == a.key && "" == l("#number").val() && (a.preventDefault(), l("#number").val(1)), plans.calculator() }), l('.calculator input[type="number"]').on("change", function() { plans.calculator() }), l(".calculator #plus").on("click", () => { l("#number").val(+l("#number").val() + 1), plans.calculator() }), l(".calculator #minus").on("click", () => { l("#number").val() <= 1 ? l("#number").val(1) : (l("#number").val(+l("#number").val() - 1), plans.calculator()) }) });

var number, tooltipShow, curr = $(".calculator").data("currency"),
    lang = $(".calculator").data("language"),
    plans = {
        calculator: function() {
            var a = parseInt($('.calculator input[type="number"]').val()),
                l = $("#plans-dash-check").prop("checked"),
                n = ".plans-table .calculator .plans_details .title span",
                e = ($(".plans-calc-period").val(), $(".plans-calc-period").val()),
                t = ".plans-table .calculator .plans_details .plan_complet .economy",
                s = ".plans-table .calculator .plans_details .plan_posts .economy";
            0 < a ? a < 2 ? "en" == lang ? $(n).html("(1 profile)") : $(n).html("(1 perfil)") : "en" == lang ? $(n).html("(" + a + " profiles)") : "es" == lang ? $(n).html("(" + a + " perfiles)") : $(n).html("(" + a + " perfis)") : (a = 1, $(n).html("")), "mensal" != e && 0 < $("#number").val() ? ($(".plans-table").find(".economy").show().next("i").show(), $(".disclaimer .strong").show()) : ($(".plans-table").find(".economy").hide().next("i").hide(), $(".disclaimer .strong").hide()), "mensal" == e || "anual-parcelado" == e ? $(".plans-table .asteristic").html("") : $(".plans-table .asteristic").html("*"), "mensal" == e ? ($(t).html("save " + plans.formatMoney(0)), $(s).html("save " + plans.formatMoney("0.00"))) : "en" == lang ? ($(t).html("save " + plans.formatMoney(plans.economyFull(e, a))), $(s).html("save " + plans.formatMoney(plans.economyPosts(e, a)))) : "es" == lang ? ($(t).html("ahorre " + plans.formatMoney(plans.economyFull(e, a))), $(s).html("ahorre " + plans.formatMoney(plans.economyPosts(e, a)))) : ($(t).html("economize " + plans.formatMoney(plans.economyFull(e, a))), $(s).html("economize " + plans.formatMoney(plans.economyPosts(e, a)))), $(".calculator .plans_details .plan_posts .price strong").html(plans.formatMoney((l ? plans.dash(a) : 0) + plans.postsPlan(e, a))), $(".calculator .plans_details .plan_complet .price strong").html(plans.formatMoney((l ? plans.dash(a) : 0) + plans.fullPlan(e, a)))
        },
        formatMoney: function(a) { return "pt-br" == lang ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(a).replace("BLR", "") : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(a).replace("USD", "") },
        prices: { postsMonth: parseFloat($(".plans_posts_monthly").val()), postsQuater: parseFloat($(".plans_posts_quarterly").val()), postsYearParceled: parseFloat($(".plans_posts_yearly_parceled").val()), postsYearCash: parseFloat($(".plans_posts_yearly_cash").val()), fullMonth: parseFloat($(".plans_complet_monthly").val()), fullQuarter: parseFloat($(".plans_complet_quarterly").val()), fullYearParceled: parseFloat($(".plans_complet_yearly_parceled").val()), fullYearCash: parseFloat($(".plans_complet_yearly_cash").val()), plan_dashgoo: parseFloat($(".plano_dashgoo").val()) },

        fullPlan: function(a, l) {
            var n = parseInt($(".plans_promotion_status").val());
            switch (a) {
                case "anual-a-vista":
                    return n ? plans.discount(l) * (plans.prices.fullYearCash * l) : l * plans.prices.fullYearCash
            }
        },
        postsPlan: function(a, l) {
            switch (a) {
                case "mensal":
                    return l * plans.prices.postsMonth;
                case "trimestral-a-vista":
                    return l * plans.prices.postsQuater;
                case "anual-parcelado":
                    return l * plans.prices.postsYearParceled;
                case "anual-a-vista":
                    return l * plans.prices.postsYearCash
            }
        },
        economyFull: function(a, l) {
            var n = parseInt($(".plans_promotion_status").val()) ? plans.prices.fullMonth * plans.discount(l) : plans.prices.fullMonth;
            switch (a) {
                case "anual-a-vista":
                    return n * 12 - 12 * plans.fullPlan("anual-a-vista") * 1
            }
        },




        economyPosts: function(a, l) {
            switch (a) {
                case "anual-a-vista":
                    return l * plans.prices.postsMonth * 12 - 7.9 * l * 12 * 1
            }
        },
        dash: function(a) { return a * plans.prices.plan_dashgoo }
    };





0 < $('.calculator input[type="number"]').length && ((number = document.getElementById("number")).onkeydown = function(a) { if (!(95 < a.keyCode && a.keyCode < 106 || 47 < a.keyCode && a.keyCode < 58 || 8 == a.keyCode)) return !1 }), plans.calculator(), $(".plans-table").find("td").hover(function(a) { $(a.target).parent("tbody").find("i").tooltip("hide"), clearTimeout(tooltipShow), tooltipShow = setTimeout(() => { $(a.target).find("i").tooltip("show") }, 100) }, function(a) { $(a.target).find("i").tooltip("hide") }), $("#plans-dash-check").on("click", () => plans.calculator()), $(".button-accept, .button-dismiss, .close").on("click", a => { $("#plans-dash-check").prop("checked", $(a.target).hasClass("button-accept")), $("#dashGoo").modal("hide"), $("#dashGoo").removeAttr("style"), plans.calculator() });
jQuery(function(a) { a(document).on("submit", ".search form", function(e) { e.preventDefault(), location.href = a(".siteurl").val() + "/busca/" + a('input[name="search"]').val() }), a(document).on("click", ".search-box", function() { a.get(a(".baseurltemplate").val() + "/partials/partial-modal-search.php", function(e) { a("body").append(e), a(".search.box").show(), a('input[name="search"]').focus() }) }), a(document).on("click", ".search.box .mlabs-icon-close", function() { a(".search.box").hide() }) });
var SlideWrapper = function() {
    "use strict";

    function o(e) { e.preventDefault(), "mousedown" == e.type && (t = !0, n = e.screenX, document.addEventListener("mousemove", c(e))), "mouseup" == e.type && (t = !1, document.removeEventListener("mousemove", c), n = 0) }
    var t = !1,
        n = 0,
        r = 0,
        c = function(e) { e.preventDefault(), t && (r = n - e.screenX, e.target.scrollBy(r, 0)) };
    return { init: function() { for (var e = document.querySelectorAll(".scroll-items"), t = 0; t < e.length; t++) e[t].addEventListener("mousedown", o), e[t].addEventListener("mouseup", o), e[t].addEventListener("mousemove", c); for (var n = document.querySelectorAll(".mlabs-icon-chevron-left"), t = 0; t < n.length; t++) n[t].addEventListener("click", e => e.path[1].scrollBy(-e.path[1].offsetWidth, 0)); for (var r = document.querySelectorAll(".mlabs-icon-chevron-right"), t = 0; t < r.length; t++) r[t].addEventListener("click", e => e.path[1].scrollBy(e.path[1].offsetWidth, 0)) } }
}();
document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    SlideWrapper.init()
});