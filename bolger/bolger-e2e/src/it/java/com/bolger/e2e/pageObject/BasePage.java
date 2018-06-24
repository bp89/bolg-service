package com.bolger.e2e.pageObject;

import com.github.loyada.jdollarx.ElementProperty;
import com.github.loyada.jdollarx.Path;

import static com.github.loyada.jdollarx.BasicPath.*;
import static com.github.loyada.jdollarx.ElementProperties.hasAggregatedTextEqualTo;
import static com.github.loyada.jdollarx.ElementProperties.hasAttribute;
import static com.github.loyada.jdollarx.ElementProperties.hasId;
import static com.github.loyada.jdollarx.ElementProperties.isNthSibling;

public class BasePage {
    public static final Path MATERIAL_ICON = element.withClass("material-icons");
    public static final Path label = customElement("label");
    public static final Path checkbox = input.that(hasType("checkbox"));
    public static final String SINGLE_QUOTE = "'";

    public static ElementProperty hasRole(String value) {
        return hasAttribute("role", value);
    }

    public static ElementProperty hasValue(String value) {
        return hasAttribute("value", value);
    }

    public static ElementProperty hasType(String value) {
        return hasAttribute("type", value);
    }

    public static ElementProperty isFirstSibling = isNthSibling(0);

    public static Path inputFor(String labelText) {
        Path theLabel = label.withText(labelText);
        return input.inside(div.afterSibling(theLabel)).describedBy(labelText + " input");
    }

    public static Path checkboxWithLabelAndChecked(String checkboxLabel, Boolean isChecked) {
        if (isChecked == null) {
            return checkboxFor(checkboxLabel).that(hasAttribute("data-automation-indeterminate", String.valueOf(true)));
        }
        return checkboxFor(checkboxLabel).that(hasAttribute("data-automation-checked", String.valueOf(isChecked)));
    }

    public static Path checkboxFor(String checkboxLabel) {
        return element.contains(checkbox).beforeSibling(elementWithLabel(span, checkboxLabel));
    }

    public static Path buttonFor(String buttonLabel) {
        return button.that(hasAggregatedTextEqualTo(buttonLabel)).describedBy(buttonLabel + " button");
    }

    public static Path dropDownFor(String dropdownLabel) {
        return div.that(hasRole("button")).beforeSibling(input.that(hasId(dropdownLabel)));
    }

    public static Path getRowWithIndex(Path row, long i) {
        return row.and(hasAttribute("row-index", String.valueOf(i)));
    }

    public static Path elementWithLabel(Path element, String text) {
        // Temp work around dollarx not handling single quote properly
        if (text.contains(SINGLE_QUOTE)) {
            return element.withTextContaining(text.split(SINGLE_QUOTE)[1]);
        } else {
            return element.withText(text);
        }
    }

    public static Path parentFilterForLabelWithText(String label, String text) {
        return div.withTextContaining(text).afterSibling(element.contains(BasePage.checkboxFor(label)));
    }
}
