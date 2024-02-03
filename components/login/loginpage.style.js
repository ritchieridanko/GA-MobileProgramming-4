import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    width: "100%",
    marginTop: SIZES.xLarge + 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  mainContainer: {
    height: "20%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.xxLarge,
  },
  logoContainer: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: SIZES.small,
    marginBottom: SIZES.xLarge,
  },
  logoImage: {
    height: "90%",
    width: "22%",
    tintColor: COLORS.secondary,
  },
  logoText: {
    fontSize: SIZES.xxLarge + 15,
    color: COLORS.secondary,
  },
  btn: {
    height: "32%",
    width: "68%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.secondary,
  },
  btnText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
});

export default styles;
