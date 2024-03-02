import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MainTemplate,
  Placeholder,
  RobotoBlack,
  RobotoBold,
  RobotoLight,
  RobotoMedium,
} from "@/components";
import { RootState } from "@/store";
import { translateMonth, useFetch } from "@/utils";
import {
  GET_BOOSTER_DETAILS,
  GET_BOOSTER_MISSIONS,
} from "@/constants/queries/Booster";
import { setBoosterDetails, setBoosterMissions } from "@/store/boosterDetails";
import { BackButtonAndPath } from "@/components/BackButtonAndPath/BackButtonAndPath";
import FastImage from "react-native-fast-image";
import { StyleSheet, View } from "react-native";
import { Mission } from "@/types";
import { TimeLineItem } from "@/components/TimelineItem/TimelineItem";
import SkeletonPlaceholder from "@/components/SkeletonPlaceholder/SkeletonPlaceholder";

export const BoosterScreen = ({
  route,
}: {
  route: {
    params: { id: string };
  };
}) => {
  const dispatch = useDispatch();
  const response = useFetch(GET_BOOSTER_DETAILS, {
    variables: { boosterID: route.params.id },
  });
  const boosterMissionsResponse = useFetch(GET_BOOSTER_MISSIONS);
  const booster = useSelector(
    (state: RootState) => state.boosterDetails.boosterDetails
  );
  const boosterMissions = useSelector(
    (state: RootState) => state.boosterDetails.boosterMissions
  );

  useEffect(() => {
    if (response?.data) {
      dispatch(setBoosterDetails(response.data.allBooster[0]));
    }
    if (boosterMissionsResponse?.data) {
      dispatch(setBoosterMissions(boosterMissionsResponse.data.allMission));
    }
  }, [dispatch, response.data, boosterMissionsResponse]);

  return (
    <MainTemplate
      refreshing={response.loading}
      onRefresh={() => {
        response.refetch();
        response.setLoading(true);
      }}
    >
      <BackButtonAndPath
        text="BAZA WIEDZY / BOOSTERY / "
        boldText={booster ? booster.name : ""}
      />

      {booster ? (
        <RobotoBlack>{booster?.name.toUpperCase()}</RobotoBlack>
      ) : (
        <Placeholder style={styles.titlePlaceholder}>
          <SkeletonPlaceholder.Item
            height={48}
            width={266}
            marginBottom={10}
            marginTop={10}
            borderRadius={5}
          />
          <SkeletonPlaceholder.Item height={48} width={237} borderRadius={5} />
        </Placeholder>
      )}
      <View style={styles.boosterImageContainer}>
        {booster ? (
          <FastImage
            style={styles.boosterImageContainer}
            source={{
              uri: booster?.image?.asset.url,
            }}
            resizeMode="cover"
          />
        ) : (
          <Placeholder>
            <SkeletonPlaceholder.Item
              height={"100%"}
              width={"100%"}
              borderRadius={5}
            />
          </Placeholder>
        )}
      </View>
      {booster && (
        <>
          <RobotoBlack style={styles.completedMissionText}>
            Wykonane misje - {boosterMissions.length}
          </RobotoBlack>

          {boosterMissions.map((mission: Mission, index: number) => {
            const launchDate = new Date(mission.date);
            return (
              <TimeLineItem
                key={index}
                date={
                  launchDate.getDate() +
                  " " +
                  translateMonth(
                    launchDate.getMonth()
                  ).long.toLocaleLowerCase() +
                  " " +
                  launchDate.getFullYear()
                }
                missionName={mission.name}
                launchPad={"Florida, USA"}
                landingPad={"Pacific Ocean"}
                dottColor={"#00FF0A"}
                isLast={boosterMissions.length === index + 1 ? true : false}
              />
            );
          })}
          <View style={styles.propertyContainer}>
            <RobotoLight style={styles.propertyText}>
              STATUS BOOSTERA:
            </RobotoLight>
            <RobotoBold style={styles.textUppercase}>
              {booster?.status ? booster.status : "BRAK DANYCH"}
            </RobotoBold>
          </View>

          {booster?.currentLocation && (
            <View style={styles.propertyContainer}>
              <RobotoLight style={styles.propertyText}>
                Miejsce przebywania:
              </RobotoLight>
              <RobotoBold style={styles.textUppercase}>
                {booster?.currentLocation}
              </RobotoBold>
            </View>
          )}

          {booster?.currentLocation && (
            <View style={styles.propertyContainer}>
              <RobotoLight style={styles.propertyText}>
                Dodatkowe informacje:
              </RobotoLight>
              <RobotoBold style={styles.textUppercase}>Ciekawostki</RobotoBold>
              {booster?.facts?.map((fact) => {
                if (fact === "") {
                  return null;
                }
                return (
                  <View key={fact} style={styles.factContainer}>
                    <RobotoMedium style={styles.factText}>{fact}</RobotoMedium>
                  </View>
                );
              })}
            </View>
          )}
        </>
      )}
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  boosterImageContainer: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginTop: 15,
  },
  boosterImage: {
    width: "100%",
    height: "100%",
  },
  completedMissionText: {
    marginTop: 60,
    marginBottom: 30,
  },
  propertyContainer: { marginTop: 20 },

  propertyText: { color: "#6D6D6D", fontSize: 14 },

  textUppercase: {
    textTransform: "uppercase",
    fontSize: 40,
  },

  factContainer: {
    width: "100%",
    borderBottomColor: "rgba(109, 109, 109, 0.2)",
    borderBottomWidth: 1,
    paddingVertical: 15,
  },

  factText: {
    fontSize: 14,
    lineHeight: 20,
  },

  titlePlaceholder: {
    width: "100%",
  },
});
