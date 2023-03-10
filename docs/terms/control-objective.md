---
id: control-objective
title: "Control Objective"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
termid: control-objective
formphrases: control-objective{ss}
status: draft
grouptags:
hoverText: "Control objective (of a Party): an Objective, owned by that Party, that aims to contribute to the realization of another (set of) Objective(s) of that Party, by producing results that this Party needs to realize these other Objective(s)."
glossaryText: "an %%objective^objective%%, owned by a %%party^party%%, that aims to contribute to the realization of another (set of) %%objective(s)^objective%% of that %%party^party%%, by producing results that this %%party^party%% needs to realize these other %%objective(s)^objective%%."
date: 20220203
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Short Description
A **control objective** is an %%objective|objective%%, owned by a %%party|party%%, that aims to contribute to the realization of another (set of) %%objective(s)|objective%% of that %%party|party%%, by producing results that this %%party|party%% needs to realize these other %%objective(s)|objective%%. A control objective has the property that it is both %%managed|management%% (as it produces specific results) and also %%governed|governance%% (as it uses these results - as a contribution to the realization of other objectives of that %%party|party%%) by (or on behalf of) its %%owner|owner%%.

The %%governance|governance%% aspect entails the specification of the results that are needed, and the characteristics that they should have in order to be a useful and relevant contribution for the %%objective|objective%% for which it is a control.  as a realization

Typical contributions for a control objective is the production of an intermediate result, the mitigation of a specific risk, or results that contribute to the realization of %%compliance objectives|compliance-objective%%.

There are various ways for %%parties|party%% to come to grips with specifying and %%managing|management%% their %%control objectives|control-objective%%. Here are some examples:

- %%Organizations|organization%% (specifically those with a rather large %%scope of control|scope-of-control%%) are known to classify their (regular) %%objectives|objective%% according to (business) topics such as finance, (information) security, safety, quality, legal, human resources etc. This allows them to specify %%control objectives|control-objective%% that are particular to such topics, and define equally specific control %%management|management%% processes for that.
- %%Organizations|organization%% that realize that their departments (and sub-departments) are actually %%parties|party%% that each have their %%own|owner%% set of %%objectives|objective%%, may require such departments to specify their own %%control objectives|control-objective%% and associated control %%management|management%% process(es). This enables such %%organizations|organization%% to specify %%control objectives|control-objective%% that (only) seek assurances that their departments are properly specifying their own %%objectives|objective%%, and %%manage|management%% the associated %%controls|controller%%.
- %%Organizations|organization%% are also known to create %%control objectives|control-objective%% that fit traditional control %%management|management%% processes, e.g. as defined in ISO standards.
- %%Organizations|organization%% may classify their %%objectives|objective%% using the [formalization of objectives](./objective#formalization) (and the %%governance and management pattern|pattern-governance-and-management%%), e.g.
  - %%expectations|expectation%%, i.e. %%objectives|objective%% the result of which is consumed, but not produced by the %%organization|organization%%. Such %%objectives|objective%% are not %%managed|management%% but %%governed|governance%%, and hence require a corresponding control %%management|management%% process;
  - %%obligations|obligation%%, i.e. %%objectives|objective%% the result of which is produced by the %%organization|organization%% and consumed by (at least) one other %%party|party%%. Such %%objectives|objective%% are %%managed|management%%, and also require communication with the consuming %%parties|party%%;
  - controls, i.e. %%objectives|objective%% the result of which is produced and (only) consumed by the %%organization|organization%% itself. These %%objectives|objective%% must be %%managed|management%% and %%governed|governance%% by the %%party|party%% that %%owns|owner%% them.

We have observed that (the %%management|management%% of) the %%controls|controller%% associated with the %%objectives|objective%% that control %%management|management%% processes pursue themselves, are often 'forgotten', i.e. these %%objectives|objective%% are not in the scope of any control %%management|management%% process. %%Parties|party%% should set %%control objectives|control-objective%% that aim to mitigate the %%controls|controller%% associated with (the %%objectives|objective%% pursued by) their control %%management|management%% processes.

Control objectives should also be associated with %%assessment frameworks|assessment-framework%% that auditors will use for determining the %%control-levels|control-level%% for each of these objectives.

### Purpose
The purpose of control-objectives is help %%parties|party%% determine and prioritize the work they need to do in order to ensure that the %%controls|controller%% they run become, and/or remain, acceptable.

### Criteria
A %%control-objective|control-objective%% is an %%objective|objective%% that
- is associated with one or more (classes of) %%objectives|objective%% that are controlled by the %%owner|owner%% of the %%control-objective|control-objective%%;
- is associated with one or more %%normative frameworks|normative-framework%% that these (classes of) %%objectives|objective%% are to comply with;
- may be associated with appropriate %%assessment frameworks|assessment-framework%% that auditors must use to determine the %%level of control|control-level%%.

### Notes

In the figure below, %%objectives|objective%% Obj-1a, Obj-1b and Obj-1b.2 are %%control objectives|control-objective%% of Red. Obj-1b.2 is a %%control objective|control-objective%% for Obj-1b, which in turn is a %%control objective|control-objective%% for Obj-1. Note that %%objectives|objective%% such as Obj-1a, which haven't been explicitly assigned a producer %%party|party%%, will default to the %%objective's|objective%% %%owner|owner%% being the producer. And therefor, Obj-1a is also a %%control objective|control-objective%%.

<p align="center">
<img
  alt="Chaining Objectives"
  src={useBaseUrl('images/essif-lab-objective-symbolnotation.png')}
/><i>Figure 1: Chained Objectives - results produced in one objective are consumed in another</i>
</p>

The figure shows four %%parties|party%% (Red, Yellow, Blue and Green) and their associated %%scopes of control|scope-of-control%%. Within these, they %%own|owner%% the %%objectives|objective%% (the figure shows 6 %%objectives|objective%% owned by red and one for each of the other %%parties|party%%). The figure in the top right hand corner of the rectangle that represents an %%objective|objective%%, is the %%party|party%% that the %%owner|owner%% of the %%objective|objective%% expects to produce the %%objective's|objective%% results. It is not necessary that such a %%party|party%% is known all the time (e.g. %%objective|objective%% Obj-1a).

The arrows indicate that results produced to realize a certain %%objective|objective%% (at the source of the arrow) are (to be) used to produce the results of another %%objective|objective%% (at the end/tip of the arrow).

For more information, e.g. about how different %%parties|party%% interact in their roles of producer and consumer, we refer you to the %%Governance and Management pattern|pattern-governance-and-management%%.