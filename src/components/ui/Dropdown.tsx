"use client";

import { ChevronDown } from "@/components/icons"
import { cn } from "@/config/utils";
import useClickOutside from "@/hooks/useClickOutside";
import { useState, useRef, useMemo, useEffect } from "react";

type DropdownValue = string | number | undefined;

interface DropdownItem {
  label: string;
  value: DropdownValue;
}

interface DropdownProps<T extends DropdownValue> {
  size?: "sm" | "lg";
  placeholder?: string;
  options: DropdownItem[];
  disabled?: boolean;
  className?: string;
  isShowSearch?: boolean;
  value?: T;
  onChange?: (selectedValue: T, selectedItem: DropdownItem) => void;
  onSearchChange?: (searchValue: T) => void;
}

const Dropdown = <T extends DropdownValue>({
  size = "sm",
  placeholder,
  options,
  value,
  className,
  disabled = false,
  isShowSearch = false,
  onChange,
  onSearchChange,
}: DropdownProps<T>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownTop, setIsDropdownTop] = useState(false);
  const [selectedValue, setSelectedValue] = useState<DropdownValue>(value);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const mainItem = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = (toggleValue?: boolean) => {
    const dropdownEl = dropdownRef.current;
    if (dropdownEl && !isOpen) {
      const rect = dropdownEl.getBoundingClientRect();
      setIsDropdownTop(window.innerHeight - rect.bottom < 300);
    }
    setIsOpen(toggleValue === undefined ? !isOpen : toggleValue);
  };

  const handleSelectItem = (item: DropdownItem) => {
    toggleDropdown();
    setSelectedValue(item.value);
    onChange?.(item.value as T, item);
    setSearchTerm("");
    onSearchChange?.("" as T);
  };

  const filteredOptions = useMemo(
    () =>
      isShowSearch
        ? options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : options,
    [searchTerm, options, isShowSearch]
  );

  const onChangeSearch = (value: string) => {
    onSearchChange?.(value as T);
    setSearchTerm(value);
  };

  useEffect(() => {
    if (isOpen && isShowSearch) {
      inputRef.current?.focus();
    }
  }, [isOpen, isShowSearch]);

  return (
    <div className={cn("relative w-fit h-fit")} ref={dropdownRef}>
      <div
        className={cn(
          "flex items-center justify-between select-none cursor-pointer border border-dark-300 hover:border-primary",
          {
            "px-2 py-0.5 rounded": size === "sm",
            "px-3.5 py-2.5 rounded-xl": size === "lg",
            "text-dark-400": !selectedValue || disabled,
            "opacity-75 pointer-events-none": disabled,
          },
          className
        )}
        onClick={() => toggleDropdown(true)}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={mainItem?.label || placeholder}
          value={searchTerm}
          onChange={(e) => onChangeSearch(e.target.value)}
          className={cn(
            disabled || !isShowSearch ? "hidden" : "inline-block",
            selectedValue || (searchTerm && !selectedValue)
              ? "placeholder:text-dark text-dark"
              : "placeholder:text-dark-400",
            "w-full border-none outline-none focus:ring-0"
          )}
        />
        {!isShowSearch && <span>{mainItem?.label || placeholder}</span>}
        <ChevronDown className="ml-2 my-auto" />
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute max-h-[300px] w-full py-1 z-10 mt-2 rounded-md bg-white shadow-lg border border-dark-300 cursor-pointer scrollbarStyle",
            isDropdownTop
              ? "bottom-full mb-2 animate-[fadeInUp_0.2s]"
              : "top-full mt-2 animate-[fadeInDown_0.2s]"
          )}
        >
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2">Không tìm thấy kết quả</div>
          ) : (
            filteredOptions.map((item) => (
              <div
                key={item.value}
                onClick={() => handleSelectItem(item)}
                className={cn(
                  "text-dark",
                  item.value === selectedValue
                    ? "bg-white-200 font-medium"
                    : "hover:bg-white-200",
                  {
                    "px-3 py-1": size === "sm",
                    "px-4 py-3": size === "lg",
                  }
                )}
              >
                {item.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
