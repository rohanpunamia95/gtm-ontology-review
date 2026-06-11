/* @ds-bundle: {"format":3,"namespace":"SalesforceDesignSystem_585a3e","components":[{"name":"AgentAvatar","sourcePath":"components/agentforce/AgentAvatar.jsx"},{"name":"AgentBadge","sourcePath":"components/agentforce/AgentBadge.jsx"},{"name":"AgentCard","sourcePath":"components/agentforce/AgentCard.jsx"},{"name":"ChatBubble","sourcePath":"components/agentforce/ChatBubble.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Path","sourcePath":"components/navigation/Path.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/agentforce/AgentAvatar.jsx":"94b4a8eb0b06","components/agentforce/AgentBadge.jsx":"aa96e845db43","components/agentforce/AgentCard.jsx":"ae73f5589094","components/agentforce/ChatBubble.jsx":"67890ebbf7ac","components/core/Avatar.jsx":"c81cc62bb614","components/core/Badge.jsx":"c20b46c26131","components/core/Button.jsx":"a042011f0f30","components/core/Card.jsx":"83592d36f835","components/core/Icon.jsx":"40f8f0a029b3","components/core/IconButton.jsx":"fb6d9bff4d1a","components/core/Spinner.jsx":"e98dafc7d612","components/core/Tag.jsx":"85e6b9715c1d","components/feedback/Dialog.jsx":"937244527e3a","components/feedback/ProgressBar.jsx":"16f29d7a6d44","components/feedback/Toast.jsx":"5c64b00ad65c","components/feedback/Tooltip.jsx":"676c7e2fcabf","components/forms/Checkbox.jsx":"60e3d1385e13","components/forms/Input.jsx":"94b754faff5e","components/forms/RadioGroup.jsx":"88f046c193a4","components/forms/Select.jsx":"9697249e381c","components/forms/Switch.jsx":"a6643d44a3cb","components/forms/Textarea.jsx":"f00989571d8c","components/navigation/Breadcrumb.jsx":"d04c2eb13445","components/navigation/Path.jsx":"2bce0594d4e0","components/navigation/Tabs.jsx":"a4e3e2cff96a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SalesforceDesignSystem_585a3e = window.SalesforceDesignSystem_585a3e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/agentforce/AgentAvatar.jsx
try { (() => {
/**
 * AgentAvatar — the Agentforce orbital glyph. A glowing violet core with
 * orbiting rings. Used as the agent identity mark on dark surfaces.
 */
function AgentAvatar({
  size = 36,
  glow = true,
  style
}) {
  const core = size * 0.32;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'linear-gradient(135deg, rgba(139,92,246,0.45), rgba(13,157,218,0.32))',
      border: '1px solid var(--color-border-agent)',
      boxShadow: glow ? 'var(--shadow-agent-glow)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: core,
      height: core,
      borderRadius: '50%',
      background: 'var(--sf-violet-500)',
      boxShadow: '0 0 10px rgba(139,92,246,0.8)'
    }
  }));
}
Object.assign(__ds_scope, { AgentAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agentforce/AgentAvatar.jsx", error: String((e && e.message) || e) }); }

// components/agentforce/AgentBadge.jsx
try { (() => {
const STATUS = {
  Active: {
    color: 'var(--sf-teal-300)',
    bg: 'rgba(13,157,218,0.15)',
    dot: 'var(--sf-teal-500)',
    pulse: true
  },
  Thinking: {
    color: 'var(--sf-violet-300)',
    bg: 'rgba(139,92,246,0.15)',
    dot: 'var(--sf-violet-500)',
    pulse: true
  },
  Draft: {
    color: 'rgba(255,255,255,0.55)',
    bg: 'rgba(255,255,255,0.06)',
    dot: 'rgba(255,255,255,0.35)'
  },
  Inactive: {
    color: 'rgba(255,255,255,0.55)',
    bg: 'rgba(255,255,255,0.06)',
    dot: 'rgba(255,255,255,0.35)'
  },
  Error: {
    color: '#FCA5A5',
    bg: 'rgba(186,5,23,0.15)',
    dot: 'var(--sf-error-500)'
  }
};

/**
 * AgentBadge — pill status indicator for agents on dark Agentforce surfaces.
 * Animated dot for live (Active / Thinking) states.
 */
function AgentBadge({
  status = 'Draft',
  style
}) {
  const s = STATUS[status] || STATUS.Draft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '2px 8px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--weight-semibold) var(--text-2xs)/1.4 var(--font-sans)',
      color: s.color,
      background: s.bg,
      border: '1px solid rgba(255,255,255,0.12)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.dot,
      flexShrink: 0,
      animation: s.pulse ? 'ag-pulse 2s ease-in-out infinite' : 'none'
    }
  }), status, /*#__PURE__*/React.createElement("style", null, `@keyframes ag-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}`));
}
Object.assign(__ds_scope, { AgentBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agentforce/AgentBadge.jsx", error: String((e && e.message) || e) }); }

// components/agentforce/AgentCard.jsx
try { (() => {
/**
 * AgentCard — list item for an agent in the Agentforce builder. Hover lifts
 * the surface with a violet glow. Shows status, runs, and topic counts.
 */
function AgentCard({
  name,
  desc,
  status = 'Active',
  runs = 0,
  topics = 0,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--color-bg-agent-high)' : 'var(--color-bg-agent-surface)',
      border: `1px solid ${hover ? 'var(--color-border-agent-high)' : 'var(--color-border-agent)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      cursor: 'pointer',
      boxShadow: hover ? 'var(--shadow-agent-glow)' : 'none',
      transition: 'all var(--duration-slow) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 8,
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AgentAvatar, {
    size: 36,
    glow: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--text-base)/1.3 var(--font-sans)',
      color: 'var(--color-text-agent)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--color-text-agent-muted)',
      marginTop: 1
    }
  }, desc))), /*#__PURE__*/React.createElement(__ds_scope.AgentBadge, {
    status: status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 8,
      paddingTop: 8,
      borderTop: '1px solid var(--color-border-agent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label-xs)',
      color: 'var(--color-text-agent-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sf-teal-300)',
      fontWeight: 600
    }
  }, runs), " runs today"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label-xs)',
      color: 'var(--color-text-agent-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sf-violet-300)',
      fontWeight: 600
    }
  }, topics), " topics")));
}
Object.assign(__ds_scope, { AgentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agentforce/AgentCard.jsx", error: String((e && e.message) || e) }); }

// components/agentforce/ChatBubble.jsx
try { (() => {
/**
 * ChatBubble — message in an Agentforce conversation. Agent bubbles get the
 * orbital avatar; user bubbles align right in violet. `thinking` shows an
 * animated typing indicator.
 */
function ChatBubble({
  role = 'agent',
  thinking = false,
  children,
  style
}) {
  const isAgent = role === 'agent';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      justifyContent: isAgent ? 'flex-start' : 'flex-end',
      marginBottom: 14,
      ...style
    }
  }, isAgent && /*#__PURE__*/React.createElement(__ds_scope.AgentAvatar, {
    size: 28,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '72%',
      padding: '10px 14px',
      borderRadius: isAgent ? '4px 12px 12px 12px' : '12px 4px 12px 12px',
      background: isAgent ? 'var(--color-bg-agent-high)' : 'var(--sf-violet-500)',
      border: `1px solid ${isAgent ? 'var(--color-border-agent)' : 'transparent'}`,
      font: 'var(--type-body-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: thinking ? 'var(--color-text-agent-muted)' : 'var(--color-text-agent)',
      fontStyle: thinking ? 'italic' : 'normal'
    }
  }, thinking ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 3
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--sf-violet-500)',
      animation: `ag-dot 1.2s ease-in-out ${i * 0.2}s infinite`
    }
  }))), "Thinking\u2026", /*#__PURE__*/React.createElement("style", null, `@keyframes ag-dot{0%,80%,100%{transform:scale(.6);opacity:.4}40%{transform:scale(1);opacity:1}}`)) : children));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agentforce/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const PALETTE = ['var(--sf-blue-500)', 'var(--sf-teal-500)', 'var(--sf-violet-500)', 'var(--sf-success-500)', 'var(--sf-warning-500)'];
function pick(seed) {
  let h = 0;
  for (let i = 0; i < (seed || '').length; i++) h = h * 31 + seed.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/**
 * Avatar — circular identity chip. Shows initials on a brand-derived color,
 * or an image. Optional presence dot.
 */
function Avatar({
  initials,
  src,
  size = 32,
  color,
  presence,
  style
}) {
  const bg = color || pick(initials);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      width: size,
      height: size,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials || 'avatar',
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--weight-bold)',
      fontSize: Math.round(size * 0.38),
      fontFamily: 'var(--font-sans)'
    }
  }, initials), presence && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: Math.max(8, size * 0.28),
      height: Math.max(8, size * 0.28),
      borderRadius: '50%',
      border: '2px solid #fff',
      background: presence === 'online' ? 'var(--sf-success-500)' : presence === 'away' ? 'var(--sf-warning-500)' : 'var(--sf-gray-400)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    color: 'var(--sf-gray-800)',
    bg: 'var(--sf-gray-100)',
    border: 'var(--sf-gray-300)'
  },
  brand: {
    color: 'var(--sf-blue-700)',
    bg: 'var(--sf-blue-50)',
    border: 'var(--sf-blue-500)'
  },
  success: {
    color: 'var(--sf-success-700)',
    bg: 'var(--sf-success-100)',
    border: 'var(--sf-success-500)'
  },
  warning: {
    color: 'var(--sf-warning-700)',
    bg: 'var(--sf-warning-100)',
    border: 'var(--sf-warning-500)'
  },
  error: {
    color: 'var(--sf-error-700)',
    bg: 'var(--sf-error-100)',
    border: 'var(--sf-error-500)'
  },
  violet: {
    color: 'var(--sf-violet-700)',
    bg: 'var(--sf-violet-100)',
    border: 'var(--sf-violet-500)'
  }
};

/**
 * Badge — small status / category label. Used for opportunity stages,
 * record status, counts. Square corners (radius-sm) by default; pill optional.
 */
function Badge({
  children,
  tone = 'neutral',
  pill = false,
  dot = false,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '2px 8px',
      borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-sm)',
      font: 'var(--weight-semibold) var(--text-2xs)/1.4 var(--font-sans)',
      color: t.color,
      background: t.bg,
      border: `1.5px solid ${t.border}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.border,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — white surface container with optional header (title + action) and
 * footer. The workhorse of Lightning Experience layouts.
 */
function Card({
  title,
  action,
  onAction,
  footer,
  children,
  padding = 16,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-1)',
      overflow: 'hidden',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      borderBottom: '1px solid var(--sf-gray-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h6)',
      color: 'var(--sf-gray-900)'
    }
  }, title), action && /*#__PURE__*/React.createElement("span", {
    onClick: onAction,
    style: {
      font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',
      color: 'var(--sf-blue-500)',
      cursor: onAction ? 'pointer' : 'default'
    }
  }, action)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid var(--sf-gray-100)',
      background: 'var(--sf-gray-50)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — renders a Lucide glyph. Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@0.456.0/dist/umd/lucide.min.js"></script>
 *
 * SLDS ships filled SVG sprites; this system substitutes Lucide (modern stroke
 * icons) for availability — the "30% cutting edge" layer. Use `name` in
 * kebab-case (e.g. "chevron-down", "search", "sparkles").
 */
function Icon({
  name,
  size = 16,
  color,
  strokeWidth = 2,
  className,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    const svg = host.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      svg.style.display = 'block';
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      width: size,
      height: size,
      color: color || 'currentColor',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: 24,
    padding: '0 10px',
    fontSize: 'var(--text-xs)',
    icon: 13,
    radius: 'var(--radius-sm)'
  },
  md: {
    height: 32,
    padding: '0 16px',
    fontSize: 'var(--text-sm)',
    icon: 15,
    radius: 'var(--radius-sm)'
  },
  lg: {
    height: 40,
    padding: '0 20px',
    fontSize: 'var(--text-base)',
    icon: 17,
    radius: 'var(--radius-sm)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--sf-blue-500)',
    color: '#fff',
    border: 'var(--sf-blue-500)',
    hover: 'var(--sf-blue-600)'
  },
  neutral: {
    background: '#fff',
    color: 'var(--sf-blue-500)',
    border: 'var(--sf-blue-500)',
    hover: 'var(--sf-blue-50)'
  },
  destructive: {
    background: 'var(--sf-error-500)',
    color: '#fff',
    border: 'var(--sf-error-500)',
    hover: 'var(--sf-error-700)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--sf-blue-500)',
    border: 'transparent',
    hover: 'var(--sf-blue-50)'
  },
  violet: {
    background: 'var(--sf-violet-500)',
    color: '#fff',
    border: 'var(--sf-violet-500)',
    hover: 'var(--sf-violet-700)'
  }
};

/**
 * Button — primary action element. Sentence-case labels, verb-forward.
 * Variants: primary (brand blue), neutral (outline), destructive, ghost, violet (Agentforce).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  style
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      font: `var(--weight-semibold) ${s.fontSize}/1 var(--font-sans)`,
      border: `1px solid ${v.border}`,
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 24,
  md: 32,
  lg: 40
};

/**
 * IconButton — square, icon-only action. Used in toolbars, table rows, nav.
 * Variants: neutral (subtle), ghost (transparent), filled (brand blue).
 */
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  label,
  onClick,
  disabled = false,
  style
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      bg: hover ? 'var(--sf-gray-100)' : 'transparent',
      color: 'var(--sf-gray-600)',
      border: 'transparent'
    },
    neutral: {
      bg: hover ? 'var(--sf-blue-50)' : '#fff',
      color: 'var(--sf-blue-500)',
      border: 'var(--sf-gray-300)'
    },
    filled: {
      bg: hover ? 'var(--sf-blue-600)' : 'var(--sf-blue-500)',
      color: '#fff',
      border: 'var(--sf-blue-500)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${v.border}`,
      background: v.bg,
      color: v.color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      flexShrink: 0,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
/**
 * Spinner — indeterminate loading indicator. Brand-blue ring on light surfaces.
 */
function Spinner({
  size = 20,
  color = 'var(--sf-blue-500)',
  strokeWidth = 2.5,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: 'block',
      animation: 'sf-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    opacity: "0.18",
    style: {
      color
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes sf-spin { to { transform: rotate(360deg); } }`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — removable / selectable pill, used for filters, multi-select values,
 * applied list-view filters. Always pill-shaped.
 */
function Tag({
  children,
  onRemove,
  leadingIcon,
  selected = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 24,
      padding: onRemove ? '0 4px 0 10px' : '0 10px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-sans)',
      background: selected ? 'var(--sf-blue-100)' : 'var(--sf-gray-100)',
      color: selected ? 'var(--sf-blue-700)' : 'var(--sf-gray-800)',
      border: `1px solid ${selected ? 'var(--sf-blue-300)' : 'var(--sf-gray-300)'}`,
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 13
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      borderRadius: '50%',
      cursor: 'pointer',
      color: 'var(--sf-gray-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Dialog — modal overlay with title bar, body, and footer actions. */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'var(--color-bg-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      animation: 'sf-fade var(--duration-normal) var(--ease-enter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-4)',
      overflow: 'hidden',
      animation: 'sf-rise var(--duration-slow) var(--ease-enter)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--sf-gray-900)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--sf-gray-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflow: 'auto',
      font: 'var(--type-body)',
      color: 'var(--sf-gray-700)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '12px 18px',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--sf-gray-50)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes sf-fade{from{opacity:0}to{opacity:1}}@keyframes sf-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** ProgressBar — determinate horizontal progress / attainment meter. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  showLabel = false,
  height = 8,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    brand: 'var(--sf-blue-500)',
    success: 'var(--sf-success-500)',
    warning: 'var(--sf-warning-500)',
    violet: 'var(--sf-violet-500)'
  }[tone] || 'var(--sf-blue-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height,
      background: 'var(--sf-gray-200)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-full)',
      transition: 'width var(--duration-slow) var(--ease-standard)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label-xs)',
      color: 'var(--sf-gray-700)',
      minWidth: 34,
      textAlign: 'right'
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    icon: 'info',
    color: 'var(--sf-blue-500)'
  },
  success: {
    icon: 'check-circle',
    color: 'var(--sf-success-500)'
  },
  warning: {
    icon: 'alert-triangle',
    color: 'var(--sf-warning-500)'
  },
  error: {
    icon: 'alert-octagon',
    color: 'var(--sf-error-500)'
  }
};

/** Toast — transient notification. Colored left rail + icon + dismiss. */
function Toast({
  tone = 'info',
  title,
  children,
  onDismiss,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      width: 360,
      maxWidth: '100%',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)',
      borderLeft: `3px solid ${t.color}`,
      padding: '12px 14px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h6)',
      color: 'var(--sf-gray-900)',
      marginBottom: 2
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-700)'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: 'pointer',
      color: 'var(--sf-gray-400)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — dark hover label. Wraps any trigger element. */
function Tooltip({
  label,
  position = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 6
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 6
    }
  }[position];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 1000,
      background: 'var(--sf-gray-900)',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-label-xs)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-3)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox — square check control with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  function toggle() {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  }
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-xs)',
      flexShrink: 0,
      border: `1px solid ${on ? 'var(--sf-blue-500)' : 'var(--sf-gray-400)'}`,
      background: on ? 'var(--sf-blue-500)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'background var(--duration-fast), border-color var(--duration-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-900)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Input — single-line text field with optional label, leading icon, and
 * error state. SLDS-style: 4px radius, gray border, blue focus ring.
 */
function Input({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  leadingIcon,
  error,
  disabled = false,
  required = false,
  size = 'md',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 28 : size === 'lg' ? 40 : 32;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label-sm)',
      color: 'var(--sf-gray-800)',
      marginBottom: 4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sf-error-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 9,
      display: 'flex',
      color: 'var(--sf-gray-400)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 15
  })), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      padding: leadingIcon ? '0 12px 0 30px' : '0 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--sf-error-500)' : focus ? 'var(--sf-blue-500)' : 'var(--sf-gray-300)'}`,
      background: disabled ? 'var(--sf-gray-100)' : '#fff',
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-900)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  })), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label-xs)',
      color: 'var(--sf-error-500)',
      marginTop: 4
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/** RadioGroup — single-select list of options. */
function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = isControlled ? value : internal;
  function select(val) {
    if (disabled) return;
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    const on = selected === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      onClick: () => select(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        flexShrink: 0,
        border: `1px solid ${on ? 'var(--sf-blue-500)' : 'var(--sf-gray-400)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color var(--duration-fast)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--sf-blue-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--sf-gray-900)'
      }
    }, lab));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select — native dropdown styled to match the SLDS field system. */
function Select({
  label,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  required = false,
  size = 'md',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 28 : size === 'lg' ? 40 : 32;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label-sm)',
      color: 'var(--sf-gray-800)',
      marginBottom: 4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sf-error-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      padding: '0 30px 0 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${focus ? 'var(--sf-blue-500)' : 'var(--sf-gray-300)'}`,
      background: disabled ? 'var(--sf-gray-100)' : '#fff',
      appearance: 'none',
      WebkitAppearance: 'none',
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-900)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none'
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 9,
      display: 'flex',
      color: 'var(--sf-gray-500)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — on/off toggle. Brand-blue when on; violet variant for Agentforce. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  tone = 'brand',
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  function toggle() {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  }
  const onColor = tone === 'violet' ? 'var(--sf-violet-500)' : 'var(--sf-blue-500)';
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 20,
      borderRadius: 'var(--radius-full)',
      position: 'relative',
      flexShrink: 0,
      background: on ? onColor : 'var(--sf-gray-300)',
      transition: 'background var(--duration-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 19 : 3,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
      transition: 'left var(--duration-normal) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-900)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/** Textarea — multi-line text field, matching Input styling. */
function Textarea({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  required = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label-sm)',
      color: 'var(--sf-gray-800)',
      marginBottom: 4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sf-error-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", {
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${focus ? 'var(--sf-blue-500)' : 'var(--sf-gray-300)'}`,
      background: disabled ? 'var(--sf-gray-100)' : '#fff',
      resize: 'vertical',
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-900)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Breadcrumb — record / list navigation trail. Links in brand blue. */
function Breadcrumb({
  items = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-body-sm)',
      color: 'var(--sf-gray-600)',
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => !last && onNavigate && onNavigate(it, i),
      style: {
        color: last ? 'var(--sf-gray-800)' : 'var(--sf-blue-500)',
        cursor: last ? 'default' : 'pointer',
        fontWeight: last ? 400 : 600
      }
    }, label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13,
      color: "var(--sf-gray-400)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Path.jsx
try { (() => {
/**
 * Path — the SLDS sales-path / progress indicator. Chevron segments show
 * completed (dark blue), current (brand blue), and upcoming (gray) stages.
 */
function Path({
  steps = [],
  current,
  onSelect,
  style
}) {
  const currentIndex = steps.findIndex(s => (typeof s === 'string' ? s : s.label) === current);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',
      ...style
    }
  }, steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const isCurrent = i === currentIndex;
    const isDone = i < currentIndex;
    const bg = isDone ? 'var(--sf-blue-700)' : isCurrent ? 'var(--sf-blue-500)' : 'var(--sf-gray-200)';
    const color = isDone || isCurrent ? '#fff' : 'var(--sf-gray-600)';
    const last = i === steps.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onSelect && onSelect(label, i),
      style: {
        flex: 1,
        background: bg,
        color,
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        clipPath: last ? undefined : 'polygon(0 0, calc(100% - 11px) 0, 100% 50%, calc(100% - 11px) 100%, 0 100%, 11px 50%)',
        marginLeft: i > 0 ? -1 : 0,
        cursor: onSelect ? 'pointer' : 'default',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-normal)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Path });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Path.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — horizontal tab bar with active underline indicator (brand blue). */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'brand',
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value)));
  const active = isControlled ? value : internal;
  function select(val) {
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  }
  const accent = tone === 'violet' ? 'var(--sf-violet-500)' : 'var(--sf-blue-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--color-border)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lab = typeof t === 'string' ? t : t.label;
    const on = active === val;
    return /*#__PURE__*/React.createElement("div", {
      key: val,
      onClick: () => select(val),
      style: {
        padding: '8px 14px',
        cursor: 'pointer',
        font: `var(--weight-${on ? 'semibold' : 'medium'}) var(--text-sm)/1 var(--font-sans)`,
        color: on ? accent : 'var(--sf-gray-600)',
        borderBottom: `2px solid ${on ? accent : 'transparent'}`,
        marginBottom: -1,
        whiteSpace: 'nowrap',
        transition: 'color var(--duration-fast)'
      }
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgentAvatar = __ds_scope.AgentAvatar;

__ds_ns.AgentBadge = __ds_scope.AgentBadge;

__ds_ns.AgentCard = __ds_scope.AgentCard;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Path = __ds_scope.Path;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
