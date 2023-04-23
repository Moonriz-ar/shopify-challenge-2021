// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: w9YkCMoNAxdUdLu1fVbgUv
// Component: Z1TaGzJ1L3

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MovieItemIcon from "../../MovieItemIcon"; // plasmic-import: XShnP_NaZ3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_shoppies.module.css"; // plasmic-import: w9YkCMoNAxdUdLu1fVbgUv/projectcss
import sty from "./PlasmicResultsMovieItem.module.css"; // plasmic-import: Z1TaGzJ1L3/css

export type PlasmicResultsMovieItem__VariantMembers = {
  disabled: "disabled";
};
export type PlasmicResultsMovieItem__VariantsArgs = {
  disabled?: SingleBooleanChoiceArg<"disabled">;
};
type VariantPropType = keyof PlasmicResultsMovieItem__VariantsArgs;
export const PlasmicResultsMovieItem__VariantProps = new Array<VariantPropType>(
  "disabled"
);

export type PlasmicResultsMovieItem__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicResultsMovieItem__ArgsType;
export const PlasmicResultsMovieItem__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicResultsMovieItem__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  movieItemIcon?: p.Flex<typeof MovieItemIcon>;
};

export interface DefaultResultsMovieItemProps {
  children?: React.ReactNode;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicResultsMovieItem__RenderFunc(props: {
  variants: PlasmicResultsMovieItem__VariantsArgs;
  args: PlasmicResultsMovieItem__ArgsType;
  overrides: PlasmicResultsMovieItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "disabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabled
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootdisabled]: hasVariant($state, "disabled", "disabled") }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <MovieItemIcon
          data-plasmic-name={"movieItemIcon"}
          data-plasmic-override={overrides.movieItemIcon}
          className={classNames("__wab_instance", sty.movieItemIcon, {
            [sty.movieItemIcondisabled]: hasVariant(
              $state,
              "disabled",
              "disabled"
            )
          })}
          disabled={
            hasVariant($state, "disabled", "disabled") ? true : undefined
          }
        />

        {p.renderPlasmicSlot({
          defaultContents: "John Wick 4",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrendisabled]: hasVariant(
              $state,
              "disabled",
              "disabled"
            )
          })
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "movieItemIcon"],
  freeBox: ["freeBox", "movieItemIcon"],
  movieItemIcon: ["movieItemIcon"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  movieItemIcon: typeof MovieItemIcon;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicResultsMovieItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicResultsMovieItem__VariantsArgs;
    args?: PlasmicResultsMovieItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicResultsMovieItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicResultsMovieItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicResultsMovieItem__ArgProps,
          internalVariantPropNames: PlasmicResultsMovieItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicResultsMovieItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResultsMovieItem";
  } else {
    func.displayName = `PlasmicResultsMovieItem.${nodeName}`;
  }
  return func;
}

export const PlasmicResultsMovieItem = Object.assign(
  // Top-level PlasmicResultsMovieItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    movieItemIcon: makeNodeComponent("movieItemIcon"),

    // Metadata about props expected for PlasmicResultsMovieItem
    internalVariantProps: PlasmicResultsMovieItem__VariantProps,
    internalArgProps: PlasmicResultsMovieItem__ArgProps
  }
);

export default PlasmicResultsMovieItem;
/* prettier-ignore-end */
