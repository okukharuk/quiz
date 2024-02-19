import { t } from "i18next";
import React, { FC } from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex font-regular text-[12px] flex-wrap [&>*]:mr-1 w-[70%] justify-center">
      <div>{t("by_continuing")}</div>
      <div className="text-hover">{t("privacy_policy")}</div>
      <div>{t("and")}</div>
      <div className="text-hover">{t("terms_of_use")}</div>
    </div>
  );
};

export default PrivacyPolicy;
