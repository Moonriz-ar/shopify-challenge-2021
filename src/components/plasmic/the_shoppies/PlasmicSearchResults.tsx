// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: w9YkCMoNAxdUdLu1fVbgUv
// Component: cmM4gm4zl6

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
import MovieItem from "../../MovieItem"; // plasmic-import: Z1TaGzJ1L3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_shoppies.module.css"; // plasmic-import: w9YkCMoNAxdUdLu1fVbgUv/projectcss
import sty from "./PlasmicSearchResults.module.css"; // plasmic-import: cmM4gm4zl6/css

export type PlasmicSearchResults__VariantMembers = {};
export type PlasmicSearchResults__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearchResults__VariantsArgs;
export const PlasmicSearchResults__VariantProps = new Array<VariantPropType>();

export type PlasmicSearchResults__ArgsType = {
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSearchResults__ArgsType;
export const PlasmicSearchResults__ArgProps = new Array<ArgPropType>("title");

export type PlasmicSearchResults__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
};

export interface DefaultSearchResultsProps {
  title?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSearchResults__RenderFunc(props: {
  variants: PlasmicSearchResults__VariantsArgs;
  args: PlasmicSearchResults__ArgsType;
  overrides: PlasmicSearchResults__OverridesType;
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(projectcss.all, projectcss.h1, sty.h1)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Search results for slot",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
      </h1>
      <MovieItem
        addIcon={"disabled" as const}
        className={classNames("__wab_instance", sty.movieItem___8KZEv)}
      />

      <MovieItem
        addIcon={"withAddIcon" as const}
        className={classNames("__wab_instance", sty.movieItem__ucykO)}
      >
        {triggers.hover_root
          ? "The Super Mario Bros. Movie"
          : "The Super Mario Bros. Movie"}
      </MovieItem>
      <MovieItem
        addIcon={"withAddIcon" as const}
        className={classNames("__wab_instance", sty.movieItem__bPdp1)}
      >
        {"Shazam! Fury of the Gods"}
      </MovieItem>
      <MovieItem
        addIcon={"withAddIcon" as const}
        className={classNames("__wab_instance", sty.movieItem__bRe3G)}
      >
        {"Evil Dead Rise"}
      </MovieItem>
      <MovieItem
        addIcon={"withAddIcon" as const}
        className={classNames("__wab_instance", sty.movieItem__l0Nnc)}
      >
        {"The Pope's Exorcist"}
      </MovieItem>
      <MovieItem
        addIcon={"withAddIcon" as const}
        className={classNames("__wab_instance", sty.movieItem__jesk6)}
      >
        {"Suzume"}
      </MovieItem>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchResults__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearchResults__VariantsArgs;
    args?: PlasmicSearchResults__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearchResults__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSearchResults__ArgsType,
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
          internalArgPropNames: PlasmicSearchResults__ArgProps,
          internalVariantPropNames: PlasmicSearchResults__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSearchResults__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchResults";
  } else {
    func.displayName = `PlasmicSearchResults.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchResults = Object.assign(
  // Top-level PlasmicSearchResults renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicSearchResults
    internalVariantProps: PlasmicSearchResults__VariantProps,
    internalArgProps: PlasmicSearchResults__ArgProps
  }
);

export default PlasmicSearchResults;
/* prettier-ignore-end */
