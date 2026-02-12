import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="text-[#FAFAFA] text-center py-8 border-t border-white/5 bg-black/30">
      <p className="text-white/60 text-sm sm:text-base">{t("footer.copyright")}</p>
    </div>
  )
}
