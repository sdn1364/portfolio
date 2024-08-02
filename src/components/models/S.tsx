import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const SLetter = (props: any) => {
  const { nodes, materials } = useLoader(GLTFLoader, "models/letter_s.glb");

  const sLetter = useMemo(() => {
    return nodes.s_hiRes.geometry.clone();
  }, [nodes]);

  const sMaterial = useMemo(() => {
    return materials.lambert_001.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={sLetter}
      scale={[0.3, 0.3, 0.3]}
      material={sMaterial}
      material-color={props.color}
      material-roughness={1}
      {...props}
      dispose={null}
    ></mesh>
  );
};

export default SLetter;
