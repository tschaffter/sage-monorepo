# Sage Monorepo Weekly Update

[Current Date Range, e.g., July 5-12, 2025]

## Purpose

The weekly update aims to:

1. Summarize progress across multiple projects in the monorepo
2. Highlight key contributions by team members
3. Provide a clear overview for both technical and non-technical stakeholders
4. Maintain consistent formatting and structure across updates

## Structure

The weekly update should follow this consistent structure:

### 1. Header

```markdown
# Sage Monorepo Weekly Update

[Current Date Range, e.g., July 5-12, 2025]
```

### 2. Highlights (🌟)

A brief paragraph (2-3 sentences) summarizing the main achievements of the week. This should be high-level and accessible to all readers.

### 3. Project Updates (📊)

Break down updates by project area. For each project:

- Include a brief introduction sentence
- List key updates as bullet points with:
  - Bold headers for each update
  - Brief description of the change/feature
  - Contributors using first names (see [contributors.instructions.md](contributors.instructions.md))

Common project areas include:

- Model-AD Platform
- OpenChallenges Platform
- Agora Platform
- Explorers Framework
- BixArena Project

### 4. Technical Improvements (🛠️)

Group technical improvements by category:

- Infrastructure Enhancements
- Angular Modernization
- Testing Infrastructure
- Other relevant categories based on the week's work

For each category, include bullet points with:

- Bold headers for specific improvements
- Brief description
- Contributors using first names (see [contributors.instructions.md](contributors.instructions.md))

### 5. Contributors (👥)

List all contributors for the week with their first names and PR counts:

```markdown
This week's progress was made possible by the following contributors:

- Thomas (@tschaffter) - X PRs
- Hallie (@hallieswan) - Y PRs
  ...
```

### 6. Coming Next (🔮)

A brief paragraph about upcoming focus areas and expected work for the next week.

## Formatting Guidelines

1. **Use emoji** for section headers to make the document visually engaging
2. **Bold key terms** in bullet points for scannability
3. **Use first names for contributors** - Reference the [contributors.instructions.md](contributors.instructions.md) file to map GitHub usernames to first names
4. **Keep descriptions concise** but informative
5. **Use consistent styling** throughout the document

## Contributor Attribution

Before writing the weekly update, reference the [contributors.instructions.md](contributors.instructions.md) file to:

1. **Map GitHub usernames to first names** for more personal attribution
2. **Use format**: "Enhanced API documentation (Thomas)" instead of "Enhanced API documentation (@tschaffter)"
3. **In contributor lists**: Show "Thomas (@tschaffter) - 5 commits"
4. **Verify contributor information** is current and accurate

## Data Collection Process

### Step 1: Collect Commit Data with Author Information

**CRITICAL: Always verify author attribution before writing**

1. **Primary Method**: Use git log with author formatting:

   ```bash
   git log --since="YYYY-MM-DDTHH:MM:SSZ" --until="YYYY-MM-DDTHH:MM:SSZ" --pretty=format:"%h - %an - %s" --no-merges
   ```

2. **Secondary Verification**: Cross-reference with GitHub API data:

   - Use `mcp_github_list_commits` to fetch commits
   - Extract `author.login` field from each commit for GitHub usernames
   - Look for co-authors in commit messages (Co-authored-by lines)

3. **Create Attribution Map**: Before writing any content, create a structured list:
   ```
   Commit Hash - Author Name (@github_username) - Description
   ```

### Step 2: Verify and Count Contributions

1. **Double-check author attribution**:

   - Never assume authorship based on project area or commit patterns
   - Always verify each commit's actual author
   - Pay attention to both git author and GitHub username

2. **Identify all contributor types**:

   - Primary commit authors
   - Co-authors mentioned in commit messages
   - PR reviewers (if mentioned in commit messages)

3. **Count accurately**:
   - Count commits per author, not assumptions
   - Verify final counts against your attribution map

### Step 3: Group and Organize Changes

1. **Group changes by project area and type**:

   - Look for prefixes in commit messages (e.g., "feat(openchallenges)")
   - Group similar technical improvements together
   - Maintain accurate attribution throughout grouping process

2. **Verify technical details**:
   - Read commit messages carefully for technical accuracy
   - Don't embellish or assume technical details not explicitly stated

## Example Format

```markdown
# Sage Monorepo Weekly Update

July 5-12, 2025

## 🌟 Highlights

This week saw significant progress across multiple projects in the [Sage monorepo](https://github.com/Sage-Bionetworks/sage-monorepo), with improvements to data infrastructure, API enhancements, and technical modernization efforts.

## 📊 Project Updates

### Model-AD Platform

The Model-AD team made significant progress updating their data infrastructure:

- **Data Version Upgrade**: Data release updated to version 63, with improved collection organization and indexing (Hallie)
- **MongoDB Schema Tools**: Added new tooling to generate schema files for improved documentation and validation (Lawrence)

[Additional project sections...]

## 🛠️ Technical Improvements

### Infrastructure Enhancements

- **Development Environment**: Updated dev container Nx environment variables and configuration for improved developer experience (Thomas)

[Additional technical improvement sections...]

## 👥 Contributors

This week's progress was made possible by the following contributors:

- Hallie (@hallieswan) - 4 PRs
- Thomas (@tschaffter) - 12 PRs
- Lawrence (@sagely1) - 2 PRs
- Verena (@vpchung) - 1 PR
- Rongrong (@rrchai) - 1 PR

## 🔮 Coming Next

The team continues to focus on improving data infrastructure, modernizing Angular implementations, and enhancing API capabilities across multiple platforms. Stay tuned for continued progress on the BixArena project and further infrastructure optimizations.
```

## Common PR Types to Look For

1. **Feature Additions**: Look for "feat" prefixes in commit messages
2. **Bug Fixes**: Look for "fix" prefixes
3. **Infrastructure Updates**: Look for "chore" or "infra" prefixes
4. **Refactoring**: Look for "refactor" prefixes
5. **Documentation**: Look for "docs" prefixes

## Best Practices

### Attribution Accuracy (CRITICAL)

1. **Verify author information explicitly** - Never make assumptions about who did what
2. **Use structured data collection** - Always create an attribution map before writing
3. **Cross-reference multiple sources** - Use both git log and GitHub API for verification
4. **Slow down on attribution** - Getting contributor credit right is essential for team morale

### Content Quality

1. **Verify technical details** against actual commit messages and changes
2. **Acknowledge all contributors**, even for small contributions
3. **Group related changes** together for readability
4. **Highlight cross-cutting improvements** that benefit multiple projects
5. **Use consistent terminology** with the development team
6. **Keep the audience in mind** - make it accessible to both technical and non-technical readers

### Common Attribution Errors to Avoid

1. **Don't assume authorship** based on:

   - Project area expertise
   - Historical contribution patterns
   - Number of commits in timeframe
   - Who merged the PR (often shows as "web-flow")

2. **Always check for**:

   - Co-authored-by lines in commit messages
   - Actual git author vs. committer
   - GitHub username vs. git author name mismatches

3. **Verification checklist before publishing**:
   - [ ] Each contribution is attributed to the correct author
   - [ ] All contributors are acknowledged
   - [ ] PR counts match actual commit data
   - [ ] No assumptions were made about authorship

## Troubleshooting Attribution Issues

### Problem: Git author name doesn't match GitHub username

**Solution**: Use GitHub API to get the correct `author.login` field, or check the GitHub profile for the git email

### Problem: Multiple people worked on a single commit

**Solution**: Look for "Co-authored-by:" lines in commit messages

### Problem: Commits show "web-flow" as committer

**Solution**: This is GitHub's merge commit signature - check the actual author field instead

### Problem: Uncertain about who did specific work

**Solution**:

1. Check the PR discussion on GitHub
2. Look at file history: `git log --follow -- path/to/file`
3. When in doubt, ask the team for clarification

### Verification Commands

```bash
# Get detailed author info for a specific timeframe
git log --since="2025-07-21" --until="2025-07-27" --pretty=format:"%h - %an (%ae) - %s" --no-merges

# Check for co-authors in commit messages
git log --since="2025-07-21" --until="2025-07-27" --grep="Co-authored-by" --pretty=format:"%h - %s%n%b%n---"

# Verify specific commit authorship
git show --format="%an (%ae) - %cn (%ce)" <commit-hash>
```

By following these instructions, you'll create consistent, informative weekly updates that effectively communicate progress across the [Sage monorepo](https://github.com/Sage-Bionetworks/sage-monorepo) project.
