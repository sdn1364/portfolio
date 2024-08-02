import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const OLetter = (props: any) => {
  const { nodes, materials } = useLoader(GLTFLoader, "models/letter_o.glb");

  const oLetter = useMemo(() => {
    return nodes.o_hiRes.geometry.clone();
  }, [nodes]);

  const oMaterial = useMemo(() => {
    return materials.lambert_002.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={oLetter}
      scale={[0.3, 0.3, 0.3]}
      material={oMaterial}
      material-color={props.color}
      material-roughness={1}
      {...props}
      dispose={null}
    ></mesh>
  );
};

export default OLetter;
