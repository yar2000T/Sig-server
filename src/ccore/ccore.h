#pragma once
#include <stdbool.h>
#include <node_api.h>

typedef struct rect_t rect_t;

#define NAPI_CALLBACK(name) napi_value (name)(napi_env env, napi_callback_info info)
#define NAPI_OK(op) assert((op) == napi_ok)

bool rect_intersects(rect_t a, rect_t b);
